import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Evaasmakula</title>
        <meta name="description" content="Evaasmakula Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Navbar />
      <div className="flex min-h-screen">
        <div className="w-1/2 flex items-start justify-end p-20 flex-col">
          <div className="flex items-center justify-center">
            <div className="w-20 h-[0.5px] bg-[#B8C1EC] mt-1">&nbsp;</div>
            <p className="text-sm ml-2 text-transparent bg-clip-text grad-txt">Perkenalkan </p>
          </div>
          <h1 className="text-6xl font-extrabold text-white leading-none mb-3">
            Eva Asteria
          </h1>
          <p className="text-xs  leading-1 tracking-widest text-left ">
            Dia adalah seorang web developer dan mobile developer yang kini
            sedang dalam masa studi S1 Teknik Informatika di Universitas
            Muhammadiyah Ponorogo. Ia sangat menyukai kolaborasi dan belajar hal
            baru.
          </p>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
