'use client'

import { useState } from 'react'
import { ProductKey } from '@/lib/stripe'

interface CheckoutButtonProps {
  productKey: ProductKey
  label: string
  className?: string
  babyName?: string
  email?: string
}

export default function CheckoutButton({
  productKey,
  label,
  className = '',
  babyName,
  email,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productKey, babyName, email }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={className}
    >
      {loading ? 'Loading...' : label}
    </button>
  )
}
