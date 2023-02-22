import svgToTinyDataUri from 'mini-svg-data-uri'
import Lines from './Lines'

export type OgImageProps = {
  title: string
  site: string
}

export const OgImage: React.FC<OgImageProps> = ({ title, site }) => {
  const logoUrl = new URL("/images/logo-dark.png", site)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
      padding: '54px 74px',
      backgroundImage: 'linear-gradient(to bottom, #e2e8f0, #f8fafc)'
    }}>
      <h1 style={{
        fontSize: '84px',
        fontWeight: 900,
      }}
      >
        {title}
      </h1>
      <img src={logoUrl.href} width={200} height={140} />
    </div>
  )
}