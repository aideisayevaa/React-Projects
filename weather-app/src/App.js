import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';

function App() {

  const key = "77b5b0a01fdb9d36910757d2fc5e8bde" //saytdan goturduyumuz api uzun olduguna gore deyisene menimsedirik

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=${key}&units=metric`); //response daxilinde axcios.get metodu cagirir, ne vaxt gelse o vaxt gosterir () daxiline ise hansi Api-ni isteyirkse onun linkini yaziriq
        console.log(response); //yazdigimiz response-nin console-den gosterilmesi ucundu
      } catch (error) { //eger Api olmasa xeta mesaji verir
        console.error(error); //errorun consolede gosterilmesi
      }
    }
    getApi() //yuxaridaki funksiyanin cagirilmasi
  }, []) //buradaki arrayin icerisi bosdursa sadece app ilk baslayanda cagirir, eger icerisine bir deyisen ve ya hook adi yazanda o hook her cagirilanda isleyir

  return (
    <div className="App">
      isdjucuids
    </div>
  );
}

export default App;
