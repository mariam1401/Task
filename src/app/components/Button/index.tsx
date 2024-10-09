import styles from './index.module.css'

export const Button = ({text,color}:{text:string,color:string})=>{
    return(
        <button style={{background:color}} className={styles.btn}>
            {text}
        </button>
    )
}
