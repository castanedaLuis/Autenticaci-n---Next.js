import { signIn, signOut, useSession } from 'next-auth/react'
//import { Button } from '@ui/Button'
import { useTranslation } from 'next-i18next';
import GoHome from '../GoHome'
import styles from '@/styles/Home.module.css'


function LoginLogout() {
  const { data: session, status } = useSession()
  const { t } = useTranslation(['common'])

  // fix flash unauthenticated flashback
  if (status === 'loading') {
    return null
  }
  if (session == null) {
    return (
      <div className={styles.contenedorHeader}>
        <button className={styles.buttonSession} onClick={() => signIn()}>{t('SignIn')}</button>
      </div>
    )
  }
  return (
    <div className={styles.contenedorHeader}>
      <div className={styles.contenedorUser}>
        <span className={styles.spanNameUser}>{session.user?.name}</span>
        <button className={styles.buttonSession} onClick={() => signOut()} >  {t('SignOut')} </button>
      </div>
      <div>
        <GoHome />
      </div>
    </div>
  )
}

export default LoginLogout