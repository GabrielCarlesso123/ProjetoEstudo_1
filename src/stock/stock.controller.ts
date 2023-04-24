import { Request, Response } from 'express'
import { StockService } from './stock.service'


class ProductStockController {

    async create(req: Request, res: Response) {

        const product = await new StockService().create(req.body)

        return res.status(200).json(product)

    }

    async list(req: Request, res: Response) {
        const products = await new StockService().list()
        return res.status(200).json(products)
    }

    async getStockValue(req: Request, res: Response) {

        const products = await new StockService().getStockValue()

        return res.status(200).json(products)

    }

    async valorTotalStock(req: Request, res: Response) {

        const valorStock = await new StockService().valorTotalStock()

        return res.status(200).json(valorStock)

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

export default new ProductStockController()