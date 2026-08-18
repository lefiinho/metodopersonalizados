import Image from 'next/image'

export default function EmotionalIdentificationSection() {
  return (
    <section className="bg-[#FFF5F5] pt-10 md:pt-14 pb-14 md:pb-20 px-4">
      <div className="max-w-[1000px] mx-auto flex flex-col md:grid md:grid-cols-2 md:items-center md:gap-12">

        {/* Bloco de introdução + Imagem */}
        <div className="order-1 md:order-none md:col-start-1 md:row-start-1 md:row-span-2 w-full md:w-auto flex flex-col justify-center md:justify-start shrink-0">
          <div className="font-sans text-[#202B40] text-sm md:text-base leading-relaxed flex flex-col gap-4 text-center md:text-left max-w-[360px] mx-auto md:mx-0">
            <p>Você quer ter uma renda sua.</p>
            <p>Mas não pode simplesmente largar tudo para trabalhar fora.</p>
            <p className="font-heading font-bold text-[18px] md:text-[20px] leading-snug text-balance">
              E, quando procura uma forma de começar, é isso que passa pela sua cabeça:
            </p>
          </div>
          <Image
            src="/possivel-para-comecar-sem-fundo.webp"
            alt="Mulher refletindo sobre encontrar uma renda possível para começar"
            width={800}
            height={820}
            className="w-full max-w-[390px] md:max-w-[420px] h-auto mt-4"
          />
        </div>

        {/* Título */}
        <h2 className="reveal order-2 md:order-none md:col-start-2 md:row-start-1 mt-5 md:mt-0 font-heading font-extrabold text-[#202B40] text-2xl md:text-3xl leading-snug text-balance text-center md:text-left">
          Você sabe exatamente do que estou falando, não sabe?
        </h2>

        {/* Parágrafos finais */}
        <div className="reveal order-3 md:order-none md:col-start-2 md:row-start-2 mt-5 md:mt-0 font-sans text-[#535B68] text-sm md:text-base leading-relaxed flex flex-col gap-3 text-center md:text-left">
          <p>
            Quer ajudar nas contas, comprar suas coisas sem precisar pedir dinheiro e ter algo que seja seu.
          </p>
          <p>
            Só que, quando procura uma forma de começar, tudo parece complicado, caro ou exige coisas que você
            ainda não tem.
          </p>
          <p>E é por isso que você continua procurando algo que realmente pareça possível.</p>
        </div>

      </div>
    </section>
  )
}
