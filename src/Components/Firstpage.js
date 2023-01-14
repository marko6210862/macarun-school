import React from "react";
import macaron from '../macarun-green.jpg';
import { Link } from "react-router-dom";

function FirstPage() {
    return (
        <div className="foto">
            <img className="d-block w-100 d-flex" src={ macaron } alt="foto" style={{'height': '900px'}}/>
                <div className="text">
                    <p>За короткий промежуток времени с полным погружение в обучение, вы получите знания и навыки выпечки пирожного "Макарон" с разными начинками и будете с лёгкостью готовить их у себя дома</p>
                </div> 
                <div className="text-shop">
                    <p>В нашей кондитерской можно купить готовые пирожные 
                    <button className="btnShop"><Link to="/shop" className="Shop">"Макарон"</Link></button></p>
                </div>
                <div className="Image">
                    <div className="txt">
                        <p className="hand-text">Кондитерская школа</p>
                        <p>MACARON</p>
                        <p className="text-cake">Для всех, кто хочет научиться печь <br/>пирожное "Макарон" дома</p>
                    </div>
                </div>
        </div>
    )
}


export default FirstPage;