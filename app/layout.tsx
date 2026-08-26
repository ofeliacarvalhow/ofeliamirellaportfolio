import { Analytics } from '@vercel/analytics/next'
import { IBM_Plex_Mono, Manrope, Playfair_Display } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const plex = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400','500'], variable: '--font-plex' })
// Identidade visual do jornal O Veterano: serifada de display, usada so nos blocos .veterano
const veterano = Playfair_Display({ subsets: ['latin'], weight: ['400','700'], variable: '--font-veterano' })
export const metadata: Metadata = { title: 'Ofélia Mirella: jornalismo, comunicação e informação', description: 'Portfólio editorial de Ofélia Mirella, estudante de Comunicação, Mídia e Informação na FGV.', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#FFFFFF', userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR" className="bg-background"><body className={`${manrope.variable} ${plex.variable} ${veterano.variable}`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
