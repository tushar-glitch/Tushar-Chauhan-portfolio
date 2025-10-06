import { SOCIALS } from '@/constans/common'
import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import ContactForm from './components/ContactForm'



export const metadata: Metadata = {
  title: 'Contact - Dede Ariansya',
  openGraph: {
    title: 'Contact - Dede Ariansya',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Contact" />
      <div className="flex flex-col lg:flex-row">
        <div className="mb-4 w-full text-center lg:w-[480px] lg:text-left">
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">TEMPORARY ADDRESS</h2>
            <p className="text-sm leading-5">
              Gurgaon, India. <br />
              122002
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">EMAIL ADDRESS</h2>
            <p className="text-sm leading-5">
              <a href="mailto:me@dedeard.my.id" rel="noopener" className="hover:text-yellow-600">
                tusharc20001@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">MOBILE PHONE</h2>
            <p className="text-sm leading-5">
              <span>Call: </span>
              <a href="tel:+6281343912883" target="_blank" rel="noopener" className="hover:text-yellow-600">
                +91 9149329927
              </a>
              <br />
              <span>WhatsApp: </span>
              <a href={SOCIALS.WA} target="_blank" rel="noopener" className="hover:text-yellow-600">
                +91 9149329927
              </a>
            </p>
          </div>
        </div>
        <div className="lg:flex-1">
          <ContactForm />
        </div>
      </div>
    </>
  )
}
