import Container from "@/components/Container";
import InputText from "@/components/input";
//import ListContent from "@/pages/home/ListContent";
import ListTable from "@/pages/home/ListTable";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-slate-500">
      <Container>
        <div className="flex justify-between mb-24">
          <h1 className="text-xl text-black">
            0 batal --- 0 kosong/ditawarin --- 0 diproses
          </h1>
          <Link
            href="/add"
            className="text-xl text-white bg-sky-600 px-4 py-1 rounded-md"
          >
            tambah list
          </Link>
        </div>
        <div className="overflow-x-hidden">
          <ListTable />
        </div>
      </Container>
    </main>
  );
}
