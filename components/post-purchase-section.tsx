const steps = [
  {
    number: '1',
    color: 'bg-[#2DB84B]',
    title: 'Confirmação do pagamento',
    text: 'Você recebe a confirmação por e-mail em poucos minutos.',
  },
  {
    number: '2',
    color: 'bg-[#E05A76]',
    title: 'Acesso liberado',
    text: 'Você entra na plataforma e já pode assistir à primeira aula.',
  },
  {
    number: '3',
    color: 'bg-[#2DB84B]',
    title: 'Primeiros passos',
    text: 'Você segue o passo a passo e prepara sua primeira divulgação.',
  },
]

export default function PostPurchaseSection() {
  return (
    <section className="bg-[#FDF1F2] py-14 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">

        <h2 className="reveal font-heading text-[26px] md:text-[28px] font-extrabold text-[#202B40] text-center text-balance">
          O que acontece depois da compra
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {steps.map((step) => (
            <div
              key={step.number}
              className="reveal bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center gap-3 text-center"
            >
              <span className={`w-11 h-11 rounded-full ${step.color} flex items-center justify-center font-heading font-extrabold text-white text-lg`}>
                {step.number}
              </span>
              <h3 className="font-heading font-bold text-[#202B40] text-base">{step.title}</h3>
              <p className="font-sans text-[#535B68] text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
