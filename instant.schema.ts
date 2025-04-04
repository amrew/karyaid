// Docs: https://www.instantdb.com/docs/modeling-data

import { i } from "@instantdb/admin";

const _schema = i.schema({
  entities: {
    $files: i.entity({
      path: i.string().unique().indexed(),
      url: i.any(),
    }),
    $users: i.entity({
      email: i.string().unique().indexed(),
    }),
    products: i.entity({
      title: i.string(),
      slug: i.string().unique().indexed(),
      tagline: i.string(),
      description: i.string(),
      productURL: i.string(),
      location: i.string().optional(),
      featured: i.boolean().indexed(),
      createdAt: i.date().indexed(),
      updatedAt: i.date().indexed(),
    }),
    categories: i.entity({
      name: i.string(),
      slug: i.string().unique().indexed(),
      description: i.string().optional(),
      createdAt: i.date(),
      updatedAt: i.date(),
    }),
    creators: i.entity({
      name: i.string(),
      description: i.string().optional(),
      createdAt: i.date(),
      updatedAt: i.date(),
    }),
  },
  links: {
    productThumbnail: {
      forward: { on: "products", has: "one", label: "$files" },
      reverse: { on: "$files", has: "one", label: "product" },
    },
    creatorThumbnail: {
      forward: { on: "creators", has: "one", label: "$files" },
      reverse: { on: "$files", has: "one", label: "creator" },
    },
    productCategory: {
      forward: { on: "products", has: "many", label: "categories" },
      reverse: { on: "categories", has: "many", label: "products" },
    },
    productCreator: {
      forward: { on: "products", has: "one", label: "creators" },
      reverse: { on: "creators", has: "one", label: "products" },
    },
  },
  rooms: {},
});

// This helps Typescript display nicer intellisense
type _AppSchema = typeof _schema;
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
