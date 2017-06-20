import { h } from 'preact';
import { route } from 'preact-router';

function search(query) {
	console.log(query)
	route(`/profile/${encodeURIComponent(query)}`);
}

export default function Home() {
	return (
		<section>
			<p>Enter a GitHub Username</p>
			<br />
			<p>
			<input type="serch"
					placeholder="eg: vinosgrayapple"
					onSearch={e => search(e.target.value)}
					/>
			</p>
		</section>
		)
}