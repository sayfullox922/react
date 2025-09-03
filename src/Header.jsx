
import Rasm1 from './assets/rasm.svg'
function Header() {
    return (
        <div className='hammasi'>
            <div className="matnn">
                <h1>Explore and <br />Travel</h1>
            </div>
            <section class="holiday-finder">
                <h3>Holiday Finder</h3>
                <form> 

                    <div className="cards">
                          <div>
                            <select name="Location" id="travelers">
                                <option value="">Location</option>
                                <option value="2">Tokyo</option>
                                <option value="3">Paris</option>
                            </select>
                        </div>
                        <div>
                            <select name="London" id="travelers">
                                <option value="">London</option>
                                <option value="2">Tokyo</option>
                                <option value="3">Paris</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <select name="London" id="travelers">
                                <option value="">Tokyo</option>
                                <option value="1">London</option>
                                <option value="3">Paris</option>
                            </select></div>
                        <div>
                            <select name="Paris" id="travelers"><option value="">Paris</option>
                                <option value="2">Tokyo</option>
                                <option value="3">Paris</option>
                            </select><br />
                                <button className='bir'>Explore</button>
                        </div>
                    </div>
               
                </form>
                         <div className="ras">
                    <img src={Rasm1} alt="" />
                </div>
            
            </section>


        </div>
    )
}

export default Header;