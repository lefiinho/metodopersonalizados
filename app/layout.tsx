import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Nunito, Lato } from 'next/font/google'
import Script from 'next/script'
import FacebookPixel from '@/components/facebook-pixel'
import './globals.css'

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  display: 'swap',
  preload: true,
})

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Método Personalizados por Encomenda™ | Ganhe Dinheiro em Casa',
  description:
    'Ganhe dinheiro trabalhando em casa com encomendas de personalizados — mesmo começando do zero, sem experiência e sem equipamento.',
  openGraph: {
    title: 'Faça sua primeira venda antes de comprar sua primeira máquina',
    description:
      'Você divulga pelo WhatsApp, a cliente encomenda, você personaliza no celular, imprime na papelaria perto de casa, monta e entrega. Você só produz depois do pedido.',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%203_07_2026%2C%2010_39_54-Ko1PljOj6Xfa00xMlL2grKODmHMtXY.png',
        width: 1200,
        height: 630,
        alt: 'Método Personalizados por Encomenda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faça sua primeira venda antes de comprar sua primeira máquina',
    description:
      'Ganhe dinheiro trabalhando em casa com encomendas de personalizados — mesmo começando do zero, sem experiência e sem equipamento.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FFF5F5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${lato.variable} bg-background`}>
      <head>
        <Script id="clarity-script" strategy="beforeInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xywxwkbezm");
          `}
        </Script>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N38VXD8S');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N38VXD8S"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <FacebookPixel />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
