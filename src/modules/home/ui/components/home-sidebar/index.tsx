import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import MainSection from "./main-section";
import PersonalSection from "./personal-section";



export default function HomeSidebar() {

  


  return (
    <>
    <Sidebar className= "pt-16 border-none z-40" collapsible = "icon" >
      <SidebarContent className="bg-background" >
        <MainSection />
        < Separator />
        <PersonalSection />
        </SidebarContent>
        </Sidebar>
        </>
  )


}