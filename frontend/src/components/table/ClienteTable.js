import React from 'react';

const ClienteTable = props => (
  
    <table className="responsive-table">
        <thead>
            <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Ação</th>
            </tr>
        </thead>
    <tbody>
        {
            props.clientes.length > 0 ? (
                props.clientes.map (cliente => (

                    <tr key={cliente.id}>
                        <td>{cliente.nome}</td>
                        <td>{cliente.email}</td>
                        <td className="center-align">
                            <button 
                                className="waves-effect waves-light btn-small"
                                onClick={() => props.editRow(cliente)}>
                                editar
                            </button>

                            <button 
                                className="waves-effect waves-light btn-small red darken-4"
                                onClick={() => props.deleteCliente(cliente.id)}>
                                deletar
                            </button>
                        </td> 
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>{props.clientes[0]} Sem Clientes</td>
                    </tr>
                )
        }          
    </tbody>
  </table>
);
    
export default ClienteTable;