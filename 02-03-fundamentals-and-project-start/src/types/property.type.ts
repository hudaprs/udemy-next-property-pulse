// Prisma
import type {
	Property,
	PropertyImage,
	PropertyLocation,
	PropertyRate,
	PropertySellerInfo
} from '@prisma/client'

export type PropertyFull = Property & {
	propertyRate: PropertyRate | null
	propertyLocation: PropertyLocation | null
	propertySellerInfo: PropertySellerInfo | null
	propertyImages: PropertyImage[]
}
