import { ArrowRight, Shirt, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Language } from '../../content'
import { copy } from '../../content'

type Props = { language: Language }

export default function OverviewSection({ language }: Props) {
  const t = copy[language]
  return (
      <section className="bg-white py-16 sm:py-20">
        <div className="container-shell">
          <div className="max-w-2xl">
            <p className="eyebrow">{t.welcome}</p>
            <h2 className="section-title mt-4">{t.welcomeTitle}</h2>
            <p className="section-copy mt-4">{t.welcomeText}</p>
          </div>
          
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Link to="/tailoring" className="group rounded-3xl bg-paper p-7 transition hover:-translate-y-1 hover:shadow-soft sm:p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-rose-dark"><Shirt size={23} /></span>
              <h3 className="mt-6 font-display text-2xl">{t.tailoringTitle}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted">{t.tailoringText}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">{t.viewServices}<ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
            </Link>
            <Link to="/stitching-classes" className="group rounded-3xl bg-[#f4e9e6] p-7 transition hover:-translate-y-1 hover:shadow-soft sm:p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-rose-dark"><GraduationCap size={23} /></span>
              <h3 className="mt-6 font-display text-2xl">{t.classesTitle}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted">{t.classesText}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">{t.viewCourses}<ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
            </Link>
          </div>
        </div>
      </section>
  )
}
