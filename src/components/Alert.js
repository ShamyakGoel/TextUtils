import React from 'react'

export default function Alert(props) {
    // function capitalizeFirstLetter(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    // }
    if(props.alert == null){
        return (
            <>
                
            </>
        )
    }
  return (
    <>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.bold}</strong> -  {props.alert.message}
      </div>
    </>
  )
}
