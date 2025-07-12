import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import customers from './customers'
import reviews from './reviews'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, customers, reviews, order],
}
