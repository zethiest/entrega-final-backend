import fs from 'fs'

export class CartManager {
    constructor() {
        this.filePath = './src/mannagers/carts.json'
        this.carts = this.loadCarts()
    }


    loadCarts() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf-8')
            return JSON.parse(data)
        } catch (err) {
            return []
        }
    }


    saveCarts() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.carts, null, 2))
    }

    
    generateUniqueId() {
        return this.carts.length ? this.carts[this.carts.length - 1].id + 1 : 1
    }

    
    addCart(cart) {
        this.carts.push(cart)
        this.saveCarts()
    }
}