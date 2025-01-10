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
        title: "Vertical Striped Shirt",
        price: "$212",
        id: 5,
        old_price: "$232",
        img_url: "/topselling1.jpg"
    },
    {
        title: "Courage Graphic T-shirt",
        price: "$145",
        id: 6,
        img_url: "/topselling2.jpg"
    },
    {
        title: "Loose Fit Bermuda Shorts",
        price: "$80",
        id: 7,
        img_url: "/topselling3.jpg"
    },
    {
        title: "Faded Skinny Jeans",
        price: "$130",
        id: 8,
        img_url: "/topselling4.jpg"
    }
];

const star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />
];

export default function TopSelling() {
    return (
        <div className="mt-10 md:mt-52 w-full h-full md:h-[500px] max-w-screen-2xl mx-auto">
            <h1 className="text-[32px] md:text-[48px] font-bold md:font-extrabold text-center">TOP SELLING</h1>
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
                            <p className="text-[16x] md:text-[20px] font-semibold mt-2">{data.title}</p>
                            <p className="flex text-[#FFC633]">{star}</p>
                            <p className="text-[20px] md:text-[24px] font-bold mt-1">
                                {data.price} <span className="text-gray-400 line-through">{data.old_price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
