import { h,render } from 'preact';

export function User (props) {
	return (
	<div class="user" class="list-group">
			<figure class="user__image" class="list-group-item">
				<img src={props.image} class="img-rounded" />
			</figure>
			<p class="user__image" class="list-group-item">{props.name}</p>
		
	</div>
		);
}

export default User;