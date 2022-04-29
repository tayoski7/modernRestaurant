

const BookTable = () => {
  return (

    <div>
        <div className="text-center mb-5 py-5">
            <h1 className="mb-5">Book a Table</h1>

            <p className="mb-5 paraText">
                Reserving a table beforehand means less waiting.
                Groups of 8 or more must reserve ahead of time.
            </p>

            <a href="/contact">
                <button className="btnBook p-2 text-center">Book Now</button>
            </a>
        </div>
    </div>

  )
}


export default BookTable