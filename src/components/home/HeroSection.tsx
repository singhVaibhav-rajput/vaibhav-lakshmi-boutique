import { ArrowDownRight, ArrowRight, Check, Scissors, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Language } from '../../content'
import { copy } from '../../content'
import { locationLabel } from '../../config'

type Props = { language: Language }

export default function HeroSection({ language }: Props) {
  const t = copy[language]
  const location = locationLabel()
  return (
      <section className="overflow-hidden">
        
        <div className="container-shell grid min-h-[610px] items-center gap-10 py-14 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
          <div className="relative z-10">
            <p className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-rose" />{t.heroEyebrow}</p>
            <h1 className="mt-6 whitespace-pre-line font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.35rem]">{t.heroTitle}</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">{t.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/tailoring" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-rose-dark">{t.exploreServices}<ArrowRight size={16} /></Link>
              <Link to="/stitching-classes" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-rose hover:text-rose-dark">{t.learnStitching}<ArrowDownRight size={16} /></Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-6">
              <div className="flex items-center gap-3"><span className="font-display text-3xl">15+</span><span className="max-w-24 text-xs leading-4 text-muted">{t.years}</span></div>
              <div className="flex items-center gap-2 text-xs text-muted"><Check size={16} className="text-rose" />{t.handFinished}</div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#ead7d0] blur-2xl" />
            <div className="relative grid grid-cols-[1.1fr_.9fr] gap-3">
              <div className="mt-12 overflow-hidden rounded-t-[48%] rounded-b-2xl bg-[#e8d8cc] p-2 shadow-soft">
                <img src="./images/saree.png" alt="Fabric and sewing details in a tailoring workspace" className="h-[370px] w-full rounded-t-[48%] rounded-b-xl object-cover" />
              </div>
              <div className="space-y-3">
                <div className="overflow-hidden rounded-2xl bg-[#e5c9c5] p-2">
                  <img src="./images/fabric.png" alt="Colourful folded fabrics for garment making" className="h-[220px] w-full rounded-xl object-cover" />
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-soft">
                  <Sparkles size={19} className="text-rose" />
                  <p className="mt-3 font-display text-xl leading-snug">{language === 'hi' ? 'हुनर, धैर्य और बारीकी।' : 'Skill, patience & detail.'}</p>
                  <p className="mt-2 text-xs leading-5 text-muted">{language === 'hi' ? 'आपकी पसंद और सीखने की गति के अनुसार।' : 'Made around your style and learning pace.'}</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-2 flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-soft sm:left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7e8e4] text-rose-dark"><Scissors size={20} /></span>
              <span><span className="block text-sm font-semibold">{language === 'hi' ? 'सिलाई + प्रशिक्षण' : 'Tailoring + Training'}</span><span className="mt-1 block text-xs text-muted">{language === 'hi' ? 'एक ही जगह' : 'All in one place'}</span></span>
            </div>
          </div>
        </div>
      </section>
  )
}
