import type { AppProps } from "next/app";
import GlobalStyle from "../components/globalstyles";
import ErrorBoundary from "../components/ErrorBoundary";
import { Barlow } from "next/font/google";

const barlow = Barlow({ weight: ["400", "600", "800"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={barlow.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
}
