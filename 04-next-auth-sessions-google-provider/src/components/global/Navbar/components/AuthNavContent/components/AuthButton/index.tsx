// Components
import { BaseButton } from '@/components/base/Button'

// Remix Icon
import { RiGoogleLine } from '@remixicon/react'

// Actions
import { signInAction } from '@/actions/auth/sign-in.action'

const AuthButton = () => {
	return (
		<form action={signInAction}>
			<BaseButton type='submit'>
				<RiGoogleLine />
				Login or Register
			</BaseButton>
		</form>
	)
}

export { AuthButton }
