import { COOKIES_ACCEPTED_NAME } from "./cookiesConsentConstants"
import getCookie from "./getCookie"

const setInitialConsent = function() {

    const cookiesAccepted = getCookie(COOKIES_ACCEPTED_NAME);

    // Escape hatch if no cookie is set
    if(cookiesAccepted == '') return;

    // GTAG Consent update
    if(cookiesAccepted == 'accepted') {
        gtag('consent', 'update', {
            'analytics_storage': 'granted'
        })
        return
    }

    if(cookiesAccepted == 'rejected') {
        gtag('consent', 'update', {
            'analytics_storage': 'denied'
        })
        return
    }
}

export default setInitialConsent