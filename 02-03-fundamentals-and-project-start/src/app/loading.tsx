// Next UI
import { Spinner } from '@nextui-org/react'

export default function PageLoading() {
	return (
		<div className='flex flex-col items-center justify-center h-[80vh] text-center'>
			<Spinner label='Loading...' color='current' size='lg' />
		</div>
	)
}
