import React from 'react';


const Card = (props) =>{
    return(
		
        <div className="Card" >
            <div className={`col-sm-6 col-md-4 ${props.brand}`} id={props.gender}>
				<div className="thumbnail">
					<div className="image"><img src={`./image/`+(`${props.image}.png`)} className="img img-responsive" alt="bikes" /></div>
					<div className="caption">
						<div className="h5 title">{props.name}</div>
						<p className="price">{props.price} $</p>
					</div>
				</div>
			</div> 
       
        </div>
    )
}
export default Card;