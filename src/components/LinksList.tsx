import { contactLinks } from '../config/links'
import { content } from '../content'

export function LinksList() {
  return (
    <section
      id="links"
      aria-label={content.links.title}
      className="border-t border-border pt-8"
    >
      <ul className="space-y-2.5">
        {contactLinks.map((item) => (
          <li key={item.label} className="leading-relaxed">
            <span className="text-foreground">{item.label} </span>
            <a
              href={item.href}
              {...(item.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="text-link no-underline hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-link"
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
