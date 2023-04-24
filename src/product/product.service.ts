import { ProductType } from './types/product.type'
import ProductModel from './product.schema'
import { writeFile, readFile } from 'fs/promises'
import { json } from 'stream/consumers'
 
export class ProductService {

    constructor() { }

    async create(product: ProductType) {

        const createdProduct = await ProductModel.create(product)
        return createdProduct
    }

    async list() {
        const listedProducts = await ProductModel.find()
        return listedProducts
    }

    async buscaProdutosAleatorios(countt: number){

        const count = Number(countt)
        const listaProdutos = await ProductModel.aggregate([{ $sample: { size: count }}])
        return listaProdutos
    }


    async createProductList() {

        const produtos = await ProductModel.find()

        await writeFile('produtos.json', JSON.stringify(produtos, null, 2))

    }

    async readProductList() {

        const produtos = await readFile('produtos.json', 'utf-8')
        return JSON.parse(produtos)

    }



    // async findProducts() {

    //     try {
    //         const productList = await readFile('products.json', "utf8")
    //         return JSON.parse(productList)
    //     } catch (error) {
    //         throw new Error("Erro ao ler lista de produtos")
    //     }
    // }

    // async getStock() {
    //     try {
    //         const productList = await this.findProducts()

    //         const productStock = productList.map(produto => {
    //             let stock = {
    //                 nome: produto.nome,
    //                 qtde: produto.qtde,
    //                 preco: produto.preco,
    //                 valor_stock: produto.qtde * produto.preco
    //             }
    //             return stock
    //         })

    //         return productStock
    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // }

    // async getStockValue() {
    //     const stock = await this.getStock()

    //     // const stockValue = stock.reduce((acc, atual) => {
    //     //     return acc + atual.valor_stock

    //     // }, 0)
    //     const stockValue = stock.reduce((acc, atual) => {
    //         acc += atual.valor_stock

    //         return acc

    //     }, 0)

    //     return stockValue
    // }


}