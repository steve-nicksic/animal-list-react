import React, {Component} from 'react'


class Animal extends Component{
    state = {
        petList:[],
        petName:'',
        petBreed:'',
        petAge:0
    };
// constructor(props){
//     super(props)
//     this.state={
//         petList:[],
//         petName:'',
//         petBreed:'',
//         petAge:0
//     }
// }

handleNameInput = (event)=>{
    this.setState({petName: event.target.value})
    //got the state, target petName and update the value
    console.log("changed", this.state.petName)
};

handleBreedInput = (event)=> {
    this.setState({petBreed: event.target.value})
    console.log("changed", this.state.petBreed)
};

handleAgeInput = (event)=>{
    this.setState({petAge: event.target.value})
    console.log("changed", this. state. petAge)
};

handleClick = ()=> {
    let petObj = {petName: this.state.petName, 
        petBreed: this.state.petBreed, 
        petAge: this.state.petAge};

    this.setState({
        petList: [...this.state.petList, petObj],
        petName:"", petBreed:"", petAge: 0});
};


    render(){
        let petArr = this.state.petList.map((animal, index)=>{
          return(
            <div key={index}>
            <div>Name: {animal.petName}</div>
            <div>Breed: {animal.petBreed}</div>
            <div>Age {animal.petAge}</div>

        </div>
          )      
        })
        return(
            <div>
                <h4>My Pet Store List</h4>
                {petArr}
                <input 
                value={this.state.petName} 
                onChange={this.handleNameInput} 
                placeholder="Pet name" />

                <input 
                value={this.state.petBreed} 
                onChange={this.handleBreedInput} 
                placeholder="Pet breed" />

                <input v
                alue={this.state.petAge} 
                onChange={this.handleAgeInput} 
                placeholder="Pet Age" />

                <button onClick={this.handleClick}>Add Animal</button>
            </div>
        )

    }
}

export default Animal;