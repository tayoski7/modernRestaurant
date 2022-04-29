import {Container, Row, Col} from "react-bootstrap"




 const Allergies = () => {

  return (
    <div>
       <div className="allergiesHero">
           <h1 className="logo-name text-center logo-name p-5">Modern Restaurant</h1>

           <div>
                <h2 className="allergies-header d-flex justify-content-center align-items-center text-center ">List of allergens</h2>
            </div>
       </div>

       <div className="py-5">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="mb-5">
                            <h1>Allergens</h1>

                            <p className="mb-4">
                                All of our food is freshly prepared and 
                                developed everyday in our on-site kitchens, 
                                which means we frequently deal with and come 
                                into touch with many allergies. We try our best 
                                to avoid cross-contamination, but we can't
                                completely eliminate the possibility
                                that our cooks will come into contact with allergies
                                at any given moment.
                            </p>

                            <p className="mb-4">
                                We cannot guarantee that all of our meals are 
                                totally allergen-free or acceptable for persons
                                who have allergies or intolerances. If you have 
                                an allergy or intolerance, please notify our staff upon your
                                arrival so that they may assist you in selecting 
                                the most appropriate meals.
                            </p>

                            <p className="mb-4">
                                Because our recipes vary from time to time,
                                please take the time to become acquainted with our menu.
                            </p>
                        </div>

                        <div>
                            <h1>Nuts</h1>

                            <p>
                                In our kitchen and in our meals, 
                                we use a variety of seeds and nuts. We would
                                not recommend dining at Modern Restaurant to anyone who 
                                is extremely sensitive to nuts,
                                since we cannot be held liable for any bad allergic responses.
                            </p>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div>
                            <h1>Gluten and dairy</h1>

                            <p>
                                We utilize gluten and dairy products extensively
                                in our kitchen and in our meals, therefore cross-contamination
                                is unavoidable. While we can substitute specific components in our recipes,
                                please consult with our staff before placing an order.
                            </p>

                            <p>
                                We strongly advise stating any allergies or intolerances 
                                in the remark box during the checkout process for online orders.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
       </div>
    </div>
  )
}

export default Allergies
