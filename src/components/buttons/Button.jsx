import styles from './Button.module.css'


function Button({btnName, onClick, disabled}){
    
    return (
        <>
            <button className={styles.btn} onClick={onClick} disabled={disabled}> {btnName} </button>
        </>
    )
}

export default Button

