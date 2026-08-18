'use client'

import Image from 'next/image'
import { trackInitiateCheckout } from '@/components/facebook-pixel'
import { Lock, Zap, ShieldCheck } from 'lucide-react'

const CTA_URL = 'https://payfast.greenn.com.br/redirect/308118'

const recap = [
  'Método completo por encomenda',
  'Comece pelo celular, sem máquina',
  'Guia de precificação incluso',
  'Biblioteca com +30 mil arquivos',
  '2 bônus de lançamento',
  'Acesso vitalício ao conteúdo',
]

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-[#2DB84B] shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

export default function PricingSection() {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-md mx-auto">
        <div className="reveal bg-[#202B40] rounded-[24px] shadow-xl p-7 md:p-9 flex flex-col items-center gap-5 text-center">

          {/* Logo */}
          <Image
            src="/logo-metodo-personalizados.webp"
            alt="Método Personalizados por Encomenda"
            width={1277}
            height={555}
            loading="lazy"
            decoding="async"
            quality={80}
            sizes="(max-width: 767px) 220px, 280px"
            className="w-[200px] sm:w-[260px] h-auto mb-4"
          />

          <h2 className="font-heading font-extrabold text-white text-[24px] md:text-[28px] leading-snug text-balance">
            Comece hoje por apenas
          </h2>

          {/* Preço em destaque */}
          <div className="flex flex-col items-center gap-1">
            <p className="flex items-baseline justify-center gap-2">
              <span className="font-sans text-white/70 text-[22px] leading-none">6x de&nbsp;</span>
              <span className="font-heading font-extrabold text-[#F5A3B4] text-[50px] leading-none">R$5,42</span>
            </p>
            <p className="font-sans text-white/60 text-[14px] line-through">De R$947</p>
            <p className="font-sans text-white/80 text-sm mt-1">por R$29 à vista no Pix</p>
          </div>

          {/* Recap em checkmarks compacto */}
          <ul className="w-full flex flex-col gap-2 text-left bg-white/5 rounded-2xl px-4 py-3.5">
            {recap.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CheckIcon />
                <span className="font-sans text-white/90 text-[13px] md:text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <p className="font-sans text-white/85 text-sm md:text-base leading-relaxed max-w-sm text-balance">
            Não é mais um curso na sua lista. É o passo a passo que vai te guiar até a sua primeira encomenda.
          </p>

          <a
            href={CTA_URL}
            onClick={trackInitiateCheckout}
            className="btn-shine w-full bg-white hover:bg-gray-100 active:scale-95 text-[#C94A64] font-heading font-extrabold text-sm md:text-base py-4 px-6 rounded-full uppercase tracking-wide text-center transition-colors duration-150"
          >
            QUERO COMEÇAR POR R$29
          </a>

          {/* Badges de confiança */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-1">
            <span className="flex items-center gap-1.5 font-sans text-white/70 text-xs">
              <Lock className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" /> Pagamento seguro
            </span>
            <span className="flex items-center gap-1.5 font-sans text-white/70 text-xs">
              <Zap className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" /> Acesso imediato
            </span>
            <span className="flex items-center gap-1.5 font-sans text-white/70 text-xs">
              <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" /> 7 dias de garantia
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
