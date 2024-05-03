// Prisma
import type {
	Property,
	PropertyImage,
	PropertyLocation,
	PropertyRate,
	PropertySellerInfo
} from '@prisma/client'

export type PropertyFull = Property & {
	rates: PropertyRate
	location: PropertyLocation
	sellerInfo: PropertySellerInfo
	images: PropertyImage[]
}
