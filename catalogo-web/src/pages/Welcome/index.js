import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {TopNav,WelcomeMsg, Container,Context,ButtonLink} from "./style"

class Welcome extends Component{
    state={};

    handleLogin=e=>{
        e.preventDefault();
        alert("Logando ae pera");
    };

    render(){
        return(
            <Container id="welcome">
              
                    <TopNav id="topNav" > 
                        <div className="clickLink">
                           Guia
                        </div>

                        <div className="clickLink">
                            Suporte
                        </div>

                        <div className="clickLink">
                            Login   
                        </div>

                    </TopNav>

                    <WelcomeMsg>
                        <Context >
                            
                               <div className="aa-b">
                                 <h1>
                                    ATAG
                                </h1>
        
                               </div>
                               
                                <div className="aa-b">
                                    <strong><p>
                                        Olá, seja bem vindo ao nosso site,
                                        para fazer uso de nossos servicos e ferramentas 
                                    </p></strong>
                                </div>

                                <div className="aa-b">
                                    <ButtonLink> Inscreva-se</ButtonLink>
                                </div>
                        </Context>
                    </WelcomeMsg>
              
            </Container>
        )
    }
}

export default Welcome