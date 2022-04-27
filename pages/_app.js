/* eslint-disable */
import 'styles/global.css'
import Head from 'next/head'
import Layout from 'layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.title || 'EMM'}</title>
        <meta name="description" content={pageProps.description || 'EMM'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {pageProps.useLayout ? (
        Layout({ children: <Component {...pageProps} /> })
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
