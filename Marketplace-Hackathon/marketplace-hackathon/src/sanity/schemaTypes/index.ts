import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import customers from './customers'
import order from './order'
import reviews from './reviews'
import shipment from './shipment'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, customers, order, reviews, shipment],
}
