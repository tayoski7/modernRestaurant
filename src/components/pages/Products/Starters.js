import {Container, Row, Col} from "react-bootstrap"
import { StarterData } from "./ProductData"
import ProductCard from "./ProductCard"


const Starter = () => {

    const StarterItems = StarterData.map((item) => {
        return <ProductCard 
        key={item.id}
        item={item}
        />
    })

    return(
        <div className="mb-5">
            <h1 className="starterHeader fw-bold fs-1 text-center mb-5">Starters</h1>

            <div className="starterWrapper">
                {StarterItems}
            </div>
            
        </div>
    )
}

export default Starter