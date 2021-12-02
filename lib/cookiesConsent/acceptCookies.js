import { COOKIES_ACCEPTED_NAME } from "./cookiesConsentConstants"
import setCookie from "./setCookie"

const acceptCookies = function() {

    // GTAG Consent update
    gtag('consent', 'update', {
        'analytics_storage': 'granted'
    })

    // Set cookie
    setCookie(COOKIES_ACCEPTED_NAME, 'accepted', 90)
}

export default acceptCookies