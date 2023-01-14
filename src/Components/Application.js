import React from 'react';
import macaron from '../33.jpg';
import { Link } from "react-router-dom";

function Application (){

    return (

            <div className="fon-about">
                <img className="fon-style" src={ macaron } alt="foto"/>
                    <div className="text-about col-lg-5">
                        <p>Если вы хотите узнать секреты и научиться готовить пирожные "Макарон" самостоятельно, тогда этот курс для Вас</p>
                    </div> 
                <div className="container about-text col-lg-6">         
                    <div class="textCake">
                                 <h1 className='txt-cake'>Как проходит обучение</h1>
                            <div class="container-learning"> 
                                 <div class="row row-cols-md-2 row-cols-sm-4 g-5 d-flex justify-content-start text-start mt-3">
                                     <div class="text-box">
                                         <div class="icon">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewbox="0 0 16 16">
                                         <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                         <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                         </svg>
                                         </div>
                                         <h4>Регистрация на платформе</h4>
                                         <p>После регистрации, вам откроется доступ к курсу. Все уроки находятся на специальный образовательный платформе.</p>
                                     </div>
                                     <div class="text-box">
                                         <div class="icon">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-text" viewbox="0 0 16 16">
                                             <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                             <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                                             <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                                             </svg>  
                                         </div>
                                         <h4>Разные форматы</h4>
                                         <p>Видеоматериал, сборники, гайды, презентации, тесты, проверка домашнего задания.</p>
                                     </div>
                                     <div class="text-box">
                                         <div class="icon">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-headset" viewbox="0 0 16 16">
                                             <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                                            </svg> 
                                         </div>
                                         <h4>Видеоуроки</h4>
                                         <p>Уроки записаны заранее и доступны в любое время. Весь материал обучения останется у вас навсегда после окончания курса.</p>
                                    </div>
                                     <div class="text-box">
                                         <div class="icon">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
                                             <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                                             <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                                             </svg>
                                         </div>
                                         <h4>Продолжительность курса</h4>
                                         <p>4 недели обучения. Каждую неделю новый теоретический блок плюс практика.</p>
                                     </div>
                                 </div>
                                    <button className="btnCurs">
                                         <Link to="/Contact" className="curs" >Записаться на курс</Link>
                                    </button>           
                             </div>
                        </div> 
                    </div>         
                </div>
        )

            
              
    
}
export default Application;