// React
import { ReactNode } from 'react'

// Next
import type { Metadata } from 'next'

// Fonts
import { Poppins } from 'next/font/google'

// Components
import { GlobalNavbar } from '@/components/global/Navbar'
import { BaseProvider } from '@/components/base/Provider'

// Assets
import '@/assets/styles/globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
	title: 'PropertyPules | Find The Perfect Rental',
	description: 'Find your dream rental property',
	keywords: 'rental, find rentals, find properties'
}

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<BaseProvider>
					{/* Navbar */}
					<GlobalNavbar />
					{/* End Navbar */}

					<div className='min-h-[85vh]'>{children}</div>

					<footer className='flex justify-center items-center mt-8 bg-[#f4f4f4] min-h-[5vh]'>
						&copy; {new Date().getFullYear()} PropertyPulse. All Rights
						Reserved.
					</footer>
				</BaseProvider>
			</body>
		</html>
	)
}
