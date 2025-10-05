import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import ExperienceTimeline, { IExperience } from './components/ExperienceTimeline'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Experience - Tushar Chauhan',
  openGraph: {
    title: 'Experience - Tushar Chauhan',
    url: '/experience',
  },
  alternates: {
    canonical: '/experience',
  },
}

const experiences: IExperience[] = [
  {
    company: 'Procol',
    position: 'Software Engineer',
    location: 'Gurgaon, India',
    startDate: 'May 2025',
    endDate: 'Present',
    description: [
      'Successfully built and deployed large scale projects such as a internationalization, time zone localization, approval flows, bidding logs report and purchase order reordering - involving critical architecture changes and database migrations',
      'Implemented an optimized Excel Engine for parsing excel files and generating reports resulting in 2 times faster speeds.',
      'Proactively profiled and optimized most used APIs, reducing the latency from 2-3s to under 500ms for some use cases.',
      'Designed and implemented complete vendor onboarding workflows, introducing dynamic validations through conditional blocks to ensure compliance reducing time of event creation by 68%.',
      'Built the PR reordering feature enabling seamless conversion of requisitions into new RFQ (Request for Quotation) events, improving procurement efficiency.',
      'Led initiatives for code refactoring and best practices, reducing bugs significantly.'
    ],
    technologies: ['Ruby', 'Ruby on Rails', 'React', 'AWS', 'PostgreSQL', 'Docker', 'Sidekiq', 'Redis'],
  },
  {
    company: 'Mancmint',
    position: 'Full Stack Developer',
    location: 'Remote',
    startDate: 'July 2024',
    endDate: 'Apr 2025',
    description: [
      'Developed a complete backend system using Node.js and Express.js, starting from scratch.',
      'Successfully integrated Socket.io for real-time chat functionality, improving user engagement by 30%.',
      'Developed a video transcoding service using HLS protocol, ensuring seamless transmission of course videos.',
      'Optimized MongoDB queries, reducing response time by 40% for efficient data retrieval.',
    ],
    technologies: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Redis', 'Socket.io', 'HLS'],
  },
//   {
//     company: 'Startup Company',
//     position: 'Junior Developer',
//     location: 'Delhi, India',
//     startDate: 'Jan 2020',
//     endDate: 'May 2021',
//     description: [
//       'Contributed to frontend development using React and TypeScript',
//       'Integrated third-party APIs and payment gateways',
//       'Participated in daily standups and sprint planning sessions',
//       'Developed reusable component library for the design system',
//     ],
//     technologies: ['React', 'JavaScript', 'HTML/CSS', 'Git', 'Figma'],
//   },
]

export default function ExperiencePage() {
  return (
    <>
      <PageTitle title="Experience" />
      <ExperienceTimeline experiences={experiences} />
    </>
  )
}
