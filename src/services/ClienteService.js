import axios from "axios";

const API_URL = "http://localhost:8080/api/cliente";
class ClienteService{

    getAllClientes(){
        return axios.get(API_URL)
    }

}
export default new ClienteService