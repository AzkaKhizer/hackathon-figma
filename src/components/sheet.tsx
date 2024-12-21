"use client"
import { MdMenu } from "react-icons/md";
import { Button } from "@/components/ui/button"

import Link from "next/link";
import {
  Sheet,
  
  SheetContent,
  
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenuDemo } from "./NavigationMenu";

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="lg:hidden">
            <Button><MdMenu /></Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
                <SheetTitle className="flex justify-center items-center">SHOP.CO</SheetTitle>
            </SheetHeader>
            
          <ul >
                <li className="text-[16px] grid grid-cols-1 gap-y-4  font-semibold">
                    <Link  href={""}><NavigationMenuDemo/></Link>
                    <Link className="ml-4"href={""}>On Sale</Link>
                    <Link className="ml-4"href={""}>New Arrivals</Link>
                    <Link className="ml-4"href={""}>Brands</Link>
                </li>
            </ul>
            
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
