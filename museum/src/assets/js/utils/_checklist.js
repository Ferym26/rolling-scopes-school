const checklist = () => {
	const taskArr = []; // массив объектов с заданиями
	// список заданий со значениями самооценки
	const taskList = [
		{
			task: 'Вёрстка валидная',
			value: 10,
		},
		{
			task: 'Вёрстка семантическая. В коде страницы присутствуют следующие элементы (указано минимальное количество, может быть больше)',
			value: 24,
		},
		{
			task: 'Вёрстка соответствует макету',
			value: 45,
		},
		{
			task: 'Форма покупки билетов',
			value: 22,
		},
		{
			task: 'Требования к css',
			value: 18,
		},
		{
			task: 'Интерактивность, реализуемая через css',
			value: 25,
		},
		{
			task: 'Интерактивность, реализуемая через js',
			value: 16,
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
