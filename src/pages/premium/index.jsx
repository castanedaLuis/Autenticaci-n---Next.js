import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useSession, getSession } from "next-auth/react";

export const getServerSideProps = async (context) => {
  //validar sesión
  const session = await getSession(context);

  if (session === null) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false
      },
    }
  }

  return {
    props: { session }
  }
}

function index() {
  const [image, setImage] = useState()
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return null
  }

  if (session == null) {
    return <>
      <h1>Acceso Denegado ❌</h1>
      <p>You must be logged in to view this page.</p>
      <Link href={'/api/auth/Signin'}>
        <button>Login</button>
      </Link>
    </>
  }

  useEffect(() => {
    fetch('/api/premium')
      .then(response => response.json())
      .then(({ data }) => setImage(data))
  }, [])

  return (
    <div className='contenedor'>
      <h1>{`Bienvenido ${session.user?.name}`}</h1>
      <div>
        {
          image === null ? null : (
            <img
              className='img-premium'
              src={image}
              alt={image}
            />
          )
        }
      </div>
      <p>Contenido Secreto</p>
    </div>
  )
}

export default index