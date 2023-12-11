import axios from 'axios'

const base_url = "https://2023-2-art-place-berserks.vercel.app/api"
export async function add_user(playload) {
    await axios
    .post(base_url+"/usuarios/cadastrar", playload, {
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

export async function login_user(playload) {
  const result = await axios
  .post(base_url+"/usuarios/login", playload, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    const userData = response.data.usuario
    return userData
  })
  .catch((error) => {
    console.log(error.code)
    return null
  });
  return result
}