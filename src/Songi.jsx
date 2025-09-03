import Rasm from './assets/logo.svg'

function Songi() {
    return (
        <div className="songi">
            <div className="ikki" id='bir'>
                <img src={Rasm} alt="" />
                <p>
                    Plan and book your perfect trip with
                    expert advice, travel tips destination
                    information from us
                </p>
                <p className='song'>©2020 Thousand Sunny. All rights reserved</p>
            </div>

            <div className="ikki">
                <h3>Destinations</h3>
                <a href="">Africa</a><br /><br />
                <a href="">Antarctica</a><br /><br />
                <a href="">Asia</a><br /><br />
                <a href="">Europe</a><br /><br />
                <a href="">America</a><br /><br />

            </div>

            <div className="ikki">
                <h3>Shop</h3>
                <a href="">Destination Guides</a><br /><br />
                <a href="">Pictorial & Gifts</a><br /><br />
                <a href="">Special Offers</a><br /><br />
                <a href="">Delivery Times</a><br /><br />
                <a href="">FAQs</a><br /><br />

            </div>

            <div className="ikki">
                <h3>Interests</h3>
                <a href="">Adventure Travel</a><br /><br />
                <a href="">Art And Culture</a><br /><br />
                <a href="">Wildlife And Nature</a><br /><br />
                <a href="">Family Holidays</a><br /><br />
                <a href="">Food And Drink</a><br /><br />

            </div>
        </div>
    )
}

export default Songi;