import type { APIRoute } from 'astro'
import { generateImage } from '../../lib/generateImage'
// @ts-ignore: no types
import toIco from 'to-ico'
import { Favicon } from '../../components/Favicon'

export type generateFaviconUrlOptions = Record<string, any> & {
  title: string
}

export const generateFaviconUrl = ({ title, ...args }: generateFaviconUrlOptions) => {
  const url = new URL('/api/favicon.ico', 'http://example.com')

  Object.keys(args).forEach(arg => {
    url.searchParams.append(arg, args[arg])
  })

  return url.pathname + url.search
}

export const get: APIRoute = async ({ url, site }) => {
  const debug = Boolean(url.searchParams.get('debug'))
  const rawWidth = url.searchParams.get('w')
  const width = rawWidth ? parseInt(rawWidth) : 32
  const rawHeight = url.searchParams.get('h')
  const height = rawHeight ? parseInt(rawHeight) : 32

  if (!site) {
    return new Response(null, {
      status: 500,
      statusText: "Site missing"
    })
  }

  const args = Object.fromEntries(url.searchParams)
  const props = { url, site: site.href, ...args }
  const imageOptions = { site: site.href, width, height, debug }
  const buffer = await generateImage(Favicon, props, imageOptions)
  const icoBuffer = await toIco(buffer)

  return new Response(icoBuffer, {
    status: 200,
    headers: {
      'Cache-Control': 'max-age=31536000, immutable',
      'Content-Type': 'image/x-icon',
    },
  })
}

