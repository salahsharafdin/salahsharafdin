import { content } from '../content'
import { socialLinks } from '../config/links'
import { LinksList } from './LinksList'
import { SiteFooter } from './SiteFooter'
import { ThemeToggle } from './ThemeToggle'

const bodyClass = 'text-base leading-[1.75] sm:text-[1.0625rem] sm:leading-[1.8]'

export function BioContent() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between gap-4">
        <h1 className="text-[clamp(2.25rem,6vw,3.25rem)] font-bold leading-tight tracking-tight text-foreground">
          {content.meta.name}
        </h1>
        <ThemeToggle />
      </div>

      <div className={`space-y-5 ${bodyClass}`}>
        <section id="home" aria-label={content.home.title}>
          <p>{content.home.body}</p>
        </section>

        <section id="about" aria-label={content.about.title} className="space-y-5">
          <p>
            {content.about.role.before}
            {content.about.role.company}
            {content.about.role.parenOpen}
            <a
              href={socialLinks.somast}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-link"
            >
              {content.about.role.site}
            </a>
            {content.about.role.parenClose}
          </p>
          {content.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <LinksList />
        <SiteFooter />
      </div>
    </>
  )
}
