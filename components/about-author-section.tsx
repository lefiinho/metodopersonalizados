export default function AboutAuthorSection() {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-8">
          <h2 className="reveal font-heading text-2xl md:text-3xl font-extrabold text-[#202B40] text-balance">
            Quem criou o Método Personalizados por Encomenda™
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">

          {/* Foto */}
          <div className="reveal shrink-0 mx-auto md:mx-0 mb-5 md:mb-0 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%20isa%20sem%20fundo-bq2KnvzZSIxBAaTR3yTG1AsibSkTZ8.png"
              alt="Isa Dias, criadora do Método Personalizados por Encomenda"
              style={{
                width: 'clamp(230px, 30vw, 320px)',
                maxHeight: '440px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>

          {/* Texto */}
          <div className="reveal flex flex-col gap-4 bg-[#FDF1F2] border border-[#F5D6DC] rounded-2xl p-6 md:p-7">
            <p className="font-heading font-bold text-[#202B40] text-xl">Eu sou Isa Dias.</p>

            <div className="font-sans text-[#535B68] text-sm md:text-base leading-relaxed flex flex-col gap-3">
              <p>
                Comecei trabalhar com personalizados na pandemia, quando tudo parou, precisei de uma renda que pudesse construir de dentro de casa.
              </p>

              <p>Hoje, são:</p>

              <p>
                <strong className="text-[#C94A64] font-semibold">+6 anos</strong> trabalhando com personalizados
              </p>

              <p>
                <strong className="text-[#C94A64] font-semibold">+5.000 encomendas</strong> realizadas
              </p>

              <p>
                <strong className="text-[#C94A64] font-semibold">+700 alunas</strong> ensinadas
              </p>

              <p>
                E foi toda essa experiência prática que transformei no Método Personalizados por Encomenda™.
              </p>

              <p>Não é um método criado com vídeos da internet.</p>

              <p>É o que eu aprendi fazendo e organizei para você começar de um jeito simples.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
