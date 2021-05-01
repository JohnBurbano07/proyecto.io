import React from 'react';
import { useForm } from 'react-hook-form'

const InsetarUsuario = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        data.id = null
        console.log(data)
        props.addUser(data)
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>VENDEDOR</label>
            <input 
                type="text" 
                name="VENDEDOR"
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />
            <div>
                {errors?.name?.message}
            </div>
            <label>CLIENTE</label>
            <input 
                type="text" 
                name="CLIENTE" 
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />
            <div>
                {errors?.username?.message}
            </div>



            <label>VARIEDAD DE PLANTA</label>
            <input 
                type="text" 
                name="VARIEDADDEPLANTA" 
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />
            <div>
                {errors?.username?.message}
            </div>
            <button  type="submit">Add new user</button>
        </form>
    );
}
 
export default InsetarUsuario;