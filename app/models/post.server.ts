// import { prisma } from "~/db.server";
import type { Post } from "@prisma/client";

export async function getPosts() {
  console.log(process.env);
  if (process.env.IS_STORYBOOK) {
    return [
      {
        slug: "/firstPost",
        title: "First Post",
        markdown: "##Title",
      },
    ];
  } else {
    return prisma.post.findMany();
  }
}

export async function getPost(slug: string) {
  if (process.env.IS_STORYBOOK) {
    return [
      {
        slug: "/firstPost",
        title: "First Post",
        markdown: "##Title",
      },
    ];
  } else {
    return prisma.post.findUnique({ where: { slug } });
  }
}

export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown">
) {
  if (process.env.IS_STORYBOOK) {
    return null;
  } else {
    return prisma.post.create({ data: post });
  }
}
