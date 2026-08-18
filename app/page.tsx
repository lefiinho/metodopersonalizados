import dynamic from 'next/dynamic'
import Image from 'next/image'
import AnnouncementBar from '@/components/announcement-bar'
import HeroSection from '@/components/hero-section'
import ScrollReveal from '@/components/scroll-reveal'

// Lazy-load every below-fold section
const StudentProofSection   = dynamic(() => import('@/components/student-proof-section'))
const EmotionalIdentificationSection = dynamic(() => import('@/components/emotional-identification-section'))
const BeliefBreakSection    = dynamic(() => import('@/components/belief-break-section'))
const HowItWorksSection     = dynamic(() => import('@/components/how-it-works-section'))
const WhatsAppDemoSection   = dynamic(() => import('@/components/whatsapp-demo-section'))
const DemandProofSection    = dynamic(() => import('@/components/demand-proof-section'))
const ExpansionSection      = dynamic(() => import('@/components/expansion-section'))
const ProductModulesSection = dynamic(() => import('@/components/product-modules-section'))
const MaterialsSection      = dynamic(() => import('@/components/materials-section'))
const PainPointsSection     = dynamic(() => import('@/components/pain-points-section'))
const AboutAuthorSection    = dynamic(() => import('@/components/about-author-section'))
const SocialProofSection    = dynamic(() => import('@/components/social-proof-section'))
const StackingSection       = dynamic(() => import('@/components/stacking-section'))
const BonusSection          = dynamic(() => import('@/components/bonus-section'))
const PricingSection        = dynamic(() => import('@/components/pricing-section'))
const PostPurchaseSection   = dynamic(() => import('@/components/post-purchase-section'))
const AboutFAQFooterSection = dynamic(() => import('@/components/about-section'))

export default function Page() {
  return (
    <main>
      <ScrollReveal />
      <AnnouncementBar />

      {/* Logo Header */}
      <header className="bg-white pt-[26px] pb-[14px] px-5 flex justify-center">
        <Image
          src="/logo-metodo-personalizados.webp"
          alt="Método Personalizados por Encomenda"
          width={1277}
          height={555}
          priority
          className="w-[210px] sm:w-[240px] h-auto"
        />
      </header>

      {/* Seção 1 — Hero */}
      <HeroSection />

      {/* Seção 2 — Prints de alunas */}
      <StudentProofSection />

      {/* Seção 2.4 — Identificação Emocional */}
      <EmotionalIdentificationSection />

      {/* Seção 2.5 — Quebra de Crença */}
      <BeliefBreakSection />

      {/* Seção 3 — Mecanismo (6 passos) + CTA 1 */}
      <HowItWorksSection />

      {/* Seção 7 — Demonstração real (WhatsApp + matemática da encomenda) */}
      <WhatsAppDemoSection />

      {/* Seção 8 — Demanda + Prova Real */}
      <DemandProofSection />

      {/* Seção 9 — Expansão ("Mas eu posso vender o quê?") */}
      <ExpansionSection />

      {/* Seção 11 — Materiais */}
      <MaterialsSection />

      {/* Seção 10 — Método (módulos) */}
      <ProductModulesSection />

      {/* Seção 12 — Quebra de Objeções */}
      <PainPointsSection />

      {/* Seção 8 — Isa Dias */}
      <AboutAuthorSection />

      {/* Seção 13 — Prova Social (carrossel) */}
      <SocialProofSection />

      {/* Seção 15 — Empilhamento */}
      <StackingSection />

      {/* Seção 16 — Bônus */}
      <BonusSection />

      {/* Seção 17 — Oferta + CTA 2 */}
      <PricingSection />

      {/* Seção 18 — Pós-compra */}
      <PostPurchaseSection />

      {/* Seção 19–23 — Garantia, FAQ, Fechamento, CTA 3, Rodapé */}
      <AboutFAQFooterSection />
    </main>
  )
}
