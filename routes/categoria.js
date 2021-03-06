import routerx from 'express-promise-router';
import categoriaController from '../controllers/CategoriaController';

//Middleware Token
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add', auth.verifyUsuario ,categoriaController.add);
router.get('/query', auth.verifyUsuario ,categoriaController.query);
router.get('/list', auth.verifyUsuario,categoriaController.list);
router.put('/update', auth.verifyUsuario,categoriaController.update);
router.delete('/remove', auth.verifyUsuario,categoriaController.remove);
router.put('/activate', auth.verifyUsuario,categoriaController.activate);
router.put('/desactivate', auth.verifyUsuario,categoriaController.desactivate);


export default router;