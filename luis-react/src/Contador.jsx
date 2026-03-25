import { useState, useEffect } from 'react'

export function Contador() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 10) {
      alert('¡El contador llego a su limite 10!')
      setCount(10)
    }
  }, [count])

  const incrementar = () => setCount((count) => count + 1)
  const decrementar = () => setCount((count) => count - 1)
  const reiniciar = () => setCount(0)

  return (
    <div className="contador-container">
      <h2>CONTADOR</h2>
      <p>Valor actual: <strong>{count}</strong></p>
      <div className="contador-buttons">
        <button onClick={decrementar} className="btn-decrement">-</button>
        <button onClick={incrementar} className="btn-increment">+</button>
        <button onClick={reiniciar} className="btn-reset">Reiniciar</button>
      </div>
      {count === 10 && <p style={{ color: 'red' }}> Has alcanzado el límite máximo de 10</p>}
    </div>
  )
}
