import { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';

import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
	{
		id: 'q1',
		author: 'John',
		text: 'React Native',
	},
	{
		id: 'q2',
		author: 'Tom',
		text: 'React Branch',
	},
];

const QuoteDetail = () => {
	const match = useRouteMatch();
	const params = useParams();

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quote.id);

	if (!quote) {
		return <p>No quote found.</p>;
	}

	return (
		<Fragment>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={match.path} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Load coments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
