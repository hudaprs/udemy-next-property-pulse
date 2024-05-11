'use client'

// Next Auth
import { SessionProvider } from 'next-auth/react'

// Next UI
import { NextUIProvider } from '@nextui-org/react'

// Types
import { BaseProviderProps } from './types'

const BaseProvider = ({ children }: BaseProviderProps) => {
	return (
		<SessionProvider>
			<NextUIProvider>{children}</NextUIProvider>
		</SessionProvider>
	)
}

export { BaseProvider }
