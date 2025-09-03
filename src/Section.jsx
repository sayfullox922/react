import Rasm from './assets/world.png'


function Section() {
    return (
        <section className='worldd'>
            <div className="world">
                <img src={Rasm} alt="" />
            </div>

            <div className="now">
                <h2>A new way to explore the <br /> world </h2>

                <p>
                    For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
                    trip, but now, they can also let Lonely Planet Experiences lead the way
                </p>
                <button>Learn more</button>
            </div>
        </section>
    )
}

export default Section;