import { ProductStockType } from './types/productStock.type'
import productStockModel from './stock.schema';
import { ProductService } from '../product/product.service';

export class StockService {

    constructor() { }

    async create(product: ProductStockType) {

        const createdProduct = await productStockModel.create(product)
        return createdProduct

    }

    async list() {
        const listedProducts = await productStockModel.find()
        return listedProducts
    }

    async getStockValue() {

        const listProducts = new ProductService()

        const products = await listProducts.list()

        products.map(async (produto) => {
            await productStockModel.create({
                ...produto.toObject(),                
                stockValue: produto.quantity * produto.price
            })
        });
    }

    async valorTotalStock(){

        const listaProdutos = new StockService()

        const produtos = await listaProdutos.list()
        
        return produtos.reduce((prev, curr) => {
            return prev + curr.stockValue
        }, 0)

    }

}
