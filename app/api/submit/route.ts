import { NextRequest, NextResponse } from 'next/server'
import { renderVideo } from '@/lib/creatomate'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const productType = formData.get('productType') as string
    const babyName = formData.get('babyName') as string
    const email = formData.get('email') as string
    const parentName = formData.get('parentName') as string
    const dueDate = formData.get('dueDate') as string
    const revealType = formData.get('revealType') as string // 'boy' | 'girl' | 'twins'
    const message = formData.get('message') as string

    if (!productType || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: upload photos to S3 here
    // const photos = formData.getAll('photos') as File[]

    const modifications: Record<string, string> = {
      baby_name: babyName || 'Baby',
      parent_name: parentName || '',
      due_date: dueDate || '',
      message: message || '',
    }

    if (productType === 'gender_reveal') {
      modifications.reveal_type = revealType || 'boy'
    }

    const videoType = productType === 'gender_reveal' ? 'gender_reveal' : 'birth_announcement'
    const job = await renderVideo(videoType, modifications)

    return NextResponse.json({
      success: true,
      jobId: job.id,
      message: 'Your video is rendering. You will receive an email within 24-48 hours.',
    })
  } catch (error) {
    console.error('Submit error:', error)
    return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 })
  }
}
