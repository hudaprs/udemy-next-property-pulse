// DB
import { db } from '@/db/connection.db'

type GetPropertyDetail = {
	id: string
}

/**
 * @description Get property detail
 *
 * @param {GetPropertyDetail} options
 *
 */
export const getPropertyDetail = (options: GetPropertyDetail) => {
	return db.property.findFirst({
		where: { id: options.id },
		include: {
			images: true,
			location: true,
			rate: true,
			sellerInfo: true
		}
	})
}
