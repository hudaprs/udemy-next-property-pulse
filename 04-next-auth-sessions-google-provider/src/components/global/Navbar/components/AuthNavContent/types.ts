// Next Auth
import type { DefaultSession } from 'next-auth'

export type AuthNavContentProps = {
	user?: DefaultSession['user']
}
