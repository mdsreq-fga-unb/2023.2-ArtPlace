import { sql } from '@vercel/postgres';

export const inserirAvaliacao = async (req, res) => {
  try {
    const { produto_id, usuario_id, pontuacao, comentario } = req.body;

    const result = await sql`
      INSERT INTO avaliacao (produto_id, usuario_id, pontuacao, comentario)
      VALUES (${produto_id}, ${usuario_id}, ${pontuacao}, ${comentario});
    `;

    return res.status(200).json({ message: 'Avaliação inserida com sucesso!', result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao inserir avaliação.' });
  }
};

export const exibirAvaliacoesProduto = async (req, res) => {
    try {
      const { produto_id } = req.params;
  
      const avaliacoes = await sql`
        SELECT * FROM avaliacao
        WHERE produto_id = ${produto_id};
      `;
  
      return res.status(200).json({ avaliacoes });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao recuperar avaliações do produto.' });
    }
  };