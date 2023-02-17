import sharp from 'sharp'
// @ts-ignore: no types
import initYoga from 'yoga-wasm-web/asm'
// @ts-ignore: no types
import satori, { init as initSatori } from 'satori/wasm'

const YOGA = initYoga()
initSatori(YOGA)

export type ImageOptions = {
  site: string,
  width: number
  height: number,
  debug?: boolean
}

export async function generateImage(Component: any, props: Record<string, any>, { site, width, height, debug }: ImageOptions) {
  const roboto900 = await fetch(new URL('/fonts/RobotoMono/RobotoMono-Bold.ttf', site)).then(
    (res) => res.arrayBuffer()
  )
  console.log(new URL('/fonts/RobotoMono/RobotoMono-Bold.ttf', site))
  const svg = await satori(
    Component(props),
    {
      debug: debug,
      width: width,
      height: height,
      fonts: [
        {
          name: 'Roboto',
          data: roboto900,
          weight: 900,
          style: 'normal',
        }
      ]
    }
  )

  return await sharp(Buffer.from(svg)).png().toBuffer()
}