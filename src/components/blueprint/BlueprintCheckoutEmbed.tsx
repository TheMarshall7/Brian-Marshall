import { K2C_CHECKOUT_URL } from '../../constants/shop'

type Props = {
  className?: string
}

export default function BlueprintCheckoutEmbed({ className = '' }: Props) {
  if (!K2C_CHECKOUT_URL) return null

  return (
    <div className={`blueprint-checkout-embed ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
        <iframe
          src={K2C_CHECKOUT_URL}
          title="Knowledge to Cash Blueprint checkout"
          className="blueprint-checkout-embed__frame w-full border-0"
          loading="lazy"
          allow="payment *; clipboard-write"
        />
      </div>
      <p className="mt-4 text-center text-xs text-neutral-500">
        Checkout powered by{' '}
        <a
          href={K2C_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 underline-offset-2 hover:text-white hover:underline"
        >
          FastPayDirect
        </a>
        {' '}
        (opens in a new tab if the form does not load above)
      </p>
    </div>
  )
}
