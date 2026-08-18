export default function AnnouncementBar() {
  return (
    <div className="sticky top-0 z-50 w-full flex items-center justify-center px-4 py-3 min-h-[52px] bg-[#E05A76]">
      <p className="font-sans text-white text-[13px] md:text-sm font-bold text-center leading-snug text-balance">
        ÚLTIMAS 35 VAGAS NO VALOR PROMOCIONAL — DE <span className="line-through">R$97</span> POR{' '}
        <span className="font-extrabold">R$29</span>
      </p>
    </div>
  )
}
