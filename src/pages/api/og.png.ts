import type { APIRoute } from 'astro'
import { generateImage } from '../../lib/generateImage'
import { OgImage } from '../../components/OgImage'

export type generateOGUrlOptions = Record<string, any> & {
  title: string
}

export const generateOGUrl = ({ title, ...args }: generateOGUrlOptions) => {
  const url = new URL('/api/og.png', 'http://example.com')

  url.searchParams.append('title', title)

  Object.keys(args).forEach(arg => {
    url.searchParams.append(arg, args[arg])
  })

  return url.pathname + url.search
}

export const get: APIRoute = async ({ url, site }) => {
  const debug = Boolean(url.searchParams.get('debug'))
  const title = url.searchParams.get('title')
  const rawWidth = url.searchParams.get('w')
  const width = rawWidth ? parseInt(rawWidth) : 1200
  const rawHeight = url.searchParams.get('h')
  const height = rawHeight ? parseInt(rawHeight) : 630

  if (!site) {
    return new Response(null, {
      status: 500,
      statusText: "Site missing"
    })
  }

  if (!title) {
    return new Response(null, {
      status: 500,
      statusText: "Title missing"
    })
  }

  const args = Object.fromEntries(url.searchParams)
  const props = { url, site: site.href, ...args }
  const imageOptions = { site: site.href, width, height, debug }
  const buffer = await generateImage(OgImage, props, imageOptions)

  return new Response(buffer, {
    status: 200,
    headers: {
      'Cache-Control': 'max-age=31536000, immutable',
      'Content-Type': 'image/png',
    },
  })
}

