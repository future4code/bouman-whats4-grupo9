import React from 'react';
import "./whats.css" ;
import { isTerminatorless } from '@babel/types';



class Whats extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            userMsg: "",
            valoresRecebidos: []
        }
    }
    


    aoMudarName = e => {
        this.setState({
            userName: e.target.value,
        })
    }

    aoMudarMsg = e => {
        this.setState({
            userMsg: e.target.value,
        })
    }
    

    aoClicarEnviar = () =>{
        let copiaValorRecebido = [...this.state.valoresRecebidos]
        const novaMsg = {
            usuario: this.state.userName,
            mensagem: this.state.userMsg
        }
        copiaValorRecebido.push(novaMsg)
        this.setState({
            valoresRecebidos:copiaValorRecebido})

    }
    


    render(){
   
        return(
    
    <div>

        <p>{this.state.userName}</p>
        <p>{this.state.userMsg}</p>
       
        {this.state.valoresRecebidos.map(person => {
            return(
                <teste key={this.valoresRecebidos.indexOf(person)} userMsg={person.userMsg}/>
            );
        }
        ) 

    }

            
    <input placeholder="User" onChange={this.aoMudarName} 
    value={this.state.userName}/>
    
    <input placeholder="MSG" onChange={this.aoMudarMsg} 
    value={this.state.userMsg} />
    
    <button onClick={this.aoClicarEnviar}>Enviar</button>
    
    </div>

        );
}


}







export default Whats