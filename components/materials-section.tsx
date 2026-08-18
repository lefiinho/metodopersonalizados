import { Scissors, Droplet, Pin } from 'lucide-react'

const materials = [
  { icon: Scissors, label: 'Tesoura' },
  { icon: Droplet, label: 'Cola quente' },
  { icon: Pin, label: 'Palitos' },
]

export default function MaterialsSection() {
  return (
    <section className="bg-white pt-0 pb-12 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">

        <h2 className="reveal font-heading text-[25px] md:text-[30px] font-extrabold text-[#202B40] text-balance">
          E o que eu preciso ter para começar?
        </h2>

        {/* Lista de materiais */}
        <ul className="reveal flex flex-col gap-3 w-full max-w-xs">
          {materials.map((m) => (
            <li
              key={m.label}
              className="flex items-center gap-3 bg-[#FDF1F2] border border-[#F5D6DC] rounded-[14px] px-4 py-3"
            >
              <m.icon className="w-4.5 h-4.5 text-[#E05A76] shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <span className="font-sans text-sm font-medium text-[#202B40]">{m.label}</span>
            </li>
          ))}
        </ul>

        <p className="reveal font-sans text-[#535B68] text-sm max-w-xs bg-[#FDF1F2] border border-[#F5D6DC] rounded-[14px] px-4 py-3 text-balance">
          A impressão da arte custa cerca de 2 reais em qualquer papelaria do bairro.
        </p>

      </div>
    </section>
  )
}
