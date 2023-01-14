function Macaroons({shopMacarun}) {
    return (
        <div className="products">
            {shopMacarun.map ((element => {
                const {id, name, price, image } = element;
                return (
                    <div className="product-card" key={id}>
                        <div className="macaroon-card">
                            <img className="card-cake" src={image} width="300px" height="300px" alt="foto"/>
                        </div>
                        <div className="product-info">
                            <h5>{name}</h5>
                            <p>{price} ₽ (3 шт.)</p>
                        </div> 
                    </div> 
                )
            }))}
        </div>
    )
}
export default Macaroons;