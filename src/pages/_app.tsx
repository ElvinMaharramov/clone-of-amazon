import type { AppProps } from "next/app";

import { Provider } from 'react-redux';
import { SessionProvider } from "next-auth/react";
import { persistor, store } from "@/redux/store/store";
import { PersistGate } from 'redux-persist/integration/react';

import RootLayout from "@/components/rootLayout/RootLayout";

import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SessionWrapper from "@/components/sessionWrapper/SessionWrapper";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    // <SessionProvider session={session}>
    <SessionWrapper>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <div className="font-bodyFont bg-gray-300">
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </div>
        </PersistGate>
      </Provider >
    </SessionWrapper>
    // </SessionProvider>
  );
};
