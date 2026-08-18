import Image from 'next/image'

const realPrints = [
  { src: '/depoimentos/print-stefany.jpeg', alt: 'Print de conversa: A Stefany ganhou R$ 1.500 reais com apenas uma encomenda' },
  { src: '/depoimentos/print-luana.jpeg', alt: 'Print de conversa: A Luana já faturou mais de R$ 3.000 no mês' },
  { src: '/depoimentos/print-janaina.jpeg', alt: 'Print de conversa: E a Janaína que vendeu mais de R$ 600 reais em uma semana' },
]

export default function GoogleStudentPrintsSection() {
  return (
    <section className="bg-white pt-12 pb-10 md:pb-14 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">

        <h2 className="reveal font-heading text-[25px] md:text-[30px] font-extrabold text-[#202B40] text-balance text-center max-w-2xl mx-auto">
          Alunas que começaram sem experiência já estão colocando em prática.
        </h2>

        {/* Prints reais de conversas de alunas */}
        <div className="reveal flex flex-col items-center px-5">
          {realPrints.map((print, i) => (
            <div
              key={print.src}
              className={`relative w-full max-w-[360px] md:max-w-[420px] rounded-2xl shadow-md overflow-hidden bg-white ${i < realPrints.length - 1 ? 'mb-5' : 'mb-0'}`}
            >
              <Image
                src={print.src}
                alt={print.alt}
                width={1024}
                height={1400}
                className="w-full h-auto object-contain block"
                sizes="(max-width: 767px) 360px, 420px"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
