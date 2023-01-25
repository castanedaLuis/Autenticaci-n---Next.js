import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

function index() {
  return (
    <>
        <Link href={'/'}>
                <button className={styles.buttonSession}>Ir al Home</button>
        </Link>
    </>
  )
}

export default index