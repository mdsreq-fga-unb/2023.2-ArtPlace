import { sql } from '@vercel/postgres';

export const cadastrarProduto = async (req, res) => {
    try {
      const { descricao, avaliacao, nome, materiais, valor } = req.body;
  
      const result = await sql`
        INSERT INTO produtos (Descricao, Avaliacao, Nome, Material, Preco)
        VALUES (${descricao}, ${avaliacao}, ${nome}, ${materiais}, ${valor});
      `;
  
      return res.status(200).json({ message: 'Produto cadastrado com sucesso!', result });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao cadastrar produto.' });
    }
  };