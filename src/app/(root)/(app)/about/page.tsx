import tushar from '@/assets/tushar.jpg'
import { RESUME_URL } from '@/constans/common'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'About - Dede Ariansya',
  openGraph: {
    title: 'About - Dede Ariansya',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <div className="md:flex">
        <div className="mb-5 md:w-56">
          <Image src={tushar} alt="Foto dede ariansya" className="block w-full" placeholder="blur" />
        </div>
        <div className="md:flex-1 md:pl-6">
          <h2 className="mb-2 text-xl font-bold">I’m Tushar Chauhan</h2>
          <div className="mb-6">
            <p className="mb-1">
              Full Stack Web Developer based in Gurgaon, India. <br />I try my best to make the code I write easy to read and
              understand.
            </p>
          </div>
          <h2 className="mb-2 text-xl font-bold">What I believe</h2>
          <div className="mb-6">
            <p className="mb-1">
            Great developers aren’t defined by the tools they use, but by how they think and solve problems.
            </p>
          </div>
          <h2 className="mb-2 text-xl font-bold">Tech I love</h2>
          <div className="mb-6">
            <p className="mb-1">Node.js, Express.js, C/C++, Javascript, Typescript, Python, Ruby on Rails</p>
            <p className="italic text-[#2e92ff] font-medium">Hire me, and I'll make your tech stack my next favorite!</p>
          </div>
          <a
            download
            target="_blank"
            rel="nofollow"
            href={RESUME_URL}
            className="mr-3 inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Resume
          </a>
          <Link
            href="/contact"
            rel="nofollow"
            className="inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  )
}
