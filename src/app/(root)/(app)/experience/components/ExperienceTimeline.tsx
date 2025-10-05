'use client'

import React from 'react'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

export interface IExperience {
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  technologies?: string[]
}

const ExperienceItem: React.FC<{ experience: IExperience; isLast: boolean }> = ({ experience, isLast }) => {
  return (
    <div className="relative flex gap-4 pb-8">
      {/* Timeline line and dot */}
      <div className="relative flex flex-col items-center">
        <div className="z-10 flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-white">
          <div className="h-2 w-2 rounded-full bg-white dark:bg-black" />
        </div>
        {!isLast && <div className="mt-1 h-full w-0.5 bg-black/20 dark:bg-white/20" />}
      </div>

      {/* Content */}
      <div className="flex-1 bg-white/50 p-5 backdrop-blur dark:bg-black/80">
        <div className="mb-3">
          <h3 className="text-xl font-bold md:text-2xl">{experience.position}</h3>
          <p className="text-lg font-semibold opacity-80">{experience.company}</p>
        </div>

        <div className="mb-3 flex flex-wrap gap-3 text-sm opacity-70">
          <span className="flex items-center gap-1">
            <FiCalendar size={14} />
            {experience.startDate} - {experience.endDate}
          </span>
          <span className="flex items-center gap-1">
            <FiMapPin size={14} />
            {experience.location}
          </span>
        </div>

        <ul className="mb-3 list-inside list-disc space-y-1 opacity-80">
          {experience.description.map((desc, index) => (
            <li key={index} className="text-sm md:text-base">
              {desc}
            </li>
          ))}
        </ul>

        {experience.technologies && experience.technologies.length > 0 && (
          <div className="mt-3">
            <ul className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <li
                  key={tech}
                  className="border bg-gray-100/50 px-2 py-1 text-xs font-semibold leading-none dark:border-gray-800 dark:bg-gray-900/50"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

const ExperienceTimeline: React.FC<{ experiences: IExperience[] }> = ({ experiences }) => {
  return (
    <div className="mx-auto max-w-4xl">
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} experience={exp} isLast={index === experiences.length - 1} />
      ))}
    </div>
  )
}

export default ExperienceTimeline
