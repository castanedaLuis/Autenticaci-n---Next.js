

const credentialsAuth = (request, response) => {
  if(request.method !== "POST"){
    response.status(405).end()
    return 
  }
  
  if(request.body.password === process.env.AUTH_PLATZI_SECRET){
    const platziUser = {
      name: "Jose Luis Castañeda",
      email: "Castaneda@auth.com",
      image: ""
    }
    return response.status(200).json(platziUser)
  }

  response.status(401).end()
}

export default credentialsAuth;