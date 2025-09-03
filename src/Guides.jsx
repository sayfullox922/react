import Rasm from './assets/goo.png'


function Guides() {
    return (
        <div className="worldd" id='worlds'>
            <div className="now">
                <h1>Guides by Thousand Sunny</h1>
                <p>Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.</p>
                <button>Download</button>
            </div>

            <div className="world">
                <img src={Rasm} alt="" />
            </div>
        </div>
    )
}

export default Guides;