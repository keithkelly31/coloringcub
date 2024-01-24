/** @typedef { "products" | "site_assets" } Buckets */
/** @typedef { "coloring-books" | "coloring-pages" } Categories */
/** @typedef { "cute-baby-animals" } Collections */
// /** @typedef { "african-animals" | "north-american-animals" | "north-american-amphibians-and-reptiles" | "north-american-birds" | "north-american-mammals" } Subcollections */

/** 
 * @typedef { object } Base
 * @prop { string } description
 * @prop { Image } image
 * @prop { Meta } meta
 * @prop { string } name
 */

/**
 * @typedef { object } Image
 * @prop { string } alt
 * @prop { Buckets } bucket
 * @prop { string } file
 * @prop { string } [src]
 */

/**
 * @typedef { object } Category
 * @extends Base
 * @prop { "coloring-books" | "coloing-pages" } slug
 */

/**
 * @typedef { object } Collection
 * @extends Base
 * @prop { Array<Categories> } categories
 * @prop { Array<Subcollections> } [subcollections]
 */

/**
 * @typedef { object } Meta
 * @prop { string } description
 * @prop { Array<string> } keywords
 * @prop { string } title
 */

/**
 * @typedef { object } Product
 * @extends Base
 * @prop { Categories } category
 * @prop { Collections } collection
 * @prop { number } price
 * @prop { Array<Subcollections> } [subcollections]
 */

/**
 * @typedef { object } Subcollection
 * @extends Base
 * @prop { string } collection
 */
