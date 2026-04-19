import { useState } from 'react'

export default function Checkout() {
  const [done, setDone] = useState(false)

  if (done) return <h2>Order completed successfully</h2>

  return (
    <div className="form">
      <input placeholder="Name" />
      <input placeholder="Address" />
      <input placeholder="Card" />
      <button onClick={() => setDone(true)}>Complete Purchase</button>
    </div>
  )
}