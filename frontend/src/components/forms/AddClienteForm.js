import React, { useState } from 'react';

const AddClienteForm = props => {

    const initialFormState = { nome: '', email: '', telefone: ''};
    const [Cliente, setCliente] = useState(initialFormState);

    const handleInputChange = event => {
        const {name, value} = event.target;

        setCliente({ ...Cliente, [name]: value });
    }

    const submitForm = event => {
        event.preventDefault();

        if (!Cliente.nome || !Cliente.email || !Cliente.telefone) return;

        props.addCliente(Cliente);
        setCliente(initialFormState);
    };

    return (
        <div className="row">

            <form className="col s12"
                onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">

                        <input type="text" 
                            id="nome" 
                            name="nome" 
                            value={Cliente.nome}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="nome">Nome</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">

                        <input 
                            type="text" 
                            name="email" 
                            value={Cliente.email}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="email">E-mail</label>
                    </div>
                </div>
				
				<div className="row">
                    <div className="input-field col s12">

                        <input 
                            type="text" 
                            name="telefone" 
                            value={Cliente.telefone}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="telefone">Telefone</label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12">

                        <button className="waves-effect waves-light btn">Adicionar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddClienteForm;
