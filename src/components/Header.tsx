import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo_long_dark.png";
import style from "../style/Header.module.scss";

const Header: FC = () => (
  <header className={style.header}>
    {/* logo */}
    <Link href="/">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={style.logo}>
        <Image src={logo} alt="Oshavery logo" />
      </a>
    </Link>
    <div className={style.links}>
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={style.link}>Home</a>
      </Link>
      {/*
        <Link href="/about">
          <a className={style.link}>About</a>
        </Link>
        */}
    </div>
    <div className={style.login} />
  </header>
);

export default Header;
