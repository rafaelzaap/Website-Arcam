import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ModalAssociacao({ aberto, fechar }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    indicativo: '',
    classe: '',
    mensagem: ''
  });

  const [enviado, setEnviado] = useState(false);
  const [erroEnvio, setErroEnvio] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(false);
    setErroEnvio(false);
    setEnviando(true);

    // Credenciais do EmailJS
    const serviceId = 'service_9h8pfbo';
    const templateId = 'template_uem8l6o';
    const publicKey = 'JWsuTyZFW1lm-AeYh';

    // Enviar email usando EmailJS
    emailjs.send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log('Email enviado com sucesso!', response.status, response.text);
        setEnviando(false);
        setEnviado(true);

        // Resetar após 3 segundos e fechar modal
        setTimeout(() => {
          setEnviado(false);
          setFormData({
            nome: '',
            email: '',
            telefone: '',
            indicativo: '',
            classe: '',
            mensagem: ''
          });
          fechar();
        }, 3000);
      })
      .catch((err) => {
        console.error('Falha ao enviar o email:', err);
        setEnviando(false);
        setErroEnvio(true);

        // Mostrar erro por 5 segundos
        setTimeout(() => {
          setErroEnvio(false);
        }, 5000);
      });
  };

  if (!aberto) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="bg-blue-800 text-yellow-300 p-6 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <i className="fas fa-user-plus text-2xl"></i>
            <h2 className="text-2xl font-bold">Formulário de Associação</h2>
          </div>
          <button 
            onClick={fechar}
            className="text-yellow-300 hover:text-yellow-100 transition"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        <div className="p-6">
          {enviado ? (
            <div className="text-center py-12">
              <i className="fas fa-check-circle text-green-500 text-6xl mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Solicitação Enviada!</h3>
              <p className="text-gray-600">
                Entraremos em contato em breve. 73!
              </p>
            </div>
          ) : erroEnvio ? (
            <div className="text-center py-12">
              <i className="fas fa-exclamation-circle text-red-500 text-6xl mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Erro ao Enviar!</h3>
              <p className="text-gray-600 mb-4">
                Não foi possível enviar sua solicitação. Por favor, tente novamente mais tarde.
              </p>
              <button
                onClick={() => setErroEnvio(false)}
                className="bg-blue-600 text-yellow-300 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Tentar Novamente
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    disabled={enviando}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={enviando}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    disabled={enviando}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100"
                    placeholder="(22) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Indicativo (se possuir)
                  </label>
                  <input
                    type="text"
                    name="indicativo"
                    value={formData.indicativo}
                    onChange={handleChange}
                    disabled={enviando}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100"
                    placeholder="PY1XXX"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Classe de Licença
                </label>
                <select
                  name="classe"
                  value={formData.classe}
                  onChange={handleChange}
                  disabled={enviando}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100"
                >
                  <option value="">Selecione...</option>
                  <option value="nao-possui">Não possuo licença</option>
                  <option value="classe-c">Classe C</option>
                  <option value="classe-b">Classe B</option>
                  <option value="classe-a">Classe A</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Mensagem / Observações
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows="4"
                  disabled={enviando}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100"
                  placeholder="Conte-nos um pouco sobre seu interesse no radioamadorismo..."
                ></textarea>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700">
                  <i className="fas fa-info-circle text-yellow-600 mr-2"></i>
                  Ao enviar este formulário, você manifesta interesse em se associar à ARCAM. 
                  Entraremos em contato para fornecer mais informações sobre valores e procedimentos.
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={enviando}
                  className="flex-1 bg-blue-600 text-yellow-300 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {enviando ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Enviar Solicitação
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={fechar}
                  disabled={enviando}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalAssociacao;
