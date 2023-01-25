import '@/styles/globals.css'
import LoginLogout from '../components/Header/LoginLogout'
import GoHome from '../components/GoHome'
import { SessionProvider as AuthProvider} from "next-auth/react"

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <LoginLogout/>
      <GoHome />
      <Component {...pageProps} />
    </AuthProvider>
  )
}
