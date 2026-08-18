const wrongWay = ['Computador', 'Impressora em casa', 'Máquina de corte', 'Estoque pronto', 'Muita experiência']

const rightWay = [
  'Só o celular',
  'Papelaria perto de casa',
  'Tesoura e cola quente',
  'Produzir só depois da encomenda',
  'Aprender fazendo',
]

function XIcon() {
  return (
    <svg className="w-5 h-5 text-[#E05A76] shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#2F9E63] shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function ArrowDownBadge() {
  return (
    <span className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#E05A76] font-bold text-lg z-10">
      ↓
    </span>
  )
}

export default function BeliefBreakSection() {
  return (
    <section className="bg-[#FDF1F2] py-12 px-4">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Card ❌ */}
          <div className="reveal bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
            <h3 className="font-heading font-bold text-[#202B40] text-lg text-center text-balance">
              O jeito antigo de se fazer
            </h3>
            <ul className="flex flex-col gap-3">
              {wrongWay.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <XIcon />
                  <span className="font-sans text-[#535B68] text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seta mobile */}
          <div className="flex md:hidden justify-center -my-1" aria-hidden="true">
            <ArrowDownBadge />
          </div>

          {/* Card ✅ */}
          <div className="reveal bg-[#FDF1F2] rounded-2xl border border-[#E9A6B4] p-6 flex flex-col gap-4">
            <h3 className="font-heading font-bold text-[#202B40] text-lg text-center text-balance">
              O jeito com o Método Personalizados por Encomenda
            </h3>
            <ul className="flex flex-col gap-3">
              {rightWay.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="font-sans text-[#202B40] text-sm md:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seta desktop, centralizada entre os cards */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
            <ArrowDownBadge />
          </div>
        </div>

        {/* Destaque central */}
        <div className="reveal bg-[#202B40] rounded-3xl shadow-lg p-8 text-center">
          <p className="font-heading font-bold text-white text-lg md:text-xl leading-snug text-balance">
            Você não precisa começar com muito dinheiro, comprar equipamentos ou ter experiência anterior.
            <br className="hidden md:block" />
            <span className="block md:inline"> </span>
            Precisa de um passo a passo feito por quem vive disso diariamente.
          </p>
        </div>

      </div>
    </section>
  )
}
