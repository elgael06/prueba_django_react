import React from 'react'
import Layout from '../components/Layout';

import '../styles/home_page.css';
import foto from  '../assets/image/perfil_1.jpg';
import info from '../assets/info.json';
import techs from '../assets/tech.json';
import langs from '../assets/langs.json';
import { Facebook, GitHub, Mail, PhoneAndroid, WhatsApp } from '@material-ui/icons';
import { Divider } from '@material-ui/core';


const HomePage = () =>{

    return(<Layout>
         <div className='container'>

            <h2 className='title-home'>Cristian Gael Valenzuela Castro.</h2>

            <div className='container-personal-info'>
                <div className='atributos'>
                        {
                            info.map(item=><><section key={item.name}>
                                <span>
                                    <b>{item.name} :</b> 
                                </span>
                                <label>{ " \t"+ item.value}</label> 
                            </section>
                            <Divider />
                            </>)
                        }
                        <section className='redes'>
                            <GitHub onClick={()=>window.open('https://github.com/elgael06')} />
                            <Facebook onClick={()=>window.open('https://facebook.com/elgael06')} />
                            <WhatsApp onClick={()=>alert('6674509593')} />
                            <Mail onClick={()=>alert('elgael06@gmail.com')}  />
                        </section>
                </div>
                <div className='foto-perfil'>
                    <img src={foto} alt='foto-perfil' />
                </div>
            </div>

            <b className='title-home'>Tecnologias</b>
            <div className='container-personal-info container-stills'>
                {techs.map(item=><section className='item-tech' 
                key={item.name}
                onClick={()=>window.open(item.uri)}
                title={item.name}
                style={{
                    background:`url("${require('../assets/image/tecnologias/'+item.image)}") no-repeat center center`,
                backgroundSize:'cover',
                backgroundColor:'#dbdbdb'
                }}>
                </section>)}
            </div>

            <b className='title-home'>Lenguajes</b>
            <div className='container-personal-info container-stills'>
                {langs.map(item=><section className='item-tech' 
                    key={item.name}
                    onClick={()=>window.open(item.uri)}
                    title={item.name}
                    style={{
                        background:`url("${require('../assets/image/lenguajes/'+item.image)}") no-repeat center center`,
                    backgroundSize:'cover',
                    backgroundColor:'#dbdbdb'
                    }}>
                </section>)}
            </div>

            <b className='title-home'>Proyectos</b>
            <div className='container-personal-info container-stills'>

            </div>
        </div>
    </Layout>);
} 

export default HomePage;