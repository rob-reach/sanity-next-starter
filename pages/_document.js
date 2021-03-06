import Document, { Html, Head, Main, NextScript } from 'next/document'
import DefaultGtmConsent from '../components/headScripts/DefaultGtmConsent'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <DefaultGtmConsent />
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
