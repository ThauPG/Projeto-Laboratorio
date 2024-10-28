import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        const { data: user, error } = await supabase
            .from('users')
            .select('id, email, password')
            .eq('email', email)
            .eq('password', password)
            .single();

        if (error || !user) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }
        if (user.password === password) {
        return res.status(200).json({ message: 'Login bem-sucedido!', user });
        } else {
            return res.status(401).json({ message: 'Credenciais inválidas' })
        }
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
}