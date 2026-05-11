import styles from './Button.module.css'


function Button({btnName, aoClique}){
    
    return (
        <>
            <button className={styles.btn} onClick={aoClique}>{btnName}</button>
        </>
    )
}

export default Button