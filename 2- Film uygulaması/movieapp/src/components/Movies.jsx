"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

const Movies = ({ dt }) => {
  // use client kullandığımız için router ı kullandık
  const router = useRouter();

  // RESİMLERİN VE YAILARIN GÖZÜKTÜĞÜ SEKMEYİ YAZIYORUZK
  return (
    <div
    // filmilerin id lerine göre detay sayasına gitmesni istedikk
      onClick={() => router.push(`/movie/${dt?.id}`)}
      className="min-w-[450px] relative imgContainer cursor-pointer"
    >
      <Image
        style={{ objectFit: "cover" }}
        width={450}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        } `}
      />

      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold">{dt?.title}</div>
        <div className="">
          {dt?.release_date}-{dt?.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
