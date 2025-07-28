// src/components/Bacteria.jsx
import { useEffect, useState } from 'react'
import '../App.css'

const NUM_BACTERIA = 20
const TUMOR = { x: 300, y: 200 }

function getRandomPosition() {
  return {
    x: Math.random() * 480,
    y: Math.random() * 480,
  }
}

export default function Bacteria() {
  const [bacteria, setBacteria] = useState(
    Array.from({ length: NUM_BACTERIA }, getRandomPosition)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Moving bacteria...') // Debugging log

      setBacteria((prev) =>
        prev.map((b, i) => {
          const dx = TUMOR.x - b.x
          const dy = TUMOR.y - b.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Prevent divide-by-zero
          if (distance === 0) return b

          const speed = 1.0
          const moveX = (dx / distance) * speed
          const moveY = (dy / distance) * speed

          const newB = {
            x: b.x + moveX,
            y: b.y + moveY,
          }

          console.log(`Bacteria ${i}: (${b.x.toFixed(1)}, ${b.y.toFixed(1)}) → (${newB.x.toFixed(1)}, ${newB.y.toFixed(1)})`)
          return newB
        })
      )
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bacteria-container">
      <div
        className="tumor-dot"
        style={{ left: TUMOR.x, top: TUMOR.y }}
      />
      {bacteria.map((b, i) => (
        <div
          key={i}
          className="bacteria-dot"
          style={{ left: b.x, top: b.y }}
        />
      ))}
    </div>
  )
}
