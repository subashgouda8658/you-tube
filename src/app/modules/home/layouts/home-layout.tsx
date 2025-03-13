import { SidebarProvider } from "@/components/ui/sidebar";
import HomeNavbar from "../ui/components/home-navbar";
import HomeSidebar from "../ui/components/home-sidebar";




interface HomeLayoutsProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutsProps) => {

  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        <div className="flex min-h-screen pt-[4rem]">
          <HomeSidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>

  )

}