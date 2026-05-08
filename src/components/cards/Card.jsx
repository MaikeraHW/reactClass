import styles from './Card.module.css'

function Card(props){
    return(
    <>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    </>
    )
}

// Usando desestruturação no lugar de Props pra evitar ficar usando props.nomeDoAtributo
/*function Card({title, description}){ 
    return(
    <>
    <h1>{title}</h1>
    <h2>{description}</h2>
    </>
    )
}*/

export default Card