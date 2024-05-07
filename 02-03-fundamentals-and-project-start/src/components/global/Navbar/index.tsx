'use client'

// React
import { useState, memo } from 'react'

// Next UI
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Badge,
	Button,
	Avatar,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem
} from '@nextui-org/react'

// Next
import Link from 'next/link'

// Remix Icon
import {
	RiHome6Line,
	RiNotification4Line,
	RiGoogleLine
} from '@remixicon/react'

const menuItems = [
	{ label: 'Home', value: '/' },
	{ label: 'Properties', value: '/properties' },
	{ label: 'Add Properties', value: '/properties/create' }
]

const GlobalNavbar = memo(() => {
	// Common State
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
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

			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				{menuItems.map(menuItem => (
					<NavbarItem key={menuItem.value}>
						<Link href={menuItem.value}>{menuItem.label}</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem className='hidden lg:flex'>
					<Button>
						<RiGoogleLine />
						Login or Register
					</Button>
				</NavbarItem>
				<NavbarItem>
					<Badge>
						<RiNotification4Line />
					</Badge>
				</NavbarItem>
				<NavbarItem>
					<Dropdown>
						<DropdownTrigger>
							<Avatar
								src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
								size='md'
								className='cursor-pointer'
							/>
						</DropdownTrigger>
						<DropdownMenu>
							<DropdownItem key='your-profile'>Your Profile</DropdownItem>
							<DropdownItem key='saved-properties'>
								Saved Properties
							</DropdownItem>
							<DropdownItem key='sign-out'>Sign Out</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((menuItem, index) => (
					<NavbarMenuItem key={`${menuItem}-${index}`}>
						<Link className='w-full' href={menuItem.value}>
							{menuItem.label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	)
})

GlobalNavbar.displayName = 'GlobalNavbar'

export { GlobalNavbar }
