import type { Language } from '../content'
import { copy } from '../content'
import Seo from '../components/Seo'
import WhatsAppButton from '../components/WhatsAppButton'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

type Props = { language: Language; kind: 'blouse' | 'suit' | 'cutting' }

export default function ServiceDetail({ language, kind }: Props) {
  const t = copy[language]
  const data = {
    blouse: {
      title: t.blouse,
      description: t.blouseDesc,
      intro: language === 'hi' ? 'ब्लाउज़ की सिलाई के बारे में अपनी पसंद, नाप और डिज़ाइन के साथ पूछताछ करें। कीमत और समय कपड़े व डिज़ाइन के अनुसार सीधे तय किए जाएँगे।' : 'Ask about blouse stitching with your preferred design, measurements and fit. Price and timing can be discussed directly based on the garment and design.',
      message: t.tailoringMessage,
      path: '/blouse-stitching',
      seo: 'Blouse Stitching & Custom Fit',
    },
    suit: {
      title: t.suits,
      description: t.suitsDesc,
      intro: language === 'hi' ? 'सूट और कुर्ती की सिलाई के लिए अपना डिज़ाइन, पसंद की फिटिंग और ज़रूरत साझा करें। उपलब्धता और कीमत की पुष्टि सीधे की जाएगी।' : 'Share your design, fit preferences and requirements for suit or kurti stitching. Availability and pricing are confirmed directly.',
      message: t.tailoringMessage,
      path: '/suit-kurti-stitching',
      seo: 'Suit & Kurti Stitching',
    },
    cutting: {
      title: t.cutting,
      description: t.cuttingDesc,
      intro: language === 'hi' ? 'कटिंग और नाप की क्लास में रुचि है? ऑफलाइन प्रशिक्षण, फीस, अवधि और अगले बैच के बारे में पूछें।' : 'Interested in learning cutting and measurement in person? Ask about the class format, fees, duration and next available batch.',
      message: t.classMessage,
      path: '/cutting-measurement-course',
      seo: 'Cutting & Measurement Classes',
    },
  }[kind]

  const isClass = kind === 'cutting'
  return (
    <>
      <Seo title={data.seo} description={`${data.description} ${data.intro}`} path={data.path} />
      <section className="page-hero">
        <div className="container-shell py-14 sm:py-20">
          <Link to={isClass ? '/stitching-classes' : '/tailoring'} className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-rose-dark"><ArrowLeft size={16} />{isClass ? t.navClasses : t.navTailoring}</Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-center">
            <div>
              <p className="eyebrow">{isClass ? t.navClasses : t.navTailoring}</p>
              <h1 className="section-title mt-4">{data.title}</h1>
              <p className="section-copy mt-5">{data.intro}</p>
              <div className="mt-7"><WhatsAppButton language={language} message={data.message} label={isClass ? t.courseDetails : t.enquire} /></div>
              <div className="mt-8 space-y-3">
                {(isClass
                  ? [language === 'hi' ? 'ऑफलाइन क्लास दुकान पर' : 'Offline classes at the shop', language === 'hi' ? 'फीस और समय पहले पूछें' : 'Ask about fees and timing first', language === 'hi' ? 'अगले बैच की उपलब्धता की पुष्टि करें' : 'Confirm the next batch’s availability']
                  : [language === 'hi' ? 'अपनी नाप और पसंद साझा करें' : 'Share your measurements and preferences', language === 'hi' ? 'डिज़ाइन की फोटो भेज सकते हैं' : 'You can share a design reference', language === 'hi' ? 'कीमत और समय सीधे तय करें' : 'Confirm pricing and timing directly']
                ).map((item) => <p key={item} className="flex items-center gap-2 text-sm text-muted"><CheckCircle2 size={17} className="text-rose-dark" />{item}</p>)}
              </div>
            </div>
            <div className="rounded-[2rem] bg-[#ead8d1] p-3">
              <img src={kind === 'blouse' ? 'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85' : kind === 'suit' ? 'https://images.unsplash.com/photo-1597983073493-88cd35cf93f8?auto=format&fit=crop&w=900&q=85' : 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85'} alt={data.title} className="h-[340px] w-full rounded-[1.5rem] object-cover" />
            </div>
          </div>
          <div className="mt-12 border-t border-line pt-6"><Link to={isClass ? '/stitching-classes' : '/tailoring'} className="inline-flex items-center gap-2 text-sm font-semibold">{language === 'hi' ? 'सभी विकल्प देखें' : 'Explore all options'}<ArrowRight size={16} /></Link></div>
        </div>
      </section>
    </>
  )
}