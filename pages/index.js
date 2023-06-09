import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../screens/Navbar";
import Banner from "../screens/Banner";
import News from "../screens/News";
import Reviews from "../screens/Reviews";
import MeNews from "../screens/MeNews";
import Test from "../screens/Test";
import Cardnews from "../screens/Cardnews";
import Banners from "../screens/Banner1";
import Interviews from "../screens/Interviews";
import Featured from "../screens/Featured";
import Footer from "../screens/Footer";
import { SideContent } from "../screens/Navbar";
import { Side } from "../screens/Navbar";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [side, setSide] = useState(false);

  const revert = () => {
    setSide(!side);
  };
  return (
    <div style={{ background: "white" }}>
      <Head>
        <title>JorZine</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#000'></meta>
      </Head>
      {side ? (
        <Side>
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1.5rem",
              fontSize: "2.6rem",
              color: "white",
            }}
            onClick={() => {
              setSide(false);
            }}>
            X
          </div>
          <SideContent
            onClick={() => {
              router.push("/");
            }}>
            Home
          </SideContent>
          <SideContent
            onClick={() => {
              router.push("/news");
            }}>
            News
          </SideContent>
          <SideContent
            onClick={() => {
              router.push("/Reviews");
            }}>
            Reviews
          </SideContent>
          <SideContent
            onClick={() => {
              router.push("/interviews");
            }}>
            Interviews
          </SideContent>
          <SideContent
            onClick={() => {
              router.push("/articles");
            }}>
            Articles
          </SideContent>
        </Side>
      ) : null}

      <Banners />
      <Navbar revert={revert} />
      <Cardnews />
      {/* <News /> */}
      <Reviews />
      <MeNews />
      <Interviews />

      {/* <Featured /> */}
      <Footer />
      {/* <Test /> */}
    </div>
  );
}
