export default function WhatsAppDemoSection() {
  return (
    <section className="bg-[#FDF1F2] py-12 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8 text-center">

        {/* Matemática de uma encomenda */}
        <div className="reveal w-full flex flex-col gap-5">
          <h3 className="font-heading font-bold text-[#202B40] text-lg text-balance">
            A matemática de uma encomenda.
          </h3>

          <div className="font-sans text-[#535B68] text-sm md:text-base leading-relaxed flex flex-col gap-2">
            <p>E se você conseguisse fazer uma renda extra em casa com apenas algumas encomendas por semana?</p>
            <p>Não parece muito, mas veja um exemplo:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl px-5 py-6 border border-gray-100 shadow-sm flex flex-col items-center gap-1">
              <p className="font-heading font-extrabold text-[#202B40] text-xl md:text-2xl leading-tight text-center text-balance">
                5 topos/semana → R$150
              </p>
            </div>
            <div className="bg-white rounded-2xl px-5 py-6 border border-[#E9A6B4] shadow-sm flex flex-col items-center gap-1">
              <p className="font-heading font-extrabold text-[#C94A64] text-xl md:text-2xl leading-tight text-center text-balance">
                20 topos/mês → R$600 de faturamento
              </p>
            </div>
          </div>

          <p className="font-sans text-[#535B68] text-sm md:text-base leading-relaxed">
            Ou seja: você não precisa de centenas de clientes. Precisa aprender a fazer produtos que as pessoas realmente querem comprar.
          </p>

          <div className="flex justify-center">
            <span className="bg-white border border-[#F5D6DC] text-[#C94A64] font-sans text-sm font-semibold rounded-full px-4 py-2.5 text-center text-balance">
              E sua primeira encomenda pode sair nos primeiros dias.
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
