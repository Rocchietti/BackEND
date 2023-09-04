class ProductManager {
    constructor(){
        this.productos= [

        ]
    }
    getProducts(){
        return this.productos
    } 
    generateId(){
        const contador = this.productos.length
        if(contador === 0){
            return 1
        }{
            return (this.productos[contador-1].id)+1
        }
    }
    addProduct(title,description,price,thumbnail,code,stock){
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.error('Vuelva a intentar')
            return
        }{
            const noRepe= this.productos.find(Element=>Element.code==code) 
            const id= this.generateId();
            if(!noRepe){
                const nuevoProducto={
                    id:id,
                    title,
                    description,
                    price,
                    thumbnail,
                    stock,
                }
                this.productos.push(nuevoProducto)
            }else {
                console.error('el codigo del producto existe')
            }
        }
    }
    getProductId(id)
    {
       const productoEncontrado= this.productos.find(Element=>Element.id==id)
       if(!productoEncontrado){
        console.log('Not Found')
        return
       }{
        return productoEncontrado
       }
    }    
}


const productmanager = new ProductManager()
productmanager.addProduct('producto prueba', 'este es un producto de prueba', 200, 'sin imagen', 'abc123', 25);
console.log(productmanager.getProducts())
productmanager.addProduct('producto prueba', 'este es un producto de prueba', 200, 'sin imagen', 'abc123', 25);
console.log(productmanager.getProductId())

