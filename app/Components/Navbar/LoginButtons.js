import Link from "next/link";

export default function LoginButtons() {
  return (
    <div >
      <Link href='/login' className="btn btn-sm btn-secondary me-2">Log-In</Link>
      <Link href='/signup' className="btn btn-sm btn-primary">Crea Una Promo Gratis</Link>
  </div>
  )
}
