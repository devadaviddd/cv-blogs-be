import fs from 'fs'
import { marked } from 'marked'
import { prisma } from '../services/prismaClient'
import { Post } from '../models/Post'

export async function updatePostContent(
  markdown: Express.Multer.File | undefined,
  id: number
): Promise<Post> {
  if (!markdown) {
    throw new Error('File not Found')
  }
  console.log(markdown)
  const data = fs.readFileSync(markdown.path, 'utf-8')
  fs.renameSync(markdown.path, `storage/${id}_${markdown.filename}.md`)

  const html = await marked(data)
  const post = await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      content: html,
    },
  })

  return post
}
