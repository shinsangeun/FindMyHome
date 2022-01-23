import Document, { Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                <script
                    type="text/javascript"
                    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ed33b6ba9192470e747c49bf8a6f0230"/>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument