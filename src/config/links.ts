export const socialLinks = {
  somast: 'https://somast.so',
  whatsapp: 'https://wa.me/252617621631',
  github: 'https://github.com/salahsharafdin',
  instagram: 'https://instagram.com/salah_yuusuf_sharafdin_7',
  email: 'mailto:salahsharafdin@gmail.com',
} as const

export const contactLinks = [
  {
    label: 'WhatsApp',
    href: socialLinks.whatsapp,
    value: '+252 617 621631',
    external: true,
    rel: 'noopener noreferrer',
  },
  {
    label: 'GitHub',
    href: socialLinks.github,
    value: '@salahsharafdin',
    external: true,
    rel: 'me noopener noreferrer',
  },
  {
    label: 'Instagram',
    href: socialLinks.instagram,
    value: '@salah_yuusuf_sharafdin_7',
    external: true,
    rel: 'me noopener noreferrer',
  },
  {
    label: 'Email',
    href: socialLinks.email,
    value: 'salahsharafdin@gmail.com',
    external: false,
    rel: undefined,
  },
] as const
