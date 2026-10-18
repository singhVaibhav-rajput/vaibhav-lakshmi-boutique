import type { Language } from '../content'
import { businessConfig } from '../config'
import Seo from '../components/Seo'
import HeroSection from '../components/home/HeroSection'
import OverviewSection from '../components/home/OverviewSection'
import ExperienceSection from '../components/home/ExperienceSection'
import GalleryPreview from '../components/home/GalleryPreview'
import ContactCta from '../components/home/ContactCta'

export default function Home({ language }: { language: Language }) {
  return (
    <>
      <Seo
        title={`${businessConfig.name === 'Your Boutique Name' ? 'Ladies’ Tailoring & Stitching Classes' : businessConfig.name} | Boutique & Classes`}
        description="Ladies’ blouse, suit and kurti stitching, plus practical offline stitching classes with 15 years of tailoring experience."
        path="/"
      />
      <HeroSection language={language} />
      <OverviewSection language={language} />
      <ExperienceSection language={language} />
      <GalleryPreview language={language} />
      <ContactCta language={language} />
    </>
  )
}
