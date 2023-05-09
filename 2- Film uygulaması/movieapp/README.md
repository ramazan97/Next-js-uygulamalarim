This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.js`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

---

---

---

---

css lerimi tanımlamak için src altına glabal cs diye bir css oluşturduk
sitede kullanıacağımız componentleri oluşturmak için compoenents diye bir dosya oluşturduk
react icons kütüphanesini kurdk
next-themes kütüphanesi kullanarak dark mod yaptık
dark mod kısmını tailwinde mutlaka belirmek gerekiyor gereklil kısım next theme aldğımız yerde yazıyor npm installdan aldık
tabs kısmının router amaçlı kullanıyoruz
apiizi developer.themoviedb den kayıt olarak alıyoruz

internetten cektiğim fotoları kullanabilmek için kullanmak için next.congig.js e `  images: {
    domains: ["image.tmdb.org"],
  },`impport ediyoryz

// [keywor] [id] gibi ifadelerden olmayan sayfaları oluşturmak için kullanılıypr bir nevi sonsuz sayfa olarak kullanlıyor

tailwind.css de flex-wrap ne işe yarar
->flex-wrap özelliği, bir dizi öğeyi (örneğin, bir flex-container içindeki flex-item'leri) sararken veya sıralarken kullanılır. Bu özellik, flex-container içindeki öğelerin sığmaması durumunda nasıl davranacaklarına karar verir.

flex-wrap özelliğinin kullanımı, tailwind.css gibi CSS çerçevelerinde de benzer şekilde çalışır. tailwind.css'te flex-wrap özelliği, flex-wrap-{value} sınıflarıyla belirtilir, burada {value} özelliğin değeridir.

Örneğin, flex-wrap özelliği için kullanılacak değerler şunlardır:

nowrap: Öğelerin tek bir satırda sıralanması ve bir sonraki satıra atılması engellenir.
wrap: Öğeler bir veya daha fazla satırda sıralanır ve gerekirse bir sonraki satıra atılır.
wrap-reverse: wrap değeriyle aynıdır ancak sıralama tersine çevrilir.
Böylece, tailwind.css'te flex-wrap özelliğini kullanarak flex-container içindeki flex-item'leri istediğiniz şekilde sıralayabilir ve düzenleyebilirsiniz.

tailwind.css de flex-1 ne işe yarar
->flex-1 sınıfı, tailwind.css gibi CSS çerçevelerinde kullanılan bir sınıftır ve flex-grow, flex-shrink ve flex-basis özelliklerine önceden tanımlanmış değerler atar. Bu özellikler, bir flex-item'in ne kadar büyüyüp/küçülebileceğini ve ne kadar yer kaplayabileceğini belirler.

Dolayısıyla, flex-1 sınıfı bir flex-item'in flex-grow: 1, flex-shrink: 1 ve flex-basis: 0 özelliklerine sahip olmasını sağlar. Bu, flex-container içindeki diğer öğelerden daha fazla genişlemesine ve diğer öğelerin boyutu değiştiğinde küçülmeyeceğine karar verir.

Örneğin, aşağıdaki kod bloğunda, flex-container'ın içindeki tüm flex-item'lar flex-1 sınıfı ile belirtilmiştir:

html
Copy code

<!-- <div class="flex-container">
  <div class="flex-item flex-1">Öğe 1</div>
  <div class="flex-item flex-1">Öğe 2</div>
  <div class="flex-item flex-1">Öğe 3</div>
</div> -->

Bu kod bloğu, flex-container'ın genişliği değiştiğinde flex-item'ların eşit şekilde genişleyip daralmasını sağlar. flex-1 sınıfı, öğelerin içeriklerinin boyutuna göre otomatik olarak ayarlanmasını sağlar ve öğelerin orantılı bir şekilde genişlemesine veya daralmasına izin verir.

Kısacası, flex-1 sınıfı, tailwind.css gibi CSS çerçevelerinde, flex-container içindeki öğelerin genişliklerinin esnek olmasını ve birbirlerine orantılı bir şekilde ayarlanmasını sağlayan bir sınıftır.

tailwind.css de relative nedir
->relative sınıfı, tailwind.css gibi CSS çerçevelerinde kullanılan bir pozisyonlama sınıfıdır. Bu sınıf, bir öğenin konumunu, normal akışa göre öğenin yer aldığı konuma göre ayarlar.

relative sınıfı, bir öğenin konumunu absolute veya fixed gibi diğer pozisyonlama sınıflarıyla birlikte kullanmak için öncelikle bir referans noktası belirlemek için kullanılır. Örneğin, bir absolute veya fixed öğenin üst, alt, sol veya sağ konumunu belirlemek için relative özelliği kullanılabilir.

Aşağıdaki örnek kod bloğu, relative sınıfının nasıl kullanılabileceğini gösterir:

html
Copy code

<!-- <div class="relative">
  <div class="absolute top-0 left-0">Sol Üst Köşe</div>
  <div class="absolute bottom-0 right-0">Sağ Alt Köşe</div>
</div> -->

Bu kod bloğu, bir relative ana öğenin içinde iki adet absolute öğe oluşturur ve bunları farklı köşelere yerleştirir. relative sınıfı, bu öğelerin konumlarını belirlemek için referans noktası sağlar.

relative sınıfı ayrıca, z-index gibi diğer özelliklerin kullanımında da önemlidir. z-index, öğelerin birbirleri üzerinde hangi sırada yer alacaklarını belirler. Ancak, z-index özelliği, yalnızca relative, absolute veya fixed pozisyonlama özelliklerinin tanımlandığı öğelerde kullanılabilir. Bu nedenle, relative sınıfı, öğelerin z-index özelliğini kullanarak katmanlama özelliğini belirlemek için kullanılabilir.

Kısacası, relative sınıfı, bir öğenin konumunu normal akışa göre belirlemek için kullanılan bir pozisyonlama sınıfıdır ve diğer pozisyonlama sınıfları ile birlikte kullanılarak öğelerin konumunu belirlemek veya katmanlamak için kullanılabilir.

tailwind.css de cursor pointer nedir
->cursor-pointer sınıfı, tailwind.css gibi CSS çerçevelerinde kullanılan bir sınıftır. Bu sınıf, bir öğenin üzerine geldiğinde fare imlecinin görünümünü değiştirir ve fare imlecini işaretçiye dönüştürür. Bu, bir öğenin tıklanabilir olduğunu ve bir işlem gerçekleştirebileceğini belirtmek için sıklıkla kullanılır.

Örneğin, bir butonun cursor-pointer sınıfı ile nasıl oluşturulabileceği aşağıdaki kod bloğunda gösterilmektedir:

html
Copy code

<!-- <button class="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">Tıkla</button> -->

Bu kod bloğu, bir buton öğesi oluşturur ve bg-blue-500, text-white, py-2, px-4, rounded ve cursor-pointer gibi çeşitli sınıfları kullanarak biçimlendirir. cursor-pointer sınıfı, fare imleci butonun üzerine geldiğinde işaretçiye dönüştürecektir.

cursor-pointer sınıfı, aynı zamanda bir öğenin tıklanabilir olmadığını belirtmek için de kullanılabilir. Bunun için, öğenin diğer CSS özellikleriyle birlikte cursor-not-allowed sınıfı kullanılabilir.

Kısacası, cursor-pointer sınıfı, bir öğenin tıklanabilir olduğunu belirtmek için kullanılan bir sınıftır ve fare imlecinin işaretçiye dönüştürülmesini sağlar.

next.js de redux kullanıl mıyord mu
->Next.js, React tabanlı bir framework olduğu için, React ekosistemi içindeki Redux kütüphanesi de kullanılabilir. Ancak, Redux kullanımı Next.js projelerinde zorunlu değildir.

Next.js, verileri yönetmek için yerleşik bir veri getirme (data fetching) mekanizması sunar. Bu mekanizma sayesinde, server-rendering yapısı ile birlikte verileri optimize bir şekilde yönetmek ve iletmek mümkündür. Bu nedenle, Next.js projelerinde Redux kullanmak zorunlu değildir.

Ancak, Redux, uygulama durumunu merkezi bir yerde yönetmek için faydalı bir kütüphanedir ve bazı durumlarda kullanmak gerekebilir. Örneğin, büyük ölçekli uygulamalar, farklı bileşenler arasında paylaşılan birçok veri ve durumla karşılaşabilirler. Bu durumlarda, Redux, uygulama durumunu merkezi bir yerde yönetmek ve farklı bileşenler arasında veri akışını kolaylaştırmak için kullanılabilir.

Sonuç olarak, Next.js projelerinde Redux kullanmak isteğe bağlıdır ve veri yönetimi için yerleşik bir mekanizma sunulmaktadır. Ancak, Redux gibi veri yönetimi kütüphaneleri bazı durumlarda faydalı olabilir.

"use client " ne işe yarar
->use client ifadesi, Next.js gibi React tabanlı framework'lerde kullanılan bir öğedir. Bu özellik, Next.js'in yerleşik useSWR() kütüphanesi tarafından sağlanan bir React Hooks'udur.

use client hook'u, client-side'da çalışan kodların, yani tarayıcıda yürütülen kodların (client-side code) yazımını kolaylaştırmak için kullanılır. useSWR() kütüphanesi, HTTP istekleri ve önbellek yönetimi gibi işlemleri kolaylaştıran bir veri yönetim kütüphanesidir.

use client hook'u, useSWR() kütüphanesinde yer alan mutate() fonksiyonunu kullanarak, istemci tarafında yapılan veri değişikliklerini kolayca yönetebilirsiniz. Bu, sayfa yenilenmeden önce, verilerin hızlı bir şekilde güncellenmesini sağlar.

Örneğin, aşağıdaki kod bloğu, use client özelliği kullanılarak, client-side'da yapılan veri değişikliklerini yönetmektedir:

<!--
js
Copy code
import useSWR from 'swr';
import { useClient } from '../hooks/useClient';

function MyComponent() {
  const client = useClient();
  const { data } = useSWR('/api/data', client.fetch);

  const handleUpdate = async () => {
    const updatedData = await client.fetch('/api/update', {
      method: 'POST',
      body: JSON.stringify({ newData: 'new data' }),
    });
    client.mutate('/api/data', updatedData);
  };

  return (
    <div>
      <p>Data: {data}</p>
      <button onClick={handleUpdate}>Update Data</button>
    </div>
  );
} -->

Yukarıdaki kod bloğu, /api/data endpoint'inden veri çekerek, handleUpdate() fonksiyonunu kullanarak /api/update endpoint'ine POST isteği gönderir. client.mutate() fonksiyonu, güncellenen verileri anında sayfada görüntülemek için kullanılır. Bu şekilde, veriler hızlı bir şekilde güncellenir ve sayfa yenilenmeden önce güncel veriler gösterilir.

Kısacası, use client özelliği, Next.js gibi React tabanlı framework'lerde, client-side veri yönetimini kolaylaştırmak için kullanılan bir React Hooks'udur.
