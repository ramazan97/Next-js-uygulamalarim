"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  // bu ksımı tamamen click yaptığımız ve işlemi sokmak isteğimiz durumlara göre yazdık
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  //   console.log(genre,"genre")

  // tabs menulerimizi oluşturduk
  const tabs = [
    {
      name: "En Popular",
      url: "popular",
    },
    {
      name: "En Son",
      url: "latest",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];
  return (
    // burada eğer arka planım darksa ise gray ligth ise farklı tonda gray olsun dedik
    <div className="p-5 m-5 gap-7 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      {tabs.map((tab, i) => (
        <Link
        // hover olayı mauseu üzerine gelince ne olusn demek için kullandık diikaet edecek olurasak dinamic olarak yazdık
          className={`cursor-pointer hover:opacity-75 transition-opacity ${
            tab.url === genre ? "underline underline-offset-8 text-amber-600" : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
