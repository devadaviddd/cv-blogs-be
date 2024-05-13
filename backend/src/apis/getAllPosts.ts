import { Request } from 'express'
import { Post } from '../models/Post'
import { prisma } from '../services/prismaClient'
import { PrismaClient } from '@prisma/client'


export async function getAllPosts(): Promise<Post[]> {
  const posts: Post[] = await prisma.post.findMany({})
  
  return posts
}
