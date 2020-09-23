import React, { useState } from 'react'
import Layout from '../components/Layout';

import '../styles/home_page.css';
import foto from  '../assets/image/perfil_1.jpg';
import info from '../assets/info.json';
import techs from '../assets/tech.json';
import langs from '../assets/langs.json';
import { BugReport, Build, Close, Code, Facebook, FolderSpecial, GitHub, Info, LinkedIn, Mail, PhoneAndroid, Star, Web, WhatsApp } from '@material-ui/icons';
import { Button, Chip, Collapse, Divider, IconButton } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';


const HomePage = () =>{
    const [email,setEmail] = useState(false);
    const [cel,setCel] = useState(false);

    return(<Layout>
         <div className='container'>
            <h2 className='title-home'><Web /> Cristian Gael Valenzuela Castro.</h2>
            <hr />

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
                            <WhatsApp onClick={()=>{
                                setCel(true);
                                setEmail(false);
                            }} />
                            <Mail onClick={()=>{
                                setCel(false);
                                setEmail(true);
                            }}/>
                            <LinkedIn onClick={()=>window.open('https://www.linkedin.com/in/cristian-gael-valenzuela-castro-50a755180/')}/>
                            <FolderSpecial />
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
                    <Chip 
                        icon={<Star style={{color:'#ffff0b'}} titleAccess={item.start} />}
                        label={item.start}
                        variant='default'
                        color='secondary'
                        size='small'
                    />
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
                    <Chip 
                        icon={<Star style={{color:'#ffff0b'}} titleAccess={item.start} />}
                        label={item.start}
                        variant='default'
                        color='secondary'
                        size='small'
                    />
                </section>)}
            </div>
            
            <Button style={{marginBottom:'10px'}} fullWidth color='secondary' startIcon={<BugReport />} variant='contained'>
                <b>Proyectos</b>
            </Button>
            <br />
            <Button style={{marginBottom:'10px'}} fullWidth color='secondary' startIcon={<Build />} variant='contained'>
                <b>Experiencia laboral</b>
            </Button>

        </div>
        <Collapse style={{display:'flex',position:'fixed'}} in={email}>
            <Alert 
            icon={<Mail fontSize="inherit" />} severity="info"
            action={
                <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={()=>setEmail(false)}> <Close/></IconButton>
            } >elgael06@gmail.com</Alert>
        </Collapse>

        <Collapse  style={{display:'flex',position:'fixed'}} in={cel}>
            <Alert 
            icon={<PhoneAndroid fontSize="inherit" />} severity="warning"
            action={
                <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={()=>setCel(false)}> <Close/></IconButton>
            } >667-4509-593</Alert>
        </Collapse> 

    </Layout>);
} 

export default HomePage;