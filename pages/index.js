import Container from "@/components/Container";
import InputText from "@/components/input";
import ListContent from "@/pages/home/ListContent";
import Link from "next/link";
import React from "react";

export default function Home() {
  const [lists, setLists] = React.useState("");
  React.useEffect(() => {
    if (localStorage.getItem("lists")) {
      setLists(JSON.parse(localStorage.getItem("lists")));
    }
  }, []);
  return (
    <main className="text-slate-500">
      <Container>
        <div className="flex justify-between mb-24">
          <h1 className="text-xl">
            0 batal --- 0 kosong/ditawarin --- 0 diproses
          </h1>
          <Link
            href="/add"
            className="text-xl text-white bg-sky-600 px-4 py-1 rounded-md"
          >
            tambah list
          </Link>
        </div>
        {lists ? (
          lists.map((list) => (
            <ListContent
              key={list.id}
              toko={list.toko}
              pembeli={list.pembeli}
              produk={list.produk}
              status={list.status}
            />
          ))
        ) : (
          <h1>kosong!</h1>
        )}
      </Container>
    </main>
  );
}
