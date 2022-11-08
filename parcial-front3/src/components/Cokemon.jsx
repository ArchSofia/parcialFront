import React,{useState} from 'react'
import Card from './Card';
const Cokemon = () => {
    const titulo = 'Mi usuario'
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("sdsd");
    }
    const [user,setUser] = useState({
        nombre: '',
        edad: '',
        coke: ''
    })


    const productos =  [
        {id:1,texto:'tarea1'},
        {id:2,texto:'tarea2'},
        {id:3,texto:'tarea3'},
        {id:4,texto:'tarea4'},
        {id:5,texto:'tarea5'},
        {id:6,texto:'tarea6'},
    ]
    return (
    <div>
        <form onSubmit={e=>handleSubmit(e)}>
            <label>Nombre</label>
            <input type="text" placeholder='Nombre completo' required onChange={(e)=>setUser({...user, nombre:e.target.value})} />
            <label>Edad</label>
            <input type="number" placeholder='edad' required onChange={(e)=>setUser({...user, edad:e.target.value})}/>
            <label>Pokemon</label>
            <input type="text" name='' placeholder='Pokemon favorito' required onChange={(e)=>setUser({...user, coke:e.target.value})}/>
            <input className='enviar' type="submit" value="enviar"/>
        </form>
        <Card titulo={titulo} user={user} data={productos} />
    </div>
)
}

export default Cokemon