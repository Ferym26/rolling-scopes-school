const checklist = () => {
	const taskArr = []; // массив объектов с заданиями
	// список заданий со значениями самооценки
	const taskList = [
		{
			task: 'Слайдер в секции Welcome',
			value: 24,
		},
		{
			task: 'Слайдер в секции Video +20',
			value: 14,
		},
		{
			task: 'Кастомный видеоплеер +36',
			value: 4,
		},
		{
			task: 'Слайдер сравнения изображений в секции +10',
			value: 0,
		},
		{
			task: 'Анимация при прокрутке изображений в секции +8',
			value: 0,
		},
		{
			task: 'Калькулятор продажи билетов в секции +10',
			value: 0,
		},
		{
			task: 'Калькулятор продажи билетов в форме продажи билетов +14',
			value: 0,
		},
		{
			task: 'Валидация формы +16',
			value: 0,
		},
		{
			task: 'Интерактивная карта в секции Contacts',
			value: 12,
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
