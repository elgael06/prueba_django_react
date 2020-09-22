import React from 'react'
import Layout from '../components/Layout';

import '../styles/home_page.css';
import foto from  '../assets/image/perfil_1.jpg';
import info from '../assets/info.json';
import techs from '../assets/tech.json';



const HomePage = () =>{

    return(<Layout>
         <div className='container'>
            <h2 className='title-home'>Cristian Gael Valenzuela Castro.</h2>
            <div className='container-personal-info'>
                <div className='atributos'>
                        {
                            info.map(item=><section key={item.name}>
                                <span>
                                    <b>{item.name} :</b> 
                                </span>
                                <label>{ " \t"+ item.value}</label> 
                            </section>)
                        }
                </div>
                <div className='foto-perfil'>
                    <img src={foto} />
                </div>
            </div>

            <b className='title-home'>Tecnologias</b>
            <div className='container-personal-info container-stills'>
                {techs.map(item=><section className='item-tech' 
                style={{background:`url("${require('../assets/image/tecnologias/'+item.image)}") no-repeat center center`,
                backgroundSize:'cover'}}>
                    <label> {item.name}</label>
                </section>)}
            </div>

            <b className='title-home'>Lenguajes</b>
            <div className='container-personal-info container-stills'>

            </div>

            <b className='title-home'>Proyectos</b>
            <div className='container-personal-info container-stills'>

            </div>
        </div>
    </Layout>);
} 

export default HomePage;