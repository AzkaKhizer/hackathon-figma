"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Check, Minus, Plus } from "lucide-react";
import CustomerTestimonials from "@/components/reviews";
import TShirts from "@/components/tshirts";
import { BreadcrumbCollapsed } from "@/components/breadcrumb";

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
        title: "T-Shirt with Tape Details",
        price: "$120",
        id: 1,
        img_url: "/product1.jpg",
        img1: "/img1.png",
        img2: "/img2.png",
        img3: "/img3.png",
        img4: "/img4.png",
    },
    // other products
];

const star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
];

export default function ProductDetails() {
    const params = useParams();
    const id = params.id;
    const item = product.find((item) => item.id === Number(id));
    if (!item) {
        return "Product not found";
    }
    return (
        <div className="max-w-screen-2xl mx-auto">
            <BreadcrumbCollapsed />
            <div className="flex flex-col md:flex-row justify-evenly mt-10 p-5 sm:p-0">
                <div className="flex md:flex-col justify-between items-center w-[97px] md:w-[160px] space-x-4 order-2 sm:order-1 mt-6 md:mt-0">
                    <Image src={item.img4} className="w-full h-[150px]" alt="product" width={100} height={100} />
                    <Image src={item.img2} className="w-full h-[150px]" alt="product" width={100} height={100} />
                    <Image src={item.img3} className="w-full h-[150px]" alt="product" width={100} height={100} />
                </div>
                <div className="w-full md:w-[444px] h-[260px] md:h-[500px] order-1 sm:order-2">
                    <Image src={item.img1} className="w-full h-full" alt="product" width={100} height={100} />
                </div>
                <div className="w-full md:w-[600px] h-full mt-3 md:mt-0 order-3">
                    <h1 className="text-[24px] md:text-[40px] font-bold">{item.title}</h1>
                    <div className="flex text-[#FFC633]">{star}</div>
                    <p className="text-[24px] md:text-[32px] font-bold mt-1">
                        {item.price}
                        <span className="text-gray-400 line-through font-semibold pl-3">{item.old_price}</span>
                    </p>
                    <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                    <div className="mt-7">
                        <p>Select Colors</p>
                        <div className="flex space-x-2 mt-4">
                            <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full flex justify-center items-center text-white">
                                <Check className="opacity-0 hover:opacity-100 cursor-pointer" />
                            </div>
                            <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center text-white">
                                <Check className="opacity-0 hover:opacity-100 cursor-pointer" />
                            </div>
                            <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center text-white">
                                <Check className="opacity-0 hover:opacity-100 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-7">
                        <p>Choose Size</p>
                        <div className="flex space-x-4 mt-4">
                            <div className="flex justify-center items-center w-[74px] h-[39px] md:w-[86px] md:h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#655B5B]">Small</div>
                            <div className="flex justify-center items-center w-[90px] h-[39px] md:w-[105px] md:h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#655B5B]">Medium</div>
                            <div className="flex justify-center items-center w-[76px] h-[39px] md:w-[89px] md:h-[46px] bg-black text-gray-400 rounded-[62px]">Large</div>
                            <div className="flex justify-center items-center w-[89px] h-[39px] md:w-[104px] md:h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#655B5B]">X-Large</div>
                        </div>
                    </div>
                    <div className="flex justify-start items-center mt-6 space-x-4">
                        <div className="flex justify-between items-center w-[110px] h-[44px] md:w-[170px] md:h-[52px] bg-[#F0F0F0] text-black rounded-[62px] px-4">
                            <Minus /> 1 <Plus />
                        </div>
                        <button className="flex justify-center items-center w-[236px] h-[44px] md:w-[400px] md:h-[52px] bg-black text-gray-400 rounded-[62px]">Add to Cart</button>
                    </div>
                </div>
            </div>
            <CustomerTestimonials />
            <TShirts />
        </div>
    );
}

