import { Suspense } from 'react'
import { Roboto } from 'next/font/google'
import { Footer } from '@/components/shared/Footer'
import { Header } from '@/components/shared/Header'
import { Loader } from '@/components/shared/Loader'
import '@/sass/globals.sass'

const roboto = Roboto({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
        <Footer />
      </body>

    </html>
  )
}
