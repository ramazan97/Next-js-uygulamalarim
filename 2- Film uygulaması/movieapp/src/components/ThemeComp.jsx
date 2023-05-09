"use client";
import React from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// sitemizin dark modunu buradan yaptık
// dark mod kısmını tailwinde mutlaka belirmek gerekiyor gereklil kısım next theme aldğımız yerde yazıyor npm installdan aldık
const ThemeComp = () => {
  // buradaki ifaceleri npm sayfasında next-theme den aldık
  // systemTheme yi biz yazdık... amaç kontol etmek
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;

  // console.log(themeMode, "themeMode");

  return (
    <div>
      {mounted &&
        (themeMode === "light" ? (
          <CiDark
            onClick={() => setTheme("dark")}
            className="cursor-pointer"
            size={25}
          ></CiDark>
        ) : (
          <CiLight
            onClick={() => setTheme("light")}
            className="cursor-pointer"
            size={25}
          ></CiLight>
        ))}
    </div>
  );
};

export default ThemeComp;
