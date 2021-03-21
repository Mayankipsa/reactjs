import React,{Component} from 'react';
import './Person.css'

class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');
        const style = {
            '@media (min-width:500px)': {
                width: '450px'
            }
        }
        return (
            <div className="Person" style={style}>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        )
    }

}

export default Person;