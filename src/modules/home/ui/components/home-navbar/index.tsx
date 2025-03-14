import {  SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./search-input";
import AuthButton from "@/modules/auth/ui/components/auth-button";





export default function HomeNavbar() {


  return (
    <>
      
        <nav className="fixed top-0 right-0 left-0 z-50 px-2 flex items-center h-16 bg-white pr-4 ">
          <div className="flex items-center w-full gap-4">
            {/*Munu and logo  */}
            <div className="flex items-center flex-shrink-0">
              <SidebarTrigger />
              <Link href="/">
                <div className="flex items-center gap-1 p-4 ">
                  <Image src="/logo.svg" width={32} height={32} alt="logo" />
                  <span className="text-xl font-semibold tracking-tight">YouTube</span>
                </div>
              </Link>
            </div>
            {/* searchInput */}
            <div className="flex-1 flex justify-center max-w-[720px]  mx-auto">
              <SearchInput />
            </div>

            {/*  */}
            <div className="flex flex-shrink-0 gap-4 items-center">
              <AuthButton />
            </div>

          </div>

        </nav>
    

    </>
  )
}