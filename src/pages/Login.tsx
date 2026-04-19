import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false) // 👈 añadido

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (email === 'test@test.com' && password === '123456') {
      setSuccess(true) // 👈 reemplaza alert
      setError('')

      setTimeout(() => {
        setSuccess(false)
      }, 2500)
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      
      {/* ✅ TOAST (nuevo, no afecta al layout) */}
      {success && (
        <div className="fixed top-6 right-6 bg-white border-l-4 border-green-500 shadow-lg rounded-lg px-6 py-4 flex items-center gap-3 animate-fade-in z-50">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <p className="text-sm font-medium">Login successful</p>
        </div>
      )}

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* LEFT - INFO */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-black to-gray-400 text-white p-10">
          <h2 className="text-3xl font-bold mb-4">
            Welcome back 👋
          </h2>
          <p className="text-white-300 mb-6">
            Login to access your cart and continue your reading journey.
          </p>

          <div className="bg-white/10 p-4 rounded-lg text-sm">
            <p className="font-semibold mb-2">Test credentials:</p>
            <p>Email: test@test.com</p>
            <p>Password: 123456</p>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="bg-orange-600 text-white py-3 rounded-md font-medium 
                         hover:bg-orange-500 transition transform hover:scale-[1.02] active:scale-95"
            >
              Sign in
            </button>
          </form>

          {/* MOBILE credentials */}
          <div className="mt-6 md:hidden bg-gray-100 p-4 rounded-lg text-sm">
            <p className="font-semibold mb-2">Test credentials:</p>
            <p>Email: test@test.com</p>
            <p>Password: 123456</p>
          </div>
        </div>
      </div>
    </div>
  )
}