import Container from "@/components/Container";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default () => {
  const [toko, setToko] = useState("");
  const [pembeli, setPembeli] = useState("");
  const [produk, setProduk] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const storage = localStorage.getItem("lists") || "";
    const data = {
      id: Date.now(),
      toko,
      pembeli,
      produk,
      status: "Belum Diapa-apain!!!",
    };
    if (!storage) {
      localStorage.setItem("lists", JSON.stringify([data]));
    } else {
      const a = JSON.parse(storage);
      a.unshift(data);
      localStorage.setItem("lists", JSON.stringify(a));
    }
    router.push("/");
  };
  return (
    <Container>
      <h1>Tambah List!!!</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-4 mb-5">
          <div className="w-full">
            <input
              value={toko}
              onChange={(e) => setToko(e.target.value)}
              type="text"
              placeholder="Toko ..."
              id="search"
              className="input input-sm input-bordered input-info w-full"
            />
          </div>
          <div className="w-full">
            <input
              value={pembeli}
              onChange={(e) => setPembeli(e.target.value)}
              type="text"
              placeholder="Pembeli ..."
              id="search"
              className="input input-sm input-bordered input-info w-full"
            />
          </div>
        </div>
        <div className="w-full">
          <input
            value={produk}
            onChange={(e) => setProduk(e.target.value)}
            type="text"
            placeholder="Produk ..."
            id="search"
            className="input input-sm input-bordered input-info w-full"
          />
        </div>
        <button className="mt-4 text-white bg-sky-600 px-4 py-1 rounded-md font-bold">
          Submit
        </button>
        <Link
          href="/"
          className="mt-4 ml-2 text-white bg-red-600 px-4 py-2 rounded-md font-bold"
        >
          back
        </Link>
      </form>
    </Container>
  );
};
