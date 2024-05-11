'use server'

// Utils
import { signIn } from '@/utils/next-auth.util'

export const signInAction = () => {
	return signIn('google')
}
