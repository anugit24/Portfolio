"use client"

import { useState, useEffect } from "react"

interface TextCarouselProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
}

export default function TextCarousel({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}: TextCarouselProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Function to handle the typing effect
    const handleTyping = () => {
      const currentFullText = texts[currentTextIndex]

      if (isWaiting) {
        timeout = setTimeout(() => {
          setIsWaiting(false)
          setIsDeleting(true)
        }, delayBetween)
        return
      }

      if (isDeleting) {
        // Deleting text
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        } else {
          setCurrentText(currentFullText.substring(0, currentText.length - 1))
          timeout = setTimeout(handleTyping, deletingSpeed)
        }
      } else {
        // Typing text
        if (currentText === currentFullText) {
          setIsWaiting(true)
        } else {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
          timeout = setTimeout(handleTyping, typingSpeed)
        }
      }
    }

    timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isWaiting, texts, typingSpeed, deletingSpeed, delayBetween])

  return (
    <div className="inline-block">
      <span className="text-primary-yellow">
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  )
}
