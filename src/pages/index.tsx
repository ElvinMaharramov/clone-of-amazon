import Banner from "@/components/banner/Banner";
import Products from "@/components/products/Products";

import { setAllProducts } from "@/redux/slice/NextSlice";

import { ProductProps } from "../../type";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

interface Props {
  productData: ProductProps
};


export default function Home({ productData }: Props) {
  // console.log(productData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllProducts({allProducts:productData}));
  }, [productData, dispatch]);

  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={productData} />
        </div>
      </div>
    </main>
  );
}

// Server Side Props for data fetching
/* async ve await: async anahtar kelimesi, bir fonksiyonun asenkron olacağını belirtir.
await ise bu fonksiyon içinde kullanılan ve bir promise (vaat) döndüren işlemlerin sonucunu beklemek için
kullanılır. Bu sayede, fetch işleminin tamamlanmasını bekler ve sonuçları işleyebiliriz.

fetch: fetch metodu ile bir HTTP isteği yapılır. Bu isteğin sonucunda dönen veriyi JSON formatında almak için
res.json() kullanılır.
return ile props: getServerSideProps fonksiyonu, Next.js tarafından özel olarak kullanılan bir fonksiyondur ve
server-side'da çalışır. Bu fonksiyon, sayfa bileşenine props olarak gönderilecek verileri hazırlar.
return ifadesiyle bu verileri döndürmemiz gerekir. */
export const getServerSideProps = async () => {
  const res = await fetch('https://fakestoreapiserver.reactbd.com/tech');
  const productData = await res.json();
  return { props: { productData } }
};


/* İstifadə edə biləcəyim free e-commerce API'lər:
https://fakestoreapi.com/products
https://fakestoreapiserver.reactbd.com/tech */