// import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import InitialConsent from '../components/InitialConsent'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <InitialConsent />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp