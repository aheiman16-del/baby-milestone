import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
})

export const PRODUCTS = {
  gender_reveal: {
    name: 'Gender Reveal Video',
    price: 3400,
    priceId: process.env.STRIPE_PRICE_GENDER_REVEAL!,
    description: 'Personalized gender reveal video delivered within 24-48 hours.',
    type: 'one_time' as const,
  },
  birth_announcement: {
    name: 'Birth Announcement Video + Card',
    price: 4900,
    priceId: process.env.STRIPE_PRICE_BIRTH_ANNOUNCEMENT!,
    description: 'Personalized birth announcement video and digital photo card.',
    type: 'one_time' as const,
  },
  essential_monthly: {
    name: 'Essential Plan',
    price: 1400,
    priceId: process.env.STRIPE_PRICE_ESSENTIAL_MONTHLY!,
    description: 'Monthly milestone video + digital photo card.',
    type: 'subscription' as const,
  },
  essential_annual: {
    name: 'Essential Plan (Annual)',
    price: 11200,
    priceId: process.env.STRIPE_PRICE_ESSENTIAL_ANNUAL!,
    description: 'Annual plan, 2 months free.',
    type: 'subscription' as const,
  },
  keepsake_monthly: {
    name: 'Keepsake Plan',
    price: 1900,
    priceId: process.env.STRIPE_PRICE_KEEPSAKE_MONTHLY!,
    description: 'Everything in Essential plus stat card, monthly letter, captions, and grandparent templates.',
    type: 'subscription' as const,
  },
  keepsake_annual: {
    name: 'Keepsake Plan (Annual)',
    price: 15200,
    priceId: process.env.STRIPE_PRICE_KEEPSAKE_ANNUAL!,
    description: 'Annual plan, 2 months free.',
    type: 'subscription' as const,
  },
  legacy_monthly: {
    name: 'Legacy Plan',
    price: 2700,
    priceId: process.env.STRIPE_PRICE_LEGACY_MONTHLY!,
    description: 'Everything in Keepsake plus holiday cards, milestone checklist, reel covers, and food tracker.',
    type: 'subscription' as const,
  },
  legacy_annual: {
    name: 'Legacy Plan (Annual)',
    price: 21600,
    priceId: process.env.STRIPE_PRICE_LEGACY_ANNUAL!,
    description: 'Annual plan, 2 months free.',
    type: 'subscription' as const,
  },
}

export type ProductKey = keyof typeof PRODUCTS
