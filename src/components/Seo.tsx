import { Helmet } from 'react-helmet-async'
import { businessConfig, locationLabel } from '../config'

type Props = {
  title: string
  description: string
  path: string
}

export default function Seo({ title, description, path }: Props) {
  const location = locationLabel()
  const fullTitle = `${title}${location ? ` | ${location}` : ''}`
  const descriptionWithLocation = location && !description.toLowerCase().includes(location.toLowerCase())
    ? `${description} Serving ${location}.`
    : description

  return (
    <Helmet>
      <title>{fullTitle}</title>
      
      <meta name="description" content={descriptionWithLocation} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={descriptionWithLocation} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <link rel="canonical" href={path} />
      {businessConfig.name !== 'Your Boutique Name' && (
        <meta property="og:site_name" content={businessConfig.name} />
      )}
    </Helmet>
  )
}