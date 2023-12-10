import { sql } from "@vercel/postgres";

export const cadastrarProduto = async (req, res) => {
  try {
    const { nome, material, preco, avaliacao, idArtista } = req.body;

    const result = await sql`
      INSERT INTO produtos (nome, material, preco, avaliacao, id_artista)
      VALUES (${nome}, ${material}, ${preco}, ${avaliacao}, ${idArtista});
    `;
    return res
      .status(200)
      .json({ message: "Produto cadastrado com sucesso!", result: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao cadastrar produto." });
  }
};

export const editarProduto = async (req, res) => {
  try {
    const produtoId = req.params.id;
    const { nome, material, preco, avaliacao, idArtista } = req.body;
    const result = await sql`UPDATE produtos
    SET (nome, material, preco, avaliacao, id_artista) = (${nome}, ${material}, ${preco}, ${avaliacao}, ${idArtista})
    WHERE id = ${produtoId};`;

    return res
      .status(200)
      .json({ message: "Produto cadastrado com sucesso!", result: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao editar produto." });
  }
};

export const deletarProduto = async (req, res) => {
  try {
    const produtoId = req.params.id;
    const result = await sql` DELETE FROM Produtos
    WHERE id = ${produtoId};`;
    return res.status(200).json({ message: "Produto deletado com sucesso!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar produto." });
  }
};

export const buscarProduto = async (req, res) => {
  try {
    const produtoId = req.params.id;
    const result = await sql`SELECT * FROM produtos WHERE id = ${produtoId};`;
    const produtoData = result.rows[0]
    return res
    .status(200)
    .json({ message: "Produto encontrado com sucesso!", result: produtoData });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar produto." });
  }
};
