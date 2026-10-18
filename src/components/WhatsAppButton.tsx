import { MessageCircle } from 'lucide-react'
import { businessConfig, whatsappUrl } from '../config'
import type { Language } from '../content'
import { copy } from '../content'

type Props = {
  language: Language
  message?: string
  label?: string
  variant?: 'primary' | 'outline'
  className?: string
}

export default function WhatsAppButton({
  language,
  message,
  label,
  variant = 'primary',
  className = '',
}: Props) {
  const t = copy[language]
  const url = whatsappUrl(message || t.genericMessage)
  const styles = variant === 'primary'
    ? 'bg-rose text-white hover:bg-rose-dark'
    : 'border border-line bg-white text-ink hover:border-rose hover:text-rose-dark'

  if (!url) {
    return (
      <span
        className={`inline-flex cursor-help items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${styles} ${className}`}
        title={t.whatsappMissingHint}
        aria-label={t.whatsappMissingHint}
      >
        <MessageCircle size={17} />
        {label || t.enquire}
      </span>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${styles} ${className}`}
    >
      <MessageCircle size={17} />
      {label || t.enquire}
    </a>
  )
}

export function WhatsAppSetupNotice({ language }: { language: Language }) {
  if (businessConfig.whatsappNumber.trim()) return null
  return (
    <p className="mt-3 text-xs leading-5 text-muted">
      {copy[language].whatsappMissing}. {copy[language].whatsappMissingHint}
    </p>
  )
}