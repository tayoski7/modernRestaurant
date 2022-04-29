import {React} from "react";
import Twitter from './Twitter'
import Facebook from './Facebook';
import Instagram from './Instagram';
import "./home.css";
import { Carousel } from "react-bootstrap";
//import { CarouselItem } from "react-bootstrap";


const Home = () =>{

    return (
        <div className="body-container">

        {/* Jumbotron section. */}

            <div>
            
               <div className="jumbotron-slide">

               <Carousel>
                    <Carousel.Item>
                        <div className="hero-section first--bg">
                            <h2>Authentic cuisine, made entirely from scratch.</h2>
                            <div className="sm--icons">
                                <Twitter />
                                <Facebook />
                                <Instagram />
                            </div>
                        </div>
                    </Carousel.Item>
                        
                    <Carousel.Item>
                        <div className="hero-section second--bg">
                            <h2>Authentic cuisine, made entirely from scratch.</h2>
                            <div className="sm--icons">
                                <Twitter />
                                <Facebook />
                                <Instagram />
                            </div>
                        </div>
                    </Carousel.Item>


                    <Carousel.Item>
                        <div className="hero-section third--bg">
                            <h2>Authentic cuisine, made entirely from scratch.</h2>
                            <div className="sm--icons">
                                <Twitter />
                                <Facebook />
                                <Instagram />
                            </div>
                        </div>                
                    </Carousel.Item>
                </Carousel>
               </div> 
            </div>

            {/*Features section */}
            
            <section className="features-section">
                <div className="feature">
                    <div className="feature-img">
                        <img src={`https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2QlMjBhbmQlMjByZXN0YXVyYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`} alt="feature-img" />
                    </div>
                    
                    <div className="content">
                        <h2>
                            Memories made in food.
                        </h2>

                        <p>
                        Our eclectic menu reflects the wide variety of
                         influences and experiences that inform our approach to cooking.
                          We don’t just serve dishes, we serve memories.  
                        </p>

                        <a href="/about"><button className='btn-button'>Learn more</button></a>
                    </div>
                </div>
            </section>

                    {/* DISHES CAROUSEL */}
                    <div className="our-dishes ">
                        <h2 className="header">Popular dishes</h2>
                        
                        <Carousel>
                            <Carousel.Item>
                                <div className="dish--slide">

                                <div className="food-card">
                                    <img src="https://images.unsplash.com/photo-1519996409144-56c88c9aa612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGFuZCUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <div className="food-card-header">
                                            <h2>Cooked Rice and Vegetable</h2>
                                            <h2>$20</h2>
                                        </div>
                                        <p className="content">
                                        Our menu is so perfect that we have common dishes available in delicious modes.
                                        </p>
                                    </div>

                                    <div className="food-card">
                                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=243,fit=crop/ginza37pa0/img-m2WWRN9xyPu1jxLO.png" alt="" />
                                        <div className="food-card-header">
                                            <h2>Tonkatsu Ramen</h2>
                                            <h2>$7</h2>
                                        </div>
                                        <p className="content">
                                        Handmade noodles, a variety of toppings, and homemade broth are all included in our personalized ramen.
                                        </p>
                                    </div>

                                    <a className="see-more" href="./product"><button className="btn-button">See Product.</button></a>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="dish--slide">
                                    <div className="food-card">
                                    <img src="https://media.istockphoto.com/photos/beef-steak-picture-id500466008?b=1&k=20&m=500466008&s=170667a&w=0&h=ijc_HNzLH3cZc6KKE9-AbImAgYlECT8hYVbQHp9NXw0=" alt="" />
                                        <div className="food-card-header">
                                            <h2>Beef Steak</h2>
                                            <h2>$15</h2>
                                        </div>
                                        <p className="content">
                                        Beef Steak is based on a family recipe that's been handed down for generations. It's a spicy, light and  aromatic noodle soup.
                                        </p>
                                    </div>

                                    <div className="food-card">
                                    <img src="https://images.unsplash.com/photo-1477617722074-45613a51bf6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZCUyMGFuZCUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <div className="food-card-header">
                                            <h2>French Fries and Hamburger</h2>
                                            <h2>$25</h2>
                                        </div>
                                        <p className="content">
                                        Our bespoke ramen includes a handburger and fries, 
                                         as well as a range of toppings and handmade broth.
                                        </p>
                                    </div>

                                    <a className="see-more" href="./Products.js"><button className="btn-button">See Product.</button></a>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="dish--slide">
                                    <div className="food-card">
                                    <img src="https://images.unsplash.com/photo-1560162071-da4c4a91077a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3ByaW5nJTIwcm9sbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <div className="food-card-header">
                                            <h2>Spring rolls</h2>
                                            <h2>$20</h2>
                                        </div>
                                        <p className="content">
                                        As a snack or a supper, spring rolls are a delectable and healthful alternative. The roll is minimal in carbs and fat and protein.
                                        </p>
                                    </div>

                                    <div className="food-card">
                                    <img src="https://images.unsplash.com/photo-1537790698196-aad88bf9bb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <div className="food-card-header">
                                            <h2>Hotdog Sandwich</h2>
                                            <h2>$55</h2>
                                        </div>
                                        <p className="content">
                                        Hot dogs come in a variety of flavors, but they all possess three common characteristics: umami, saltiness, and sweetness.
                                        </p>
                                    </div>

                                    <a className="see-more" href="./Products.js"><button className="btn-button">See Product.</button></a>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                        
                    </div>
                
            {/* MISCELLANEOUS GRIDS. */}
            <div className="misc--grids">
                <div className="text shifted-left second">
                    <h2>Excellent meal for the entire family</h2>
                    <p>Good cuisine and family make for some of the finest memories, which is why we welcome all of your loved ones, including youngsters. In the back of the restaurant, we have a special space for families.</p>
                </div>
                <div className="first">
                    <img src="https://media.istockphoto.com/photos/chinese-food-blank-background-picture-id545286388?b=1&k=20&m=545286388&s=170667a&w=0&h=NBSXjfSVP0GdwAOBYELxOFwoYZAXYya1HTGUJYBkh8I=" alt="" />
                </div>
                <div className="third">
                    <img src="https://images.unsplash.com/photo-1577219492769-b63a779fac28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="text shifted-right fourth">
                    <h2>We've here to make your evening a little brighter.</h2>
                    <p>
                        All of our servers have worked in our restaurant, so they are familiar with the menu and can assist you with any questions you may have, such as checking for allergies or choosing the proper wine.
                    </p>
                </div>
                <div className="text shifted-left sixth">
                    <h2>We look forward to meeting your animal companions..</h2>
                    <p>
                        Our restaurant is pet-friendly, so you're welcome to bring your four-legged companions. All of our animal customers are expected to be calm and composed.
                    </p>
                </div>
                <div className="fifth">
                    <img src="https://images.unsplash.com/photo-1522109024334-af93e48ed58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsJTIwY29tcGFuaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>

            <div className="bookings">
                <h2>Make a reservation.</h2>
                <p>
                When you book a table ahead of time, you'll spend less time waiting. Groups of 10 or more must make a reservation in advance.
                </p>
                <a href="./Products.js"><button className='btn-button'>Book now</button></a>
            </div>
        </div>
    );
}

export default Home;
