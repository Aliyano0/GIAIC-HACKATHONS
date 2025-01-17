import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import customers from './customers'
import order from './order'
import deliveryZone from './deliveryZone'
import reviews from './reviews'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, customers, order, deliveryZone, reviews, ],
}
