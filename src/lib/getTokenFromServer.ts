import { headers } from "next/headers"
import { auth } from "./auth"

export const getTokenFromServer = async() =>{
      const jwtToken= await auth.api.getToken({
   headers : await headers() // you need to pass the headers object.
  })
 const token = jwtToken?.token

 return token
}