import './App.css';
import header_logo from "./assets/images/IMAGE.png"
import rasm1 from "./assets/images/rasm1.png"
import rasm2 from "./assets/images/rasm2.png"
import img1 from "./assets/images/img1.png"
import img2 from "./assets/images/img2.png"
import img3 from "./assets/images/img3.png"
import img4 from "./assets/images/img4.png"
import img5 from "./assets/images/img5.png"
import img6 from "./assets/images/img6.png"
import img7 from "./assets/images/img7.png"
import img8 from "./assets/images/img8.png"
import img9 from "./assets/images/img9.png"
import fon1 from "./assets/images/fon1.png"
import fon2 from "./assets/images/fon2.png"
import fon3 from "./assets/images/fon3.png"
import katta_rasm from "./assets/images/katta rasm.png"
import section_fon from "./assets/images/section_img1.png"
import section_fon2 from "./assets/images/section_img2.png"
import section_fon3 from "./assets/images/section_img3.png"



function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={header_logo} alt="" className="logo" />
        <ul className="item">
          <li className="item_text">Home</li>
          <li className="item_text">Our Products</li>
          <li className="item_text">Blog</li>
          <li className="item_text">About</li>
          <li className="item_text">Contact</li>
          <li className="item_text">Styleguide</li>
        </ul>
        <button className="header_btn">
          <i class="fa-solid fa-bag-shopping"></i>
          <p className="header_btn_text">Cart</p>
          <div className="nol">
            o
          </div>
        </button>
      </header>
      <main className="main">
        <div className="main_rasm">
          <p className="main_text">Best place to buy design</p>
          <p className="main_title">Coffee Mugs</p>
          <p className="main_text2">The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</p>
          <button className="main_btn">Explore Our Products</button>
        </div>
      </main>
      <section className="section">
        <h3 className="section_text">Even the all-powerful Pointing has no control about the blind texts.</h3>
        <p className="section_text2">It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <p className="section_text3">Read the full Story</p>

        <div className="guruh">
          <div className="chiziq"></div>
          <p className="section_title">Featured Mugs</p>
          <div className="chiziq"></div>
        </div>
        <div className="section_img_group">
          <div className="section_img">
            <img src={rasm2} alt="" className="rasm" />
            <p className="pech">Pink Premium Ceramic</p>
            <p className="pech2">$ 99.00 USD</p>
          </div>
          <div className="section_img">
            <img src={rasm1} alt="" className="rasm" />
            <p className="pech">Golden Designers Mug</p>
            <p className="pech3">$50.00 <s>$ 69.00 USD</s></p>
          </div>
        </div>
        <div className="guruh">
          <div className="chiziq"></div>
          <p className="section_title">More Products</p>
          <div className="chiziq"></div>
        </div>
      </section>
      <section className="section2">
        <div className="card">
          <img src={img1} alt="" />
          <p className="card_text">Red Love Cup</p>
          <p className="pech3">$25.00 <s>$ 37.00 USD</s></p>
        </div>
        <div className="card">
          <img src={img2} alt="" />
          <p className="card_text">Black Tea Cup</p>
          <p className="pech3">$15.00 <s>$ 29.00 USD</s></p>
        </div>
        <div className="card">
          <img src={img3} alt="" />
          <p className="card_text">B&W Essentials Mug</p>
          <p className="ss">$ 19.00 USD</p>
        </div>
        <div className="card">
          <img src={img4} alt="" />
          <p className="card_text">Winter Style Mug</p>
          <p className="ss">$ 25.00 USD</p>
        </div>
        <div className="card">
          <img src={img5} alt="" />
          <p className="card_text">Ceramic Tea</p>
          <p className="ss">$ 46.00 USD</p>
        </div>
        <div className="card">
          <img src={img6} alt="" />
          <p className="card_text">No Handle Bar Cup</p>
          <p className="ss">$ 34.00 USD</p>
        </div>
        <div className="card">
          <img src={img7} alt="" />
          <p className="card_text">Espresso Cup by Mugs.co</p>
          <p className="ss">$ 25.00 USD</p>
        </div>
        <div className="card">
          <img src={img8} alt="" />
          <p className="card_text">Pink Premium Ceramic</p>
          <p className="ss">$ 99.00 USD</p>
        </div>
        <div className="card">
          <img src={img9} alt="" />
          <p className="card_text">Summer Designer Cup</p>
          <p className="ss">$ 29.00 USD</p>
        </div>

      </section>
      <section className="section3">
        <div className="guruh2">
          <div className="chiziq"></div>
          <p className="section_title">Buy 2 mugs and get a coffee magazine free</p>
          <div className="chiziq"></div>
        </div>
        <div className="guruh3">
          <img src={fon1} alt="" className="fon1" />
          <div className="imgs">
            <img src={fon2} alt="" className="fon2" />
            <br />

            <img src={fon3} alt="" className="fon3" />
          </div>
          <div className="section3_text">
            <p className="out">Premium Offer</p>
            <p className="out1">Get our Coffee Magazine</p>
            <p className="out2">The most versatile furniture system ever created. Designed to fit your life.</p>
            <button className="section3_btn">Start Shopping</button>
          </div>
        </div>
        <div className="katta_rasm">
          <img src={katta_rasm} alt="" className="k_rasm" />
        </div>
      </section>
      <section className="section4">
        <div className="guruh2">
          <div className="chiziq"></div>
          <p className="section_title">Behind the mugs, lifestyle stories</p>
          <div className="chiziq"></div>
        </div>
        <div className="guruh4">
          <div className="card2">
            <img src={section_fon} alt="" className="card2_img" />
            <p className="card2_text">Health Check: why do I get a headache when I haven’t had my coffee?</p>
            <p className="card2_text2">It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p className="card2_sana">October 9, 2018</p>
          </div>
          <div className="card2">
            <img src={section_fon2} alt="" className="card2_img" />
            <p className="card2_text">How long does a cup of coffee keep you awake?</p>
            <p className="card2_text2">It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.</p>
            <p className="card2_sana1">October 9, 2018</p>
          </div>
          <div className="card2">
            <img src={section_fon3} alt="" className="card2_img" />
            <p className="card2_text">Recent research suggests that heavy coffee drinkers may reap health benefits.</p>
            <p className="card2_text2">It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p className="card2_sana">October 9, 2018</p>
          </div>
        </div>
      </section>
      <section className="section5">
        <div className="guruh5">
          <div className="chiziq2"></div>
          <p className="section_title2">Sign up and get free coffee bags</p>
          <div className="chiziq2"></div>
        </div>
        <p className="section5_title">Coffee Updates</p>
        <form className='form'>
          <input type="text" placeholder='customer @coffestyle.io' required className='input' />
          <button className="input_btn">
            SUBSCRIBE
          </button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer_logo">
          <img src={header_logo} alt="" className="logo" />
          <p className="footer_text">Delivering the best coffee life since 1996. From coffee geeks to the real ones.</p>
          <div className="footer_text1">CoffeeStyle Inc. © 1996</div>
        </div>
        <div className="footer_title">
          <p className="footer_text2">Menu</p>
          <ul className="footer_item">
            <li className="footer_item_text">Home</li>
            <li className="footer_item_text">Our Products</li>
            <li className="footer_item_text">About</li>
            <li className="footer_item_text">Contact</li>
            <li className="footer_item_text">Styleguide</li>
          </ul>
        </div>
        <div className="footer_title2">
          <p className="footer_text2">
            Follow Us
          </p>
          <ul className="footer_item">
            <a href="https://www.facebook.com/"><li className="footer_item_text">Facebook</li></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en"><li className="footer_item_text">Instagram</li></a>
            <a href="https://www.pinterest.com/"><li className="footer_item_text">Pinterest</li></a>
            <a href="https://x.com/?lang=en&mx=2"><li className="footer_item_text">Twitter</li></a>

          </ul>
        </div>
        <div className="footer_title3">
          <p className="footer_text2">Contact Us</p>
          <p className="footer_text3">We’re Always Happy to Help</p>
          <p className="footer_text4">us@coffeestyle.io</p>
          <p className="footer_text5">Powered by Webflow</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
