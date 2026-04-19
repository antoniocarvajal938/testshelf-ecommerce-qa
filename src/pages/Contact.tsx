import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setSuccess(true)

    setTimeout(() => {
      setSuccess(false)
      setForm({ name: '', email: '', message: '' })
    }, 2500)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Get in touch
        </h1>
        <p className="text-gray-500">
          Have a question, feedback, or just want to talk about books? We’d love to hear from you.
        </p>
      </div>

      {/* TOAST */}
      {success && (
        <div className="fixed top-6 right-6 bg-white border-l-4 border-green-500 shadow-lg rounded-lg px-6 py-4 z-50">
          <p className="text-sm font-medium">Message sent successfully</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* LEFT - INFO */}
        <div className="flex flex-col gap-6">
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p className="text-gray-500 text-sm">
              We usually respond within 24 hours.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
  
  <p className="text-sm mb-2">
    📧 <span className="font-medium">Email:</span>{' '}
    <a
      href="mailto:support@bookstore.com"
      className="hover:text-orange-600 transition"
    >
      support@bookstore.com
    </a>
  </p>

  <p className="text-sm mb-2">
    📍 <span className="font-medium">Location:</span>{' '}
    <a
      href="https://www.google.com/maps?q=Málaga,Spain"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-orange-600 transition"
    >
      Málaga, Spain
    </a>
  </p>

  <p className="text-sm">
    📞 <span className="font-medium">Phone:</span>{' '}
    <a
      href="tel:+34600000000"
      className="hover:text-orange-600 transition"
    >
      +34 600 000 000
    </a>
  </p>

</div>

          {/* EXTRA VISUAL */}
          <div className="bg-gradient-to-br from-black to-gray-500 text-white p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Why contact us?</h3>
            <p className="text-sm text-gray-200">
              Whether you're looking for recommendations or need help with your order,
              our team is here for you.
            </p>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="bg-white p-8 rounded-xl shadow-sm border">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
            />

            <button
              type="submit"
              className="bg-orange-600 text-white py-3 rounded-md font-medium 
                         hover:bg-orange-500 transition transform hover:scale-[1.02] active:scale-95"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}