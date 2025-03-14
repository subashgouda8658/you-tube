import { db } from "@/db";
import { categories } from "@/db/schema";


const categoryNames = [
  "Cars and vehicles",
  "Comedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animation",
  "How-to and style",
  "Music",
  "News and politics",
  "People and blogs",
  "Pets and animals",
  "Science and technology",
  "Sports",
  "Travel and events"
]

async function main() {

  console.log("seeding categories .....");

  try {
    const values = categoryNames.map((category) => ({
      name: category,
      description: `Videos related to ${category.toLowerCase()}`
    }))

    await db
      .insert(categories).values(values)
    console.log("Categoris seeded success");

  } catch (error) {
    console.log("Error seeding categories:", error)
    process.exit(1)

  }
}

main()