import { cadastrarUsuario } from '../controllers/usuarioController';

const req = {
  body: {
    nome: 'Teste',
    email: 'teste@example.com',
    senha: 'senha123',
    telefone: '123456789',
    isArtist: true,
  },
};

const res = {
  status: jest.fn(() => res),
  json: jest.fn(),
};

jest.mock('@vercel/postgres', () => ({
  sql: jest.fn(() => ({ rows: [] })), 
}));

jest.mock('bcrypt', () => ({
  hash: jest.fn(() => 'hashedSenha123'),
}));

describe('Teste para cadastrarUsuario', () => {
  it('deve cadastrar um usuário com sucesso', async () => {
    await cadastrarUsuario(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Usuário cadastrado com sucesso!', result: [] });
  });
});
