import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/productsSlice'
import ProductList from '../components/ProductList'
import FilterBar from '../components/FilterBar'

function HomePage() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.products.items)
  const loading = useSelector((state) => state.products.loading)
  const error = useSelector((state) => state.products.error)

  useEffect(() => {
    dispatch(getProducts(100))
  }, [dispatch])

  if (loading) return <main className="main"><div className="container"><div className="loading">Загрузка...</div></div></main>

  if (error) return (
    <main className="main">
      <div className="container">
        <div className="error-message">
          <h3>Ошибка</h3>
          <p>{error}</p>
        </div>
      </div>
    </main>
  )

  return (
    <main className="main">
      <div className="container">
        <h1 className="page-title">Каталог товаров</h1>
        <FilterBar />
        <p className="results-count">Показано товаров: {items.length}</p>
        <ProductList />
      </div>
    </main>
  )
}

export default HomePage
