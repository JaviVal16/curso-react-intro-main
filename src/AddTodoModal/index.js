import './AddTodoModal.css'
import React from 'react';
import { TodoContext } from '../Context';

function AddTodoModal() {
    const {
        addTodo,
        setOpemModal
    } = React.useContext(TodoContext);

    const [todoValue, setTodoValue] = React.useState('');
    const modalAdd = document.querySelector('.modalCard');

    const onSubmit = (event) => {
        event.preventDefault();
        setTimeout(() => {
            addTodo(todoValue);
            setOpemModal(false)
        }, 800);
        modalAdd.classList.add('modalCardSubmit');
    }

    const onClose = () => {
        setTimeout(() => {
            setOpemModal(false);
        }, 700);
        modalAdd.classList.add('modalCardOut');
    }

    const onChange = (event) => {
        setTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='modalMask'>
                <div className='modalCard'>
                    <i
                        className='modalClose fa-solid fa-square-xmark'
                        onClick={
                            onClose
                        }
                    ></i>
                    <label className='modalLabel'> ¿Que actividad haremos?</label>
                    <input
                        className='modalInput'
                        placeholder='Escribe una nueva actividad'
                        required
                        value={todoValue}
                        onChange={
                            onChange
                        }
                    ></input>
                    <button
                        type='submit'
                        className='modalBtn'
                    >Agregar</button>
                </div>
            </div>
        </form>
    );
}

export { AddTodoModal };