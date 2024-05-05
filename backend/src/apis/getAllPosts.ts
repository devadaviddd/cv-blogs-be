import { Request } from 'express'
import { Post } from '../models/Post'
import { prisma } from '../services/prismaClient'


export async function getAllPosts(): Promise<Post[]> {
  const posts: Post[] = await prisma.posts.findMany({})
  return posts
}
