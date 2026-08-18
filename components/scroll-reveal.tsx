'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const setup = () => {
      const els = document.querySelectorAll<HTMLElement>('.reveal')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement
              const delay = el.dataset.delay ?? '0'
              el.style.transitionDelay = `${delay}ms`
              el.classList.add('reveal-visible')
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )
      els.forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }

    // Defer off main thread so it doesn't block LCP / FID
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(setup)
      return () => cancelIdleCallback(id)
    } else {
      const t = setTimeout(setup, 200)
      return () => clearTimeout(t)
    }
  }, [])

  return null
}
