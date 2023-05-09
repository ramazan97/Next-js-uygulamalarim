import React from "react";
import Link from "next/link";
import Image from "next/image";
import Trial from "./trial.jsx";
// fontları kullanımı için import etmek gerek
import { Inter } from "@next/font/google";
import Head from 'next/head'

// redirect useRouter useSeadrchParams usePathname ifadelerinşin kullanımız
import { redirect } from "next/navigation.js";

// cookies react teki local storeage gibi çalışmaktatır
import { cookies } from "next/headers";
import { getFontDefinitionFromNetwork } from "next/dist/server/font-utils.js";
// render (ana sayfa) edilmesi gereken sayfa mutlaka "page.js/jsx" olarak adlandırılmalıdır
//2 adet routing var statik ve dinamic
//localhost:3000/pruduct/3  burada produck static 3 ise dinamictir yani detay sayfalarını dinamic olarak yazıyorz
// dinamicliği [] bu şekilde oluşturuyoruz

// const inter = Inter({
//   // burada fotnların özelliklerini belirledin
//   subsets: ["latin"],

//   display: "optimal",
// });

// const roboto = Roboto({
//   weight: "400",
//   style: ["italic"],
//   subsets: ["latin"],
// });

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const fetchData1 = async () => {
  const res = await fetch("https://restcountries.com/v3.1/name/eesti");
  return res.json();
};
const fetchData2 = async () => {
  const res = await fetch("https://restcountries.com/v3.1/name/united");
  return res.json();
};

const Page = async () => {
  await sleep(3000);

  const newCookies = cookies();

  // --------------------------------------------------------------------------------------
  // burada yaptığımız işlem şu
  // eğer birden fazla data alacaksak eğer her biirne "await" olarak tanımlarsak
  // çok fazla zaman geçeçek biz bu kadar zaman geçmesini istemiyoruz daha kısa bir sürede verilerimizi cekmek istediğimiz içim
  // aşşağıdaki "resultData" fonk oluşturuyoruz ve bunu da promise olarak döndürüyoruz
  // bu şekilde daha kolay daha hızlı verileimizi çekiyoruz

  const data1 = await fetchData1();
  const data2 = await fetchData2();

  const resultData = await Promise.all([data1, data2]);
  // console.log(resultData,"resultData")

  // --------------------------------------------------------------------------------
  let nav1 = false;
  if (nav1) {
    // burada redirect ifadesi about sayfasına şartlı yönlendirme yapmaktadır
    // nav1 eğer false ise buraya girmeyecek eper nav1= true yaparsak sayfamız anasayfaya gelmeden direk olarak
    // about sayfasına gidecek
    // bu ifadeleri kullanıcı siteye giriş işlemleri yaparken kullabilirz
    // normal şarlarda butona basıldığında yönlerndirme yapacaksak bu nu değil ROUTER YAPISINI KULLANIIRIZ
    redirect("/about");
  }

  // bütün cookies leri çağımak için
  console.log(newCookies.getAll());
  // sadece istenilen cookies çağırmak için
  // console.log(newCookies.get("cookies"));
  // console.log(newCookies.get("cookies").value);

  // console.log(newCookies.set("cookies2", 20));

  // next js server tabanlı çalıştığı içn alttaki ramazan yazısının siteyede yadırmak yerine vs code daki conslde yazdıracak
  // bunun sebebebi nex js server tabanlı olmasından kaynaklı

  // ama ben sitede yazırmak istersem  eğer kodun en başına "use client" ifaedesinşi yazmam yeterli olacak

  // console.log("ramazan");

  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <div>
        Page{" "}
        {/* yönlerndirme işemlerini Link yapısı kullanarak ve gref içeirisne klasörün adını yazarak yapabiliyoruz */}
        <Link
          // className={inter.className}
          href="/about"
        >
          Yönlendirme 1
        </Link>
        {/* //burada name alanı ramazan olan queryleri oluşturdk */}
        {/* çoklu yapmak için & ifadesini kullanıyoruz */}
        <Link
          // className={roboto.className}
          href="/about?name=ramazan&surmane=yagli"
        >
          Yönlendirme 2
        </Link>
        {/* yukarıdaki ifadeyi obje olarak yapalım */}
        <Link
          href={{
            pathname: "/about",
            query: {
              name: "ramazan",
              surname: "yagli",
            },
          }}
        >
          Yönlendirme 3
        </Link>
        {/* eğer uygulamadan src alacaksak with ve heiğt ekleye gerek yok amam resmi internet sitesinden alacaksak with ve height klemeye gerek var */}
        {/* birde bu rsmi kullanmak istiyorsak bu resmin bilgilerinin next.config.js tanımla */}
        {/* gerekli bilgiyi 
        https://nextjs.org/docs/api-reference/next/image#remote-patterns
        sitesinden aldım */}
        {/* eğer with ve heigt içerisine fill kullanırsanız butun ekranı kapsar bunda div içerisine alarak kullanabiliriz bu sayde istedğimiz boyutları verebilirlzve divi tam kapsar */}
        <Image
          src="https://blog.biletbayi.com/wp-content/uploads/2019/11/kirikkale-tarihi-yerler.jpg"
          width={300}
          height={300}
        />
        <Trial />
      </div>
    </>
  );
};

export default Page;
