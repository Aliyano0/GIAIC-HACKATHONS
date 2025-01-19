import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import customers from './customers'
import order from './order'
import deliveryZone from './deliveryZone'
import reviews from './reviews'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, customers, order, deliveryZone, reviews,],
}
