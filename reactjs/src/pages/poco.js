import React from "react";
import { render } from "react-dom";

export default function poco(){
    return (
        <div class="container">
            <div class="photo">
                <img src="assets/images/poco3 pro.JPG"/>
                <h2 class="name">Poco X3 Pro</h2>
            </div>
            <div class="text">
                <div class="Released">
                    <h4> Released date</h4>
                    <p>24 March 2021</p>
                </div>
                <div class="Platform">
                    <h4> Platform</h4>
                    <p>OS      :      Android 11, MIUI 12 for POCO</p>
                    <p>Chipset	:	Qualcomm Snapdragon 860 (7 nm)</p>
                    <p>CPU	:		Octa-core (1x2.96 GHz Kryo 485 Gold & 3x2.42 GHz Kryo 485 Gold & 4x1.78 GHz Kryo 485 Silver)</p>
                    <p>GPU	:		Adreno 640</p>
                </div>
                <div class="memory">
                    <h4> Memory</h4>
                    <p>Internal	:	256GB 8GB RAM UFS 3.1</p>
                    <p>Card Slot	:	microSDXC (uses shared SIM slot)</p>
                </div>
                <div class="camera">
                    <h4> Camera</h4>
                    <p>Features	:	Dual-LED flash, HDR, panorama</p>
                    <p>Video	:	4K@30fps, 1080p@30/60/120/240fps, 1080p@960fps, gyro-EIS</p>
                    <p>Primary	:	48 MP, f/1.8, (wide), 1/2.0", 0.8µm, PDAF 8 MP, f/2.2, 119˚ (ultrawide), 1.0µm 2 MP, f/2.4, (macro) 2 MP, f/2.4, (depth)</p>
                    <p>Secondary	:	Single : 20 MP, f/2.2, (wide), 1/3.4", 0.8µm ; Features : HDR, panorama ; Video : 1080p@30fps</p>

                </div>
                <div class="sound">
                    <h4>Sound</h4>
                    <p>Loudspeaker	:	Yes, with stereo speakers</p>
                    <p>3.5mm jack	:	Yes 24-bit/192kHz audio</p>
                </div>
                <div class="Features">
                    <h4>Features</h4>
                    <p>Sensors	:	Fingerprint (side-mounted), accelerometer, gyro, proximity, compass</p>
                </div>
                <div class="battery">
                    <h4>Battery</h4>
                    <p>Battery	:	Li-Po 5160 mAh, non-removable ( Charging Fast charging 33W, 59% in 30 min, 100% in 59 min (advertised) )</p>
                   
                </div>
                <div class="body">
                    <h4>Body</h4>
                    <p>Dimensions	:	165.3 x 76.8 x 9.4 mm (6.51 x 3.02 x 0.37 in)</p>
                    <p>Weight	:	215 g (7.58 oz)</p>
                    <p>SIM	:	Hybrid Dual SIM (Nano-SIM, dual stand-by) IP53, dust and splash protection</p>
                </div>
                <div class="display">
                    <h4>Display</h4>
                    <p>Type	:	IPS LCD, 120Hz, HDR10, 450 nits (typ)</p>
                    <p>Size	:	6.67 inches, 107.4 cm2 (~84.6% screen-to-body ratio)</p>
                    <p>Resolution	:	1080 x 2400 pixels, 20:9 ratio (~395 ppi density)</p>
                    <p>Protection	:	Corning Gorilla Glass 6</p>
                </div>
            </div>


        </div>
    )
}