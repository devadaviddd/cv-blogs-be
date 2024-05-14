import vine from '@vinejs/vine';
import { User } from '../models/User';
import { prisma } from '../services/prismaClient';
import { RequestBody } from '../types/requestBody';

async function validateData(requestBody: RequestBody): Promise<User> {
  const schema = vine.object({
    uid: vine.string(),
    email: vine.string().email(),
    displayName: vine.string(),
    photoURL: vine.string().url()
  })

  const data = {
    uid: requestBody.uid,
    email: requestBody.email,
    displayName: requestBody.displayName,
    photoURL: requestBody.photoURL
  }

  return await vine.validate({
    schema,
    data
  })
}

export async function createUser(requestBody: RequestBody): Promise<User> {
  const payload: User = await validateData(requestBody);

  return await prisma.user.create({
    data: {
      ...payload,
      posts: { create: [] }
    }
  });
}