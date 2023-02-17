export type FaviconProps = {
  site: string
  dark?: boolean
}

export const Favicon: React.FC<FaviconProps> = ({site, dark = false}) => {
  const logoUrl = new URL(`/images/iconmark${dark ? '' : '-dark'}.png`, site)

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
      height: '100%',
      margin: 0,
      borderRadius: '100%',
    }}>
      <img src={logoUrl.href} width={32} height={32} />
    </div>
  )
}