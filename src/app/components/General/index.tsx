'use client'
import styles from './index.module.css'
import {Button} from "@/app/components/Button";
import {useState} from "react";
export  const General =()=>{
    const [isOperator,setIsOperator] = useState(true)
    const handleBtn = (value:boolean)=>{
        setIsOperator(value)
    }

    return(
        <div className={styles.main}>
            <img src={'/shapes.svg'} className={styles.main_img}/>
            <div className={styles.content_ctn}>
                <div className={styles.first_row}>
                    <h1 className={styles.title}>Монетизируйте клиентскую базу, не снижая NPS</h1>
                    <p className={styles.content}>Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации</p>
                    <Button text={'Заказать звонок'} color={'#FF5900'}/>
                </div>
            </div>
            <div className={styles.second_row}>
                <h2 className={styles.subTitle}>Дополнительные источники выручки для разных компаний</h2>
                <div className={styles.second_column}>
                    <div className={styles.btn_ctn}>
                        <button className={isOperator ? styles.active : ''} onClick={()=>handleBtn(true)}>Операторам</button>
                        <button className={!isOperator ? styles.active : ''} onClick={()=>handleBtn(false)}>ОТТ сервисам</button>
                    </div>
                    <p className={styles.text}>
                        {isOperator ?
                            'Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации'
                            :
                            'Дополнительные возможности обогащения данных об аудитории и монетизации'
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}
