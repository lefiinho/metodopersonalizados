import Image from 'next/image'

const items = [
  { icon: '/icons/topo-de-bolo.svg', iconAlt: 'Ícone de topo de bolo personalizado', title: 'TOPOS DE BOLOS', text: 'Personalizados para aniversários e diversas comemorações.' },
  { icon: '/icons/chaveiro-personalizado.svg', iconAlt: 'Ícone de chaveiro personalizado', title: 'CHAVEIROS PERSONALIZADOS', text: 'Fáceis de produzir, com baixo custo e ótimo valor percebido.' },
  { icon: '/icons/foto-polaroid.svg', iconAlt: 'Ícone de foto estilo Polaroid personalizada', title: "FOTOS POLAROID'S PERSONALIZADAS", text: 'Um produto versátil para presentear e guardar momentos especiais.' },
  { icon: '/icons/foto-ima-geladeira.svg', iconAlt: 'Ícone de foto ímã de geladeira personalizada', title: 'FOTOS ÍMÃ DE GELADEIRA', text: 'Uma opção criativa para presentes, lembranças e datas especiais.' },
]

export default function ExpansionSection() {
  return (
    <section id="posso-vender" className="bg-white pt-12 pb-0 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 text-center">

        <div>
          <h2 className="reveal font-heading text-[25px] md:text-[30px] font-extrabold text-[#202B40] text-balance">
            Mas afinal, o que eu vou vender?
          </h2>
          <p className="reveal font-sans text-[#535B68] text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-3 text-balance">
            Você vai aprender a produzir diferentes tipos de personalizados, começando por produtos simples e com potencial de venda.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5 w-full">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-3 bg-[#FDF1F2] border border-[#F5D6DC] rounded-2xl p-4 md:p-6"
            >
              <span className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Image src={item.icon} alt={item.iconAlt} width={46} height={46} className="w-11 h-11" />
              </span>
              <p className="font-heading font-bold text-[#202B40] text-xs md:text-sm uppercase tracking-wide">
                {item.title}
              </p>
              <p className="font-sans text-[#535B68] text-xs md:text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="font-sans text-[#535B68] text-base leading-relaxed max-w-lg flex flex-col gap-2 text-balance">
          <p className="font-heading font-bold text-[#202B40]">E tem mais vindo por aí...</p>
          <p>A Isa estará sempre gravando novos produtos e novos conteúdos para você aprender.</p>
          <p>Ou seja: seu catálogo não fica parado no que você aprende hoje.</p>
        </div>

      </div>

      <hr
        aria-hidden="true"
        className="w-[220px] md:w-[280px] h-px border-none bg-[#E8EDF4] mx-auto mt-7 mb-8"
      />
    </section>
  )
}
