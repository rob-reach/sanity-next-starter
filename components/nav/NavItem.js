import Link from 'next/link'

const NavItem = ({ link, text }) => {
    return (
        <li>
            <Link href={link}>
                <a className="mr-4">{text}</a>
            </Link>
        </li>
    )
}

export default NavItem
