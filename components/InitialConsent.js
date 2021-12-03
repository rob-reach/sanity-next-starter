import { useEffect } from 'react'
import TagManager from "react-gtm-module"
import { setInitialConsent } from '../lib/cookiesConsent'

const InitialConsent = function() {
    /**
     * Set Google Tag Manager Arguments
     */
    const GoogleTagManagerArgs = {
        gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    }

    useEffect(() => {
        /**
         * Function to initialize Google Tag Manager
         */
        TagManager.initialize(GoogleTagManagerArgs)

        /**
         * Function to set initial tag manager consent
         */
        setInitialConsent()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return null
}

export default InitialConsent