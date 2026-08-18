export const CHECKOUT_BASE_URL = 'https://payfast.greenn.com.br/redirect/308118'

const ALLOWED_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
] as const

/**
 * Builds the checkout URL for the Google Ads landing page, forwarding
 * any attribution params present on the current page URL (UTMs, gclid,
 * gbraid, wbraid, fbclid) without duplicating them.
 *
 * Falls back to the bare checkout URL when no attribution params exist
 * or when called outside the browser (e.g. during SSR).
 */
export function buildCheckoutUrl(): string {
  if (typeof window === 'undefined') {
    return CHECKOUT_BASE_URL
  }

  const currentParams: URLSearchParams = new URLSearchParams(window.location.search)
  const forwardedParams: URLSearchParams = new URLSearchParams()

  for (const param of ALLOWED_PARAMS) {
    const value = currentParams.get(param)
    if (value) {
      forwardedParams.set(param, value)
    }
  }

  const query = forwardedParams.toString()
  return query ? `${CHECKOUT_BASE_URL}?${query}` : CHECKOUT_BASE_URL
}
