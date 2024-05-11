'use server'

// Next
import { redirect } from 'next/navigation'

export async function navigateAction(path: string) {
	redirect(path)
}
