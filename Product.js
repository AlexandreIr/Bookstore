module.exports=class Product{
    #price
    #inStock
    constructor(name, description, price, inStock=0){
        this.name=name
        this.description=description
        this.#price=price
        this.#inStock=inStock
    }

    addToStock(qtd){
        this.#inStock+=qtd
    }

    removeFromStock(qtd){
        this.#inStock-=qtd
    }

    get stock(){
        return this.#inStock
    }

    set price(newPrice){
        this.#price=newPrice
    }

    get price(){
        return `R$ ${this.#price}`
    }
}

