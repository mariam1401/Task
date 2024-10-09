import ClickWave from './clickwave.svg'
import NovaSphere from './novasphere.svg'
import Zyphronix from './zyphronix.svg'
import styles from './index.module.css'
export  const Partners = ()=>{
    return (
        <div className={styles.body}>
            <div className={styles.main}>
                <h2 className={styles.title}>Наши партнёры по монетизации</h2>
                <div className={styles.ctn}>
                    <ClickWave/>
                    <Zyphronix/>
                    <NovaSphere/>
                </div>
            </div>
        </div>

    )
}
