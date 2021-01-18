import React, { useState, useEffect } from 'react';

const EditClienteForm = props => {
    const [Cliente, setCliente] = useState(props.currentCliente);

    const handleInputChange = event => {
        const { name, value } = event.target

        setCliente({ ...Cliente, [name]: value })
    };

    const submitForm = event => {
        event.preventDefault();

        props.updateCliente(Cliente.id, Cliente);
    };

    useEffect(() => {
        setCliente(props.currentCliente);
    }, [props]);

    return (
        <div className="row">

            <form className="col s12"
                onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">

                        <input type="text" 
                            id={Cliente.id} 
                            name="nome"
                            value={Cliente.nome}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="nome"></label>
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
                        <label htmlFor="email"></label>
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
                        <label htmlFor="telefone"></label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s12 m6">

                        <button className="waves-effect waves-light btn">Atualizar</button>
                    </div>

                    <div className="input-field col s12 m6">

                        <button 
                            className="waves-effect waves-light btn"
                            onClick={() => props.setEditing(false)}
                            >Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditClienteForm;
