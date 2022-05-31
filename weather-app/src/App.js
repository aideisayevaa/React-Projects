import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const key = "77b5b0a01fdb9d36910757d2fc5e8bde" //saytdan goturduyumuz api uzun olduguna gore deyisene menimsedirik


  //input daxilinde yazilanlari state daxilinde saxlamaliyiq ona gore de state yaradiriq
  const [search, setSearch] = useState("") //daxil edilenler text olacagina gore "" yaziriq

  //istifadeciden bize lazim olan datalari aldiqdan sonra onlari bir state daxilinde saxlamaliyiq
  const [city, setCity] = useState()

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=${key}&units=metric`); //response daxilinde axcios.get metodu cagirir, ne vaxt gelse o vaxt gosterir () daxiline ise hansi Api-ni isteyirkse onun linkini yaziriq
        console.log(response); //yazdigimiz response-nin console-den gosterilmesi ucundu
        setCity(response.data) //biz deyisiklik edeceyimiz ucun bunu setCity daxiilinde yazdiq ve respons icerisindeki consolede gosterilen data 8 - i deyiseceyimiz ucun response.data yazdiq yenii ki setCity daxiline ne deyismek isteyirikse onu yaziriq
      } catch (error) { //eger Api olmasa xeta mesaji verir
        console.error(error); //errorun consolede gosterilmesi
      }
    }
    getApi() //yuxaridaki funksiyanin cagirilmasi
  }, []) //buradaki arrayin icerisi bosdursa sadece app ilk baslayanda cagirir, eger icerisine bir deyisen ve ya hook adi yazanda o hook her cagirilanda isleyir

  console.log(search)

  return (
    <div className="App">
      {/* istifadecidn melumatlari input vasitesile alacagiq*/}
      <input onChange={(e) => { setSearch(e.target.value) /* burada evvelce console.log yazmisdiq indi setSearch olaraq deyisdirdik cunki inputdan gelen her deyeri setSearch ile deyisiklik edirik */ }} className='border-4 bg-slate-500' type="text" /> {/* input daxilindeki deyer her deyisende deyisiklik olmasini isteyirikse onChange yaziriq */}
      {/* onChange={(e)=>{console.log(e.target.value)}} bele olduqda inputun daxiline yazdiqlarimizin hamisi e ile alinir ve deyeri target.value ile console-de yazilr deyerler her deyisende gosterir */}

    </div>
  );
}

export default App;
