'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Cake, Baby, GraduationCap, Heart, PartyPopper } from 'lucide-react'

const galleryPhotos = [
  {
    src: '/images/produtos-isa/topo-orquideas.webp',
    alt: 'Topo de bolo personalizado com orquídeas e borboletas',
    width: 1080,
    height: 1339,
  },
  {
    src: '/images/produtos-isa/topo-cerveja.webp',
    alt: 'Topo de bolo personalizado temático de cerveja',
    width: 960,
    height: 1248,
  },
  {
    src: '/images/produtos-isa/chaveiros-pai.webp',
    alt: 'Chaveiros personalizados com foto para o Dia dos Pais',
    width: 1200,
    height: 823,
  },
  {
    src: '/images/produtos-isa/chaveiro-personalizado.webp',
    alt: 'Chaveiro personalizado com foto e mensagem para o pai',
    width: 1200,
    height: 1560,
  },
  {
    src: '/images/produtos-isa/chaveiros-personalizados.webp',
    alt: 'Chaveiro personalizado com foto para o melhor pai do mundo',
    width: 1200,
    height: 1481,
  },
  {
    src: '/images/produtos-isa/fotos-polaroid-1.webp',
    alt: 'Conjunto de fotos estilo polaroid personalizadas',
    width: 1200,
    height: 1426,
  },
  {
    src: '/images/produtos-isa/fotos-polaroid-2.webp',
    alt: 'Conjunto de fotos estilo polaroid personalizadas com caixa temática',
    width: 1080,
    height: 1343,
  },
]

export default function DemandProofSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const hasAutoPlayedRef = useRef(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldLoad) return
    const videoEl = videoRef.current
    if (!videoEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasAutoPlayedRef.current) {
            videoEl.muted = true
            const playPromise = videoEl.play()
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  hasAutoPlayedRef.current = true
                })
                .catch(() => {
                  // Autoplay bloqueado pelo navegador — ignorar
                })
            } else {
              hasAutoPlayedRef.current = true
            }
          }
        } else {
          if (!videoEl.paused) {
            videoEl.pause()
          }
        }
      },
      { threshold: 0.6 }
    )

    observer.observe(videoEl)
    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <section ref={sectionRef} className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 text-center">

        <div className="flex flex-col items-center">
          <h2 className="reveal font-heading text-[25px] md:text-[30px] font-extrabold text-[#202B40] mb-4 text-balance text-center max-w-[360px] leading-[1.18]">
            Mas será que as pessoas realmente compram?
            <br />
            E isso realmente pode virar dinheiro?
          </h2>
          <div className="font-sans text-[#535B68] text-base leading-relaxed flex flex-col items-center gap-4">
            <p className="text-center">Todo dia tem alguém comemorando:</p>
            <ul className="flex flex-col gap-4 w-full max-w-[340px]">
              <li className="grid grid-cols-[32px_1fr] items-center gap-3">
                <span className="flex items-center justify-center">
                  <Cake className="w-5 h-5 text-[#C94A64]" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-left">Aniversários e mesversários</span>
              </li>
              <li className="grid grid-cols-[32px_1fr] items-center gap-3">
                <span className="flex items-center justify-center">
                  <Baby className="w-5 h-5 text-[#202B40]" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-left">Chás de bebê e chá revelação</span>
              </li>
              <li className="grid grid-cols-[32px_1fr] items-center gap-3">
                <span className="flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#C94A64]" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-left">Formaturas</span>
              </li>
              <li className="grid grid-cols-[32px_1fr] items-center gap-3">
                <span className="flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#202B40]" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-left">Casamentos</span>
              </li>
              <li className="grid grid-cols-[32px_1fr] items-start gap-3">
                <span className="flex items-center justify-center h-6">
                  <PartyPopper className="w-5 h-5 text-[#C94A64]" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-left">Dia das mães, dos pais, dos namorados e muito mais</span>
              </li>
            </ul>
            <p className="text-center max-w-[340px]">
              E em cada uma dessas ocasiões existe espaço para produtos personalizados.
            </p>
            <p className="text-center max-w-[340px]">
              Não é só uma ideia bonita no papel.
            </p>
            <p className="font-heading font-bold text-[#202B40] text-center max-w-[340px]">
              Existem pessoas comprando e pessoas faturando com isso.
            </p>
          </div>
        </div>

        <div className="w-full">
          <p className="reveal font-heading font-bold text-[#202B40] text-lg mb-5 text-balance text-center max-w-[340px] mx-auto">
            Veja alguns dos personalizados produzidos pela Isa:
          </p>
          <div className="reveal columns-2 sm:columns-3 gap-2.5 sm:gap-4 w-full [&>*]:mb-2.5 sm:[&>*]:mb-4">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative overflow-hidden rounded-2xl shadow-sm break-inside-avoid"
              >
                <Image
                  src={photo.src || '/placeholder.svg'}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="w-full h-auto block"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="reveal font-sans text-[#535B68] text-base leading-relaxed">
          E aqui está a prova: pedidos que realmente viraram dinheiro.
        </p>

        <div className="reveal bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 max-w-lg mx-auto flex flex-col gap-1.5">
          <p className="font-heading font-extrabold text-[#2DB84B] text-2xl md:text-3xl leading-tight text-balance">
            R$ 600+ em encomendas em apenas 4 dias
          </p>
          <p className="font-sans text-[#535B68] text-sm">
            Entradas reais recebidas pela Isa, criadora do método.
          </p>
        </div>

        {/* Vídeo do extrato com as entradas Pix */}
        <div
          className="relative w-full overflow-hidden rounded-[20px] shadow-lg mx-auto"
          style={{ maxWidth: '340px', maxHeight: '540px' }}
        >
          {shouldLoad ? (
            <video
              ref={videoRef}
              controls={false}
              muted
              loop
              playsInline
              disablePictureInPicture
              controlsList="nodownload noplaybackrate nofullscreen"
              onContextMenu={(event) => event.preventDefault()}
              preload="metadata"
              className="w-full h-full block pointer-events-none"
              style={{ borderRadius: '20px' }}
              aria-label="Vídeo mostrando entradas reais recebidas com pedidos de produtos personalizados."
            >
              <source src="/prova-entradas-bancarias.mp4" type="video/mp4" />
            </video>
          ) : (
            <div
              className="w-full bg-gray-200 animate-pulse"
              style={{ aspectRatio: '9 / 16' }}
              aria-hidden="true"
            />
          )}
        </div>

      </div>
    </section>
  )
}
