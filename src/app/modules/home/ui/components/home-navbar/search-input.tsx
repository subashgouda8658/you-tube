import { SearchIcon } from "lucide-react";




export default function SearchInput() {


  return (
    <>
      <form className="flex w-full max-w-[600px]" >
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search"
            className="border w-full rounded-l-full pl-2 py-1.5 focus:outline-none  focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-100 px-4 border-none rounded-r-full py-1 hover:bg-gray-200 cursor-pointer disabled:opacity-0 disabled:cursor-not-allowed"
        >
          <SearchIcon />
        </button>
      </form>
    </>
  )
}