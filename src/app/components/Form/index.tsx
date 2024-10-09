'use client'
import styles from './index.module.css'
import React, {ChangeEvent, useState} from "react";
export const Form = ()=>{
    const [form,setForm]=useState({text:'',mail:'',check:false})
    const [validationErrors,setValidationErrors] = useState({text:'',mail:'',check:''})
    const handleForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setForm((state) => {
            return { ...state, [name]: name === 'check' ? checked : value };
        });
    };
    const submitForm = ()=>{
        setValidationErrors({text:'',mail:'',check:''})
        let isValid = true
        if(!form?.text){
            isValid = false
            setValidationErrors((state)=>{
                return{...state,text:'Пожалуйста, заполните ваш вопрос.'}
            })
        }
        if(!form?.mail){
            isValid = false
            setValidationErrors((state)=>{
                return{...state,mail:'Пожалуйста, заполните ваш e-mail.'}
            })
        }else {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const isEmailValidate =  regex.test(form.mail);
            if(!isEmailValidate){
                isValid = false
                setValidationErrors((state)=>{
                    return{...state,mail:'Пожалуйста, введите корректный e-mail.'}
                })
            }
        }
        if(!form?.check){
            isValid = false
            setValidationErrors((state)=>{
                return{...state,check:'Пожалуйста, ознакомьтесь с политикой конфиденциальности.'}
            })
        }
        if(isValid){
            setForm({text:'',mail:'',check:false})
            setValidationErrors({text:'',mail:'',check:''})
            console.log('send successfully')
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.ctn}>
                <h2 className={styles.title}>Заполните форму</h2>
                <div className={styles.form_ctn}>
                    <div>
                        <textarea placeholder={'Напишите свой вопрос'} value={form.text} className={styles.textarea} name={'text'} onChange={(e)=>handleForm(e)}/>
                        <label className={styles.error}>{validationErrors?.text}</label>

                    </div>
                    <div className={styles.second_column}>
                        <div className={styles.form}>
                            <div className={styles.mail_ctn}>
                                <input value={form.mail} onChange={(e)=>handleForm(e)} placeholder={'Введите e-mail'} className={styles.input} name={'mail'}/>
                                <label className={styles.error}>{validationErrors?.mail}</label>

                            </div>
                            <div>
                                <div className={styles.select_ctn}>
                                    <input checked={form.check}  type={'checkbox'} className={styles.checkbox} name={'check'} onChange={handleForm}/>
                                    <label className={styles.txt}>Я ознакомлен(а) с <u>политикой конфиденциальности</u> и согласен(на) на обработку <u>персональных данных.</u></label>
                                </div>
                                <label className={styles.error}>{validationErrors?.check}</label>
                            </div>
                        </div>
                        <button className={styles.send_btn} onClick={submitForm}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
 }
