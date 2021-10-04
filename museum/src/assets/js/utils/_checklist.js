const checklist = () => {
	const taskArr = []; // массив объектов с заданиями
	// список заданий со значениями самооценки
	const taskList = [
		{
			task: 'Вёрстка соответствует макету. Ширина экрана 1024px',
			value: 36,
		},
		{
			task: 'Вёрстка соответствует макету. Ширина экрана 768px',
			value: 36,
		},
		{
			task: 'Вёрстка соответствует макету. Ширина экрана 420px',
			value: 36,
		},
		{
			task: 'Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки',
			value: 6,
		},
		{
			task: 'Совмещается адаптивная и респонсивная (резиновая) вёрстка',
			value: 14,
		},
		{
			task: 'На ширине экрана 1024рх и меньше реализовано адаптивное меню',
			value: 12,
		},
		{
			task: 'Оптимизация скорости загрузки страницы',
			value: 4,
		},
		{
			task: 'Неточности px2px в секции с видео',
			value: 0,
		},
	];
	// конструктор строки задания
	function Row (task, value) {
		this.task = task;
		this.value = value;
	};
	// наполняем массив
	taskList.forEach((item) => {
		taskArr.push(new Row(item.task, item.value))
	});
	// считаем сумму значений
	const calcSumm = () => {
		let summ = 0;
		taskArr.forEach((item) => {
			summ += item.value
		})
		return summ
	};
	// выводим в консоль таблицу списка заданий и вычислинный результат
	console.table([...taskArr, new Row('Итого', calcSumm())]);
}

export default checklist
