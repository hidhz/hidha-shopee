import { TbBrandShopee } from "react-icons/tb";
import { MdPerson4, MdSearchOff, MdOutlineCancel } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";

export default function ListContent({ toko, pembeli, produk, status }) {
  return (
    <div className="mb-12">
      <div className="shadow-lg rounded-md p-4">
        <div className="flex justify-between">
          <div className="flex items-center text-2xl">
            <TbBrandShopee className="text-[#EE4D2D]" />
            toko :<h1 className="ml-4">{toko}</h1>
          </div>
          <div className="flex items-center text-2xl">
            <MdPerson4 />
            pembeli :<h1 className="ml-4">{pembeli}</h1>
          </div>
        </div>
        <h1 className="flex items-center text-xl my-4 truncate">
          <AiOutlineShoppingCart className="mr-2" /> {produk}
        </h1>
        <div className="flex justify-between">
          <div>
            <p>status :</p>
            <div className="flex space-x-4">
              <button className="flex items-center px-2 py-1 bg-red-600 rounded-md text-white">
                <MdOutlineCancel />
                batal
              </button>
              <button className="flex items-center px-2 py-1 bg-emerald-600 text-white rounded-md">
                <MdSearchOff /> kosong/ditawarin
              </button>
              <button className="flex items-center px-2 py-1 bg-sky-600 text-white rounded-md">
                <IoMdDoneAll />
                diproses
              </button>
            </div>
          </div>
          <div className="text-3xl">{status}</div>
        </div>
      </div>
    </div>
  );
}
