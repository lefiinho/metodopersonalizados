import Image from 'next/image'
import { Smartphone, Scissors, Package, CheckCircle2 } from 'lucide-react'

const bullets = [
  { icon: Smartphone, label: 'Personalize pelo celular' },
  { icon: Scissors, label: 'Comece com materiais simples' },
  { icon: Package, label: 'Receba o pedido antes de produzir' },
  { icon: CheckCircle2, label: 'Faça somente o que já foi vendido' },
]

export default function HeroSection() {
  return (
    <section className="bg-white pt-0 pb-10 md:pb-12 px-5">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-4">

        <h1 className="font-heading text-[27px] md:text-[38px] font-extrabold text-[#202B40] leading-[1.14] tracking-[-0.4px] md:tracking-[-0.5px] text-balance max-w-[340px] md:max-w-[700px] mx-auto normal-case">
          Comece hoje a vender personalizados{' '}
          <span className="text-[#C94A64]">sem precisar de impressora, máquina de corte ou estoque</span>, usando apenas celular e tesoura.
        </h1>

        <p className="font-sans text-[#535B68] text-[17px] leading-[1.5] max-w-[340px] md:max-w-[540px] mt-1 mb-1">
          Aprenda a trabalhar por encomenda: divulgue primeiro, receba o pedido, personalize pelo celular, imprima perto de casa e só então produza e entregue.
        </p>

        {/* Benefícios enfileirados */}
        <ul className="flex flex-col gap-2.5 w-full max-w-[310px] mx-auto items-start" aria-label="Principais benefícios">
          {bullets.map((b) => (
            <li key={b.label} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2DB84B] shrink-0" strokeWidth={2} aria-hidden="true" />
              <span className="font-sans text-[#535B68] text-[15px] font-medium text-left leading-snug">{b.label}</span>
            </li>
          ))}
        </ul>

        <div className="w-full max-w-md md:max-w-[500px] mt-2">
          <Image
            src="/hero-topos.webp"
            alt="Produto personalizado feito em casa, pronto para entrega"
            width={520}
            height={520}
            priority
            fetchPriority="high"
            quality={75}
            sizes="(max-width: 640px) 100vw, 520px"
            className="mx-auto rounded-2xl w-full"
          />
        </div>

      </div>
    </section>
  )
}
