import { BowlData } from "./ProductData"
import ProductCard from "./ProductCard"

const Bowls = () =>{

    const BowlItems = BowlData.map((item) => {
        return <ProductCard 
        key={item.id}
        item={item}
        />
    })

    return(
        <div className="py-5"> 
            <h1 className="text-center fs-1 fw-bold pb-5">Bowls</h1>


            <div className="bowlWrapper ">
                {BowlItems}
            </div>
        </div>

        
    )
}

export default Bowls