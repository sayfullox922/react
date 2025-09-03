import Rasm from './assets/Raja ampat.svg'
import Rasm2 from './assets/icon.png'
import Rasm3 from './assets/Skadar.png'
import Rasm4 from './assets/Vevey.svg'

function Cardss() {
    return (
        <div className="container">
            <div className="view">
                <h1>Featured destinations</h1>

                <a href="">View all</a>
            </div>

            <div className="tabiat">
                <div className="beautiy">
                    <img src={Rasm} alt="" />
                </div>

                <div className="beautiy">
                    <img src={Rasm2} alt="" />
                </div>

                <div className="beautiy">
                    <img src={Rasm3} alt="" />
                </div>

                <div className="beautiy">
                    <img src={Rasm4} alt="" />
                </div>
            </div>
        </div>

    )
}
export default Cardss;
