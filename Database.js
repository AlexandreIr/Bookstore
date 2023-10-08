module.exports=class Database{
    #storage={
        authors:[],
        books:[],
        magazines:[],
        orders:[]
    }
    search(key){
        return this.#storage[key];
    }

    saveAuthor(author){
        const alreadyIn=this.#storage.authors.find(a=>a.name===author.name)
        if(!alreadyIn) this.#storage.authors.push(author);
    }

    searchBookByName(book){
        return this.#storage.books.find(b=>b.name===book.name);
    }

    addBooktoStock(bookname){
        const book=this.searchBookByName(bookname);
        book?.addToStock(1);
    }

    saveBook(book){
        const alreadyIn=this.searchBookByName(book);
        if(!alreadyIn) this.#storage.books.push(book);
    }

    searchMagazineByName(magazine){
        return this.#storage.magazines.find(m=>m.name===magazine.name);
    }

    addMagazinetoStock(magazineName){
        const magazine=this.searchMagazineByName(magazineName);
        magazine?.addToStock(1);
    }

    saveMagazine(magazine){
        const mag=this.searchMagazineByName(magazine);
        if(!mag) this.#storage.magazines.push(magazine);
        this.addMagazinetoStock(mag)
    }

    saveOrder(order){
        this.#storage.orders.push(order);
    }
}