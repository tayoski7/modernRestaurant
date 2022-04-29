


const Drink = (props) => {
    return(
        <div>
            <div className="drinkWrapper ">
                <div className="d-flex justify-content-between mb-3">
                    <div className="name fw-bold fs-3">{props.drink.name}</div>
                    <div className="price fw-bold fs-3">
                       <span>$</span>
                       <span> {props.drink.price}</span>
                    </div>
                </div>
                <div className="descriptions fs-5">{props.drink.description}</div>
            </div>

        </div>
    )
}

export default Drink