import { acceptCookies, getCookie } from "../lib/cookiesConsent"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { COOKIES_ACCEPTED_NAME } from "../lib/cookiesConsent/cookiesConsentConstants"
import Link from 'next/link'
import { useRouter } from "next/router"

const CookiesBanner = () => {

    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const cookiesAccepted = getCookie(COOKIES_ACCEPTED_NAME);
        switch (cookiesAccepted) {
            case "accepted":
                setIsVisible(false)
                break;
            case "":
                setIsVisible(true)
                break;
            default:
                break;
        }
    }, [])

    const variants = {
        hidden: { opacity: 0, y: -25 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -25 }
    }

    const handleAccept = () => {

        acceptCookies()
        setIsVisible(false)
    }

    const router = useRouter()

    return (
        <AnimatePresence>
            {(isVisible && router.pathname != '/privacy-cookies-policy') && (
                <motion.div
                    className="fixed flex justify-center pt-10 top-0 left-0 right-0 h-screen items-start bg-grey-300 bg-opacity-75"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    transition={{ type: "tween" }}
                >
                    <div className="container max-w-[800px] bg-lynx rounded box-shadow-md p-4">
                        <p>This website uses cookies to so we can understand how you use this website and make improvements. For furthe information please read our <Link href="/privacy-cookies-policy/"><a>privacy and cookies policy</a></Link>.</p>
                        <div className="flex mt-4">
                            <button onClick={handleAccept} className="mr-2">Accept and proceed</button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CookiesBanner
