/** @typedef { "coloring-books" | "coloring-pages" } CategorySlug */

/**
 * @typedef Category
 * @prop { string } alt
 * @prop { string } description
 * @prop { string } name
 * @prop { CategorySlug } slug
 * @prop { string } src
 */

/**
 * @typedef Product
 * @prop { string } alt
 * @prop { CategorySlug } category
 * @prop { string } description
 * @prop { string } name
 * @prop { number } price
 * @prop { string } slug
 * @prop { string } src
 */