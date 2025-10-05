'use client'
import { EMAILJS } from '@/constans/common'
import emailjs from '@emailjs/browser'
import { memo, useRef, useState } from 'react'

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    setIsSubmitting(true)
    setStatus(null)

    try {
      await emailjs.sendForm(
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATE_ID,
        form.current,
        EMAILJS.PUBLIC_KEY
      )
      setStatus({
        type: 'success',
        message: 'Email successfully sent!'
      })
      form.current.reset()
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send email. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={form} className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
      {status?.type === 'success' && (
        <div className="border-l-4 border-green-500 bg-green-500/10 px-3 py-5 text-lg font-bold backdrop-blur-lg">
          {status.message}
        </div>
      )}
      {status?.type === 'error' && (
        <div className="border-l-4 border-red-500 bg-red-500/10 px-3 py-5 text-lg font-bold backdrop-blur-lg">{status.message}</div>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <div className="backdrop-blur-lg">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="block h-14 w-full border-black/10 bg-white text-sm text-black placeholder-black/60 opacity-60 focus:border-black/10 focus:border-b-black focus:opacity-100 focus:ring-0 dark:border-white/10 dark:bg-black dark:text-white dark:placeholder-white/60 dark:focus:border-b-white"
            />
          </div>
        </div>
        <div>
          <div className="backdrop-blur-lg">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Your Email"
              className="block h-14 w-full border-black/10 bg-white text-sm text-black placeholder-black/60 opacity-60 focus:border-black/10 focus:border-b-black focus:opacity-100 focus:ring-0 dark:border-white/10 dark:bg-black dark:text-white dark:placeholder-white/60 dark:focus:border-b-white"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="backdrop-blur-lg">
          <input
            type="text"
            name="subject"
            id="subject"
            required
            placeholder="Subject"
            className="block h-14 w-full border-black/10 bg-white text-sm text-black placeholder-black/60 opacity-60 focus:border-black/10 focus:border-b-black focus:opacity-100 focus:ring-0 dark:border-white/10 dark:bg-black dark:text-white dark:placeholder-white/60 dark:focus:border-b-white"
          />
        </div>
      </div>
      <div>
        <div className="backdrop-blur-lg">
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            placeholder="Message"
            className="block w-full border-black/10 bg-white text-sm text-black placeholder-black/60 opacity-60 focus:border-black/10 focus:border-b-black focus:opacity-100 focus:ring-0 dark:border-white/10 dark:bg-black dark:text-white dark:placeholder-white/60 dark:focus:border-b-white"
          />
        </div>
      </div>
      <div className="mx-auto h-14 w-1/2 backdrop-blur-lg">
        <button
          disabled={isSubmitting}
          className="mx-auto block h-full w-full bg-white font-bold opacity-75 hover:opacity-100 dark:bg-black"
        >
          {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
      </div>
    </form>
  )
}

export default memo(ContactForm)
