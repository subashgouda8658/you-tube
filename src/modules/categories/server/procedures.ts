import { db } from "@/db";
import { categories } from "@/db/schema";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";



export const CategoriesRouter = createTRPCRouter({
  getMany:baseProcedure
  .query(async() => {

    const data = await db
    .select()
    .from(categories)


    
    if(!data){
      return [];
    }

    console.log(data);
  

    return data;
  })
})