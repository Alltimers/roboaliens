import React from 'react';
import './Card.css';

const Card = ({ name, username, email, id,}) => {
	return(
		
			<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' id='card'>
				<img alt='robots' src={`https://robohash.org/${id}`}/>
				 <div class="card__overlay">
				    <div class="overlay__text">
				        <h2>{name}</h2>
						<h5>{name}</h5>
						<ul>
							<li>User: {username}</li>
							<li>Email: {email}</li>  
						</ul>
				    </div>
				  </div>
				<div>
					<h2>{name}</h2>
					<h5>{name}</h5>
				</div>
			</div>
		
	);
}

export default Card;