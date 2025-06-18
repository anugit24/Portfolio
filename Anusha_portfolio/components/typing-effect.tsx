"use client"

import { useEffect, useRef } from "react"

interface TypingEffectProps {
  text: string
  delay?: number
}

export default function TypingEffect({ text, delay = 0 }: TypingEffectProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (textRef.current) {
                textRef.current.classList.add("animated")
              }
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    const currentRef = textRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  return (
    <div className="typing-container">
      <div ref={textRef} className="typing-text">
        {text}
      </div>
    </div>
  )
}
