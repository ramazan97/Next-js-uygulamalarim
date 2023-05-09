import React from "react";
import Movies from "@/components/Movies";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  //   console.log(keyword, "keyword");
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=c5aac8dfc8a344b5edfaa206f66d551d&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  console.log(data, "data");
  return (
    <div>
      {!data?.results ? (
        <div>Aranılan şey bukunamadı !!!</div>
      ) : (
        <div className="flex items-center flex-wrap gap-3">
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
