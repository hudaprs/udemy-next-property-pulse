'use client'

// React
import { memo, useCallback, useEffect, useState } from 'react'

// Next
import Link from 'next/link'

// Next UI
import {
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Avatar,
	Badge,
	Spinner,
	Skeleton
} from '@nextui-org/react'

// Components
import { AuthButton } from './components/AuthButton'

// Remix Icon
import { RiNotification4Line } from '@remixicon/react'

// Constants
import { MENU_ITEMS } from '@/constants/menu.constant'

// Types
import { AuthNavContentProps } from './types'

// Next Auth
import { signOut } from 'next-auth/react'

// Actions
import { navigateAction } from '@/actions/general.action'
import { paths } from '@/utils/path.util'

const AuthNavContent = memo(({ user }: AuthNavContentProps) => {
	const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)
	}, [])

	// Common State
	const [loading, setLoading] = useState({
		isSignOut: false
	})

	/**
	 * @description Handle Loading
	 *
	 * @param {string} type
	 * @param {boolean} value
	 *
	 * @return {void} void
	 */
	const handleLoading = useCallback(
		(type: keyof typeof loading, value: boolean): void => {
			setLoading(prev => ({ ...prev, [type]: value }))
		},
		[]
	)

	/**
	 * @description Handle sign out
	 *
	 * @return {Promise<void>} Promise<void>
	 */
	const onSignOut = useCallback(async (): Promise<void> => {
		handleLoading('isSignOut', true)

		try {
			await signOut({ redirect: false })
			navigateAction(paths.root.index())
		} finally {
			handleLoading('isSignOut', false)
		}
	}, [])

	if (!mounted)
		return (
			<NavbarContent justify='end'>
				<div className='max-w-[300px] w-full flex items-center gap-3'>
					<div className='w-full flex flex-col gap-2'>
						<Skeleton className='h-3 w-[200px] rounded-lg' />
						<Skeleton className='h-3 w-[200px] rounded-lg' />
					</div>
					<div>
						<Skeleton className='flex rounded-full w-12 h-12' />
					</div>
				</div>
			</NavbarContent>
		)

	return (
		mounted && (
			<>
				<NavbarContent justify='end'>
					<NavbarItem className='hidden lg:flex'>
						{!user && <AuthButton />}
					</NavbarItem>
					<NavbarItem>
						{!!user && (
							<Dropdown>
								<DropdownTrigger>
									<div>
										<Badge content='5'>
											<RiNotification4Line className='hover:cursor-pointer' />
										</Badge>
									</div>
								</DropdownTrigger>

								<DropdownMenu aria-label='Notification'>
									<DropdownItem key='notification-list'>List</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						)}
					</NavbarItem>
					<NavbarItem>
						{!!user && (
							<Dropdown>
								<DropdownTrigger>
									{user?.image && (
										<Avatar
											src={user?.image}
											size='md'
											className='cursor-pointer'
										/>
									)}
								</DropdownTrigger>
								<DropdownMenu aria-label='Profile Actions'>
									<DropdownItem
										key='your-profile'
										onClick={() => navigateAction(paths.root.index())}
									>
										Your Profile
									</DropdownItem>
									<DropdownItem
										key='saved-properties'
										onClick={() => navigateAction(paths.property.saved())}
									>
										Saved Properties
									</DropdownItem>

									<DropdownItem
										closeOnSelect={false}
										key='sign-out'
										onClick={onSignOut}
									>
										{loading.isSignOut && <Spinner />}
										Sign Out
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						)}
					</NavbarItem>
				</NavbarContent>
				<NavbarMenu>
					{MENU_ITEMS.map((menuItem, index) => (
						<NavbarMenuItem key={`${menuItem}-${index}`}>
							<Link className='w-full' href={menuItem.value}>
								{menuItem.label}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</>
		)
	)
})

AuthNavContent.displayName = 'AuthNavContent'

export { AuthNavContent }
