import React from 'react';
import Link from 'next/link';
import style from "./Header.module.css"


const Header = () => {
  return (
    <header className={style.header} >
        <div className={style.top}>
            <div className={style.name}>MAWB.</div>
            <ul className={style.ul}>
                <li className={style.li}><Link className={style.a} href="#">About</Link></li>  
                <li className={style.li}><Link className={style.a} href="#">Contact</Link></li>
                <button className={style.btn}>Sign up</button>
            </ul>    
        </div>
    </header>   
  )
}

export default Header