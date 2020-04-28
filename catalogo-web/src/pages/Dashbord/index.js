import React,{Component}  from 'react';

import {SideNav,Container,Desk,Room,Mind,Notes,Leaf,Word,ReWrite,ActNotes,NewLeaf,Writing,ObjectInHand,Hand,Activities,ActivitiesG}  from "./style"

import {NavLink} from 'react-router-dom'

import RoutesDash from './routedash'

import Bsc from "../../assets/bsc.svg";
import Add from "../../assets/add.svg"
import Edt from "../../assets/edt.svg"
import Lixo from "../../assets/lixo.svg"
import Nu from "../../assets/nu.svg"
import Cancel from "../../assets/cancel.svg"
import Home from "../../assets/home.svg"

class Dashbord extends Component {
        state={
            change:{text:"",index:0},
            notes:[],
            grafics:[{}]
        }

    handleEdt=(e,i)=>{
        var checked = this.state.notes;
        checked.splice(i, 1,e);
        this.setState({notes: checked});
    }

    handleRemove=e=>{
        var checked = this.state.notes;
        var values = checked.indexOf(e)
        checked.splice(values, 1);
        this.setState({notes: checked});
    }

    handleAddnote=e=>{
        e.preventDefault();
        this.setState(state => ({
            notes: state.notes.concat([this.state.change.text])
          }));
          this.setState({Write:false})
          this.setState({change:{text:''}})
    }

    render(){
    
        return(
            
                <Container>
            <Mind>
                <p>
                    ATAG
                </p>                                

                <div>
                    <form>
                        <input placeholder="Buscar Algo"/>
                        <button type="submit"><img src={Bsc} alt="buscar"/></button>
                    </form>
                </div>
            </Mind>
        
           <Room>

                <SideNav>
                <div>
                    <NavLink to="/app/marcas"><img src={Home} alt="buscar"/></NavLink>
                    <img src={Add} alt="buscar"/>
                    <img src={Edt} alt="buscar"/>
                    <img src={Lixo} alt="buscar"/>
                    <NavLink to="/app/new"><img src={Nu} alt="buscar"/></NavLink>
                    
                </div>   
                </SideNav>

                <Desk>
                    <Hand>
                        <RoutesDash/>
                    </Hand>
                </Desk>

                <Notes>
                    <h1>Anotation</h1>
                    {this.state.notes.map((note,index)=>{return (
                        <Leaf key={index}>
                            {this.state.change.index === index
                                    
                            ?<form>
                                <ReWrite onChange={e=>this.handleEdt(e.target.value,index)} >{note}</ReWrite>
                            </form>
                            :<Word onClick={e=>this.setState({change:{index:index}})} >{note}</Word>
                            }
                                                              
                            <ActNotes>
                                <button onClick={e=>this.handleRemove(note)}><img src={Lixo}/></button>
                            </ActNotes>
                        </Leaf>
                            
                    )})}
                        <NewLeaf>
                            <form onSubmit={this.handleAddnote}>
                                <Writing 
                                    placeholder="Escreva sua anotação" 
                                    value={this.state.change.text} 
                                    onChange={e=>this.setState({change:{text:e.target.value}})}
                                />
                                
                            </form>
                        </NewLeaf>
                </Notes>

           </Room>

        </Container>
        )
    }
}

export default Dashbord