import { NextApiRequest, NextApiResponse } from 'next';

const users = [
    { email: 'admin@exemple.com', password: 'admin123' },
    { email: 'user@exemple.com', password: 'user123'},
];

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        const user = users.find((u) => u.email === email && u.password ===password);

        if (user) {
            res.status(200).json({ message: 'Login bem-sucedido!' });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
};