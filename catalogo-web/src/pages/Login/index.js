import React,{Component} from "react";

import {ErrMsg} from "./style"

import api from "../../services/api";
import { login } from "../../services/auth";

class Login extends Component {
    state = {
        email:"",
        password:"",
        error:""
    }

    handleSignIn= async e=>{
        e.preventDefault();

        const {email,password}=this.state;

        if(!email || !password){
            this.setState({error:"Prencha todos os campos para proseguir"});
        }else{
            try{
               const response= await api.post("/sessions",{email,password});
                login(response.data);
                this.props.history.push("/app");
            }catch(err){
                console.log(err);
                this.setState({error:"Erro ao logar"});
            }
        }

    }


    render(){
        return(
            <>
                 <form id="formCad" onSubmit={this.handleSignIn} >
                    <h1 className="title">ATAG</h1>
                    {this.state.error && <ErrMsg>{this.state.error}</ErrMsg>}
                   

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
                   
                    <button type="submit" className="tt"> Login </button>
                    
                </form>
            </>
        )
    }
}

export default Login