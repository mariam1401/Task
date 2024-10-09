import Arrow from './arrow.svg'
import {Button} from "@/app/components/Button";
import styles from './index.module.css'
export const Reports = ()=>{
    const data =[
        'Выручка, CTR, показы и другие показатели в реальном времени.',
        'Инструменты контроля качества трафика.',
        'Ежемесячные автоматические отчёты для каждого правообладателя.'
    ]

    return (
        <div className={styles.main}>
            <div className={styles.first_column}>
                <div className={styles.content_ctn}>
                    <h2 className={styles.title}>Подробные отчёты для вас и правообладателей</h2>
                    <div className={styles.list}>
                        {data.map((text,index)=>{
                            return (
                                <div className={styles.option} key={index}>
                                    <Arrow/>
                                    <p className={styles.text}>{text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Button text={'Заказать звонок'} color={'#1D1D1B'}/>
            </div>
            <div className={styles.image_ctn}>
                <img src={'/computerImage.png'} className={styles.image}/>
            </div>
        </div>
    )
}
