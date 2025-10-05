import type { Metadata } from 'next'
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  robots: 'index, follow',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-1 pb-16 md:pb-0 md:pl-16">
        <Navigation />
        {children}
      </div>
    </>
  )
}
