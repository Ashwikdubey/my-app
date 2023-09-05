import React from 'react'

export default function Alert(props) {
   const capitalize=(word)=>{
    let letter=word.charAt(0);
    return letter.toUpperCase()+word.slice(1);
} 
  return (
    <div>
 {   props.alert && <div className={`alert alert-${props.alert.tpe} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.tpe)}</strong>:{props.alert.msg}
  </div>}
    </div>
  )
}
