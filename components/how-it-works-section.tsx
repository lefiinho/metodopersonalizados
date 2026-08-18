'use client'

import { Smartphone, MessageCircle, PenLine, Printer, Scissors, Package, Lightbulb } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: Smartphone,
    title: 'Você mostra os modelos',
    text: 'Divulga no WhatsApp, Facebook, Instagram ou para pessoas da sua região.',
  },
  {
    number: '2',
    icon: MessageCircle,
    title: 'A cliente escolhe',
    text: 'Ela envia o tema, o nome e a idade/comemoração.',
  },
  {
    number: '3',
    icon: PenLine,
    title: 'Você personaliza pelo celular',
    text: 'Ajusta o modelo e prepara a arte sem precisar de computador.',
  },
  {
    number: '4',
    icon: Printer,
    title: 'Imprime perto de casa',
    text: 'Envia o arquivo para uma papelaria ou gráfica próxima e pega a impressão pronta.',
  },
  {
    number: '5',
    icon: Scissors,
    title: 'Você monta em casa',
    text: 'Recorta, monta e finaliza usando materiais simples.',
  },
  {
    number: '6',
    icon: Package,
    title: 'A cliente recebe',
    text: 'Ela pode retirar com você ou receber em casa por um serviço de entrega.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-[#FDF1F2] py-12 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center">

        <div>
          <h2 className="reveal font-heading text-[28px] md:text-[32px] font-extrabold text-[#202B40] mb-3 text-balance">
            Divulgue primeiro. <span className="text-[#C94A64]">Produza depois.</span>
          </h2>
          <p className="font-sans text-[#535B68] text-base leading-relaxed max-w-xl">
            Você começa com o que já tem. Só inicia a produção depois que a cliente confirma o pedido e envia{' '}
            <span className="text-[#C94A64] font-semibold">50% de sinal</span>.
          </p>
        </div>

        <div className="w-full flex flex-col">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex gap-4 pb-4 last:pb-0">
              {/* Linha conectora */}
              {i < steps.length - 1 && (
                <span
                  className="absolute left-[22px] top-11 bottom-0 w-px bg-[#F1C7CF]"
                  aria-hidden="true"
                />
              )}

              <span className="reveal shrink-0 z-10 w-11 h-11 rounded-full bg-[#E05A76] flex items-center justify-center font-heading font-extrabold text-white text-lg">
                {step.number}
              </span>

              <div className="reveal flex-1 flex items-start gap-3 rounded-2xl border border-gray-100 shadow-sm bg-white p-4 md:p-5 text-left">
                <step.icon className="w-5 h-5 text-[#E05A76] shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading font-bold text-[#202B40] text-base">{step.title}</h3>
                  <p className="font-sans text-[#535B68] text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal bg-white border border-[#F5D6DC] rounded-2xl p-6 flex items-center gap-4 w-full">
          <Lightbulb className="w-7 h-7 text-[#E05A76] shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <p className="font-sans text-[#202B40] font-semibold text-sm md:text-base text-left text-balance">
            É assim que você começa: com uma encomenda, não com uma casa cheia de materiais que não vai utilizar.
          </p>
        </div>

      </div>
    </section>
  )
}
