import Link from "next/link";
import { IoIosSearch } from "react-icons/io";

import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./NavigationMenu";

export default function Header(){
    return (
        <div className=" max-w-screen-2xl  mx-auto flex justify-center items-center w-full">
        <header className="w-full h-[60px] flex justify-between items-center ml-4 md:mt-2 ">
            <div className="flex justify-center items-center ">
                <SheetSide/>
                <h1 className="font-bold text-[25px] sm:text-[32px] pl-2">SHOP.CO</h1>
            </div>

            <ul className="hidden lg:block">
                <li className="flex items-center text-[16px] md:text-[18px] space-x-5 font-semibold pl-0">
                    <Link  href={""}><NavigationMenuDemo/></Link>
                    <Link href={"/products/sell"}>On Sale</Link>
                    <Link href={"/products"}>New Arrivals</Link>
                    <Link href={"/casual"}>Brands</Link>
                </li>
            </ul>

              <div className="hidden lg:block">
                <div className=" flex justify-start items-center w-[577px] h-[48px] bg-[#F0F0F0] rounded-[62px] ">
                <IoIosSearch className="text-xl ml-4" />
                <input placeholder="Search for products..." className="w-full ml-2 h-full outline-none bg-[#F0F0F0]  rounded-[62px]"></input>
                </div>
                </div>
            <div className="flex items-center mr-16 space-x-3 text-xl font-bold">
            <IoIosSearch className="lg:hidden"/>
            <Link href="/cart">
            <IoCartOutline />
            </Link>
            <VscAccount />
            </div>
        </header>
        </div>
    )
}