"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  element: HTMLDivElement
}

export default function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particles: Particle[] = []
    const particleCount = 30

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 10 + 5
      const element = document.createElement("div")
      element.className = "particle"
      element.style.width = `${size}px`
      element.style.height = `${size}px`
      element.style.opacity = (Math.random() * 0.5 + 0.3).toString()

      const x = Math.random() * container.offsetWidth
      const y = Math.random() * container.offsetHeight

      element.style.left = `${x}px`
      element.style.top = `${y}px`

      container.appendChild(element)

      particles.push({
        x,
        y,
        size,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        element,
      })
    }

    particlesRef.current = particles

    // Animation function
    const animate = () => {
      const containerWidth = container.offsetWidth
      const containerHeight = container.offsetHeight

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off walls
        if (particle.x <= 0 || particle.x >= containerWidth - particle.size) {
          particle.speedX *= -1
        }

        if (particle.y <= 0 || particle.y >= containerHeight - particle.size) {
          particle.speedY *= -1
        }

        // Update DOM element
        particle.element.style.left = `${particle.x}px`
        particle.element.style.top = `${particle.y}px`
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      particles.forEach((particle) => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element)
        }
      })
    }
  }, [])

  return <div ref={containerRef} className="particles-container" />
}
