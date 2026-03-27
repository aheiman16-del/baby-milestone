'use client'

import { useState, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

type ProductType = 'gender_reveal' | 'birth_announcement'

function SubmitForm() {
  const searchParams = useSearchParams()
  const productType = (searchParams.get('type') || 'birth_announcement') as ProductType

  const [step, setStep] = useState<'form' | 'submitted'>('form')
  const [loading, setLoading] = useState(false)
  const [previews, setPreviews] = useState<string[]>([])
  const fileRef = useRef<HTMLInputElement>(null)

  const [form, setForm] = useState({
    email: '',
    babyName: '',
    parentName: '',
    dueDate: '',
    revealType: 'boy',
    message: '',
    photos: [] as File[],
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    setForm((prev) => ({ ...prev, photos: files }))
    setPreviews(files.map((f) => URL.createObjectURL(f)))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append('productType', productType)
    formData.append('email', form.email)
    formData.append('babyName', form.babyName)
    formData.append('parentName', form.parentName)
    formData.append('dueDate', form.dueDate)
    formData.append('revealType', form.revealType)
    formData.append('message', form.message)
    form.photos.forEach((photo) => formData.append('photos', photo))

    try {
      const res = await fetch('/api/submit', { method: 'POST', body: formData })
      const data = await res.json()
      if (data.success) {
        setStep('submitted')
      } else {
        alert(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const title = productType === 'gender_reveal' ? 'Gender Reveal Video' : 'Birth Announcement Video + Card'

  if (step === 'submitted') {
    return (
      <main className="min-h-screen bg-rose-50 flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="text-5xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold mb-4">You&apos;re all set!</h1>
          <p className="text-gray-500">
            We&apos;re working on your {title.toLowerCase()}. Expect it in your inbox within 24-48 hours.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-rose-50 py-16 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
        <p className="text-center text-gray-500 mb-10">
          Fill this out and we&apos;ll have your video ready within 24-48 hours.
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 space-y-6 shadow-sm">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {productType === 'gender_reveal' ? "Baby's last name (optional)" : "Baby's full name"}
            </label>
            <input
              type="text"
              name="babyName"
              value={form.babyName}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder={productType === 'gender_reveal' ? 'Baby Johnson' : 'Emma Johnson'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Parent name(s)</label>
            <input
              type="text"
              name="parentName"
              value={form.parentName}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="Sarah and Mike"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {productType === 'gender_reveal' ? 'Due date' : 'Birth date'}
            </label>
            <input
              type="date"
              name="dueDate"
              value={form.dueDate}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
          </div>

          {productType === 'gender_reveal' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">It&apos;s a...</label>
              <select
                name="revealType"
                value={form.revealType}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
              >
                <option value="boy">Boy</option>
                <option value="girl">Girl</option>
                <option value="twins_boys">Twins — Boys</option>
                <option value="twins_girls">Twins — Girls</option>
                <option value="twins_one_of_each">Twins — One of Each</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              A short message or anything you want included (optional)
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 resize-none"
              placeholder="e.g. We are so excited to meet you!"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload 1-5 photos</label>
            <div
              onClick={() => fileRef.current?.click()}
              className="border-2 border-dashed border-rose-200 rounded-xl p-8 text-center cursor-pointer hover:bg-rose-50 transition"
            >
              <p className="text-gray-400 text-sm">Click to upload or drag and drop</p>
              <p className="text-gray-300 text-xs mt-1">JPG, PNG up to 20MB each</p>
            </div>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFiles}
              className="hidden"
            />
            {previews.length > 0 && (
              <div className="flex gap-3 flex-wrap mt-4">
                {previews.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Preview ${i + 1}`}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-rose-400 hover:bg-rose-500 text-white font-semibold py-4 rounded-xl transition disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>

        </form>
      </div>
    </main>
  )
}

export default function SubmitPage() {
  return (
    <Suspense>
      <SubmitForm />
    </Suspense>
  )
}
