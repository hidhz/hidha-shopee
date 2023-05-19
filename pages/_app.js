import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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
