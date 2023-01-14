import { data } from './data';
import { useState } from 'react';
import Button from './Button';
import Macaroons from './Macaroons';



function Shop() {
  const [macarun, setMacarun] = useState ( data );

  const chosenMacarun = (searchTerm ) => {
    const newMacaruns = data.filter(element => element.searchTerm === searchTerm);
    setMacarun (newMacaruns);
  }

  return (
    <div className='Fon'>
        <div className='cont'>
          <h2 className='back'>Выберите пирожные на Ваш вкус</h2>
        </div>
        <div className='filling'>
          <h4>Начинка:</h4>
        </div>
            <Button filterMacarun={chosenMacarun}/>
        <div class="container mt-3 text-center">
            <Macaroons shopMacarun={macarun}/>
        </div>
    </div>
  )
}

export default Shop;