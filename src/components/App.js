import { h,Component } from 'preact';
import linkState from 'linkstate';


export class App extends Component  {
	constructor(props) {
		super(props);		
		this.submit = this.submit.bind(this);
	}

submit() {
	console.log(this.state.text);
}
	render(props, {text = ''}) {
		return (
			<div>
				<input type="text" value={text} onInput={linkState(this, 'text')}/>
				<pre><code>{JSON.stringify(this.state, null, 2)}</code></pre>
			</div>

			)
	}
	
}

export default App;