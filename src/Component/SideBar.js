import React, { Component } from 'react';
import axios from 'axios';

class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            all: [],
			male: '',
			female: '',
			leGrand: '',
			kross: '',
			explorer: '',
			visitor: '',
			pony: '',
			force: '',
			ebike: '',
			ideal: '',
			classAdd: 'allField'
			
        }
    }
    componentDidMount(){
		axios('https://json-project3.herokuapp.com/products/')
		.then(data => {

			this.setState({
			all: data.data,
			male: data.data.filter(el => el.gender === 'MALE'), 
			female: data.data.filter(el => el.gender === 'FEMALE'),
			leGrand: data.data.filter(el => el.brand === 'LE GRAND BIKES'),
			kross: data.data.filter(el => el.brand === 'KROSS'),
			explorer: data.data.filter(el => el.brand === 'EXPLORER'),
			visitor: data.data.filter(el => el.brand === 'VISITOR'),
			pony: data.data.filter(el => el.brand === 'PONY'),
			force: data.data.filter(el => el.brand === 'FORCE'),
			ebike:data.data.filter(el => el.brand === 'E-BIKES'),
			ideal: data.data.filter(el => el.brand === 'IDEAL')
		})
	})
	}
	

    
    render() {
		
        return (
             <div>
                 <div className="row">
					<div className="col-md-12">
						<div className="h3">Filter by:</div>
							<div className='allField active' name="ALL"  onClick={(e) => this.props.onBikeClick(e.currentTarget)}>
								<p>Show all</p>
									<span className="badge">{this.state.all.length}</span>
							</div>
						<div className="hr"></div>
					</div>
				</div>
                 <div className="row">
						<div className="col-md-12">
							<div className="h4">Gender</div>
								<div className={this.state.classAdd} name="MALE" onClick={(e) => this.props.onBikeClick(e.currentTarget)}>
									<p>Male</p>
									<span className="badge MALE" >{this.state.male.length}</span>
								</div>
								<div className={this.state.classAdd} name="FEMALE" onClick={(e) => this.props.onBikeClick(e.currentTarget)}>
									<p>Female</p>
									<span className="badge FEMALE">{this.state.female.length}</span>
								</div>
							<div className="hr"></div>
						</div>
					</div>
                 	<div className="row">
						<div className="col-md-12">
							<div className="h4">Brand</div>
								<div className={this.state.classAdd} name="LE GRAND BIKES" onClick={(e) => this.props.onBikeClick(e.currentTarget)}>
									<p>LE GRAND BIKES</p>
									<span className="badge LEGRANDBIKES">{this.state.leGrand.length}</span>
								</div>
								<div className={this.state.classAdd} name="KROSS" onClick={(e) => this.props.onBikeClick(e.currentTarget)}>
									<p>KROSS</p>
									<span className="badge KROSS">{this.state.kross.length}</span>
								</div>
								<div className={this.state.classAdd} name="EXPLORER"  onClick={(e) => this.props.onBikeClick(e.currentTarget)}>
									<p>EXPLORER</p>
									<span className="badge EXPLORER">{this.state.explorer.length}</span>
								</div>
								<div className={this.state.classAdd} name="VISITOR"  onClick={(e) => this.props.onBikeClick(e.currentTarget)}>
									<p>VISITOR</p>
									<span className="badge VISITOR">{this.state.visitor.length}</span>
								</div>
								<div className={this.state.classAdd} name="PONY" onClick={(e) => this.props.onBikeClick(e.currentTarget)}>
									<p>PONY</p>
									<span className="badge PONY">{this.state.pony.length}</span>
								</div>
								<div className={this.state.classAdd} name="FORCE" onClick={(e) => this.props.onBikeClick(e.currentTarget)}>
									<p>FORCE</p>
									<span className="badge FORCE">{this.state.force.length}</span>
								</div>
								<div className={this.state.classAdd} name="E-BIKES" onClick={(e) => this.props.onBikeClick(e.currentTarget)}>
									<p>E-BIKES</p>
									<span className="badge E-BIKES">{this.state.ebike.length}</span>
								</div>
								<div className={this.state.classAdd} name="IDEAL" onClick={(e) => this.props.onBikeClick(e.currentTarget)}>
									<p>IDEAL</p>
									<span className="badge IDEAL">{this.state.ideal.length}</span>
								</div>
								
						</div>
					</div>
             </div>
        );
    }
}
export default SideBar;