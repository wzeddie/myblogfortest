import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

const meta = {
  title: 'About Me',
  description: 'I like to blog about web development',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function About() {
  return (
    <div className="space-y-7">
      <h1>About</h1>
      <p>
        Hi! I’m eddie, and I help make the internet.
        I had a pretty early start on this web stuff – I still remember the modem connection sounds of AOL 2.5 emanating from my eMachines desktop like it was yesterday.
        </p>  
          
        </div>
  )
}
