const items = [
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

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#2DB84B] shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

export default function StackingSection() {
  return (
    <section className="bg-[#FDF1F2] py-14 px-4">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-8">

        <h2 className="reveal font-heading text-2xl md:text-3xl font-extrabold text-[#202B40] text-center text-balance">
          O que você recebe hoje
        </h2>

        <div className="reveal bg-white rounded-2xl border border-gray-100 shadow-sm w-full overflow-hidden">
          <ul className="flex flex-col">
            {items.map((item, i) => (
              <li
                key={item.name}
                className={`flex items-center justify-between gap-4 px-6 py-4 ${i !== items.length - 1 ? 'border-b border-gray-100' : ''}`}
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
  )
}
