// import { endpoint } from '@/utils/endpoint'

// export async function getAllCharacters() {
//   const response = await fetch(`${endpoint}/characters`)

//   if (!response.ok) {
//     const errorText = await response.text()
//     console.error(`Failed to fetch all characters: ${errorText}`)
//   }

//   try {
//     return await response.json()
//   } catch (error) {
//     console.error(`Failed to parse response as JSON: ${error.message}`)
//   }
// }

// export async function getCharacterBySlug(slug) {
//   console.log(`Fetching character data for slug: ${slug}`)

//   const response = await fetch(`${endpoint}/characters/${slug}`)

//   if (!response.ok) {
//     const errorText = await response.text()
//     console.error(`Error response text: ${errorText}`)
//     throw new Error(`Failed to fetch character data: ${errorText}`)
//   }

//   try {
//     return await response.json()
//   } catch (error) {
//     throw new Error(`Failed to parse response as JSON: ${error.message}`)
//   }
// }


import { endpoint } from '@/utils/endpoint'

export async function getAllCharacters() {
  const data = await fetch(`${endpoint}/characters`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export async function getCharacterBySlug(slug) {
  const data = await fetch(`${endpoint}/characters/${slug}`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}
