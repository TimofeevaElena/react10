import { useState } from "react";
import './Add.css'

export default function CreatePage (){
    const[message,setMessage] = useState()

    function createForm(event) {
        event.preventDefault()
        const formdata = new FormData(event.target)

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body:formdata
        })
        event.target.reset()
        setMessage('Данные отправлены')
    }
    return(
        <div className="create">
            <div className="container">
                <div className="create-content"><br />
                    <h2 className="title-center">Оставьте заявку</h2><br />
                    <form onSubmit={createForm} className="create-form">
                        <label className="title-label">Название</label><br />
                        <input className="input" type="text" name="title" /><br />
                        <label className="title-label">Количество</label><br />
                        <textarea className='input' name="body"></textarea><br />
                        <button type="submit" className="add_card">Заказать</button><br />
                        {message}<br /><br /><br />    
                    </form>
                </div>
            </div>
        </div>
    )
}