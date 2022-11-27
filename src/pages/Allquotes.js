import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{
		id: 'q1',
		author: 'John',
		txt: 'React Native',
	},
	{
		id: 'q2',
		author: 'Tom',
		txt: 'React Branch',
	},
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
