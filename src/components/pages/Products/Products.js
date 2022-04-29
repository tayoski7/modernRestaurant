import {DrinkData} from "./ProductData"
import "./product.css"
import ProductHero from "./Product-hero"
import Starter from "./Starters"
import Bowls from "./Bowls"
import Sushi from "./Sushi"
import Drink from "./Drinks"
import  BookTable  from "./BookTable"
import LearnAllergens from "./LearnAllergens"
import {Container, Row, Col} from "react-bootstrap"



const Product = () => {

    const drinks = DrinkData.map((drink) => {
        return <Drink 
        key={drink.id}
        drink={drink}
        />
    })
    return(
        <div>
            <div><ProductHero /></div>

            <div><Starter/></div>

            <div className="pt-5 bowls"><Bowls /></div>
         
            <div><Sushi /></div>

            <div className="drinks p-5">
                <div>
                    <h1 className="text-center fw-bold fs-1 mb-5">Drinks</h1>
                </div>
                <Container>
                    <Row>
                        <Col>
                        <div className="drinkContainer  mb-5">{drinks}</div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div><BookTable /></div>

            <div><LearnAllergens /></div>

            

        </div>
    )
}

export default Product