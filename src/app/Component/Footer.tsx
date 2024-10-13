import React from 'react';
import style from "./Footer.module.css";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
        <ul className={style.container}>
            <li><Link href="#" className={style.content}>Careers</Link></li>
            <li><Link href="#" className={style.content}>Blogs</Link></li>
            <li><Link href="#" className={style.content}>Sales</Link></li>
        </ul>
        <ul className={style.container}>
            <li><Link href="#" className={style.content}>Statistics</Link></li>
            <li><Link href="#" className={style.content}>About</Link></li>
            <li><Link href="#" className={style.content}>Why Us?</Link></li>
        </ul>
        <ul className={style.container}>
            <li className={style.content}>&copy; Copyright (2020 - 2024)</li>
            <input type="email" className={style.mail} placeholder='enter your email address'/>
        </ul>
    </footer>
  )
}

export default Footer