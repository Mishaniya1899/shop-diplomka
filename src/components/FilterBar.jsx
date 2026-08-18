import { useDispatch, useSelector } from 'react-redux'
import { setSearchQuery, setSortBy, setCategory } from '../store/productsSlice'

function FilterBar() {
  const dispatch = useDispatch()
  const searchQuery = useSelector((state) => state.products.searchQuery)
  const sortBy = useSelector((state) => state.products.sortBy)
  const category = useSelector((state) => state.products.category)

  const cats = ['all', 'smartphones', 'laptops', 'fragrances', 'groceries', 'skincare']

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label className="filter-label">Поиск</label>
        <input className="filter-input" placeholder="Название..." value={searchQuery} onChange={(e) => dispatch(setSearchQuery(e.target.value))} />
      </div>
      <div className="filter-group">
        <label className="filter-label">Категория</label>
        <select className="filter-select" value={category} onChange={(e) => dispatch(setCategory(e.target.value))}>
          {cats.map((c) => <option key={c} value={c}>{c === 'all' ? 'Все' : c}</option>)}
        </select>
      </div>
      <div className="filter-group">
        <label className="filter-label">Сортировка</label>
        <select className="filter-select" value={sortBy} onChange={(e) => dispatch(setSortBy(e.target.value))}>
          <option value="default">Без сортировки</option>
          <option value="price-asc">Цена ↑</option>
          <option value="price-desc">Цена ↓</option>
          <option value="title-asc">Название А-Я</option>
          <option value="title-desc">Название Я-А</option>
          <option value="rating-desc">Рейтинг ↓</option>
          <option value="discount-desc">Скидка</option>
        </select>
      </div>
    </div>
  )
}

export default FilterBar
