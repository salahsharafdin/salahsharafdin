import type { ReactNode } from 'react'

type PageLayoutProps = {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-svh px-6 py-12 sm:px-10 sm:py-16 md:px-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl text-left">{children}</div>
    </div>
  )
}
