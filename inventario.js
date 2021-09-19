
export default class Inventario{
    constructor(){
        this._inv = new Array();
    }

    prueba(){
        return this._inv;
    }
    añadir(producto){
        let pos = this._encontrarProd(producto);

        if(pos >= 0){
            return false;
        }
        this._inv.push(producto);
        console.log(this._inv)
        return true;   
    }
    noSobre(producto){
        if(this._inv.length > 20){
            return false
        }
    }
    eliminar(producto){
        let pos = this._encontrarProd(producto);

        if(pos >= 0){
            this._inv.splice(1, pos);
            return false;
        }else{
            return null;
        }
    }
    buscar(producto){
        let pos = this._encontrarProd(producto);

        if(pos >= 0){
            console.log(this._inv[pos]);
            return true;
        }else{
            return null;
        }
    }
    

    _encontrarProd(productos){
        let newPos = this._inv.findIndex((prod) => {
            if(prod.getCod() === productos.getCod()){
                return true;
            }else{
                return false;
            }
        })
        return newPos;
    }

    _encontrarPro(){
        for(let i = 0; i < this._inv.length;i++){
            if(this._inv[i].getCod() === productos.getCod()){
                return true;
            }else{
                return false;
            }
        }
    }
    


}