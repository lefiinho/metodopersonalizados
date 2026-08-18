import Image from 'next/image'

const modules = [
  {
    number: '01',
    title: 'Comece com o que você tem',
    subtitle: 'Materiais realmente necessários para começar e o que pode esperar.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-celular-VI6uoloQZZSm3PiMoOEZwDtyLdkAki.webp',
    imageAlt: 'Materiais simples para começar a personalizar pelo celular',
  },
  {
    number: '02',
    title: 'Topos de Bolos por Encomenda',
    subtitle: 'Como criar, personalizar e montar.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02-uma-folha-j08z45AqtZYeHrWCShDcmAduFUPQoT.webp',
    imageAlt: 'Montagem de Topo de Bolo personalizado',
  },
  {
    number: '03',
    title: 'Chaveiros Personalizados',
    subtitle: 'Produção simples e barata para ampliar o catálogo.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03-temas-dLlf6REu12FbGNGIaoppmJbgLfv6G6.webp',
    imageAlt: 'Chaveiros personalizados prontos para entrega',
  },
  {
    number: '04',
    title: "Fotos Polaroid's Personalizadas",
    subtitle: 'Um produto de alta procura o ano inteiro.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04-venda-antes-kCd9Wut8TekUODIZUa4N6fsozM5UPy.webp',
    imageAlt: "Fotos Polaroid's personalizadas para encomenda",
  },
  {
    number: '05',
    title: 'Divulgação e Vendas Recorrentes',
    subtitle: 'Como divulgar, atender e vender de novo para as mesmas clientes.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/05-vendas-recorrentes-b2YxpTwONtDJkI4AAeqobYf2zVJtCd.webp',
    imageAlt: 'Divulgação e atendimento para vendas recorrentes',
  },
  {
    number: '06',
    title: 'Biblioteca de Arquivos',
    subtitle: 'Modelos e artes organizados para personalizar sem travar.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/06-biblioteca-OLXMdIIlIS3Q6HPYQog2N3PdsQcKr6.webp',
    imageAlt: 'Biblioteca digital de arquivos e modelos',
  },
]

export default function ProductModulesSection() {
  return (
    <section id="o-que-voce-recebe" className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-3">
          <h2 className="reveal font-heading text-2xl md:text-3xl font-extrabold text-[#202B40] mb-3 text-balance">
            O que eu vou aprender?
          </h2>
          <p className="font-sans text-[#535B68] text-sm md:text-base max-w-2xl mx-auto">
            Um caminho para criar, personalizar e começar a atender encomendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {modules.map((mod, i) => (
            <div
              key={mod.title}
              className="reveal flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-4"
              data-delay={i * 60}
            >
              {/* Imagem */}
              <div className="relative shrink-0 w-24 h-24 md:w-[104px] md:h-[104px] rounded-xl overflow-hidden">
                <Image
                  src={mod.image}
                  alt={mod.imageAlt}
                  fill
                  loading="lazy"
                  decoding="async"
                  quality={75}
                  sizes="104px"
                  className="object-cover object-center"
                />
              </div>

              {/* Texto */}
              <div className="flex flex-col gap-1.5 min-w-0">
                <span className="inline-flex items-center justify-center self-start bg-[#E05A76] text-white font-heading font-bold text-xs w-7 h-7 rounded-full">
                  {mod.number}
                </span>
                <h3 className="font-heading font-bold text-[#202B40] text-sm md:text-base leading-snug text-balance">
                  {mod.title}
                </h3>
                <p className="font-sans text-[#535B68] text-xs md:text-sm leading-relaxed">
                  {mod.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
