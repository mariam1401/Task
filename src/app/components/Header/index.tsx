'use client'
import Logo from './logo.svg'
import styles from './index.module.css'
import {useEffect, useState} from "react";
import Burger from './burger.svg';
import Close from './close.svg'
export const Header = ()=>{
    const [windowSize, setWindowSize] = useState<number>();
    const [openMenu,setOpenMenu] = useState(false)

    const handleMenuOpen=()=>{
        setOpenMenu(!openMenu)
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };
        setWindowSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={styles.navbar}>
            <div className={styles.ctn}>
                <Logo className={styles.logo}/>
                {(windowSize && windowSize >768) ?
                    <ul className={styles.list}>
                        <li className={styles.list_item}>Преимущества</li>
                        <li className={styles.list_item}>Как работаем</li>
                    </ul>
                    :
                    <Burger className={styles.burger_menu} onClick={handleMenuOpen}/>
                }
                {openMenu &&
                    <div className={styles.menu_ctn}>
                        <div className={styles.close_ctn}>
                            <Close onClick={handleMenuOpen}/>
                        </div>
                        <div className={styles.list_ctn}>
                            <ul className={styles.list_middle}>
                                <li className={styles.list_item}>Преимущества</li>
                                <li className={styles.list_item}>Как работаем</li>
                            </ul>
                        </div>

                    </div>
                }
            </div>
        </div>
    )
}
