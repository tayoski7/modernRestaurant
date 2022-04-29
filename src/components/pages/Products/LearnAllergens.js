

 const LearnAllergens = () => {
  return (
    <div className="allergiesContainer py-4">
   
            <div className="d-flex justify-content-between flex-wrap">
                    <div className="fs-4 mb-3">
                        Nuts, dairy, and other allergies may be present in certain recipes.
                    </div>
           
                    <div>
                       <a href="/allergies">
                            <button className="learnMore p-2 ">Learn More</button>
                       </a>
                    </div>
                
            </div>
    </div>
  )
}


export default LearnAllergens
