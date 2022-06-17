import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  useEffect(() => {
    if (document != undefined) {
      console.log("html document loaded");

      const welcome = document.getElementById("welcome");

      let i = 0;
      let text =
        "Welcome to Evaasmakula portofolio website, Unfortunately this page is still under development. You can come back in a few days to see how things are going.";
      let state = "";
      function typeWriter() {
        if (i < text.length) {
          state = state + text.charAt(i);
          welcome.innerHTML = state;
          i++;
          if (i == text.length) {
            document.getElementById('terminal').classList.remove('hidden');
          }
          setTimeout(typeWriter, 20);
        }
      }

      typeWriter();
    } else {
      console.log("Loading html document");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Evaasmakula</title>
        <meta name="description" content="Evaasmakula Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mono py-5" id="main">
        <p id="welcome"></p>
        <p id="terminal" className="hidden">
          <span>
            [<span className="text-green-300">EVA</span>@
            <span className="text-orange-300">nextjs</span>]: Terminal error!!
            <span className="animate-ping">_</span>
          </span>
        </p>
      </main>
    </div>
  );
};

export default Home;
