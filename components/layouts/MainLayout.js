import CookiesBanner from "../CookiesBanner"
import Nav from "../nav"

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            {/* cookies */}
            <CookiesBanner />

            {/* nav bar */}
            <Nav />

            {/* layout-content */}
            <div className="flex-grow py-4">
                {children}
            </div>

            {/* footer */}
            <footer className="flex items-center justify-center w-full h-24 border-t">
                Reach Marketing
            </footer>
        </div>
    )
}

export default MainLayout
