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
}

const product: Iproducts[] = [
    {
        title: "T-Shirt with Tape Details",
        price: "$120",
        id: 1,
        img_url: "/product1.jpg"
    },
    {
        title: "Skinny Fit Jeans",
        price: "$240",
        id: 2,
        old_price: "$260",
        img_url: "/product2.jpg"
    },
    {
        title: "Checkered Shirt",
        price: "$180",
        id: 3,
        img_url: "/product3.jpg"
    },
    {
        title: "Sleeve Striped T-shirt",
        price: "$130",
        id: 4,
        old_price: "$280",
        img_url: "/product4.jpg"
    }
];

const star = [<FaStar key={1} />, <FaStar key={2} />, <FaStar key={3} />, <FaStar key={4} />, <FaStar key={5} />];

export default function Products() {
    return (
        <div className="mt-14 w-full h-full md:h-[500px] max-w-screen-2xl mx-auto">
            <h1 className="text-[32px] md:text-[48px] font-bold md:font-extrabold text-center">NEW ARRIVALS</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:px-10 mt-10 gap-3">
                {product.map((data) => (
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
                            <p className="text-[16px] md:text-[20px] font-semibold mt-2">{data.title}</p>
                            <p className="flex text-[#FFC633]">{star}</p>
                            <p className="text-[20px] md:text-[24px] font-bold mt-1">
                                {data.price}{" "}
                                <span className="text-gray-400 line-through font-semibold">{data.old_price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center rounded-[40px]">
                <button className="bg-white border border-gray-300 px-16 py-4 mt-10 rounded-[40px] text-black">View All</button>
            </div>
            <div className="border-t border-gray-300 my-10"></div>
        </div>
    );
}
