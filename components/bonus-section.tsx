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

export default function BonusSection() {
  return (
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
          <span className="text-[#C94A64]"> grátis</span> na sua inscrição hoje.
        </p>

      </div>
    </section>
  )
}
