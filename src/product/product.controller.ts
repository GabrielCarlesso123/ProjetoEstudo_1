import { Request, Response } from 'express'
import { ProductService } from './product.service'
import productSchema from './product.schema'
 
class ProductController {

    async create(req: Request, res: Response) {

        const product = await new ProductService().create(req.body)

        return res.status(200).json(product)

    }

    async list(req: Request, res: Response) {

        const products = await new ProductService().list()

        return res.status(200).json(products)
    }

    async buscaProdutosAleatorios(req: Request, res: Response){
        
        const produtosAletorios = await new ProductService().buscaProdutosAleatorios(req.body.count)
        return res.status(200).json(produtosAletorios)

    }

    async createProductList(req: Request, res: Response){

        const escreveArquivo = await new ProductService().createProductList()
        return res.status(200).json(escreveArquivo)

    }

    async readProductList(req: Request, res: Response){

        const lerArquivo = await new ProductService().readProductList()

        return res.status(200).json(lerArquivo)

    }


    // async list(req: Request, res: Response) {
    //     const productList = await productService.findProducts()

    //     return res.status(200).json(productList)
    // }

    // async getStock(req: Request, res: Response) {
    //     const stockList = await productService.getStock()

    //     return res.status(200).json(stockList)
    // }

    // async getStockValue(req: Request, res: Response) {
    //     const stockValue = await productService.getStockValue()

    //     return res.status(200).json(stockValue)
    // }

}

export default new ProductController()