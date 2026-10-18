import { ArrowRight, Scissors, Shirt, Ruler, CircleCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Language } from '../../content'
import { copy } from '../../content'

type Props = { language: Language }

export default function ExperienceSection({ language }: Props) {
  const t = copy[language]
  const serviceCards = [
    { icon: Shirt, title: t.blouse, desc: t.blouseDesc, to: '/blouse-stitching' },
    { icon: Scissors, title: t.suits, desc: t.suitsDesc, to: '/suit-kurti-stitching' },
    { icon: Ruler, title: t.cutting, desc: t.cuttingDesc, to: '/cutting-measurement-course' },
    { icon: CircleCheck, title:t.saree, desc: t.sareeDesc, to: '/saree-stitching' }
  ] 
  return (
      <section className="py-16 sm:py-20">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="overflow-hidden rounded-[2rem] bg-[#e7d4c9] p-3">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85" alt="Hands working carefully with fabric and tailoring tools" className="h-[360px] w-full rounded-[1.5rem] object-cover" />
          </div>
          <div className="lg:pl-8">
            <p className="eyebrow">{language === 'hi' ? 'हमारी खासियत' : 'The personal touch'}</p>
            <h2 className="section-title mt-4">{t.experienceTitle}</h2>
            <p className="section-copy mt-5">{t.experienceText}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {serviceCards.map(({ icon: Icon, title, desc, to }) => (
                <Link key={to} to={to} className="flex gap-3 rounded-2xl border border-line bg-white p-4 transition hover:border-rose">
                  <Icon size={19} className="mt-0.5 shrink-0 text-rose-dark" />
                  <span><span className="block text-sm font-semibold">{title}</span><span className="mt-1 block text-xs leading-5 text-muted">{desc}</span></span>
                </Link>
              ))}
            </div>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">{t.ourStory}<ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
  )
}
