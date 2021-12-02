import type { NextPage } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import { useEffect, useState , Fragment } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Price from '../components/Price'
import Store from '../components/Store'
import {Listbox} from '@headlessui/react'
import CustomListBox from '../components/CustomListBox'


function Home({moneyData} : AppProps){
  
    const [crypto, setCrypto] = useState(Object.keys(moneyData)[0]);
    const [fiat, setFiat] = useState(Object.keys(moneyData[crypto])[0]);
    return (
    <>
    <CustomListBox values = {Object.keys(moneyData)} type = "Crypto" selected = {crypto} onChange = {setCrypto}></CustomListBox>
    <CustomListBox values = {Object.keys(moneyData[crypto])} type = "Fiat" selected = {fiat} onChange = {setFiat}></CustomListBox>
    <Price multiplier = {moneyData[crypto][fiat]}></Price>
    <Store values = {Object.keys(moneyData)}></Store>

    </>
  );
}
export async function getStaticProps() {
  const coins = ["bitcoin","ethereum","stellar","basic-attention-token","dogecoin","ripple","bitcoin-cash","filecoin","litecoin","zcash","tether","dash"];
  const fiatWithSymbols = {
    "inr" : "₹",
    "usd" : "\$",
    "jpy" : "¥",
    "eur" : "€",
    "kwd" : "KD",
    "sar" : "SAR"
  };
  const coinQuery = coins.join(",");
  const fiats = Object.keys(fiatWithSymbols);
  const fiatQuery = fiats.join(",");
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinQuery}&vs_currencies=${fiatQuery}`;
  const res = await fetch(url);
  const moneyData = await res.json();
  return {
    props : {
      moneyData,
    },
  }
}
export default Home;
