import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth bg-nightfall text-ghost">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <Script strategy="afterInteractive" id="tailwindcss-darkmode">
          {`
              // On page load or when changing themes, best to add inline in head to avoid FOUC
              if (localStorage.theme === 'dark' || (!('mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.setAttribute('data-theme', 'dark')
              } else {
                document.documentElement.removeAttribute('data-theme');
              }
            `}
        </Script>
      </Head>
      <body className=" text-ghost">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
