// pages/dashboard.tsx
import React from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
    const router = useRouter();

    // Exemplo de dados de laboratórios
    const laboratorios = [
        { id: 1, nome: 'Laboratório de Química', descricao: 'Equipamentos de química básica' },
        { id: 2, nome: 'Laboratório de Física', descricao: 'Equipamentos de física avançada' },
        { id: 3, nome: 'Laboratório de Biologia', descricao: 'Equipamentos de biologia molecular' },
        { id: 4, nome: 'Laboratório de Informática', descricao: 'Computadores e softwares diversos' },
    ];

    const handleAddLaboratorio = () => {
        router.push('/dashboard/registro-laboratorio'); // Redireciona para a página de registro de laboratório
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-blue-600 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-white text-2xl font-bold">Agenda de Laboratórios</h1>
                    <button
                        onClick={handleAddLaboratorio}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Adicionar Laboratório
                    </button>
                </div>
            </nav>

            {/* Conteúdo do Dashboard */}
            <div className="container mx-auto p-5">
                <h2 className="text-xl font-bold mb-4">Laboratórios</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {laboratorios.map((lab) => (
                        <div key={lab.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
                            <h3 className="text-lg font-semibold">{lab.nome}</h3>
                            <p className="text-gray-600">{lab.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;