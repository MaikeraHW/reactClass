import styles from './Button.module.css'


function Button({btnName, disabled}){

    function btnClicado() {
        alert(btnName)
    }

    return (
        <>
        <button className={`${styles.btn} ${disabled === true ? styles.disabledPattern : styles.enabledPattern} `} 
                disabled={disabled} onClick={() => btnClicado()}>
                    {btnName} - {disabled} - {typeof(disabled)} 
                
        </button>
        </>
    )
}

export default Button