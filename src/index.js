import { h, render } from 'preact';
import App from './components/App';

// const config = {
// 	urls : {
// 		user: 'https://api.github.com/users/vinosgrayapple'
// 	}
// }
// config={config}
render(<App />, document.querySelector('main'));