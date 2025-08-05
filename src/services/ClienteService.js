import axios from "axios";

const API_URL = "http://localhost:8080/api/cliente";
class ClienteService{

    getAllClientes(){
        return axios.get(API_URL)
    }
    saveCliente(cliente){
        return axios.post(API_URL,cliente)
    }

}
export default new ClienteService