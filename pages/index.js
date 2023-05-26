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
import Interviews from "../screens/Interviews";
import Featured from "../screens/Featured";
import Footer from "../screens/Footer";

export default function Home() {
  return (
    <div style={{ background: "white" }}>
      <Head>
        <title>JorZine</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Banner />
      <Navbar />
      <Cardnews />
      {/* <News /> */}
      <Reviews />
      <Interviews />
      <MeNews />
      <Featured />
      <Footer />
      {/* <Test /> */}
    </div>
  );
}
