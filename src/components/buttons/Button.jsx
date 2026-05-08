import styles from './Button.module.css'


function Button({btnName, disabled}){

    return (
        <>
        <button className={`${styles.btn} ${disabled === true ? styles.disabledPattern : styles.enabledPattern} `} 
                disabled={disabled}>
                    {btnName} - {disabled} - {typeof(disabled)} 
        </button>
        </>
    )
}

export default Button