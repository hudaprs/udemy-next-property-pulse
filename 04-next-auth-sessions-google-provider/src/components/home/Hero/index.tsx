// Components
import { BaseInput } from '@/components/base/Input'
import { BaseSelect } from '@/components/base/Select'
import { Button } from '@nextui-org/react'

const HomeHero = () => {
	return (
		<div className='h-[35vh] border-b-2 border-b-[#f4f4f4]'>
			<div className='flex flex-col items-center justify-center h-full gap-4'>
				<h1 className='text-6xl font-bold'>Find The Perfect Rental</h1>
				<h4>Discover the perfect property that suits your needs</h4>
				<div className='flex flex-col md:flex-row items-center justify-center gap-4 w-full'>
					<div className='w-[300px]'>
						<BaseInput
							placeholder='Enter Location (City, State, Zip, etc)'
							fullWidth
						/>
					</div>
					<div className='w-[270px]'>
						<BaseSelect
							select={{
								defaultSelectedKeys: 'all'
							}}
							selectItems={[{ label: 'All', value: 'all' }]}
						/>
					</div>
					<Button>Search</Button>
				</div>
			</div>
		</div>
	)
}

export { HomeHero }
