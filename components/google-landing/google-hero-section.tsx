import Image from 'next/image'
import { Smartphone, Package, Printer, Gift } from 'lucide-react'

const bullets = [
  { icon: Smartphone, label: 'Personalize pelo celular' },
  { icon: Package, label: 'Produza somente depois do pedido' },
  { icon: Printer, label: 'Imprima perto de casa' },
  { icon: Gift, label: 'Crie produtos para festas, presentes e datas especiais' },
]

export default function GoogleHeroSection() {
  return (
    <section className="bg-white pt-0 pb-10 md:pb-12 px-5">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-4">
        <h1 className="font-heading text-[27px] md:text-[38px] font-extrabold text-[#202B40] leading-[1.14] tracking-[-0.4px] md:tracking-[-0.5px] text-balance max-w-[340px] md:max-w-[700px] mx-auto normal-case">
          Curso de Papelaria Personalizada pelo Celular
        </h1>

        <p className="font-sans text-[#535B68] text-[17px] leading-[1.5] max-w-[340px] md:max-w-[560px] mt-1 mb-1">
          Aprenda a criar e vender Topos de Bolo, Chaveiros Personalizados, Fotos Polaroid e Fotos Ímã de Geladeira por
          encomenda — sem máquina de corte, sem estoque e começando com materiais simples.
        </p>

        {/* Benefícios enfileirados */}
        <ul className="flex flex-col gap-2.5 w-full max-w-[340px] mx-auto items-start" aria-label="Principais benefícios">
          {bullets.map((b) => (
            <li key={b.label} className="flex items-center gap-2">
              <b.icon className="w-4 h-4 text-[#2DB84B] shrink-0" strokeWidth={2} aria-hidden="true" />
              <span className="font-sans text-[#535B68] text-[15px] font-medium text-left leading-snug">{b.label}</span>
            </li>
          ))}
        </ul>

        {/* Mosaico com fotos reais dos produtos */}
        <div className="w-full max-w-md md:max-w-lg mt-2 flex flex-col gap-3">
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
            <Image
              src="/images/produtos-isa/topo-orquideas.webp"
              alt="Topo de bolo personalizado com orquídeas"
              fill
              priority
              fetchPriority="high"
              quality={75}
              sizes="(max-width: 640px) 100vw, 512px"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/produtos-isa/chaveiros-pai.webp"
                alt="Chaveiros personalizados"
                fill
                loading="lazy"
                decoding="async"
                quality={75}
                sizes="(max-width: 640px) 50vw, 250px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/produtos-isa/fotos-polaroid-1.webp"
                alt="Fotos Polaroid personalizadas"
                fill
                loading="lazy"
                decoding="async"
                quality={75}
                sizes="(max-width: 640px) 50vw, 250px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
