import React, { Component } from 'react';
import qs from 'querystring';

import api from '../services/api';

import ClienteTable from '../components/table/ClienteTable';
import AddClienteForm from '../components/forms/AddClienteForm';
import EditClienteForm from '../components/forms/EditClienteForm';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clientes: [],
            currentCliente: { id: null, nome: '', email: '', telefone:'' },
            editing: false
        }
    }

    componentDidMount() {
        this.refreshClienteTable();
    }

    refreshClienteTable() {
        this.clientesData = api.get('api/clientes')
            .then(response => response.data)
            .then(data => {

                this.setState({ 
                    clientes: data,
                    setClientes: data
                });
            });
    }

    addCliente = cliente => {

        api.post('api/clientes/', qs.stringify(cliente))
            .then(res => {
                this.refreshClienteTable();
            });
    };

    deleteCliente = id => {

        api.delete(`api/clientes/${id}`)
            .then(res => {
                this.refreshClienteTable();
            });
    };

    updateCliente = (id, cliente) => {
        
        api.put(`api/clientes/${id}`, qs.stringify(cliente))
            .then(res => {

                this.refreshClienteTable();
            });
        
        this.setState({ 
            currentCliente: { id: null, nome: '', email: '', telefone: '' }
        });

        this.setEditing(false);
    };

    editRow = cliente => {

        this.setState({ 
            currentCliente: { id: cliente.id, nome: cliente.nome, email: cliente.email, telefone: cliente.telefone }
        });

        this.setEditing(true);
    };

    setEditing = isEditing => {

        this.setState({ editing: isEditing });
    };

    render () {
        const { clientes } = this.state;

        return (
            <div className="container">
                    
                <div className="row">
    
                    {
                        this.state.editing ? (
                            <div className="col s12 m4">
                                <h4>Editar Cliente</h4>
                                <EditClienteForm 
                                    editing={this.state.editing}
                                    setEditing={this.setEditing}
                                    currentCliente={this.state.currentCliente}
                                    updateCliente={this.updateCliente} 
                                />
                            </div>
                        ) : (
                            <div className="col s12 m4">
                                <h4>Adicionar cliente</h4>
                                <AddClienteForm addCliente={this.addCliente} />
                            </div>
                        )
                    }
                    
                    <div className="col s18 20">
                        <h5>Clientes</h5>
                        <ClienteTable clientes={clientes} editRow={this.editRow} deleteCliente={this.deleteCliente} />
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;