function Buttons ({filterMacarun}){
    return (
        <div className="cont">
            <button className="change chocolate" onClick={() => filterMacarun("chocolate")}>Шоколадная</button>
            <button className="change berry" onClick={() => filterMacarun("berry")}>Ягодная</button>
            <button className="change fruit" onClick={() => filterMacarun("fruit")}>Фруктовая</button>
            <button className="change cream" onClick={() => filterMacarun("cream")}>Кремовая</button>
        </div>
        )
}

export default Buttons;