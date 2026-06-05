import { Helmet } from 'react-helmet-async'
import {
  DEFAULT_OG_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  formatPageTitle,
  pageUrl,
} from '../../constants/siteSeo'

type Props = {
  title: string
  description: string
  /** Route path, e.g. `/aof` or `/` */
  path: string
  keywords?: string
  image?: string
  imageAlt?: string
  robots?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export default function PageSeo({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  imageAlt = 'Brian Marshall — Business Systems Architect',
  robots = 'index, follow',
  jsonLd,
}: Props) {
  const fullTitle = formatPageTitle(title)
  const url = pageUrl(path)
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {schemas.map((schema, i) => (
        <script key={`jsonld-${i}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
