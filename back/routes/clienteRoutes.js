import { cadastrarUsuario } from '../controllers/clienteController';
import { realizarLogin } from '../controllers/clienteController';

const router = express.Router();

router.post("/usuarios/cadastrar", cadastrarUsuario);
router.post("/usuarios/login", realizarLogin);

export default router;