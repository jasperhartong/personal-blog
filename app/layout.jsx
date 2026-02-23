import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { HomeLink } from './home-link'
import 'nextra-theme-blog/style.css'
 
const siteUrl = 'https://jasperhartong.com'
const description =
  'Blog by Jasper Hartong — writing about stuff.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Jasper Hartong',
    template: '%s — Jasper Hartong'
  },
  description,
  authors: [{ name: 'Jasper Hartong', url: siteUrl }],
  openGraph: {
    title: 'Jasper Hartong',
    description,
    url: siteUrl,
    siteName: 'Jasper Hartong',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'Jasper Hartong',
    description
  },
  alternates: {
    canonical: siteUrl,
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`
    }
  }
}
 
export default async function RootLayout({ children }) {
  const banner = (
    <Banner storageKey="opportunity-banner">
    🌿🇪🇺 Running a nature restoration project in Europe? I'm looking for an opportunity combining hands-on and automation work! {" "}
    <a
      href="https://www.linkedin.com/in/jasperhartong/"
      style={{
        textDecoration: 'underline',
        textUnderlinePosition: 'from-font'
      }}
    >
      Reach out →
    </a>
  </Banner>
  )
 
  return (
    <html lang="en" suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#0f172a', light: '#fefce8' }} />
      <body>
        <Layout banner={banner}>
          <Navbar pageMap={await getPageMap()}>
            <HomeLink />
            <ThemeSwitch />
          </Navbar>
 
          {children}
 
          <Footer>
            <abbr
              title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
              style={{ cursor: 'help' }}
            >
              CC BY-NC 4.0
            </abbr>{' '}
            {new Date().getFullYear()} © Jasper Hartong.
            <a href="/feed.xml" style={{ float: 'right' }}>
              RSS
            </a>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
