import ProductCard from "./ProductCard"
import { SushiData } from "./ProductData"


const Sushi = () => {

    const SushiItems = SushiData.map((item) => {
        return <ProductCard 
        key={item.id}
        item={item}
        />
    })
    return(
        <div className="py-5">
            <h1 className="text-center fs-1 fw-bold mb-5">Sushi</h1>

            <div className="sushiWrapper">
              {SushiItems}
            </div>

        </div>
    )
}

export default Sushi