import React, { useState } from 'react';

const RegistroLaboratorio = () => {
    const [instituicao, setInstituicao] = useState('');
    const [sala, setSala] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados para o backend
        console.log({ instituicao, sala, descricao });
        // Resetar os campos após o envio
        setInstituicao('');
        setSala('');
        setDescricao('');
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-5 text-center">Registro de Laboratório</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instituicao">
                        Instituição
                    </label>
                    <input
                        type="text"
                        id="instituicao"
                        value={instituicao}
                        onChange={(e) => setInstituicao(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="ID da Unidade"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sala">
                        Sala do Laboratório
                    </label>
                    <input
                        type="text"
                        id="sala"
                        value={sala}
                        onChange={(e) => setSala(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Sala do Laboratório"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descricao">
                        Descrição
                    </label>
                    <textarea
                        id="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Descrição do Laboratório"
                        rows="4"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Registrar Laboratório
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistroLaboratorio;