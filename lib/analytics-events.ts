declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/**
 * Pushes a single "begin_checkout" event to the GTM dataLayer.
 * Used exclusively by the /curso-papelaria-personalizada route CTAs.
 */
export function pushBeginCheckoutEvent() {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'begin_checkout',
    currency: 'BRL',
    value: 29,
    item_name: 'Método Personalizados por Encomenda',
    item_id: 'metodo-personalizados-por-encomenda',
  })
}
