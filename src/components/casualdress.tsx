import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

const product: Iproducts[] = [
  {
    title: "Gradient Graphic T-shirt",
    price: "$145",
    id: 10,
    img_url: "/new3.png",
    img1: "/img1.png",
    img2: "/img2.png",
    img3: "/img3.png",
    img4: "/img4.png",
  },
  {
    title: "Polo with Tipping Details",
    price: "$180",
    id: 11,
    img_url: "/new2.png",
    img1: "/img1.png",
    img2: "/img2.png",
    img3: "/img3.png",
    img4: "/img4.png",
  },
  {
    title: "Black Striped T-shirt",
    price: "$120",
    id: 12,
    old_price: "$150",
    img_url: "/new1.png",
    img1: "/img1.png",
    img2: "/img2.png",
    img3: "/img3.png",
    img4: "/img4.png",
  },
  // ... Other products
];

const star = Array(5).fill(null).map((_, index) => <FaStar key={index} />);

export default function CasualShirts() {
  return (
    <div className="mt-14 w-full h-full md:h-[500px] max-w-screen-2xl mx-auto">
      <h1 className="text-[32px] md:text-[32px] font-bold pl-9 md:pl-10">
        Casual
      </h1>
      <div className="md:w-[1000px] flex flex-wrap flex-col md:flex-row justify-center items-center md:justify-between md:px-10 mt-10 gap-3">
        {product.map((data) => {
          return (
            <div key={data.id}>
              <Link href={`/products/${data.id}`}>
                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px]">
                  <Image
                    src={data.img_url}
                    alt={data.title}
                    width={295}
                    height={298}
                    className="rounded-[20px]"
                  />
                </div>
              </Link>
              <div>
                <p className="text-[16x] md:text-[20px] font-semibold mt-2">
                  {data.title}
                </p>
                <p className="flex text-[#FFC633]">{star}</p>
                <p className="text-[20px] md:text-[24px] font-bold mt-1">
                  {data.price}{" "}
                  <span className="text-gray-400 line-through font-semibold">
                    {data.old_price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center rounded-[40px]">
        <button className="bg-white border border-gray-300 px-16 py-4 mt-10 rounded-[40px] text-black">
          View All
        </button>
      </div>
      <div className="border-t border-gray-300 my-10"></div>
    </div>
  );
}
