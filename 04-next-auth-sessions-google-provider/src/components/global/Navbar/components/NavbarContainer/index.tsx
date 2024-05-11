'use client'

// React
import { memo, useState } from 'react'

// Next
import Link from 'next/link'

// Next UI
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenuToggle,
	NavbarBrand
} from '@nextui-org/react'

// Remix Icon
import { RiHome6Line } from '@remixicon/react'

// Types
import { NavbarContainerProps } from './types'

const NavbarContainer = memo(({ children }: NavbarContainerProps) => {
	// Common State
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<NextUINavbar onMenuOpenChange={setIsMenuOpen} isBordered>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:hidden'
				/>
				<NavbarBrand
					className='flex items-center gap-1'
					as={Link}
					href='/'
					scroll
				>
					<RiHome6Line />
					<p className='font-bold text-inherit'>PropertyPulse</p>
				</NavbarBrand>
			</NavbarContent>

			{children}
		</NextUINavbar>
	)
})

NavbarContainer.displayName = 'NavbarContainer'

export { NavbarContainer }
