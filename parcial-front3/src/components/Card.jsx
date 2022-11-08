import React from 'react'

const Card = ({titulo,user,data}) => {
  return (
    <div>Card
        <h1>{titulo}</h1>
        <div>
            <h1>{user.nombre}</h1>
            <h2>{user.edad}</h2>
            <h3>{user.coke}</h3>
            <div>
                <h2>Mapeo</h2>
                {
                    data.map(item=>(
                        <h4 key={item.id}>{item.texto}</h4>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Card