import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Language } from '../../content'
import { copy } from '../../content'

type Props = { language: Language }

export default function GalleryPreview({ language }: Props) {
  const t = copy[language]
  return (
      <section className="bg-white py-16 sm:py-20">
        <div className="container-shell grid gap-8 md:grid-cols-[1fr_.8fr] md:items-center">
          <div>
            <p className="eyebrow">{t.galleryTitle}</p>
            <h2 className="section-title mt-4">{language === 'hi' ? 'असली काम, असली हुनर।' : 'Real work. Real skill.'}</h2>
            <p className="section-copy mt-4">{t.galleryText}</p>
            <Link to="/gallery" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">{t.galleryTitle}<ArrowRight size={16} /></Link>
          </div>
          <div className="rounded-3xl border border-dashed border-[#d8bdb5] bg-paper p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-rose-dark"><Sparkles size={25} /></div>
            <p className="mt-4 font-display text-xl">{language === 'hi' ? 'अपनी तस्वीरें यहाँ जोड़ें' : 'Your photos belong here'}</p>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-muted">{language === 'hi' ? 'असली कपड़ों और विद्यार्थियों के काम की तस्वीरें वेबसाइट को भरोसेमंद बनाएँगी।' : 'Photos of finished garments and student projects will make the website feel personal and trustworthy.'}</p>
          </div>
        </div>
      </section>
  )
}
