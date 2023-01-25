import { signIn, signOut, useSession } from 'next-auth/react'
//import { Button } from '@ui/Button'
import { useTranslation } from 'next-i18next'


function LoginLogout() {
    const { data: session, status } = useSession()
    const { t } = useTranslation(['common'])
  
    // fix flash unauthenticated flashback
    if (status === 'loading') {
      return null
    }
    if (session == null) {
      return <button onClick={() => signIn()}>{t('SignIn')}</button>
    }
    return (
      <>
        <span>{session.user?.name}</span>
        <button onClick={() => signOut()} >  {t('SignOut')} </button>
      </>
    )
  }

  export default LoginLogout