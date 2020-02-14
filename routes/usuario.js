import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController'

import auth from '../middlewares/auth';

const router = routerx();

//Para partir el proyecto sacar el verify administador, como se muestra a continuación
//Y crear usuario administrador a través de POSTMAN en el correo se adjunta la petición
//Una vez creador el usuario administrador se agrega el verify administrador y se borra
//la línea 12 de este código =>  (router.post('/add',usuarioController.add);
router.post('/add',usuarioController.add);
//router.post('/add', auth.verifyAdministrador ,usuarioController.add);
router.get('/query', auth.verifyAdministrador,usuarioController.query);
router.get('/list',auth.verifyAdministrador,usuarioController.list);
router.put('/update', auth.verifyAdministrador,usuarioController.update);
router.delete('/remove', auth.verifyAdministrador,usuarioController.remove);
router.put('/activate',auth.verifyAdministrador,usuarioController.activate);
router.put('/desactivate',auth.verifyAdministrador,usuarioController.desactivate);
router.post('/login',usuarioController.login)

export default router;