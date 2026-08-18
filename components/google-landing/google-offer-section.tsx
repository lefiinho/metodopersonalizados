'use client'

import Image from 'next/image'
import { trackInitiateCheckout } from '@/components/facebook-pixel'
import { buildCheckoutUrl, CHECKOUT_BASE_URL } from '@/lib/checkout-url'
import { pushBeginCheckoutEvent } from '@/lib/analytics-events'
import { Lock, Zap, ShieldCheck } from 'lucide-react'

const stackItems = [
  { name: 'Método Personalizados por Encomenda™ (caminho completo)', value: 'R$197' },
  { name: 'Topos de Bolos por Encomenda', value: 'R$97' },
  { name: 'Chaveiros Personalizados', value: 'R$47' },
  { name: "Fotos Polaroid's Personalizadas", value: 'R$47' },
  { name: 'Divulgação e Vendas Recorrentes', value: 'R$67' },
  { name: 'Guia de Personalização pelo Celular', value: 'R$67' },
  { name: 'Guia de Precificação por Encomenda', value: 'R$67' },
  { name: 'Atendimento e Organização de Pedidos', value: 'R$47' },
  { name: 'Biblioteca com mais de 30 mil arquivos', value: 'R$147' },
]

const bonuses = [
  {
    number: '1',
    name: 'Super Pack de Topos de Bolos',
    description: 'Uma coleção extra de modelos e temas prontos para você personalizar e ampliar seu catálogo.',
    value: 'R$97',
  },
  {
    number: '2',
    name: 'Guia WhatsApp que Vende Todos os Dias',
    description: 'Mensagens e scripts prontos para divulgar, atender e fechar encomendas direto pelo WhatsApp.',
    value: 'R$67',
  },
]

const recap = [
  'Método completo por encomenda',
  'Comece pelo celular, sem máquina',
  'Guia de precificação incluso',
  'Biblioteca com +30 mil arquivos',
  '2 bônus inclusos',
  'Acesso vitalício ao conteúdo',
]

function CheckIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={`${className} text-[#2DB84B] shrink-0`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function handleCheckoutClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
  pushBeginCheckoutEvent()
  trackInitiateCheckout()
  window.location.href = buildCheckoutUrl()
}

export default function GoogleOfferSection() {
  return (
    <>
      {/* Stack de oferta */}
      <section className="bg-[#FDF1F2] py-14 px-4">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-8">
          <h2 className="reveal font-heading text-2xl md:text-3xl font-extrabold text-[#202B40] text-center text-balance">
            O que você recebe hoje
          </h2>

          <div className="reveal bg-white rounded-2xl border border-gray-100 shadow-sm w-full overflow-hidden">
            <ul className="flex flex-col">
              {stackItems.map((item, i) => (
                <li
                  key={item.name}
                  className={`flex items-center justify-between gap-4 px-6 py-4 ${i !== stackItems.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <CheckIcon />
                    <span className="font-sans text-[#202B40] text-sm md:text-base">{item.name}</span>
                  </span>
                  <del className="font-heading font-bold text-gray-400 text-sm md:text-base shrink-0 decoration-2 decoration-gray-400">
                    {item.value}
                  </del>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal flex flex-col items-center gap-2">
            <p className="font-sans text-gray-400 text-lg line-through">R$783</p>
            <p className="font-heading font-extrabold text-[#202B40] text-2xl md:text-3xl text-balance text-center">
              por apenas <span className="text-[#C94A64]">R$29</span>
            </p>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
          <h2 className="reveal font-heading text-2xl md:text-3xl font-extrabold text-[#202B40] text-center text-balance">
            Além disso, você também recebe
          </h2>

          <div className="flex flex-col gap-4 w-full">
            {bonuses.map((bonus) => (
              <div
                key={bonus.number}
                className="reveal bg-[#FDF1F2] rounded-2xl border border-[#F5D6DC] p-6 flex flex-col gap-2.5"
              >
                <span className="inline-block self-start bg-[#D9A84E] text-white font-sans font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Bônus {bonus.number}
                </span>
                <h3 className="font-heading font-bold text-[#202B40] text-base md:text-lg text-balance">
                  {bonus.name}
                </h3>
                <p className="font-sans text-[#535B68] text-sm leading-relaxed">
                  {bonus.description}
                </p>
                <p className="font-sans text-gray-400 text-sm line-through mt-1">{bonus.value}</p>
              </div>
            ))}
          </div>

          <p className="reveal font-heading font-bold text-[#202B40] text-base md:text-lg text-balance">
            Total dos bônus: <span className="text-[#D9A84E] line-through">R$164</span>
            <span className="text-[#C94A64]"> inclusos</span> na sua inscrição hoje.
          </p>
        </div>
      </section>

      {/* Card de oferta + Primeiro CTA */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-md mx-auto">
          <div className="reveal bg-[#202B40] rounded-[24px] shadow-xl p-7 md:p-9 flex flex-col items-center gap-5 text-center">
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

            <div className="flex flex-col items-center gap-1">
              <p className="flex items-baseline justify-center gap-2">
                <span className="font-sans text-white/70 text-[22px] leading-none">6x de&nbsp;</span>
                <span className="font-heading font-extrabold text-[#F5A3B4] text-[50px] leading-none">R$5,42</span>
              </p>
              <p className="font-sans text-white/60 text-[14px] line-through">De R$947</p>
              <p className="font-sans text-white/80 text-sm mt-1">por R$29 à vista no Pix</p>
            </div>

            <ul className="w-full flex flex-col gap-2 text-left bg-white/5 rounded-2xl px-4 py-3.5">
              {recap.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckIcon className="w-3.5 h-3.5" />
                  <span className="font-sans text-white/90 text-[13px] md:text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <p className="font-sans text-white/85 text-sm md:text-base leading-relaxed max-w-sm text-balance">
              Não é mais um curso na sua lista. É o passo a passo que vai te guiar até a sua primeira encomenda.
            </p>

            <a
              href={CHECKOUT_BASE_URL}
              onClick={handleCheckoutClick}
              className="btn-shine w-full bg-white hover:bg-gray-100 active:scale-95 text-[#C94A64] font-heading font-extrabold text-sm md:text-base py-4 px-6 rounded-full uppercase tracking-wide text-center transition-colors duration-150"
            >
              QUERO ACESSAR O MÉTODO COMPLETO
            </a>

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
    </>
  )
}
