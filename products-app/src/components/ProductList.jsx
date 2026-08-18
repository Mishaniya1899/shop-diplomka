import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

function ProductList() {
  const items = useSelector((state) => state.products.items)
  const searchQuery = useSelector((state) => state.products.searchQuery)
  const sortBy = useSelector((state) => state.products.sortBy)
  const category = useSelector((state) => state.products.category)

  let list = items.slice()

  if (searchQuery) {
    const q = searchQuery.toLowerCase()
    list = list.filter((item) => item.title.toLowerCase().includes(q))
  }

  if (category !== 'all') {
    list = list.filter((item) => item.category === category)
  }

  if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price)
  if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price)
  if (sortBy === 'title-asc') list.sort((a, b) => a.title.localeCompare(b.title))
  if (sortBy === 'title-desc') list.sort((a, b) => b.title.localeCompare(a.title))
  if (sortBy === 'rating-desc') list.sort((a, b) => b.rating - a.rating)
  if (sortBy === 'discount-desc') list.sort((a, b) => b.discountPercentage - a.discountPercentage)

  if (list.length === 0) return <div className="no-results"><p>Товары не найдены</p></div>

  return (
    <div className="product-list">
      {list.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}

export default ProductList
