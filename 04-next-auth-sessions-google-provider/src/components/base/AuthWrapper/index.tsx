// Utils
import { auth } from '@/utils/next-auth.util'

// Types
import { BaseAuthWrapperProps } from './types'

// Components
import { Forbidden } from './components/Forbidden'

const BaseAuthWrapper = async ({ children }: BaseAuthWrapperProps) => {
	const user = await auth()

	if (!user) return <Forbidden />

	return <>{children}</>
}

export { BaseAuthWrapper }
