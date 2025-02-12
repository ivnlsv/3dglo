import './css/bootstrap.min.css';
import './css/style.min.css';
import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('7 february 2025');
menu();
modal();
scroll();
tabs();
slider();
calc(100);
sendForm({
	formId: 'form1',
	someElem: [
		{
			type: 'block',
			id: 'total',
		},
	],
});
sendForm({
	formId: 'form2',
	someElem: [
		{
			type: 'block',
			id: 'total',
		},
	],
});
sendForm({
	formId: 'form3',
	someElem: [
		{
			type: 'block',
			id: 'total',
		},
	],
});
