module.exports=class Order{
    #total
    #items
    #user
    constructor(items, user){
        items.forEach(({product, qtt})=>{
            if(qtt>product.stock){
                throw new Error('Quantidade insuficiente em estoque');
            }
        }),
        this.#items=items,
        this.#user=user
    }

}