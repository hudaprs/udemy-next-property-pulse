'use server'

// Utils
import { signOut } from '@/utils/next-auth.util'

export const signOutAction = () => {
	return signOut({ redirect: false, redirectTo: '/' })
}
