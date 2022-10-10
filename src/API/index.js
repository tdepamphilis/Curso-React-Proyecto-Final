import Dummy from './dummy'

const API = {


     async getCategorias(params) {
        return await Dummy.getCategorias();  
    },

    async getItems(){
        return await Dummy.getItems();
    }
    

}

export default API