import React, { useState, useEffect } from 'react';
import './Images.css';

function Images() {

    return (
          <div id="Images">
            <div id="Titulos">
            <h1>Cycling</h1>
            <h1>Running</h1>
            <h1>Swiming</h1>
            </div>
            <div id="Tarjetas">
                <div className="Columnas">
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                </div>
                <div className="Columnas">
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                </div>
                <div className="Columnas">
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                      <img src="https://picsum.photos/350" className="images" />
                </div>
            </div>
          </div>
    );
}

export default Images;
