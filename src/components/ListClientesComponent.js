import React, { useEffect, useState } from "react";
import ClienteService from "../services/ClienteService";

export const ListClientesComponent = () => {
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
  ClienteService.getAllClientes()
    .then(response => {
      setEmpleados(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);


    return (
        <div className="container">
            <h2 className="text-center">Lista de Empleados</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleados.length > 0 ? (
                            empleados.map(empleado =>
                                <tr key={empleado.id}>
                                    <td>{empleado.id}</td>
                                    <td>{empleado.nombre}</td>
                                    <td>{empleado.apellido}</td>
                                    <td>{empleado.email}</td>
                                </tr>
                            )
                        ) : (
                            <tr>
                                <td colSpan="4">No hay empleados registrados</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListClientesComponent;
