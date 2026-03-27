const CREATOMATE_API_KEY = process.env.CREATOMATE_API_KEY!
const CREATOMATE_API_URL = 'https://api.creatomate.com/v1'

export type VideoType = 'gender_reveal' | 'birth_announcement' | 'monthly_milestone'

interface RenderJob {
  id: string
  status: 'planned' | 'waiting' | 'transcribing' | 'rendering' | 'succeeded' | 'failed'
  url?: string
  error_message?: string
}

export async function renderVideo(
  type: VideoType,
  modifications: Record<string, string | number>,
): Promise<RenderJob> {
  const templateId = getTemplateId(type)

  const response = await fetch(`${CREATOMATE_API_URL}/renders`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${CREATOMATE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      template_id: templateId,
      modifications,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Creatomate render failed: ${error}`)
  }

  const data = await response.json()
  return Array.isArray(data) ? data[0] : data
}

export async function getRenderStatus(renderId: string): Promise<RenderJob> {
  const response = await fetch(`${CREATOMATE_API_URL}/renders/${renderId}`, {
    headers: {
      Authorization: `Bearer ${CREATOMATE_API_KEY}`,
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to get render status: ${response.statusText}`)
  }

  return response.json()
}

function getTemplateId(type: VideoType): string {
  const templates: Record<VideoType, string> = {
    gender_reveal: process.env.CREATOMATE_TEMPLATE_GENDER_REVEAL || '',
    birth_announcement: process.env.CREATOMATE_TEMPLATE_BIRTH_ANNOUNCEMENT || '',
    monthly_milestone: process.env.CREATOMATE_TEMPLATE_MONTHLY_MILESTONE || '',
  }
  return templates[type]
}
