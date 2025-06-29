"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: string
  threshold?: number
  delay?: number
}

export default function AnimateOnScroll({
  children,
  animation = "animate-fade-in-up",
  threshold = 0.1,
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(animation)
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [animation, threshold, delay])

  return (
    <div ref={ref} className={`opacity-0 ${animation}`}>
      {children}
    </div>
  )
}
