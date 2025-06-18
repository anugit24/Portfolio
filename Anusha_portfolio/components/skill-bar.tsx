"use client"

import { useEffect, useRef } from "react"

interface SkillBarProps {
  name: string
  percentage: number
  delay?: number
}

export default function SkillBar({ name, percentage, delay = 0 }: SkillBarProps) {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (progressRef.current) {
                progressRef.current.style.setProperty("--progress-width", `${percentage}%`)
                progressRef.current.classList.add("animated")
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

    const currentRef = progressRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [percentage, delay])

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-primary-green">{name}</span>
        <span className="text-sm font-medium text-primary-yellow">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div ref={progressRef} className="skill-progress"></div>
      </div>
    </div>
  )
}
