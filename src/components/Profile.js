import { h, Component } from 'preact';
import User from './User';

export class Profile extends Component {
	constructor() {
		super(props);
		this.state = {
			user: null,
			loading: true
		}
	}
	componentDidMount() {
		fetch(`https://api.github.com/users/${this.props.user}`)
			.then(resp=>resp.json())
			.then(user=> {
				this.setState({
					user,
					loading: false
				});
			})
			.catch(err=>console.log(err));
	}

render({}, {loading, user}) {
	return (
	<div className="app">
		{loading
			? <p>Fetching...</p>
			: <User image={user.avatar_url}
					name={user.name}
						/>
					}
		}
	</div>
	);
}
}

export default Profile;