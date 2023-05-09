"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useRouter } from "next/navigation";

// [keywor] [id] gibi ifadelerden olmayan sayfaları oluşturmak için kullanılıypr bir nevi sonsuz sayfa olarak kullanlıyor


const Header = () => {

  // search işlemleri için yapılacaklar
  const [keyword, setKeyword] = useState("");
  const router = useRouter();


  // menu itemlerimizi oluştuk
  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];


  // arama işlemlerini yapılıyor
  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);

      // yönlendirme yaptktan sonra input içerisndeki kelimelerin boşalması için
      setKeyword(" ");
    }
  };

  return (
    <div className="flex items-center gap-7 h-20 p-5">
      <div className="bg-amber-600 rounded-lg p-3 text-2xl font-bold">
        MovieApp
      </div>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
          value={keyword}
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Arama yapınız!!!"
          className="outline-none flex-1 bg-transparent"
          type="text"
        />
        <BiSearch size={25} />
      </div>

      {/* dark mod kısmını burada çağırdık */}
      {/* icns olarak react iconsları kullandık */}
      <ThemeComp />

      {/* menu muzu map ettik */}
      {/* MenuItem olarak bir component oluştıurudk içerisine parametre olarak mn göndererek ekrana yazırdık */}
      {menu.map((mn, i) => (
        <MenuItem mn={mn} key={i} />
      ))}
    </div>
  );
};

export default Header;
