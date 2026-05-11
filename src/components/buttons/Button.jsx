import styles from './Button.module.css'


function Button({btnName, aoClique}){

    var contador = 0
    function decrementar(){
      contador--
      alert(contador)
    }

    return (
        <>
            <button className={styles.btn} onClick={aoClique}>{btnName}</button>
        </>
    )
}

export default Button