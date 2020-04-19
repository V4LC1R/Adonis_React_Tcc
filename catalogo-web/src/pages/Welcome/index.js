import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {TopNav,WelcomeMsg, Container,Context,ButtonLink} from "./style"

class Welcome extends Component{

    render(){
        return(
            <Container id="welcome">
              
                <TopNav id="topNav" > 
                    <Link id="ImHere">
                        Home
                    </Link>

                    <Link>
                        Guia
                    </Link>

                    <Link>
                        Suporte
                    </Link>
                        
                    <Link to="/login">
                        Login
                    </Link>                       

                </TopNav>

                    <WelcomeMsg>
                        <Context >
                            
                               <div className="Center-Context">
                                 <h1>
                                    ATAG
                                </h1>
        
                               </div>
                               
                                <div className="Center-Context">
                                    <strong><p>
                                        Olá, seja bem vindo ao nosso site,
                                        para fazer uso de nossos servicos e ferramentas 
                                    </p></strong>
                                </div>

                                <div className="Center-Context">
                                    <Link to="/cadastro">
                                        <ButtonLink> Cadastre-se</ButtonLink>
                                    </Link>
                                </div>
                        </Context>
                    </WelcomeMsg>
              
            </Container>
        )
    }
}

export default Welcome