// Next
import type { Metadata } from 'next'

// Fonts
import { Poppins } from 'next/font/google'

// Next UI
import { NextUIProvider } from '@nextui-org/react'

// Components
import { GlobalNavbar } from '@/components/global/Navbar'

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
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<NextUIProvider>
					{/* Navbar */}
					<GlobalNavbar />
					{/* End Navbar */}

					<div className='min-h-[85vh]'>{children}</div>

					<footer className='flex justify-center items-center mt-8 bg-[#f4f4f4] min-h-[5vh]'>
						&copy; {new Date().getFullYear()} PropertyPulse. All Rights
						Reserved.
					</footer>
				</NextUIProvider>
			</body>
		</html>
	)
}
