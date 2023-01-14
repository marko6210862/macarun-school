import { useState } from 'react';
import { data } from '../data2';


function Examples () {

  const [dish, setDish] = useState (0);
  const {name, image, description, showMore } = data[dish];
  const [showText, setShowText] = useState (false);
  
  const showTextClick = (data) => {
    data.showMore = !data.showMore
    setShowText ( !showText )
  }

 
  const perviousDish = () => {
    setDish (( dish => {
      dish --;
      if(dish < 0){
        return data.length-1;
      }
      return dish;
    }))
  }

  const nextDish = () => {
    setDish ((dish => {
      dish ++;
      if (dish > data.length -1){
        dish = 0
      }
      return dish;
    }))
  } 


return (
<div className='Resipes'>  
  <div className="container col-lg-12">
    <div class="row row-cols-md-2 g-5 mt-4 key={id}">
                <div className='container-name'>
                  <div className='name-resept'>
                    <p>{name}</p>
                  </div>
                  <div className='resept'>  
                  <p className='text-show'>{showMore ? description : description.substring(0,500) + "..." }
                    <button className='show' onClick={() => showTextClick (data[dish])}>{showMore ? "show less" : "show more"}</button>
                  </p>
                  </div> 
                </div>
              
                <div className='container-image'>
                    <div className='arrow'>
                      <button className='previous' onClick={perviousDish}>⬅</button>
                    </div>  
                    <div>
                      <img className='img' src = {image} width="500px" height="500px" alt="dish"/>
                    </div>
                    <div className='arrow'>  
                      <button className='next' onClick={nextDish}>➡</button>
                    </div>
                </div>

                
         </div>
      </div>
   
   
        
  </div>

  )
}

export default Examples;