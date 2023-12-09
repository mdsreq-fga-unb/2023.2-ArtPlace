import { sql } from '@vercel/postgres';

export const getAllArtistas = (req, res) => {
  const response = 'pegando todos os artistas'
  console.log(response)
  res.send(response);
};

export const createTableArtistas = async (req, res) => {
  try {
      const result = await sql`CREATE TABLE Cliente (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255),
        email VARCHAR(255),
        telefone VARCHAR(15)
    );`;
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(500).json({ error});
  }
};


