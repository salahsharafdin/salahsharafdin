import { content } from '../content'

export function SiteFooter() {
  return (
    <footer className="mt-16 text-base text-muted sm:mt-20">
      {content.footer}
    </footer>
  )
}
