"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"

const NavLinks = ({link}) => {
    const pathName = usePathname();
  
  return (
    <Link className={`rounded p-1 ${pathName===link.url && "bg-yellow-400 text-white"}`} href={link.url}>
    {link.title}
    </Link>
  )
}

export default NavLinks