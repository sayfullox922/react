import Rasm from './assets/stars.svg'
import Rasm1 from './assets/photo.svg'
function Star() {
    return (
        <div className="stars">
            <div className="star">
                        <h1>Testimonials</h1>
            <img className='bew' src={Rasm} alt="" />

            <p>
                “Quisque in lacus a urna fermentum euismod. Integer mi nibh,
                 dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”
            </p>

                <h4>Edward Newgate</h4>
                <p className='smal'>Founder Circle</p>
            </div>

            <div className="boy">
                <img src={Rasm1} alt="" />
            </div>
        </div>
    )
}

export default Star;