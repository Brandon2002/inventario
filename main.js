import Product from "./product.js";
import Inventario from "./inventario.js";

class App{
    constructor(){
        this._btnAdd = document.querySelector('#btnAdd');
        this._btnAdd.addEventListener('click', this.readForm);
        this._productos = new Inventario();
        this._btnE = document.querySelector('#btnE')
        this._btnE.addEventListener('click', this.readFormE);
        this._btnB = document.querySelector('#btnB')
        this._btnB.addEventListener('click', this.readFormB);
        this._btnR= document.querySelector('#btnR')
        this._btnR.addEventListener('click', this.readFormR);
        this._btnRI= document.querySelector('#btnR')
        this._btnRI.addEventListener('click', this.readFormRI);
    }

    readForm = () => {
        let producto = Product.readForm();
    
        if(producto === false){
            Swal.fire('Espera', 'Aún no has terminado de llenar los campos', 'error');
            return;
        }
        let n = this._productos.añadir(producto)
        Swal.fire('Correcto', 'Has llenado de forma correcta el inventario', 'success')

        if(n === false){
            Swal.fire('Error', 'Parece que este producto ya ha sido registrado', 'error');
            return;
        }

        let p = this._productos.noSobre(producto);
        if(p === false){
            Swal.fire('Error', 'Has alcanzado el número límite del inventario', 'error');
        }
    }

    readFormE = () =>{
        let producto = Product.readForm();

        if(producto === false){
            Swal.fire('Error', 'Aún no has terminado de llenar los campos', 'error');
            return;
        }
        let p = this._productos.eliminar(producto);
        Swal.fire('Eliminado', 'Se ha eliminado exitosamente', 'success');

        if(p === null){
            Swal.fire('Error', 'Este producto no existe en el inventario', 'error');
        }

    }

    readFormB = () => {
        let producto = Product.readForm();
        let b = this._productos.buscar(producto);
        if(b === true){
            Swal.fire('Encontrado', 'Se ha encontrado el producto', 'success');
            
        }
        if(b === null){
            Swal.fire('Lo sentimos', 'No se ha encontrado el producto', 'error');
        }
        
    }

}
new App;