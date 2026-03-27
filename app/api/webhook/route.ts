import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { subscribeToKlaviyo } from '@/lib/klaviyo'
import { renderVideo } from '@/lib/creatomate'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      await handleCheckoutComplete(session)
      break
    }
    case 'customer.subscription.created': {
      const subscription = event.data.object as Stripe.Subscription
      console.log('New subscription created:', subscription.id)
      break
    }
    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}

async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  const { productKey, babyName } = session.metadata || {}
  const email = session.customer_email || ''

  // Add to Klaviyo
  if (email) {
    await subscribeToKlaviyo(email, {
      baby_name: babyName || '',
      product: productKey || '',
      subscribed_at: new Date().toISOString(),
    })
  }

  // Trigger video render for one-time purchases
  if (productKey === 'gender_reveal' || productKey === 'birth_announcement') {
    try {
      const videoType = productKey === 'gender_reveal' ? 'gender_reveal' : 'birth_announcement'
      await renderVideo(videoType, {
        baby_name: babyName || 'Baby',
        order_id: session.id,
      })
      console.log(`Video render triggered for ${productKey}, session: ${session.id}`)
    } catch (err) {
      console.error('Video render failed:', err)
      // Flag for manual QC — do not throw, order is confirmed
    }
  }
}
