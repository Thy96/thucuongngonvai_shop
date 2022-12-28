import React, { useEffect, useState } from 'react'
import { Header, Footer } from '../../components'
import Product from '../Product'
import '../../template/css/common.css'
import '../../template/css/home.css'

const Home = () => {

  return (
    <>
      <Header></Header>
      <Product></Product>
      <Footer></Footer>
    </>
  )
}

export default Home