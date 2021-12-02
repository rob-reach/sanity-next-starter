import NavItem from "./NavItem"

const NavItemList = ({ navItems }) => {
    return (
        <ul className="flex">
            {navItems &&
                navItems.map( (item, i) => <NavItem key={i} text={item.text} link={item.link} />)
            }
        </ul>
    )
}

export default NavItemList
