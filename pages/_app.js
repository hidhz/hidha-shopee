import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import ListContextProvider from "@/data/ListContext";
export default function App({ Component, pageProps }) {
  return (
    <ListContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ListContextProvider>
  );
}
