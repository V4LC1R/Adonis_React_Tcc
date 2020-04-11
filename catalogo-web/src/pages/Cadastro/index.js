import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Container,FormCad, Top} from "./style";

class Cadastro extends Component {
    render(){
        return(
            <Container>
                <Top>
                    <Link to="/">
                        Home
                    </Link>
                    <Link>
                        Guia
                    </Link>
                  
                    <Link>
                         Suporte
                    </Link>
                        
                    <Link>
                        Login
                    </Link>
                      
                </Top>

                <FormCad  >
                    <label>
                        Nome / Razao social
                    </label>

                    <input placeholder="Auto eletrica X">
                    
                    </input>

                     <label>
                      e-mail
                    </label>

                    <input placeholder="Auto eletrica X" type="e-mail">
                    
                    </input>

                     <label>
                       senha
                    </label>

                    <input placeholder="Auto eletrica X" type="password">
                    
                    </input>

                    
                </FormCad>
            </Container>
         )
    }
}

export default Cadastro