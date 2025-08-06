import axios from "axios";

const API_URL = "http://localhost:8080/api/cliente";
class ClienteService{

    getAllClientes(){
        return axios.get(API_URL)
    }
    saveCliente(cliente){
        return axios.post(API_URL,cliente)
    }
    getClienteById(clienteId){
        return axios.get(API_URL+'/'+clienteId)
    }
    updateCliente(clienteId,cliente){
        return axios.put(API_URL+'/'+clienteId,cliente)
    }
    deleteCliente(clienteId){
        return axios.delete(API_URL+'/'+clienteId)
    }

}
export default new ClienteService