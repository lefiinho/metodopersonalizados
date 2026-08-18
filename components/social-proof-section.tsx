'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Débora Antunes',
    location: 'Rio de Janeiro, RJ',
    tag: 'PERDEU O MEDO DE ERRAR',
    quote:
      'Eu sempre achei que não levava jeito pra isso 😂. Mas fui fazendo junto e consegui. Agora quero fazer outros.',
    facePhoto: '/depoimentos/deboraperfil.webp',
    productPhoto: '/depoimentos/deboratopo.webp',
  },
  {
    name: 'Sandra',
    location: 'Cariacica, ES',
    tag: 'CONSEGUIU FAZER A PRIMEIRA PEÇA',
    quote:
      'Eu tava com medo de ficar feio kkk. Quando terminei o primeiro e vi que deu certo, fiquei muito feliz.',
    facePhoto: '/depoimentos/sandraperfil.webp',
    productPhoto: '/depoimentos/sandratopo.webp',
  },
  {
    name: 'Ana Gomes',
    location: 'Avaré, SP',
    tag: 'PAROU DE SE SENTIR PERDIDA',
    quote:
      'Eu já tinha visto vários vídeos, mas continuava perdida. Agora aqui com a Isa está tudo muito organizado e já sei por onde começar.',
    facePhoto: '/depoimentos/anaperfil.webp',
    productPhoto: '/depoimentos/anatopo.webp',
  },
  {
    name: 'Cátia',
    location: 'Patos, PB',
    tag: 'DESCOBRIU QUE PODIA COMEÇAR PEQUENO',
    quote:
      'Eu achava que precisava comprar um monte de coisa antes de fazer. Ainda bem que não comprei 😂. Primeiro vou aprender e fazer alguns.',
    facePhoto: '/depoimentos/catiaperfil.webp',
    productPhoto: '/depoimentos/catiatopo.webp',
  },
  {
    name: 'Joana N.',
    location: 'Belo Horizonte, MG',
    tag: 'GANHOU CONFIANÇA PARA OFERECER',
    quote:
      'No começo eu só queria aprender. Depois que fiz o primeiro, já comecei a pensar em quantas vendas eu conseguiria fazer no mês 🤣',
    facePhoto: '/depoimentos/joanaperfil.webp',
    productPhoto: '/depoimentos/joanatopo.webp',
  },
  {
    name: 'Cintia',
    location: 'Teresina, PI',
    tag: 'VIU QUE ERA MAIS SIMPLES DO QUE IMAGINAVA',
    quote:
      'Fiquei com medo de comprar e não conseguir acompanhar. Mas comecei e vi que é bem mais simples do que eu imaginava, recomendo muito a Isa!',
    facePhoto: '/depoimentos/cintiaperfil.webp',
    productPhoto: '/depoimentos/cintiatopo.webp',
  },
]

export default function SocialProofSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hasEnteredView, setHasEnteredView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const pausedRef = useRef(false)
  const touchStartXRef = useRef<number | null>(null)
  const reducedMotion = useRef(false)

  // Check prefers-reduced-motion once
  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % testimonials.length) + testimonials.length) % testimonials.length)
  }, [])

  const startTimer = useCallback(() => {
    if (reducedMotion.current) return
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }
    }, 7000)
  }, [])

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const pause = useCallback(() => {
    pausedRef.current = true
  }, [])

  const resumeAfterDelay = useCallback(() => {
    setTimeout(() => {
      pausedRef.current = false
    }, 4000)
  }, [])

  // IntersectionObserver — only autoplay when visible
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          pausedRef.current = false
          startTimer()
          setHasEnteredView(true)
        } else {
          pausedRef.current = true
          stopTimer()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      stopTimer()
    }
  }, [startTimer, stopTimer])

  // Touch swipe — horizontal only, never scrolls the page
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX
    pause()
  }, [pause])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartXRef.current
    touchStartXRef.current = null
    if (Math.abs(delta) > 40) {
      goTo(delta < 0 ? activeIndex + 1 : activeIndex - 1)
    }
    resumeAfterDelay()
  }, [activeIndex, goTo, resumeAfterDelay])

  const handlePrev = useCallback(() => {
    pause()
    goTo(activeIndex - 1)
    resumeAfterDelay()
  }, [activeIndex, goTo, pause, resumeAfterDelay])

  const handleNext = useCallback(() => {
    pause()
    goTo(activeIndex + 1)
    resumeAfterDelay()
  }, [activeIndex, goTo, pause, resumeAfterDelay])

  const t = testimonials[activeIndex]

  return (
    <section ref={sectionRef} className="bg-white py-14 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">

        {/* Heading */}
        <div className="text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#202B40] mb-2 text-balance">
            Histórias de quem começou do zero.
          </h2>
        </div>

        {/* Carrossel */}
        <div className="relative w-full max-w-[680px]">

          {/* Seta esquerda */}
          <button
            onClick={handlePrev}
            aria-label="Depoimento anterior"
            className="hidden md:flex absolute left-0 -translate-x-full top-1/2 -translate-y-1/2 pr-3 z-10 w-10 h-10 items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Seta direita */}
          <button
            onClick={handleNext}
            aria-label="Próximo depoimento"
            className="hidden md:flex absolute right-0 translate-x-full top-1/2 -translate-y-1/2 pl-3 z-10 w-10 h-10 items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Viewport — overflow hidden, altura estável */}
          <div
            className="overflow-hidden rounded-2xl"
            onMouseEnter={pause}
            onMouseLeave={resumeAfterDelay}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Trilho */}
            <div
              className="flex"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                transition: 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              aria-live="polite"
              aria-atomic="true"
            >
              {testimonials.map((item, i) => (
                <div
                  key={item.name}
                  className="min-w-full"
                  aria-hidden={i !== activeIndex}
                >
                  {/* Card — layout em duas colunas no desktop, coluna única no mobile */}
                  <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden p-5 flex flex-col md:flex-row gap-5">

                    {/* Foto vertical 4:5 da aluna com o Topo — única imagem, responsiva */}
                    <div className="shrink-0 w-full md:w-[270px] flex justify-center">
                      <div
                        className="relative w-full overflow-hidden rounded-2xl"
                        style={{
                          maxWidth: '360px',
                          aspectRatio: '4 / 5',
                        }}
                      >
                        <Image
                          src={item.productPhoto}
                          alt={`${item.name} segurando seu Topo de Bolo`}
                          fill
                          className="object-cover"
                          style={{ objectPosition: 'top center' }}
                          loading="lazy"
                          sizes="(max-width: 767px) 360px, 270px"
                        />
                      </div>
                    </div>

                    {/* Direita — tag, quote, perfil */}
                    <div className="flex flex-col gap-4 justify-between flex-1 min-w-0">

                      <div className="flex flex-col gap-3">
                        {/* Tag */}
                        <span className="inline-block self-start bg-[#FDF1F2] text-[#C94A64] font-sans font-bold text-[10px] uppercase tracking-widest rounded-full px-3 py-1">
                          {item.tag}
                        </span>

                        <blockquote className="font-sans text-[#535B68] text-sm leading-relaxed">
                          &ldquo;{item.quote}&rdquo;
                        </blockquote>
                      </div>

                      {/* Perfil */}
                      <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                        <div
                          className="relative shrink-0 rounded-full overflow-hidden"
                          style={{ width: '44px', height: '44px' }}
                        >
                          <Image
                            src={item.facePhoto}
                            alt={`Foto de perfil de ${item.name}`}
                            fill
                            className="object-cover object-center"
                            loading="lazy"
                            sizes="44px"
                          />
                        </div>
                        <div>
                          <p className="font-heading font-bold text-[#202B40] text-sm leading-tight">{item.name}</p>
                          <p className="font-sans text-[#535B68] text-xs">{item.location}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dica de swipe — apenas mobile */}
        <div className="md:hidden flex items-center gap-2 text-[#E05A76]" aria-hidden="true">
          <svg className={`w-3.5 h-3.5 swipe-hint-arrow-left ${hasEnteredView ? 'swipe-hint-play' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-sans text-xs">Arraste para o lado para ver mais histórias</span>
          <svg className={`w-3.5 h-3.5 swipe-hint-arrow-right ${hasEnteredView ? 'swipe-hint-play' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Indicadores */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Navegar entre depoimentos">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Depoimento de ${item.name}`}
              onClick={() => { pause(); goTo(i); resumeAfterDelay() }}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-5 h-2 bg-[#E05A76]'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
