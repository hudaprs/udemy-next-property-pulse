// Next
import Link from 'next/link'

// Next UI
import { Card, CardBody, Button } from '@nextui-org/react'

const Forbidden = () => {
	return (
		<div className='flex flex-col items-center justify-center h-[80vh] text-center'>
			<Card className='py-4 w-[350px]'>
				<CardBody className='overflow-visible py-2 flex flex-col items-center gap-8'>
					<h1 className='font-bold text-4xl'>403 Forbidden</h1>
					<Button as={Link} href='/' variant='solid'>
						Go Home
					</Button>
				</CardBody>
			</Card>
		</div>
	)
}

export { Forbidden }
