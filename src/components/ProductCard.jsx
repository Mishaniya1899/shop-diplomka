import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const skidka = product.discountPercentage
  const itog = (product.price - product.price * skidka / 100).toFixed(2)

  return (
    <div className="product-card">
      <Link to={'/product/' + product.id}>
        <div className="product-image-wrapper">
          <img src={product.thumbnail} alt={product.title} className="product-image" />
          {skidka > 0 && <span className="product-badge">-{skidka}%</span>}
        </div>
        <div className="product-info">
          <span className="product-category">{product.category}</span>
          <h3 className="product-title">{product.title}</h3>
          <p className="product-brand">{product.brand}</p>
          <div className="product-rating">
            <span className="stars">{'★'.repeat(Math.round(product.rating))}</span>
            <span className="rating-value">{product.rating.toFixed(1)}</span>
          </div>
          <div className="product-price">
            <span className="price-current">${itog}</span>
            {skidka > 0 && <span className="price-original">${product.price.toFixed(2)}</span>}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
