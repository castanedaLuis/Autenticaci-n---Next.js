import random from 'lodash/random'

import { getSession } from 'next-auth/react'

const premium = async (request, response) => {

    //validamos que este logeado 
  const session = await getSession({req: request}) 

  //Sino esta logeado mandamos un 401 al recurso
  if (session === null){
    response.status(401).json({
      message: 'Unauthorized'
    })
    return
  }

  //si esta logeado y regresmao la información
  response.status(200).json({
    data: `https://randomfox.ca/images/${random(1, 122)}.jpg`,
    time: new Date().getTime(),
  })
}

export default premium