import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <main className="main">
      <div className="container">
        <Link to="/" className="back-link">← Назад</Link>
        <div className="about-page">
          <h1>О проекте</h1>
          <p>Каталог товаров с API <a href="https://dummyjson.com" target="_blank" rel="noopener noreferrer">dummyjson.com</a></p>
          <h2>Возможности:</h2>
          <ul>
            <li>Поиск товаров</li>
            <li>Фильтрация по категориям</li>
            <li>Сортировка по цене и рейтингу</li>
            <li>Страница товара</li>
          </ul>
          <h2>Стек:</h2>
          <ul>
            <li>React + Vite</li>
            <li>Redux Toolkit</li>
            <li>React Router</li>
            <li>Axios</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
