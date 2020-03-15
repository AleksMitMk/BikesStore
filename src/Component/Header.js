import React, { Component } from 'react';
import img from '../logo.png';


class Header extends Component{

	render(){
		
	return(
        <div>
            <div className="row">
				<div className="col-md-12 navigon">
					<div className='navi-brand'>
						<a className='navBrandImg' href='/'><img src={img} className="img img-responsive logo" alt="Bike Logo" /></a>
					</div>
					<div >
						<ul className="navi links">
							<li><a href='/'>HOME</a></li>
							<li><a href='/'>BIKES</a></li>
							<li><a href='/'>GEAR</a></li>
							<li><a href='/'>PARTS</a></li>
							<li><a href='/'>TIRES</a></li>
							<li><a href='/'>SERVICE-INFO</a></li>
							<li><a href='/'>CATALOGUES</a></li>
							<li><a href='/'>CONTACT</a></li>
						</ul>
					</div>
					<div>
						<ul className='navi-right'>
							<li>
								<a href='/'><i className="fas fa-search "></i></a>
							</li>
							<li>
								<a href='/'><i className="fas fa-shopping-bag"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
            <div className="row">
				<div className="col-md-12 text-left title">
					<div className="hr"></div>
					<div className="h1">Bikes</div>
					<div className="hr"></div>
				</div>
			</div>
				
		
		</div>
       
    
	)
}
} 
     
export default Header;