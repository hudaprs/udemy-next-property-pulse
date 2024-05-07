// DB
import { db } from '@/db/connection.db'

type GetPropertyList = {
	onlyRecent?: boolean
}

/**
 * @description Get list of properties
 *
 * @param {GetPropertyList} options
 *
 */
export const getPropertyList = (options?: GetPropertyList) => {
	return db.property.findMany({
		orderBy: {
			createdAt: 'desc'
		},
		include: {
			propertyImages: true,
			propertyLocation: true,
			propertyRate: true,
			propertySellerInfo: true
		},
		take: options?.onlyRecent ? 3 : undefined
	})
}
