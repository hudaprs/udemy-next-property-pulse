// Next UI
import { NavbarContent, NavbarItem } from '@nextui-org/react'

// Next
import Link from 'next/link'

// Components
import { NavbarContainer } from './components/NavbarContainer'
import { AuthNavContent } from './components/AuthNavContent'

// Constants
import { MENU_ITEMS } from '@/constants/menu.constant'

// Utils
import { auth } from '@/utils/next-auth.util'

const GlobalNavbar = async () => {
	// Auth
	const user = await auth()

	console.log('user', user)

	return (
		<NavbarContainer>
			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				{MENU_ITEMS.map(menuItem => (
					<NavbarItem key={menuItem.value}>
						<Link href={menuItem.value}>{menuItem.label}</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			{/* Nav Content */}
			<AuthNavContent user={user?.user} />
			{/* End Nav Content */}
		</NavbarContainer>
	)
}

export { GlobalNavbar }
