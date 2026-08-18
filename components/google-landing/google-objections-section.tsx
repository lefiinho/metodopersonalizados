import { Sparkles, Printer, Scissors, WalletCards, type LucideIcon } from 'lucide-react'

const objections: {
  question: string
  answer: string
  icon: LucideIcon
  iconBg: string
  iconColor: string
  highlight?: boolean
}[] = [
  {
    question: 'Nunca fiz personalizados antes.',
    answer:
      'O método começa do básico, mostrando como personalizar nome e idade, imprimir, montar e atender encomendas.',
    icon: Sparkles,
    iconBg: 'bg-[#FCE8EC]',
    iconColor: 'text-[#E05A76]',
  },
  {
    question: 'Preciso ter impressora?',
    answer:
      'Não. Você personaliza pelo celular, envia o arquivo para uma papelaria ou gráfica próxima e pega a impressão pronta.',
    icon: Printer,
    iconBg: 'bg-[#E8F1FB]',
    iconColor: 'text-[#4A90D9]',
  },
  {
    question: 'Preciso de máquina de corte?',
    answer:
      'Não. Você pode começar com tesoura. A máquina só faz sentido quando os pedidos já aumentaram.',
    icon: Scissors,
    iconBg: 'bg-[#FCE8EC]',
    iconColor: 'text-[#E05A76]',
  },
  {
    question: 'Mas eu não tenho dinheiro para começar.',
    answer:
      'Você começa usando o que já tem: celular, tesoura e cola. E só inicia a produção depois que a cliente confirma o pedido e envia o sinal.',
    icon: WalletCards,
    iconBg: 'bg-[#FCF3D9]',
    iconColor: 'text-[#B8860B]',
    highlight: true,
  },
]

function QuestionCard({
  question,
  answer,
  icon: Icon,
  iconBg,
  iconColor,
  highlight,
}: {
  question: string
  answer: string
  icon: LucideIcon
  iconBg: string
  iconColor: string
  highlight?: boolean
}) {
  return (
    <div
      className={`reveal relative bg-white rounded-[18px] border p-[18px] flex flex-col items-start gap-0 shadow-sm ${
        highlight ? 'border-[#E05A76]/35' : 'border-gray-100'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${iconBg}`} aria-hidden="true">
          <Icon className={`w-5 h-5 ${iconColor}`} strokeWidth={2} />
        </span>
        <span className="font-heading font-bold text-[#202B40] text-[17px] leading-[1.25] text-balance">
          {question}
        </span>
      </div>

      <span className="block w-9 h-[3px] rounded-full bg-[#E05A76] my-2.5" aria-hidden="true" />

      <p className="font-sans text-[#5A6474] text-[15px] md:text-base leading-[1.5]">{answer}</p>
    </div>
  )
}

export default function GoogleObjectionsSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#eaf3fd] to-white py-12 px-5 sm:px-4 overflow-hidden">
      <div
        className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#F7C6D0] opacity-20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -right-16 w-72 h-72 rounded-full bg-[#E8D08A] opacity-20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[960px] mx-auto flex flex-col gap-8">

        <div className="flex flex-col items-center text-center">
          <span className="block w-14 h-[3px] rounded-full bg-[#E05A76] mb-4" aria-hidden="true" />
          <h2 className="reveal font-heading text-[28px] md:text-3xl font-bold text-[#1E3A5F] mb-0 text-balance">
            Dúvidas comuns antes de começar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] sm:gap-4">
          {objections.map((o) => (
            <QuestionCard
              key={o.question}
              question={o.question}
              answer={o.answer}
              icon={o.icon}
              iconBg={o.iconBg}
              iconColor={o.iconColor}
              highlight={o.highlight}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
