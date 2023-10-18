import React from 'react'

const Dispaly = () => {
    let state=localStorage.getItem("state")
    let city=localStorage.getItem("city")
  return (
    <section id='main'>
        <article>
            <h1>YOU HAVE SELECTED {city}, {state}</h1>
        </article>
    </section>
  )
}

export default Dispaly