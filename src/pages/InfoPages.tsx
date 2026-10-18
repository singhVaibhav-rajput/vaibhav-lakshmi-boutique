import { Link } from "react-router-dom";
import { ArrowRight, Camera, MapPin, MessageCircle } from "lucide-react";
import type { Language } from "../content";
import { copy } from "../content";
import { businessConfig, locationLabel } from "../config";
import Seo from "../components/Seo";
import WhatsAppButton, {
  WhatsAppSetupNotice,
} from "../components/WhatsAppButton";

export function Gallery({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <>
      <Seo
        title="Tailoring Gallery & Student Work"
        description="See examples of tailoring, garments and stitching class projects. Real business photos will be added as they become available."
        path="/gallery"
      />
      <section className="container-shell py-14 sm:py-20">
        <p className="eyebrow">{t.navGallery}</p>
        <h1 className="section-title mt-4">{t.galleryPageTitle}</h1>
        <p className="section-copy mt-4">{t.galleryPageText}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[t.blouse, t.suits, t.classesTitle, t.saree].map((title) => (
            <div
              key={title}
              className="rounded-3xl border border-dashed border-[#d8bdb5] bg-white p-6"
            >
              <div className="flex h-40 items-center justify-center rounded-2xl bg-paper">
                <Camera size={34} className="text-rose-dark" />
              </div>
              <h2 className="mt-5 font-display text-xl">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {language === "hi"
                  ? "लॉन्च से पहले यहाँ असली फोटो जोड़ें।"
                  : "Add a real photo here before launch."}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function About({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <>
      <Seo
        title="About Our Boutique & Tailoring Classes"
        description="Learn about a ladies’ tailoring business with 15 years of experience, offering garment stitching and in-person stitching lessons."
        path="/about"
      />
      <section className="page-hero">
        <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1fr_.7fr] lg:items-center lg:py-20">
          <div>
            <p className="eyebrow">{t.navAbout} · 15+ years</p>
            <h1 className="section-title mt-4">{t.aboutTitle}</h1>
            <p className="section-copy mt-5">{t.aboutText}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/tailoring"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
              >
                {t.navTailoring}
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/stitching-classes"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold"
              >
                {t.navClasses}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          
          <div className="rounded-[2rem] bg-[#ead8d1] p-3">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85"
              alt="Tailoring tools and fabric work"
              className="h-[340px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export function Contact({ language }: { language: Language }) {
  const t = copy[language];
  const location = locationLabel();
  return (
    <>
      <Seo
        title="Contact the Boutique & Stitching Classes"
        description="Contact the boutique to ask about ladies’ tailoring, garment alterations and offline stitching classes. Confirm location and availability directly."
        path="/contact"
      />
      <section className="container-shell py-14 sm:py-20">
        <p className="eyebrow">{t.navContact}</p>
        <h1 className="section-title mt-4">{t.contactPageTitle}</h1>
        <p className="section-copy mt-4">{t.contactPageText}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-7 shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7e8e4] text-rose-dark">
              <MessageCircle size={22} />
            </span>
            <h2 className="mt-5 font-display text-2xl">{t.enquire}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{t.contactText}</p>
            <WhatsAppButton language={language} className="mt-5" />
            <WhatsAppSetupNotice language={language} />
          </div>
          <div className="rounded-3xl bg-paper p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-rose-dark">
              <MapPin size={22} />
            </span>
            <h2 className="mt-5 font-display text-2xl">
              {language === "hi" ? "दुकान का पता" : "Shop location"}
            </h2>
            {location || businessConfig.address ? (
              <p className="mt-3 text-sm leading-7 text-muted">
                {businessConfig.address || location}
                {location && businessConfig.address ? `, ${location}` : ""}
              </p>
            ) : (
              <p className="mt-3 text-sm leading-7 text-muted">
                {language === "hi"
                  ? "पता तय होने के बाद यहाँ जोड़ा जाएगा।"
                  : "The shop address will appear here once confirmed."}
              </p>
            )}
            {businessConfig.openingHours && (
              <p className="mt-3 text-sm text-muted">
                {businessConfig.openingHours}
              </p>
            )}
            <p className="mt-5 text-xs leading-5 text-muted">
              {language === "hi"
                ? "सही पता और समय मिलने पर ही प्रकाशित करें।"
                : "Only publish the verified address and opening hours."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export function NotFound({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <section className="container-shell py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="section-title mt-4">{t.notFound}</h1>
      <p className="section-copy mx-auto mt-4">{t.notFoundText}</p>
      <Link
        to="/"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
      >
        {t.backHome}
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}
