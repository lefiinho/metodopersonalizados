import type { Metadata } from 'next'
import Image from 'next/image'
import AnnouncementBar from '@/components/announcement-bar'
import ScrollReveal from '@/components/scroll-reveal'
import GoogleHeroSection from '@/components/google-landing/google-hero-section'
import GoogleProductsSection from '@/components/google-landing/google-products-section'
import GoogleComparisonSection from '@/components/google-landing/google-comparison-section'
import HowItWorksSection from '@/components/how-it-works-section'
import GoogleMaterialsSection from '@/components/google-landing/google-materials-section'
import GoogleDemandSection from '@/components/google-landing/google-demand-section'
import GoogleMethodSection from '@/components/google-landing/google-method-section'
import GoogleStudentPrintsSection from '@/components/google-landing/google-student-prints-section'
import AboutAuthorSection from '@/components/about-author-section'
import SocialProofSection from '@/components/social-proof-section'
import GoogleObjectionsSection from '@/components/google-landing/google-objections-section'
import GoogleOfferSection from '@/components/google-landing/google-offer-section'
import PostPurchaseSection from '@/components/post-purchase-section'
import GoogleGuaranteeFaqClosingSection from '@/components/google-landing/google-guarantee-faq-closing-section'

export const metadata: Metadata = {
  title: 'Curso de Papelaria Personalizada pelo Celular | Método Personalizados por Encomenda™',
  description:
    'Aprenda Papelaria Personalizada pelo celular: Topos de Bolo, Chaveiros Personalizados, Fotos Polaroid e Fotos Ímã de Geladeira por encomenda, sem máquina de corte e sem estoque.',
}

export default function CursoPapelariaPersonalizadaPage() {
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

      {/* Hero */}
      <GoogleHeroSection />

      {/* Produtos que a aluna aprende a criar */}
      <GoogleProductsSection />

      {/* Comparação: jeito antigo x método */}
      <GoogleComparisonSection />

      {/* Método por encomenda */}
      <div id="metodo" className="scroll-mt-20 md:scroll-mt-24">
        <HowItWorksSection />
      </div>

      {/* Materiais para começar */}
      <GoogleMaterialsSection />

      {/* Demanda, ocasiões e galeria real */}
      <GoogleDemandSection />

      {/* Conteúdo do método */}
      <GoogleMethodSection />

      {/* Prints reais de alunas */}
      <GoogleStudentPrintsSection />

      {/* Autoridade da Isa */}
      <AboutAuthorSection />

      {/* Histórias de alunas */}
      <SocialProofSection />

      {/* Objeções práticas */}
      <GoogleObjectionsSection />

      {/* Oferta completa + primeiro CTA */}
      <GoogleOfferSection />

      {/* O que acontece após a compra */}
      <PostPurchaseSection />

      {/* Garantia, FAQ final, fechamento, segundo CTA e rodapé */}
      <GoogleGuaranteeFaqClosingSection />
    </main>
  )
}
