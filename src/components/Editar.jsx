import React from 'react'
import { useForm } from 'react-hook-form'

const Editar = (props) => {

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });


    const onSubmit = (data, e) => {
        data.id = props.currentUser.id
        console.log(data)
        props.updateUser(props.currentUser.id, data)
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>VENDEDOR</label>
            <input 
                type="text" 
                name="name"
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
                
 <label>VARIEDAD DE PLANTAS</label>
            <input 
                type="text" 
                name="VARIEDAD DE PLANTAS" 
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />
            <div>
                {errors?.username?.message}
            </div>
            <button type="submit">Edit user</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    );
}
 
export default Editar;