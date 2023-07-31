import React, { useEffect, useRef, useState } from 'react'
import bg from "../../assets/imgs/bg.jpg";
import { supabase } from '../../api_connection/connection';
import Carrousel from '../layout/Carrousel';
import { insertData, deleteData } from '../../utils/SupabaseMethod';


const Home = () => {

  const [dataa, setData] = useState([]);

  const x = async () => {


  }

  useEffect(() => {
    x();
    insertData();
  }, []);

  return (
    <section className="home-content">
      <article className="intro">
        <span className="title" >Bienvenidos</span>
      </article>



      <Carrousel />
    </section>
  )
}

export default Home