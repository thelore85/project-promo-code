import Link from "next/link";

export default function LoginButtons() {
  return (
    <div >
      <Link href='/login' className="btn btn-sm btn-light border-primary text-primary me-2">Log-In</Link>
      <Link href='/signup' className="btn btn-sm btn-primary">Start Now</Link>
  </div>
  )
}
