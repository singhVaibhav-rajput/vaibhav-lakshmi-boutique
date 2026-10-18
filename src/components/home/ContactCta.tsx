import type { Language } from '../../content'
import { copy } from '../../content'
import WhatsAppButton from '../WhatsAppButton'

type Props = { language: Language }

export default function ContactCta({ language }: Props) {
  const t = copy[language]
  return (
      <section className="container-shell py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-white sm:px-12 sm:py-16">
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-rose/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="eyebrow !text-[#e5b7b3]">{language === 'hi' ? 'चलिए, बात शुरू करें' : 'A good place to start'}</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">{t.contactTitle}</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">{t.contactText}</p>
            <div className="mt-7"><WhatsAppButton language={language} label={t.contactButton} message={t.genericMessage} /></div>
          </div>
        </div>
      </section>
  )
}
