import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './user/user.controller'
import productController from './product/product.controller'
import stockController from './stock/stock.controller'


const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.post('/users', userController.create)
// routes.get('/users', userController.list)
// routes.get('/users/:id', userController.find)
// routes.get('/users-name', userController.findByName)
// routes.put('/users/:id', userController.update)
// routes.delete('/users/:id', userController.delete)

routes.post('/products', productController.create)
routes.get('/products', productController.list)
routes.get('/produtos-aleatorios',productController.buscaProdutosAleatorios)
routes.get('/escreveArquivo', productController.createProductList)
routes.get('/lerArquivo', productController.readProductList)


routes.get('/producsStockList', stockController.list)
routes.get('/productStock', stockController.getStockValue)
routes.get('/valorTotalStock', stockController.valorTotalStock)

export default routes