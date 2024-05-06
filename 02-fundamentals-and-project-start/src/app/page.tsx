// React
import { Suspense } from 'react'

// Components
import { HomeHero } from '@/components/home/Hero'
import { HomeInfoBox } from '@/components/home/InfoBox'
import { HomeRecentProperties } from '@/components/home/RecentProperties'
import Loading from '@/app/loading'

export default function PageHome() {
	return (
		<>
			<HomeHero />
			<HomeInfoBox />
			<Suspense fallback={<Loading />}>
				<HomeRecentProperties />
			</Suspense>
		</>
	)
}
