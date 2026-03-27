const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY!
const KLAVIYO_LIST_ID = process.env.KLAVIYO_LIST_ID!

export async function subscribeToKlaviyo(email: string, properties: Record<string, string>) {
  const response = await fetch('https://a.klaviyo.com/api/profiles/', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      revision: '2024-10-15',
      'content-type': 'application/json',
      Authorization: `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
    },
    body: JSON.stringify({
      data: {
        type: 'profile',
        attributes: {
          email,
          properties,
        },
      },
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error('Klaviyo profile create error:', error)
    return null
  }

  const profile = await response.json()
  const profileId = profile.data.id

  await addToList(profileId)
  return profileId
}

async function addToList(profileId: string) {
  await fetch(`https://a.klaviyo.com/api/lists/${KLAVIYO_LIST_ID}/relationships/profiles/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      revision: '2024-10-15',
      'content-type': 'application/json',
      Authorization: `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
    },
    body: JSON.stringify({
      data: [{ type: 'profile', id: profileId }],
    }),
  })
}

export async function sendDeliveryEmail(
  email: string,
  babyName: string,
  month: number,
  videoUrl: string,
  cardUrl: string,
) {
  await fetch('https://a.klaviyo.com/api/events/', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      revision: '2024-10-15',
      'content-type': 'application/json',
      Authorization: `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
    },
    body: JSON.stringify({
      data: {
        type: 'event',
        attributes: {
          metric: { data: { type: 'metric', attributes: { name: 'Milestone Delivered' } } },
          profile: { data: { type: 'profile', attributes: { email } } },
          properties: {
            baby_name: babyName,
            month,
            video_url: videoUrl,
            card_url: cardUrl,
          },
        },
      },
    }),
  })
}
