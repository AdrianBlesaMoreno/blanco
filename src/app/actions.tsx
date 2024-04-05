'use server'
 
import { redirect } from 'next/navigation'
 
export async function navigate(username: string, room: string, word: string) {
  redirect(`/game`)
}