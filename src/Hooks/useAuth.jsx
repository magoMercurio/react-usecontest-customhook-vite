import React, { useState, useEffect } from 'react'

const useAuth = (jwt) => {
  const [auth, setAuth] = useState(true)

  useEffect(() => {

  if( jwt.length > 25){
    setAuth(true)
  }else{
    setAuth(false)
  }
}, [])

  return auth
}





export default useAuth