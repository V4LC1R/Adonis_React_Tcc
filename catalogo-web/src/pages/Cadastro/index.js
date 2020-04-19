import React,{Component} from 'react';
import {Container,ErrMsg} from "./style";

import {withRouter} from "react-router-dom";
import api from "../../services/api"

import "./style.css"

class Cadastro extends Component {

    state = {
        username:"",
        email:"",
        password:"",
        confirmed:"",
        error:""
    }

    handleSignUp = async e => {
        e.preventDefault();
        const {username,email,password,confirmed}=this.state;

        if(!username || !email || !password || !confirmed){
            this.setState({error:"Prencha todos os campos para proseguir"});
        }else if(confirmed!==password){
            this.setState({error:"Senhas Não compativeis"})
        }else if(password.length < 10){
           this.setState({error:"Senha de no minimo 10 caracteres"})
        }else{
            try{
                await api.post("/users",{username,email,password});
                this.props.history.push("/login")

            }catch(err){
                console.log(err);
                this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
            }
        }
        
      };

    render(){
        return(
            <Container>
               

                <form id="formCad" onSubmit={this.handleSignUp} >
                    <h1 className="title">ATAG</h1>
                    {this.state.error && <ErrMsg>{this.state.error}</ErrMsg>}
                    <label>
                        Nome / Razao social
                    </label>

                    <input 
                        placeholder="Empresa AA"
                        type="text"
                        onChange={e=>this.setState({username:e.target.value})}
                    />

                    <label>
                      E-mail
                    </label>

                    <input 
                        placeholder="Empresa@email.com" 
                        type="e-mail"
                        onChange={e=>this.setState({email:e.target.value})}
                    />
                    

                     <label>
                       Senha
                    </label>

                    <input 
                        placeholder="" 
                        type="password"
                        onChange={e=>this.setState({password:e.target.value})}
                    />
                    

                    <label>
                       Confirme a Senha
                    </label>

                    <input 
                        placeholder="" 
                        type="password"
                        onChange={e=>this.setState({confirmed:e.target.value})}
                    />
                    

                    <button type="submit" className="tt"> Cadastrar </button>
                    
                </form>
            </Container>
         )
    }
}

export default withRouter(Cadastro)