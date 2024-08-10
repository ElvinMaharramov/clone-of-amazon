// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['i.ibb.co', 'images.pexels.com', 'fakestoreapi.com'],
//   },
// };

// export default nextConfig;

/* Next.js, dış kaynaklardan resimlerinizi yönetmek için çeşitli konfigürasyon seçenekleri sunar.
Önceki sürümlerde, dış kaynaklardan gelen resimleri belirtmek için images.domains konfigürasyonu kullanılıyordu.
Ancak, Next.js'in daha yeni sürümlerinde bu yapılandırma artık önerilmemektedir ve onun yerine images.remotePatterns
kullanılması tavsiye edilmektedir. */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

/*
protocol: Resmin HTTPS protokolü kullanarak alındığını belirtir.
hostname: İzin verilen domain adlarını belirtir.
port: Varsayılan olarak boş bırakabilirsiniz, çünkü HTTPS genellikle standart port olan 443 kullanır.
pathname: İzin verilen resim yollarının desenlerini belirtir. /** kullanarak tüm alt yolları kapsayacak şekilde geniş bir desen sağlar.
*/
