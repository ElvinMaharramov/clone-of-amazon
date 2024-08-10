import type { AppProps } from "next/app";

import { Provider } from 'react-redux';
import { store } from "@/redux/store/store";

import RootLayout from "@/components/rootLayout/RootLayout";

import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="font-bodyFont bg-gray-300">
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </div>
    </Provider>
  );
}
