'use client'

import { useEffect, useState } from 'react'

const KanjiBackground = () => {
  const [kanjis, setKanjis] = useState<Array<{char: string, x: number, y: number, size: number, opacity: number}>>([])
  
  useEffect(() => {
    // Generate random kanji characters for background
    const kanjiList = ['侍', '道', '美', '力', '武', '芸', '術', '技', '心', '魂', '火', '水', '風', '林', '山', '雷', '陰', '陽', '和', '忍']
    const newKanjis = []
    
    for (let i = 0; i < 20; i++) {
      newKanjis.push({
        char: kanjiList[Math.floor(Math.random() * kanjiList.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        opacity: Math.random() * 0.1 + 0.03
      })
    }
    
    setKanjis(newKanjis)
  }, [])
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {kanjis.map((kanji, index) => (
        <div
          key={index}
          className="absolute text-secondary-red font-bold animate-float"
          style={{
            left: `${kanji.x}%`,
            top: `${kanji.y}%`,
            fontSize: `${kanji.size}px`,
            opacity: kanji.opacity,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        >
          {kanji.char}
        </div>
      ))}
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
    </div>
  )
}

export default KanjiBackground