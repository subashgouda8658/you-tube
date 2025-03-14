import HomeView from "@/modules/home/views/home-view";
import { HydrateClient, trpc } from "@/trpc/server"

interface PageProps {
  searchParams: Promise<{ categoryId: string }>
}

export const dynamic = "force-dynamic"

export default async function Page({
  searchParams
}:PageProps) {

  const {categoryId} = await searchParams;

  void trpc.categories.getMany.prefetch();
  
  return (

    <>
      <HydrateClient>
        <HomeView categoryId={categoryId} />
      </HydrateClient>
    </>
  )
}