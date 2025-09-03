import Rasm from './assets/rasm.png'
import Rasm1 from './assets/rasm (1).png'
import Rasm2 from './assets/rasm (2).png'
import Rasm3 from './assets/rasm (3).png'

function Stors() {
    return (
        <div className="container">
            <div className="view">
                <h1>Trending stories</h1>

                <a href="">View all</a>
            </div>

            <div className="tabiat">
                <div className="beautiys">
                    <img src={Rasm} alt="" />
                    <h3>
                        The many benefits of
                        taking a healing holiday
                    </h3>
                    <p>
                        ‘Helaing holidays’ are on the rise
                        tohelp maximise your health and happines...
                    </p>
                    <a href="">Read more</a>
                </div>

                <div className="beautiys">
                    <img src={Rasm1} alt="" />
                    <h3>
                        The best Kyoto restaurant
                        to try Japanese food
                    </h3>
                    <p>
                        From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
                        to visit...
                    </p>
                    <a href="">Read more</a>
                </div>

                <div className="beautiys">
                    <img src={Rasm2} alt="" />
                    <h3>
                        Skip Chichen Itza and head
                        to this remote Yucatan
                    </h3>
                    <p>
                        It’s remote and challenging to get,
                        but braving the jungle and exploring
                        these ruins without the...
                    </p>
                    <a href="">Read more</a>
                </div>

                <div className="beautiys">
                    <img src={Rasm3} alt="" />
                    <h3>
                        Surf’s up at these beginner
                        spots around the world
                    </h3>
                    <p>
                        If learning to surf has in on your to-
                        do list for a while, the good news
                        is: it’s never too late...
                    </p>
                    <a href="">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Stors;
