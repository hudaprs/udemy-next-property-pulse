// Components
import { HomeHero } from '@/components/home/Hero'
import { HomeInfoBox } from '@/components/home/InfoBox'
import { HomeRecentProperties } from '@/components/home/RecentProperties'

export default function PageHome() {
	return (
		<>
			<HomeHero />
			<HomeInfoBox />
			<HomeRecentProperties />
		</>
	)
}
