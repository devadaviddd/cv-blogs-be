import vine from '@vinejs/vine';
import { Post } from '../models/Post';
import { RequestBody } from '../types/requestBody';
import { prisma } from '../services/prismaClient';

async function validateData(requestBody: RequestBody) {
  const schema = vine.object({
    image: vine.string().optional(),
    title: vine.string(),
    description: vine.string(),
    authorId: vine.string(),
  });
  const data = {
    image: requestBody.image,
    title: requestBody.title,
    description: requestBody.description,
    authorId: requestBody.authorId,
  };

  return await vine.validate({
    schema,
    data,
  });
}

export async function createSimplePost(
  requestBody: RequestBody
): Promise<Post> {
  const payload = await validateData(requestBody);

  return await prisma.post.create({
    data: {
      image: payload.image,
      title: payload.title,
      description: payload.description,
      authorId: payload.authorId,
    },
  });
}
