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


///////////////////////////////////////////
//// ------ my app - SERVER CONNECTION
//////////////////////////////////////////

// export let serverUrl;
// const serverPort = 3000;  // use the same port of the server
// const serverPath = '/project-promo-code' // place here your project path
// const serverAdress = 'https://piqus.it/';
// const serverLive = `${serverAdress}${serverPath}`;
// const serverLocal = `http://localhost:${serverPort}${serverPath}`


// const  appEnv = process.env.NODE_ENV || 'development';
// const serverUrlbuilder = () => {
//   if(appEnv === 'development' ){
//     serverUrl = serverLocal
//     console.log(serverUrl)
//   }else{
//     serverUrl = serverLive
//     console.log(serverUrl)
//   }
// };
// serverUrlbuilder();






////////////////////////
// // LAYOUT START

// HEAD - metadata setting
export const metadata = {
  title: 'Get your free offer!',
  description: 'Optain your offer subscribing the form!',
}

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
