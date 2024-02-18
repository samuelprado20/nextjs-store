import { Metadata } from 'next'
import { MainProducts } from '../../components/home/MainProducts'


export const metadata: Metadata = {
  title: '✨ Future world',
  description: 'Welcome to the future world, a futuristic store for all your needs',
  keywords: ['ecommerce', 'future', 'world', 'technology']
}
export default function Home() {
  return (
    <main >
      <MainProducts />
    </main>
  )
}
