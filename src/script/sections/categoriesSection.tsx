"use client"


import { FilterCarousel } from "@/components/filter-carousel";
import { trpc } from "@/trpc/client"
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary"

interface CategoriesSection {
  categoryId: string
}


export default function CategoriesSection({
  categoryId
}: CategoriesSection) {

  return (
    <>
      <Suspense fallback={<CategoriesSkeleton />}>
        <ErrorBoundary fallback={<p>Error...</p>} >
          <CategoriesSectionSusupense categoryId={categoryId} />
        </ErrorBoundary>
      </Suspense>
    </>
  )

}

const CategoriesSkeleton = () => {
  return (
    <>
      <FilterCarousel isLoading onSelect={(x) => console.log(x)} data={[]} />
    </>
  )
}


function CategoriesSectionSusupense({
  categoryId
}: CategoriesSection) {
  const router = useRouter();

  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  const data = categories ? categories.map((category) => ({
    value: category.id,
    label: category.name,
  })) : [];
  // console.log(data);

  const onSelect = (value: string | null) => {

    console.log(value);
    const url = new URL(window.location.href);

    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }

    router.push(url.toString());
  }

  return (
    <>
      <FilterCarousel onSelect={onSelect} value={categoryId} data={data} />
    </>
  )
}