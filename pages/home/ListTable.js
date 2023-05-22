import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import Link from "next/link";

export default function ListTable() {
  const [lists, setLists] = React.useState("");
  const [status, setStatus] = React.useState("");
  React.useEffect(() => {
    if (localStorage.getItem("lists")) {
      setLists(JSON.parse(localStorage.getItem("lists")));
    }
  }, []);
  function ubahStatus(id) {
    let newLists = [];
    lists.forEach((list) => {
      if (list.id === id) {
        const newList = {
          id: list.id,
          toko: list.toko,
          pembeli: list.pembeli,
          produk: list.produk,
          status: "diproses",
        };
        list = newList;
      }
      newLists.push(list);
      localStorage.setItem("lists", JSON.stringify(newLists));
      setLists(JSON.parse(localStorage.getItem("lists")));
    });
  }
  function hapusList(id) {
    let newLists = [];
    lists.filter((list) => {
      if (list.id !== id) {
        newLists.push(list);
      }
    });
    localStorage.setItem("lists", JSON.stringify(newLists));
    setLists(JSON.parse(localStorage.getItem("lists")));
  }
  return (
    <>
      <div
        style={{
          backdropFilter: "blur(7px)",
          boxShadow: "inset 0 -1px 0 0 rgba(0,0,0,0.1)",
        }}
        className="bg-slate-200 rounded-md bg-opacity-50"
      >
        <h1
          style={{
            backdropFilter: "blur(7px)",
            boxShadow: "inset 0 -1px 0 0 rgba(0,0,0,0.1)",
          }}
          className="bg-slate-50 bg-opacity-0 py-2 px-4 rounded-t-md text-black text-2xl"
        >
          Catatan Orderan
        </h1>
        <div className="px-8 pt-8 pb-12 overflow-x-auto">
          <table className="table table-zebra text-black">
            <thead>
              <tr>
                <th>toko</th>
                <th>pembeli</th>
                <th>produk</th>
                <th>status</th>
                <th>aksi</th>
              </tr>
            </thead>
            <tbody>
              {lists &&
                lists.map((list) => (
                  <tr key={list.id}>
                    <th>{list.toko}</th>
                    <td>{list.pembeli}</td>
                    <td>{list.produk.substr(0, 50)}...</td>
                    <td>
                      <button
                        onClick={() => ubahStatus(list.id)}
                        className="bg-sky-600 hover:bg-sky-800 px-2 py-1 rounded-full text-white"
                      >
                        {list.status}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => hapusList(list.id)}
                        className="p-2 text-white bg-red-600 rounded"
                      >
                        <MdOutlineDeleteForever />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
