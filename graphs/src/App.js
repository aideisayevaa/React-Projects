import React, { useState, useEffect } from 'react';
import './App.css';


function App() {


  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100)
  }

  const [barData, setBarData] = useState([
    {
      id: 1,
      title: 'Facebook',
      color: '#4267b2',
      value: getRandomNumber()
    },
    {
      id: 2,
      title: 'Amazon',
      color: '#ff9900',
      value: getRandomNumber()
    },
    {
      id: 3,
      title: 'Youtube',
      color: '#ff0000',
      value: getRandomNumber()
    },
    {
      id: 4,
      title: 'Google',
      color: '#34a853',
      value: getRandomNumber()
    },
    {
      id: 5,
      title: 'Microsoft',
      color: '#4267b2',
      value: getRandomNumber()
    }
  ])


  const setBarDataWithRandom = () => {
    let data = [...barData] //barData arrayini ozune alir
    data.forEach((item) => {  //foreach vasitesile bu aldigimiz arrayin icerisinde gezirik
      item.value += getRandomNumber() /* en basda verilen value ile random deyerler hesablayib toplayiriq ve her defesinde qiymet getdikce artir */
    })

    setBarData(data) //bu onu gosterirki her defe data melumatlarini guncelleyek
  }

  /* Mueyyen vaxt erzinde datalarimiz deyisdiyine gore biz burada useEffect-den istifade edeceyik */

  useEffect(() => {
    let timer;

    timer = setInterval(() => {
      setBarDataWithRandom()
    }, 500) /* her 500 milli saniyede bir value deyeri deyisir yeni setBarDataWithRandom funksiyasyi her 0.5 saniyede bir icra olunur*/
  }, [])




  return (
    <div>
      {JSON.stringify(barData)}{/*  - bu formada yazanda eyani sekilde her 0.5 saniyede deyerlerin nece deyisdiyini gormus oluruq*/}
    </div>
  );
}

export default App;




