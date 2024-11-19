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
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem'}}
                        />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Senha</label>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem'}}
                    />
                </div>
                {error && <p style={{color: 'red' }}>{error}</p>}
                <button type='submit' style={{ padding: '0.5rem 1rem' }}>
                    Entrar
                </button>
            </form>
            <button onClick={handleRegisterRedirect} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
                Registrar
            </button>
        </div>
    );
};

export default Login;