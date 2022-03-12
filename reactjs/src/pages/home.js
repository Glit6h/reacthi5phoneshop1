import React from'react';

class Home extends React.Component{
    render(){
        return(
            <div class="container">
            <div class="header">
                <img src="assets/images/Logo.jpg"/>
                <p>Hi5 Phone Shop</p>
            </div>
            <div class="spech">best selling
                <hr color="gray"/>
            </div>
            <div class="content-large">
                <div class="flex-box">
                    <div class="flex1">
                        <a href="iphone.html">
                        <button>
                        <img src="assets/images/Iphone 13 pro max.jpg" alt=""/>
                            <p class="cost">
                                1339$
                            </p>
                        </button>
                        </a>
                       </div>
                    <div class="flex2">
                        <a href="ipadpro.html">
                        <button>
                            <img src="assets/images/Ipad pro M1.jpg" alt=""/>
                            <p class="cost">
                                899$
                            </p>
                         </button>
                        </a>
                    </div>
                    <div class="flex3">
                        <a href="ipadmini.html">
                        <button>
                            <img src="assets/images/Ipad mini6.jpg" alt=""/>
                            <p class="cost">
                                629$
                            </p>
                        </button>
                        </a>
                    </div>
                    <div class="flex4">
                        <a href="galaxyflip.html">
                        <button>
                            <img src="assets/images/Samsung Galaxy flip3.jpg" alt=""/>
                            <p class="cost">
                                929$
                            </p>
                        </button>
                        </a>
                    </div>
                    <div class="flex5">
                        <a href="oppo.html">
                        <button>
                            <img src="assets/images/oppo findX3.JPG" alt=""/>
                            <p class="cost">
                                 1200$
                            </p>
                        </button>
                        </a>
                    </div>
                    <div class="flex6">
                        <a href="ROG.html">
                        <button>
                            <img src="assets/images/Asus ROG2.JPG" alt=""/>
                            <p class="cost">
                                 899$
                            </p>
                        </button>
                        </a>
                    </div>
                    <div class="flex7">
                        <a href="Poco.html">
                        <button>
                             <img src="assets/images/poco3 pro.JPG" alt=""/>
                            <p class="cost">
                                299$
                            </p>
                        </button>
                        </a>
                    </div>
                    <div class="flex8">
                        <a href="ONEplus.html">
                        <button>
                             <img src="assets/images/One plus 9pro.JPG" alt=""/>
                            <p class="cost">
                                799$
                            </p>
                        </button>
                        </a>
                    </div>
                    <div class="flex9">
                        <a href="S22.html">
                        <button>
                            <img src="assets/images/S22 ultra.JPG" alt=""/>
                            <p class="cost">
                                1299$
                            </p>
                        </button>
                        </a>
                    </div>
                    <div class="flex10">
                        <a href="13.html">
                        <button>
                            <img src="assets/images/Iphone 12JPG.JPG" alt=""/>
                            <p class="cost">
                                769$
                            </p>
                        </button>
                        </a>
                    </div>
                </div>
            </div>
            <div class="content-long">
                <img src="assets/images/sponsor.jpg"/>
            </div>
            <div class="row-long">
                <h2>Contact Us</h2>
                <p>012345678</p>
            </div>

        


            

        </div>
        )
    }
}

export default Home;