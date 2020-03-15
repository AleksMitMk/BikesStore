import React, { Component } from 'react';
import SideBar from './SideBar';
import Card from './Card';
import axios from 'axios';


class Filters extends Component {
    constructor(){
        super();
        this.state = {
            arr: [] 
        }
       
    }
    
    componentDidMount(){
       axios('https://json-project3.herokuapp.com/products/')
        .then(data => this.setState({
            arr: data.data
        }))
    }

    
    // fIltering data on click
	handleClick = (e) =>{
        let bike = e.getAttribute('name');
       //on click to remove or add class active
        document.querySelector('.active').classList.remove('active');
        if(bike === 'ALL'){
            axios('https://json-project3.herokuapp.com/products/')
            .then(data => this.setState({ arr: data.data  }));
            e.setAttribute('class', 'allField active')
           
        }else if(bike === 'MALE' || bike === 'FEMALE'){
            
            axios('https://json-project3.herokuapp.com/products/')
            .then(data => {
                var maleBike = data.data.filter(el => el.gender === bike )
                this.setState({ arr: maleBike})});
                e.setAttribute('class', 'allField active')
             
        }else {
            axios('https://json-project3.herokuapp.com/products/')
            .then(data => {
                var allBike = data.data.filter(el => el.brand === bike)
                this.setState({ arr: allBike })});
                e.setAttribute('class', 'allField active')
            }
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <SideBar onBikeClick={this.handleClick} />
                    </div>
                    <div className="col-md-9">
                        <div className="row allCards">
                    {this.state.arr.map((el, index) => (
                        <Card key={index} name={el.name} price={el.price} gender={el.gender} brand={el.brand} image={el.image}/>
                    ))}
                        </div>
                    </div>
                </div>
            </div>
            )  
        }
}

export default Filters;