import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function DashboardButton() {
  return (
    <>
    <LogoutButton />

    <div className="btn btn-sm btn-primary">
      <Link href='/dashboard/users'>Dashboard</Link>
    </div>
    </>
  )
}
