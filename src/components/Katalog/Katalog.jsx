import './Katalog.css'
import Card from '../Card/Card'
import {katalog} from '../../data'
import {useState} from 'react'


export default function Katalog(){

    const[query,setQuery] = useState("")

    function search(e){
        setQuery(e.target.value)
        console.log(query)
    }

    const filterTovar = katalog.filter((item)=>item.name.toLowerCase().includes(query.toLowerCase()))
    console.log(filterTovar)

    return(
        <div className="katalog">
            <div className="container">
                <div className="links">
                    <p className="text">Главная\Каталог</p>
                </div>
                <div className="filters">
                    <div className="filters-content">
                        <a href="" className="filter">Все</a>
                        <a href="" className="filter">Топ</a>
                        <a href="" className="filter">Низ</a>
                        <a href="" className="filter">Обувь</a>
                    </div>                  
                </div>
                <div className="poisk">
                    <input onChange={search} type="search" name="search" placeholder="Поиск"/>
                </div>
                <div className="cards">
                    <div className="cards-content">
                        {
                            filterTovar.length ?
                            filterTovar.map((card,index)=>{
                                return(
                                    <Card  key={index} {...card} />
                                )
                            })
                            :
                            <h2>По вашему запросу "{query}" ничего не найдено</h2>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}