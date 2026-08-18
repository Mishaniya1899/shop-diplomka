function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <h3>Ошибка</h3>
      <p>{message}</p>
    </div>
  )
}

export default ErrorMessage
