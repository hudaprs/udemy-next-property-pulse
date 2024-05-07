// Next
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Remix Icon
import {
	RiArrowGoBackLine,
	RiBookmark2Line,
	RiShare2Line,
	RiSendPlane2Line,
	RiHotelBedLine,
	RiShowersLine,
	RiRuler2Line,
	RiCheckLine
} from '@remixicon/react'

// Utils
import { paths } from '@/utils/path.util'

// Components
import { BaseInput } from '@/components/base/Input'
import { BaseTextArea } from '@/components/base/TextArea'
import { BaseButton } from '@/components/base/Button'

// Queries
import { getPropertyDetail } from '@/db/queries/properties/detail.query'

// Images
import BannerImage from '@/assets/images/a1.jpg'

type PagePropertyDetailProps = {
	params: {
		id: string
	}
}

export default async function PagePropertyDetail(
	props: PagePropertyDetailProps
) {
	// Get property detail
	const property = await getPropertyDetail({ id: props.params.id })

	// Check if property is not found!
	if (!property) notFound()

	return (
		<>
			{/* Images */}
			<section>
				<div className='container-xl m-auto'>
					<div className='grid grid-cols-1'>
						<Image
							src={BannerImage}
							alt='property'
							className='object-cover h-[400px] w-full'
							width='1800'
							height='400'
						/>
					</div>
				</div>
			</section>
			{/* End Images */}

			{/* Information */}
			<section>
				<div className='container m-auto py-6 px-6'>
					<BaseButton
						variant='ghost'
						className={'border-0'}
						as={Link}
						href={paths.property.index()}
					>
						<RiArrowGoBackLine />
						Back to Properties
					</BaseButton>
				</div>
			</section>
			{/* End Information */}

			{/* Content */}
			<section className='bg-blue-50'>
				<div className='container m-auto py-10 px-6'>
					<div className='grid grid-cols-1 xl:grid-cols-[70%_30%] w-full gap-6'>
						<main>
							{/* Details */}
							<div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
								<div className='text-gray-500 mb-4'>{property.type}</div>
								<h1 className='text-3xl font-bold mb-4'>{property.name}</h1>
								<div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
									<i className='fa-solid fa-location-dot text-lg text-orange-700 mr-2'></i>
									<p className='text-orange-700'>
										{property.propertyLocation?.street}{' '}
										{property.propertyLocation?.state},{' '}
										{property.propertyLocation?.zipcode}
									</p>
								</div>

								<h3 className='text-lg font-bold my-6 bg-gray-800 text-white p-2'>
									Rates & Options
								</h3>
								<div className='flex flex-col md:flex-row justify-around'>
									<div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
										<div className='text-gray-500 mr-2 font-bold'>Nightly</div>
										<div className='text-2xl font-bold'>
											${property.propertyRate?.nightly?.toLocaleString() || 0}
										</div>
									</div>
									<div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
										<div className='text-gray-500 mr-2 font-bold'>Weekly</div>
										<div className='text-2xl font-bold text-blue-500'>
											${property.propertyRate?.weekly?.toLocaleString() || 0}
										</div>
									</div>
									<div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
										<div className='text-gray-500 mr-2 font-bold'>Monthly</div>
										<div className='text-2xl font-bold text-blue-500'>
											${property.propertyRate?.monthly?.toLocaleString() || 0}
										</div>
									</div>
								</div>
							</div>
							{/* End Details */}

							{/* Description and Details */}
							<div className='bg-white p-6 rounded-lg shadow-md mt-6'>
								<h3 className='text-lg font-bold mb-6'>
									Description & Details
								</h3>
								<div className='flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9'>
									<p className='flex items-center gap-1'>
										<RiHotelBedLine /> {property.beds}
										<span className='hidden sm:inline'>Beds</span>
									</p>
									<p className='flex items-center gap-1'>
										<RiShowersLine /> {property.baths}
										<span className='hidden sm:inline'>Baths</span>
									</p>
									<p className='flex items-center gap-1'>
										<RiRuler2Line />
										{property.squareFeet.toLocaleString()}{' '}
										<span className='hidden sm:inline'>sqft</span>
									</p>
								</div>
								<p className='text-gray-500 mb-4'>{property.description}</p>
							</div>
							{/* End Description and Details */}

							{/* Amenities */}
							<div className='bg-white p-6 rounded-lg shadow-md mt-6'>
								<h3 className='text-lg font-bold mb-6'>Amenities</h3>

								<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none'>
									{property.amenities.split(',').map((amenity, index) => (
										<li
											key={`amenity-${amenity}-${index}`}
											className='flex items-center gap-1'
										>
											<RiCheckLine className='text-green-700' />
											<p className='font-medium'>{amenity}</p>
										</li>
									))}
								</ul>
							</div>
							{/* End Amenities */}

							{/* Maps */}
							<div className='bg-white p-6 rounded-lg shadow-md mt-6'>
								<div id='map'></div>
							</div>
							{/* End Maps */}
						</main>

						{/* Form */}
						<aside className='space-y-4'>
							<BaseButton className='bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'>
								<RiBookmark2Line /> Bookmark Property
							</BaseButton>
							<BaseButton className='bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'>
								<RiShare2Line /> Share Property
							</BaseButton>

							<div className='bg-white p-6 rounded-lg shadow-md'>
								<h3 className='text-xl font-bold mb-6'>
									Contact Property Manager
								</h3>
								<form>
									<div className='mb-4'>
										<label
											className='block text-gray-700 text-sm font-bold mb-2'
											htmlFor='name'
										>
											Name:
										</label>
										<BaseInput
											id='name'
											type='text'
											placeholder='Enter your name'
											required
										/>
									</div>
									<div className='mb-4'>
										<label
											className='block text-gray-700 text-sm font-bold mb-2'
											htmlFor='email'
										>
											Email:
										</label>
										<BaseInput
											id='email'
											type='email'
											placeholder='Enter your email'
											required
										/>
									</div>
									<div className='mb-4'>
										<label
											className='block text-gray-700 text-sm font-bold mb-2'
											htmlFor='phone'
										>
											Phone:
										</label>
										<BaseInput
											id='phone'
											type='text'
											placeholder='Enter your phone number'
										/>
									</div>
									<div className='mb-4'>
										<label
											className='block text-gray-700 text-sm font-bold mb-2'
											htmlFor='message'
										>
											Message:
										</label>
										<BaseTextArea
											id='message'
											placeholder='Enter your message'
										/>
									</div>
									<div>
										<BaseButton
											className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'
											type='submit'
										>
											<RiSendPlane2Line /> Send Message
										</BaseButton>
									</div>
								</form>
							</div>
						</aside>
						{/* End Form */}
					</div>
				</div>
			</section>
			{/* End Content */}
		</>
	)
}
