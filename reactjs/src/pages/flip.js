import React from "react";
import { render } from "react-dom";

export default function flip(){
    return (
        <div class="container">
        <div class="photo">
            <img src="assets/images/Samsung Galaxy flip3.jpg"/>
            <h2 class="name">Samsung Galaxy Flip3</h2>
        </div>
        <div class="text">
            <div class="Released">
                <h4> Released date</h4>
                <p>27 August 2021</p>
            </div>
            <div class="Platform">
                <h4> Platform</h4>
                <p>OS      :   Android 11, One UI 3.5</p>
                <p>Chipset	:	Qualcomm SM8350 Snapdragon 888 5G (5 nm)</p>
                <p>CPU	:		Octa-core (1x2.84 GHz Kryo 680 & 3x2.42 GHz Kryo 680 & 4x1.80 GHz Kryo 680)</p>
                <p>GPU	:		Adreno 660</p>
            </div>
            <div class="memory">
                <h4> Memory</h4>
                <p>Internal	:	256GB 8GB RAM , 128GB 8GB RAM UFS 3.1</p>
                <p>Card Slot	:	No</p>
            </div>
            <div class="camera">
                <h4> Camera</h4>
                <p>Features	:		LED flash, HDR, panorama</p>
                <p>Video	:		4K@30/60fps, 1080p@60/240fps, 720p@960fps, HDR10+</p>
                <p>Primary	:		12 MP, f/1.8, 27mm (wide), 1/2.55", 1.4µm, Dual Pixel PDAF, OIS 12 MP, f/2.2, 123˚ (ultrawide), 1.12µm</p>
                <p>Secondary	:	Modules : 0 MP, f/2.4, 26mm (wide), 1.22µm , Features : HDR ,Video : 4K@30fps</p>

            </div>
            <div class="sound">
                <h4>Sound</h4>
                <p>Loudspeaker	:	Yes, with stereo speakers</p>
                <p>3.5mm jack	:		No 32-bit/384kHz audio Tuned by AKG</p>
            </div>
            <div class="Features">
                <h4>Features</h4>
                <p>Sensors	:		Fingerprint (side-mounted), accelerometer, gyro, proximity, compass, barometer Samsung Pay (Visa, MasterCard certified)</p>
            </div>
            <div class="battery">
                <h4>Battery</h4>
                <p>Battery	:	Li-Po 3300 mAh, non-removable ( Charging Fast charging 25W Fast wireless charging 11W Reverse wireless charging 4.5W )</p>
                <p>Stand-by	:	Up to 28 h (multimedia)</p>
                <p>Music Play	:	Up to 95 h</p>
            </div>
            <div class="body">
                <h4>Body</h4>
                <p>Dimensions	:	160.8 x 78.1 x 7.7 mm (6.33 x 3.07 x 0.30 in)</p>
                <p>Weight	:	240 g (8.47 oz)</p>
                <p>SIM	:	Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM/eSIM, dual stand-by) IP68 dust/water resistant (up to 6m for 30 mins) Apple Pay (Visa, MasterCard, AMEX certified)</p>
            </div>
            <div class="display">
                <h4>Display</h4>
                <p>Type	:	Foldable Dynamic AMOLED 2X, 120Hz, HDR10+, 1200 nits (peak)</p>
                <p>Size	:	6.7 inches, 101.5 cm2 (~84.7% screen-to-body ratio)</p>
                <p>Resolution	:	1080 x 2640 pixels (~426 ppi density) Cover display: Super AMOLED, 1.9 inches, 260 x 512 pixels</p>
            </div>
        </div>


    </div>
    )
}