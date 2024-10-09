import styles from './index.module.css'
import Arrow from './arrow.svg'
export const RevenueBalance = ()=>{
    return(
        <div className={styles.main}>
            <div className={styles.content}>
                <h2 className={styles.title}>Баланс между выручкой и удовлетворённостью пользователей</h2>
                <div className={styles.ctn}>
                    <div className={styles.div}>
                        <Arrow/>
                        <h3>Частотность под контролем</h3>
                        <p>Чтобы не ронять NPS и не увеличивать отток пользователей</p>
                    </div>
                    <div className={styles.img}>
                        <img src={'/balanceImage.png'}/>
                    </div>
                    <div className={styles.div}>
                        <Arrow/>
                        <h3>Максимальная выручка</h3>
                        <p>За счёт заполенения всех рекламных мест по высокой цене</p>
                    </div>
                </div>
            </div>


        </div>
    )
}
