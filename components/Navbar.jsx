"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import nextLogo from "@/public/next.svg";

const Navbar = () => {
  const pathName = usePathname();
  const links = [
    { id: 1, href: "/", label: "Home" },
    { id: 2, href: "/about", label: "About" },
    { id: 3, href: "/contact", label: "Contact" },
  ];

  return (
    <nav className='bg-blue-500 p-4'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='text-white text-2xl font-semibold'>
            <Image src={nextLogo} alt='logo' width={128} height={77} />
          </div>
          <div className='space-x-4'>
            {links.map((link) => (
              <Link key={link.id} href={link.href} legacyBehavior>
                <a
                  className={`text-white hover:text-gray-300 transition duration-300 ${pathName === link.href ? "border-b-2 text-gray-300 border-b-gray-300" : ""}`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
