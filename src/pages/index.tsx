import type { NextPage } from "next";
import Image from "next/image";
import { FaGithub, FaTwitter } from "react-icons/fa";

import Layout from "../components/Layout";
import logo from "../../public/logo_long.png";
import style from "../style/index.module.scss";

const Home: NextPage = () => (
  <Layout pagetitle="Oshavery" isheader isfooter>
    <div className={style.index_page}>
      <div className={style.top}>
        {/*
          <div className={style.title}>
            <h1></h1>
            <h2></h2>
          </div>
          */}
        <div className={style.logo}>
          <Image src={logo} alt="Oshavery logo" />
        </div>
      </div>

      <div className={`${style.overview} ${style.overview_left}`}>
        <div className={style.overview_contents}>
          <h1 className={style.title_1}>新たな会話の場所、それがOshavery。</h1>
          <div className={style.detail}>
            <p>一度に送信できるメッセージの量は10,000文字。</p>
            <p>様々なやり取りを気軽に、ストレスなく行うことができます。</p>
          </div>
        </div>
        <div className={style.overview_image} />
      </div>

      <div className={`${style.overview} ${style.overview_right}`}>
        <div className={style.overview_contents}>
          <h1 className={style.title_2}>Markdown、標準装備。</h1>
          <div className={style.detail}>
            <p>Markdownに加え、KaTeXによる数式にも対応。</p>
            <p>メッセージをより多くの記法で送信できます。</p>
          </div>
        </div>
        <div className={style.overview_image} />
      </div>

      <div className={`${style.overview} ${style.overview_left}`}>
        <div className={style.overview_contents}>
          <h1 className={style.title_3}>アカウント作成、必要なし。</h1>
          <div className={style.detail}>
            <p>TwitterとGitHubアカウントでのログインが可能です。</p>
            <p>新たにパスワードを考える必要はありません。</p>
          </div>
        </div>
        <div className={style.overview_image}>
          <span className={style.icon}>
            <FaTwitter size={70} />
          </span>
          <span className={style.icon}>
            <FaGithub size={70} />
          </span>
        </div>
      </div>

      <div className={`${style.overview} ${style.overview_right}`}>
        <div className={style.overview_contents}>
          <h1 className={style.title_4}>あなただけの、Oshaveryを。</h1>
          <div className={style.detail}>
            <p>ソースコードは全て公開。</p>
            <p>カスタマイズして、あなただけのOshaveryにすることができます。</p>
          </div>
        </div>
        <div className={style.overview_image}>
          <span className={style.icon}>
            <a
              href="https://github.com/Undecided-Discord/Oshavery"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff" }}
            >
              <FaGithub size={70} />
            </a>
          </span>
        </div>
      </div>

      <div className={style.start}>
        <h1 className={style.start_title}>さあ、はじめましょう。</h1>
        <p className={style.not_pc} hidden>
          スマートフォン・タブレットでは
          <br />
          正常に動作しません。
        </p>
      </div>
    </div>
  </Layout>
);

export default Home;
