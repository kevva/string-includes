import test from 'ava';
import m from './';

test(t => {
	const str = 'To be, or not to be, that is the question';

	t.true(m(str, 'To be'));
	t.true(m(str, 'question'));
	t.false(m(str, 'nonexistent'));
	t.false(m(str, 'To be', 1));
	t.false(m(str, 'TO BE'));
});
