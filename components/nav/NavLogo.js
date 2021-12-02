import Link from 'next/link'

const NavLogo = () => {
    return (
        <Link href="/">
            <a className="text-4xl text-blue-100 font-bold hover:opacity-50 transition-all duration-300">Logo</a>
        </Link>
    )
}

export default NavLogo
