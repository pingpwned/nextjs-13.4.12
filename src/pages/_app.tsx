import { AppContextProvider } from "@/context/AppContext";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Header } from "@/components/Header";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContextProvider>
      <Header />
      <main className="flex flex-col items-center flex-start p-24">
        <Component {...pageProps} />
      </main>
    </AppContextProvider>
  );
};

export default App;
