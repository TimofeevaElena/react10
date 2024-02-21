import CardImage from '/public/Katalog/card.png'
import BagImage from '/public/Katalog/bag.png'
import LikeImage from '/public/Katalog/like.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Modalka from '../Modalka/Modalka'

export default function Card({name, price, id, ost}){
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        <div className="card">
            <img src={CardImage} alt="" className="" />
            <p className="name">{name}</p>
             <div className="price-icons">
                <p className="price">{price} ₽</p>
                <div className="icons">
                    <img src={LikeImage} alt="" className="" />
                    {ost === 0 ? (
                        <Modalka modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
                    ):
                    (
                        <img src={BagImage} alt="" className="" /> 
                    )}                 
                </div>
            </div>
            <Link to={`${id}`} className="to-bag">Подробнее</Link>
        </div>
    )
}