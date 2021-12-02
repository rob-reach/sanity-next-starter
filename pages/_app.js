// import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { initialConsent } from '../lib/cookiesConsent'

function MyApp({ Component, pageProps }) {

  initialConsent()
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp