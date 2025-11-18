import { defineField, defineType } from "sanity"

export const blogType = defineType({
  name: "BlogPost",
  title: "Post",
  type:"document",
  fields: [
    {name:"Title", type:"string"},
    {name:"Author", type:"string"},
    {name: "Text", type:"string"}
  ]
})
