import React from 'react';
import './Card.css';

const Card = ({ name, username, email, id,}) => {
	return(
		
			<div className='tc dib br3 pa3 ma2 grow bw2 shadow-5' id='card'>
				<img alt='robots' src={`https://robohash.org/${id}`}/>
				 <div class="card__overlay">
				    <div class="overlay__text">
				        <h2>{name}</h2>
						<h5>{name}</h5>
						<hr style={{ height:'1px',
							border:'none',
							backgroundColor:'#ADE2D0FF'}}/>
						<ul>
							<li><span id='textType'>User:</span> {username}</li>
							<li><span id='textType'>Email:</span> {email}</li>  
						</ul>
				    </div>

				  </div>
				<div>
					<h2>{name}</h2>
					<p>{name}</p>
				</div>
			</div>
		
	);
}

export default Card;