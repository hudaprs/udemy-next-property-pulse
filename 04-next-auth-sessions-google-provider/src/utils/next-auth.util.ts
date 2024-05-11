// Next Auth
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import type { NextAuthConfig, Session } from 'next-auth'

// Prisma Adapter
import { PrismaAdapter } from '@auth/prisma-adapter'

// DB
import { db } from '@/db/connection.db'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

// Check for google credentials
if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
	throw new Error('Missing google oauth credentials')
}

export const config = {
	adapter: PrismaAdapter(db),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code'
				}
			},
			allowDangerousEmailAccountLinking: true
		})
	],
	session: { strategy: 'database' },
	callbacks: {
		// signIn: async ({ profile }) => {
		// 	console.log('profile', profile)

		// 	if (profile && profile?.email) {
		// 		// Check if user exists
		// 		const existedUser = await db.user.findUnique({
		// 			where: { email: profile.email }
		// 		})

		// 		// Create new user
		// 		if (!existedUser) {
		// 			await db.user.create({
		// 				data: {
		// 					name: profile.name as string,
		// 					email: profile.email as string,
		// 					image: (profile as { picture?: string }).picture || null
		// 				}
		// 			})
		// 		}
		// 	}

		// 	return true
		// },
		session: async ({ session }) => {
			return session
		}
	}
} satisfies NextAuthConfig

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth
} = NextAuth(config)
