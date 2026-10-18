import { ArrowRight, CheckCircle2, Scissors, Shirt, Ruler, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Language } from '../content'
import { copy } from '../content'
import Seo from '../components/Seo'
import WhatsAppButton, { WhatsAppSetupNotice } from '../components/WhatsAppButton'

export default function Tailoring({ language }: { language: Language }) {
  const t = copy[language]
  const services = [
    { icon: Shirt, title: t.blouse, description: t.blouseDesc, path: '/blouse-stitching' },
    { icon: Scissors, title: t.suits, description: t.suitsDesc, path: '/suit-kurti-stitching' },
    { icon: Ruler, title: t.alterations, description: t.alterationsDesc, path: '/contact' },
    { icon: Sparkles, title: t.custom, description: t.customDesc, path: '/contact' },
  ]
  return (
    <>
      <Seo title="Ladies’ Tailoring & Custom Stitching" description="Explore ladies’ blouse stitching, suit and kurti stitching, custom garment enquiries and alterations. Ask about availability and pricing." path="/tailoring" />
      <section className="page-hero">
        <div className="container-shell grid items-center gap-10 py-14 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <div>
            <p className="eyebrow">{t.navTailoring} · 15+ years</p>
            <h1 className="section-title mt-5">{t.tailoringPageTitle}</h1>
            <p className="section-copy mt-5">{t.tailoringPageIntro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <WhatsAppButton language={language} message={t.tailoringMessage} />
              <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold">{t.navGallery}<ArrowRight size={16} /></Link>
            </div>
            <WhatsAppSetupNotice language={language} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="./public/bag.png" alt="Tailoring workspace and fabric details" className="h-64 w-full rounded-t-[45%] rounded-b-2xl object-cover" />
            <img src="./public/stationary.png" alt="Colourful textiles for tailoring" className="mt-10 h-64 w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>
      <section className="container-shell py-16 sm:py-20">
        <div className="max-w-2xl"><p className="eyebrow">{t.services}</p><h2 className="section-title mt-4">{language === 'hi' ? 'आपकी पसंद, आपकी फिटिंग।' : 'Your style. Your fit.'}</h2></div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, description, path }, i) => (
            <article key={title} className="rounded-3xl border border-line bg-white p-6 sm:p-8">
              <div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7e8e4] text-rose-dark"><Icon size={22} /></span><span className="font-display text-2xl text-[#cbb9b0]">0{i + 1}</span></div>
              <h3 className="mt-6 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
              <Link to={path} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">{language === 'hi' ? 'और जानें' : 'Learn more'}<ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-paper p-7 sm:p-9">
          <h3 className="font-display text-2xl">{language === 'hi' ? 'ऑर्डर से पहले क्या बताएँ?' : 'What to share in your enquiry'}</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[language === 'hi' ? 'कपड़े या डिज़ाइन की फोटो' : 'A garment or design reference', language === 'hi' ? 'ज़रूरत और पसंद की फिटिंग' : 'Your needs and fit preferences', language === 'hi' ? 'कब तक चाहिए' : 'When you need it'].map((item) => <div key={item} className="flex gap-2 text-sm text-muted"><CheckCircle2 size={17} className="shrink-0 text-rose-dark" />{item}</div>)}
          </div>
        </div>
      </section>
    </>
  )
}