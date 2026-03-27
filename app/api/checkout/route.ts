import { NextRequest, NextResponse } from 'next/server'
import { stripe, PRODUCTS, ProductKey } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const { productKey, babyName, email, metadata } = await req.json()

    if (!productKey || !PRODUCTS[productKey as ProductKey]) {
      return NextResponse.json({ error: 'Invalid product' }, { status: 400 })
    }

    const product = PRODUCTS[productKey as ProductKey]
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const commonParams = {
      customer_email: email as string,
      metadata: { productKey, babyName: babyName || '', ...(metadata || {}) },
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#pricing`,
    }

    const session = await stripe.checkout.sessions.create(
      product.type === 'subscription'
        ? { ...commonParams, mode: 'subscription', line_items: [{ price: product.priceId, quantity: 1 }] }
        : {
            ...commonParams,
            mode: 'payment',
            line_items: [
              {
                price_data: {
                  currency: 'usd',
                  product_data: { name: product.name, description: product.description },
                  unit_amount: product.price,
                },
                quantity: 1,
              },
            ],
          },
    )
    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
