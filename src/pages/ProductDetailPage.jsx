import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://dummyjson.com/products/' + id)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <main className="main"><div className="container"><div className="loading">Загрузка...</div></div></main>

  if (error) return (
    <main className="main">
      <div className="container">
        <div className="error-message">
          <h3>Ошибка</h3>
          <p>{error}</p>
          <Link to="/" className="back-link">Назад</Link>
        </div>
      </div>
    </main>
  )

  if (!product) return null

  const skidka = product.discountPercentage
  const itog = (product.price - product.price * skidka / 100).toFixed(2)

  return (
    <main className="main">
      <div className="container">
        <Link to="/" className="back-link">← Назад</Link>
        <div className="product-detail">
          <div>
            <img src={product.thumbnail} alt={product.title} className="product-detail-main-image" />
            {product.images && product.images.length > 1 && (
              <div className="product-detail-gallery">
                {product.images.slice(0, 4).map((img, i) => (
                  <img key={i} src={img} alt={product.title} className="product-detail-thumb" />
                ))}
              </div>
            )}
          </div>
          <div>
            <span className="product-category">{product.category}</span>
            <h1 className="product-detail-title">{product.title}</h1>
            <p className="product-brand">Бренд: {product.brand}</p>
            <div className="product-rating">
              <span className="stars">{'★'.repeat(Math.round(product.rating))}</span>
              <span className="rating-value">{product.rating.toFixed(1)}</span>
            </div>
            <p className="product-detail-description">{product.description}</p>
            <div className="product-detail-price">
              <span className="price-current">${itog}</span>
              {skidka > 0 && <span className="price-original">${product.price.toFixed(2)}</span>}
            </div>
            <div className="product-detail-meta">
              <p><b>Наличие:</b> {product.stock} шт.</p>
              <p><b>Бренд:</b> {product.brand}</p>
              <p><b>Категория:</b> {product.category}</p>
              {product.warrantyInformation && <p><b>Гарантия:</b> {product.warrantyInformation}</p>}
              {product.shippingInformation && <p><b>Доставка:</b> {product.shippingInformation}</p>}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetailPage
