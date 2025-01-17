import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import category from './category'
import customers from './customers'
import material from './material'
import order from './order'
import deliveryZone from './deliveryZone'
import reviews from './reviews'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, category, customers, material, order, deliveryZone, reviews, ],
}
