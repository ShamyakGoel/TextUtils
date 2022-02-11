import React, {useState , useEffect} from 'react'

export default function Notfound() {
 const [location, setlocation] = useState(0)
 useEffect(() => {
    setlocation(window.location);
  }, [])
 
  return (
    <>
        <div style={{textAlign: 'center'}}>
            <link rel="stylesheet" href="./bootstrap.min.css"/>
            <h1>Not found 404</h1>
            <p>{location.href}</p>
            <a href="/">Go to Home Page</a>
        </div>
        
    </>
  )
}
