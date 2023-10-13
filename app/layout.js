// CSS import
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

// font awesome setting and import 
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// google font import
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


// HEAD - metadata setting
export const metadata = {
  title: 'PIQUS LEAD - Spread your promo to the world',
  description: 'Create your promotion landing page and generate discount code!',
  icons: { icon: "/img/favicon.ico", shortcut: "/img/favicon.ico", apple: "/img/favicon.ico", other: { rel: "apple-touch-icon-precomposed", url: "/img/favicon.ico", }, },
};

// layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
