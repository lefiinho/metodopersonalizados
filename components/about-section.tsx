'use client'

import { useState } from 'react'
import Image from 'next/image'
import { trackInitiateCheckout } from '@/components/facebook-pixel'

const CTA_URL = 'https://payfast.greenn.com.br/redirect/308118'

const faqs = [
  {
    q: 'E se a cliente desistir depois que eu começar o pedido?',
    a: 'Você aprende a confirmar os detalhes do pedido e cobrar 50% de sinal antes de produzir. Só depois da encomenda confirmada você personaliza, imprime e monta o produto.',
  },
  {
    q: 'Eu preciso aprender todos os produtos de uma vez?',
    a: 'Não. Você pode começar pelos Topos de Bolo, entender o processo de atender uma encomenda e ampliar seu catálogo para chaveiros, fotos e outros personalizados no seu ritmo.',
  },
  {
    q: 'Nunca personalizei nada pelo celular. Vou conseguir acompanhar?',
    a: 'Sim. O método começa do básico e mostra como personalizar nome, idade e tema pelo celular, sem depender de computador ou experiência anterior.',
  },
  {
    q: 'Vou receber apenas arquivos prontos?',
    a: 'Não. Além da biblioteca de arquivos, você recebe o passo a passo para personalizar, imprimir, montar, calcular preço, divulgar, atender e entregar as encomendas.',
  },
  {
    q: 'Moro em cidade pequena. Ainda consigo vender?',
    a: 'Sim. O método funciona por encomenda e você pode começar atendendo pessoas da sua própria região, divulgando modelos no WhatsApp, redes sociais e para contatos próximos.',
  },
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string
  a: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
      >
        <span className="font-heading font-bold text-[#202B40] text-sm md:text-base">{q}</span>
        <ChevronIcon open={isOpen} />
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="font-sans text-[#535B68] text-sm leading-relaxed px-5 pb-5">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function AboutFAQFooterSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      {/* SEÇÃO 19 — Garantia */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Selo-de-Garantia-de-7-Dias-PNG-Transparente-Sem-Fundo-1-myIdDo6w71nFYoMb0cGJfHTY33bLxC.png"
            alt="Selo de Garantia de 7 Dias"
            className="reveal shrink-0 w-36 h-36 object-contain mx-auto md:mx-0"
          />
          <div className="reveal">
            <h2 className="font-heading text-xl md:text-2xl font-extrabold text-[#202B40] mb-3 text-balance">
              Você entra sem medo de errar.
            </h2>
            <p className="font-sans text-[#535B68] text-sm md:text-base leading-relaxed">
              Você terá 7 dias para conhecer o método e entender como tudo funciona.
            </p>
            <p className="font-sans text-[#535B68] text-sm md:text-base leading-relaxed mt-2">
              Se não for o que esperava, basta solicitar o reembolso dentro do prazo.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 20 — FAQ */}
      <section className="bg-[#FDF1F2] py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="reveal font-heading text-2xl md:text-3xl font-extrabold text-[#202B40] text-center mb-8 text-balance">
            Perguntas frequentes
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 21 — Fechamento emocional */}
      <section className="bg-[#202B40] py-16 px-4">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 text-center">
          <p className="reveal font-heading text-white/90 text-lg md:text-xl leading-relaxed text-balance">
            Você não precisa de tudo pronto.
          </p>
          <p className="reveal font-heading text-white/90 text-lg md:text-xl leading-relaxed text-balance">
            Você precisa de uma primeira encomenda.
          </p>
          <p className="reveal font-heading text-white/90 text-lg md:text-xl leading-relaxed text-balance">
            E de alguém que já fez esse caminho, mostrando o próximo passo.
          </p>

          {/* Mockup de mensagem — mesmo estilo do WhatsApp */}
          <div className="reveal w-full max-w-sm rounded-[20px] overflow-hidden shadow-lg mt-4">
            <div className="bg-[#ECE5DD] px-4 py-5 flex flex-col items-start gap-1">
              <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow-sm max-w-[90%]">
                <p className="font-sans text-[#202B40] text-sm text-left leading-snug">
                  Oi! Você faz Topo de Bolo da Frozen com o nome da minha filha?
                </p>
              </div>
              <span className="font-sans text-gray-500 text-[10px] pl-1">agora mesmo</span>
            </div>
          </div>

          <p className="font-heading font-extrabold text-white text-xl md:text-2xl text-balance mt-2">
            E se a próxima mensagem assim fosse para você?
          </p>
        </div>
      </section>

      {/* SEÇÃO 22 — CTA 3 (final) */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-md mx-auto flex flex-col items-center gap-4">
          <a
            href={CTA_URL}
            onClick={trackInitiateCheckout}
            className="btn-shine w-full bg-[#E05A76] hover:bg-[#C94A64] active:scale-95 text-white font-heading font-extrabold text-sm md:text-base py-4 px-6 rounded-full uppercase tracking-wide text-center transition-colors duration-150"
          >
            QUERO COMEÇAR A VENDER POR ENCOMENDA
          </a>
          <p className="font-sans text-[#535B68] text-xs flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
            <span>R$29 à vista no Pix</span>
            <span aria-hidden="true">&bull;</span>
            <span>Acesso imediato</span>
            <span aria-hidden="true">&bull;</span>
            <span>7 dias de garantia</span>
          </p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-[#171F30] text-white py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <Image
            src="/logo-metodo-personalizados.webp"
            alt="Método Personalizados por Encomenda"
            width={1277}
            height={555}
            loading="lazy"
            decoding="async"
            quality={70}
            sizes="140px"
            className="w-[120px] sm:w-[140px] h-auto opacity-95"
          />
          <p className="font-sans text-gray-500 text-xs text-center max-w-lg leading-relaxed">
            &copy; 2026 Método Personalizados por Encomenda™. Todos os direitos reservados.
          </p>
          <p className="font-sans text-gray-500 text-xs text-center max-w-lg leading-relaxed">
            Este produto é vendido com garantia de 7 dias. Resultados variam conforme dedicação e aplicação do método.
          </p>
          <p className="font-sans text-gray-300 text-sm text-center">
            Dúvidas? <a href="mailto:suporte@metodoppe.com.br" className="font-semibold text-white hover:underline">suporte@metodoppe.com.br</a>
          </p>
        </div>
      </footer>
    </>
  )
}
