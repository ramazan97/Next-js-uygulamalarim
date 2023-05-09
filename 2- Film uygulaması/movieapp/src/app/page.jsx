import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  // searchParams tabs componenti iceirisndeki searchParams alarak  burada tanımladık
  // çünkü oradan gelen latest popular newest kısımlarnından burada filitereleme işlemi yapıyouz
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=c5aac8dfc8a344b5edfaa206f66d551d`,
    { next: { revalidate: 10000 } }
  );
  // dakatamızı json formatına cevirdk
  const data = await res.json();
  // console.log(data);
  return (
    // ? eğer varsa çaığr demek 
    // Movies diye komponent oluşturduk oraya gönderdiğimiz değerlere göre alma işlemi yazdırma şlemi yaptık
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
