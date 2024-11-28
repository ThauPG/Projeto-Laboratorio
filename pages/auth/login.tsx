import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
                setError(null);
                router.push("/dashboard")
            } else {
                // login falhou
                const errorData = await response.json();
                setError(errorData.message); // Define o erro a ser exibido
            }
        } catch (err) {
            setError('Ocorreu um erro. Tente novamente.'); 
        }
    };

    const handleRegisterRedirect = () => {
        if (user && user.role === 'tecnico'){
            router.push('/auth/register')
        } else {
            setError('Apenas técnicos podem acessar a página de registro.')
        }

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Senha
                    </label>
                    <input 
                        type="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                <button 
                    type='submit' 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                    Entrar
                </button>
            </form>
            <button onClick={handleRegisterRedirect} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
                Registrar
            </button>
        </div>
    </div>
    );
};

export default Login;