import NavItemList from './NavItemList'
import NavLogo from './NavLogo'

const navItems = [
    {
        link: '/',
        text: 'Home'
    },
    {
        link: '/posts',
        text: 'Posts'
    },
    {
        link: '/privacy-cookies-policy/',
        text: 'Privacy & Cookies Policy'
    },
]

const Nav = () => {
    return (
        <nav className="bg-grey-100 shadow-md">
            <div className="container mx-auto py-4 flex items-center justify-between">
                <NavLogo />
                <NavItemList navItems={navItems} />
            </div>
        </nav>
    )
}

export default Nav
