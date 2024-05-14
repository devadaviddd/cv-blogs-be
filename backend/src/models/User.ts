import { Post } from "./Post"

export interface User {
  uid: string
  email: string
  displayName: string
  photoURL: string
  posts?: Post[] 
}