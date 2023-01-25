import React from 'react'
import Link from 'next/link'

function index() {
  return (
    <>
        <Link href={'/'}>
                <button>Ir al Home</button>
        </Link>
    </>
  )
}

export default index