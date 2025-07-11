import styles from './ContactStyles.module.css';
import { useState } from 'react';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    console.log('Datos del formulario:', data); // Log para depuración

    try {
      const response = await fetch('https://portfolio-jesus-moreira.onrender.com/send-email', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Respuesta del servidor:', response); // Log para depuración

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const result = await response.text();
      console.log('Resultado:', result); // Log para depuración
      setSubmitStatus({ success: true, message: '¡Mensaje enviado con éxito!' });
      e.target.reset(); // Limpia el formulario después del envío exitoso
    } catch (error) {
      console.error('Error al enviar el formulario:', error); // Log para depuración
      setSubmitStatus({ 
        success: false, 
        message: error.message || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      
      <form onSubmit={handleSubmit} noValidate>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className={`hover btn ${styles.submitButton}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Submit'}
        </button>

        {submitStatus && (
          <div className={`${styles.statusMessage} ${
            submitStatus.success ? styles.success : styles.error
          }`}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </section>
  );
}

export default Contact;