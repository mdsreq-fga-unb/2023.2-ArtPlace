import axios from 'axios'

const base_url = "https://2023-2-art-place-berserks.vercel.app/api"
export async function add_produto(playloadProduto) {
    await axios
    .post(base_url+"/produto/cadastrar", playloadProduto, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    });
}
