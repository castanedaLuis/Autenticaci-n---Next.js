import React from 'react'
import  { useSession, getSession } from "next-auth/react";

export const getServerSideProps = async (context) => {
    //validar sesión
    const session = await getSession(context);
  
    if(session === null){
      return {
        redirect : {
          destination : '/api/auth/signin',
          permanent : false
        },
      }
    }
  
    return {
      props: { session }
    }
  }
  
function index() {
  const {data: session, status} = useSession();

    if (status === 'loading') {
      return null
    }
  
    if(session == null){
      return <>
        <h1>Premium</h1>
        <p>You must be logged in to view this page.</p>
      </>
    }
    return (
      <>
        <h1>Premium Page</h1>
        <p>Contenido Secreto</p>
      </>
    )
}

export default index