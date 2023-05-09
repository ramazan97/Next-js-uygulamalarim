"use client";
import React from "react";
// redirect useRouter useSeadrchParams usePathname ifadelerinşin kullanımız
// bu ifadelerin hepsinde "use client" i kullanıyoruz
import { useSearchParams, usePathname } from "next/navigation.js";

const Page = () => {
  // buradaki olay
  // http://localhost:3000/about?name=ramazan&surmane=yagli
  // adresindelki
  // name ve surnamedeki verileri cekip sitemizde kullanmak
  // yani query işlemleri oluyor
  // bunu useSearchParams ifades kullanıarak yapıyorz

  // usePathname ise hangi klasörde olduğunu anlamak iin yapıyoruz
  // burada "/about" kalsöründey miş

  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const pathname = usePathname();
  console.log(name, "name");
  console.log(pathname, "pathname");
  return <div>Page Abaout</div>;
};

export default Page;
