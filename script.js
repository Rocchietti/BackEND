class ProductManager {
    constructor(){
        this.productos= [

        ]
    }
    getProducts(){
        return this.productos
    } 
    getProductId(id)
    {
       const productoEncontrado= this.productos.find((p)=>p.id===id)
       if(!productoEncontrado){
        console.log('Not Found')
        return
       }else{
        return productoEncontrado
       }
    }   
    addProduct(products){
        const { title, description, price, thumbnail, code, stock } = products
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.error('Vuelva a intentar')
            return
        }
            const noRepe= this.productos.some((p)=>p.code===code) 
            if(noRepe){
                console.error('el codigo del producto existe')
                return
            }
            let id
            if(!this.productos.length){
                id = 1
            } else {
                id = this.productos[this.productos.length-1].id +1
            }
                const ProductoFinal= {id,...products}
                this.productos.push(ProductoFinal)
                console.log('producto añadido');
                return
            }
        }
    


const productmanager = new ProductManager()
productmanager.addProduct({title: 'producto prueba', 
description: 'este es un producto de prueba',
price: 200, 
thumbnail:'sin imagen', 
code: 'abc123', 
stock: 25});
console.log(productmanager.getProducts())
productmanager.addProduct({title: 'producto prueba', 
description: 'este es un producto de prueba',
price: 200, 
thumbnail:'sin imagen', 
code: 'abc123', 
stock: 25});
console.log(productmanager.getProductId())



