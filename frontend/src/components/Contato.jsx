import axios from 'axios';
import React, { useState } from 'react';

export default function Contato() {
  const baseURL = import.meta.env.VITE_API;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whats, setWhats] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, whats, message);
    const data = {
      Name: name,
      Email: email,
      Whatsapp: whats,
      Message: message,
    };
    axios.post(baseURL, data).then((response) => {
      console.log(response);
      setName('');
      setEmail('');
      setMessage('');
      setWhats('');
    });
  };

  return (
    <div className="p-4 bg-slate-50">
      <form
        id="contato"
        className="max-w-md mx-auto my-2 bg-white p-6
       rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-lime-500 mb-6">
          Envie-nos um pedido
        </h2>
        {submitSuccess && (
          <div className="text-green-600 mb-4">Mensagem enviada</div>
        )}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Seu Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full border-2 border-slate-300 p-2 rounded-md
           focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
          <div className="flex-grow">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full border-2 border-slate-300 p-2 rounded-md
             focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="flex-grow">
            <label
              htmlFor="whats"
              className="block text-gray-700 font-bold mb-2"
            >
              Whatsapp
            </label>
            <input
              type="number"
              id="whatsapp"
              name="whatsapp"
              value={whats}
              onChange={(event) => setWhats(event.target.value)}
              className="w-full border-2 border-slate-300 p-2 rounded-md
             focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div>
        <div className="my-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Descrição do que precisa
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full border-2 border-slate-300 p-2 rounded-md
           focus:outline-none focus:border-indigo-500"
            rows="2"
            required
          ></textarea>
        </div>
        {/* <div className="block sm:flex-row sm:space-x-4 mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Serviço de Interesse
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              name="institucional"
              checked={checkboxes.institucional}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Site institucional</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              name="pessoal"
              checked={checkboxes.pessoal}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Website pessoal</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              name="logomarca"
              checked={checkboxes.logomarca}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Logomarca</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              name="banners"
              checked={checkboxes.banners}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Design de banners</span>
          </label>
        </div> */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow-400 py-2 px-4 rounded-md
         hover:bg-indigo-500 hover:text-white focus:outline-none
          focus:bg-indigo-500"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
}
