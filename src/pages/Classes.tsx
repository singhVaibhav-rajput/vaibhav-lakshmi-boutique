import { ArrowRight, BookOpen, CheckCircle2, GraduationCap, Ruler, Scissors, Shirt } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Language } from '../content'
import { copy } from '../content'
import Seo from '../components/Seo'
import WhatsAppButton, { WhatsAppSetupNotice } from '../components/WhatsAppButton'

export default function Classes({ language }: { language: Language }) {
  const t = copy[language]
  const courses = [
    { icon: BookOpen, title: t.basic, desc: t.basicDesc },
    { icon: Shirt, title: t.blouseCourse, desc: t.blouseCourseDesc },
    { icon: Scissors, title: t.suitCourse, desc: t.suitCourseDesc },
    { icon: Ruler, title: t.cutting, desc: t.cuttingDesc },
  ]
  return (
    <>
      <Seo title="Offline Stitching Classes & Tailoring Training" description="Ask about in-person stitching classes covering basic stitching, blouse stitching, suit and kurti stitching, cutting and measurement." path="/stitching-classes" />
      <section className="page-hero">
        <div className="container-shell grid items-center gap-10 py-14 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <div>
            <p className="eyebrow"><GraduationCap size={15} /> {language === 'hi' ? 'दुकान पर ऑफलाइन प्रशिक्षण' : 'In-person learning at the shop'}</p>
            <h1 className="section-title mt-5">{t.classPageTitle}</h1>
            <p className="section-copy mt-5">{t.classPageIntro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <WhatsAppButton language={language} message={t.classMessage} label={t.courseDetails} />
              <Link to="/cutting-measurement-course" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold">{t.cutting}<ArrowRight size={16} /></Link>
            </div>
            <WhatsAppSetupNotice language={language} />
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85" alt="Hands-on fabric and sewing work" className="h-[360px] w-full rounded-[2rem] object-cover" />
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-line bg-white p-5 shadow-soft">
              <p className="font-display text-xl">{t.locationTitle}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{t.locationText}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-shell py-16 sm:py-20">
        <div className="max-w-2xl"><p className="eyebrow">{t.courseTitle}</p><h2 className="section-title mt-4">{language === 'hi' ? 'वह हुनर सीखें जो काम आए।' : 'Build a practical skill.'}</h2><p className="section-copy mt-4">{t.detailsNote}</p></div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2">
          {courses.map(({ icon: Icon, title, desc }, i) => (
            <article key={title} className="rounded-3xl bg-white p-6 shadow-soft sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7e8e4] text-rose-dark"><Icon size={22} /></span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[.16em] text-rose-dark">{language === 'hi' ? `कोर्स ${i + 1}` : `Course ${String(i + 1).padStart(2, '0')}`}</p>
              <h3 className="mt-2 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{desc}</p>
              <div className="mt-5 flex items-start gap-2 text-xs leading-5 text-muted"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-rose-dark" />{language === 'hi' ? 'विवरण और उपलब्धता के लिए पूछें' : 'Ask about course details and availability'}</div>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-6 rounded-3xl border border-line p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-9">
          <div><h3 className="font-display text-2xl">{language === 'hi' ? 'फीस और बैच की जानकारी चाहिए?' : 'Want to know about fees and batches?'}</h3><p className="mt-2 text-sm leading-7 text-muted">{t.detailsNote}</p></div>
          <WhatsAppButton language={language} message={t.classMessage} label={t.courseDetails} />
        </div>
      </section>
    </>
  )
}