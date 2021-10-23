import React from 'react'
// q1 and q2

function MediaCard(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <img src={props.imageUrl} alt="" />
    </>
  )

}

export default MediaCard

//We need to wrap them in another element.


// q3


// function Gate(isOpen) {
//   return (
//     <>

//       <p>
//         {isOpen==="true" ? "Open" : "close"}
//       </p>

//     </>
//   )

// }

// export default Gate