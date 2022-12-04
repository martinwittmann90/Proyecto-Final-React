import React from 'react'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Enviar')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div>
      <h2  sx={{ backgroundColor: "#f9f9f9", padding: 5 }}>
        Contacto</h2>
      <p sx={{ backgroundColor: "#f9f9f9", padding: 5 }}>
        Si tenes alguna duda podes contactarnos escribiendo un mensaje debajo.</p>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">
            Nombre
          </label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message">
            Mensaje
          </label>
          <textarea id="message" required />
        </div>
        <button type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm