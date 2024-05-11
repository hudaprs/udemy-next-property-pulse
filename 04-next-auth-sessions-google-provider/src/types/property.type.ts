// Prisma
import type {
	Property,
	PropertyImage,
	PropertyLocation,
	PropertyRate,
	PropertySellerInfo
} from '@prisma/client'

export type PropertyFull = Property & {
	rate: PropertyRate | null
	location: PropertyLocation | null
	sellerInfo: PropertySellerInfo | null
	images: PropertyImage[]
}
