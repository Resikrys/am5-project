import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { toast } from 'react-hot-toast';

const ContactForm = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route('contact.store'), {
      onSuccess: () => {
        toast.success('Mensaje enviado correctamente');
        reset();
      },
      onError: () => {
        toast.error('Hubo un error al enviar el mensaje');
      }
    });
  };

  return (
    <section id="contact" className="flex flex-col">

      <div className="flex justify-center text-center py-4">
        <h2 className="am5-border p-3 text-center text-3xl text-gray-600 mb-6">Contacto</h2>
      </div>

      <div className="max-w-7xl md:mx-11 mx-auto px-4 pb-12">
        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold mb-4">¡Hablemos!</h3>

            <div className="flex flex-wrap space-y-6">

              <div className="flex md:flex-column flex-row md:flex-nowrap flex-wrap w-full md:space-x-5 md:space-y-0 space-y-5">
                {/* Nombre */}
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1">Nombre:</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={data.nombre}
                      onChange={e => setData('nombre', e.target.value)}
                      placeholder="Andrés"
                      className={`w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 
                                            ${errors.nombre ? 'border-red-500' : ''}`}
                    />
                    <span className="absolute right-3 top-2.5 text-gray-500">
                      <i className="bi bi-person-circle"></i>
                    </span>
                  </div>
                  {errors.nombre && <div className="text-red-500 text-sm mt-1">{errors.nombre}</div>}
                </div>

                {/* Apellido */}
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1">Apellido:</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={data.apellido}
                      onChange={e => setData('apellido', e.target.value)}
                      placeholder="Madariaga"
                      className={`w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300
                                            ${errors.apellido ? 'border-red-500' : ''}`}
                    />
                    <span className="absolute right-3 top-2.5 text-gray-500">
                      <i className="bi bi-person-circle"></i>
                    </span>
                  </div>
                  {errors.apellido && <div className="text-red-500 text-sm mt-1">{errors.apellido}</div>}
                </div>
              </div>

              <div className="flex md:flex-column flex-row md:flex-nowrap flex-wrap w-full md:space-x-5 md:space-y-0 space-y-5">
                {/* Email */}
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1">Correo Electrónico:</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={data.email}
                      onChange={e => setData('email', e.target.value)}
                      placeholder="ejemplo1@am5.com"
                      className={`w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300
                                            ${errors.email ? 'border-red-500' : ''}`}
                    />
                    <span className="absolute right-3 top-2.5 text-gray-500">
                      <i className="bi bi-envelope"></i>
                    </span>
                  </div>
                  {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>

                {/* Teléfono */}
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1">Teléfono:</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={data.telefono}
                      onChange={e => setData('telefono', e.target.value)}
                      placeholder="+56608747213"
                      className={`w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300
                                            ${errors.telefono ? 'border-red-500' : ''}`}
                    />
                    <span className="absolute right-3 top-2.5 text-gray-500">
                      <i className="bi bi-telephone"></i>
                    </span>
                  </div>
                  {errors.telefono && <div className="text-red-500 text-sm mt-1">{errors.telefono}</div>}
                </div>
              </div>

              <div className="flex flex-column w-full">
                {/* Mensaje */}
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1">Cuéntanos tu caso:</label>
                  <textarea
                    value={data.mensaje}
                    onChange={e => setData('mensaje', e.target.value)}
                    rows="5"
                    style={{ maxHeight: '140px', overflowY:'auto'}}
                    placeholder="Escribe tu mensaje..."
                    className={`w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300
                                        ${errors.mensaje ? 'border-red-500' : ''}`}
                  ></textarea>
                  {errors.mensaje && <div className="text-red-500 text-sm mt-1">{errors.mensaje}</div>}
                </div>
              </div>
              
              {/* Botón Submit */}
              <div className="w-full text-center mt-4">
                <button
                  type="submit"
                  disabled={processing}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 disabled:opacity-50"
                >
                  {processing ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;