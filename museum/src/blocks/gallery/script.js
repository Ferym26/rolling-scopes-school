const Gallery = () => {
	let isInit = false;
	const container = document.querySelector('.gallery__inner');
	const galerylist = [
		'galery1',
		'galery2',
		'galery3',
		'galery4',
		'galery5',
		'galery6',
		'galery7',
		'galery8',
		'galery9',
		'galery10',
		'galery11',
		'galery12',
		'galery13',
		'galery14',
		'galery15',
	];
	// перемешивает массив
	const shuffle = (array) => {
		return array.sort(() => Math.random() - 0.5);
	}
	// создаёт изображение
	const addPicture = (image) => {
		const picture = `
			<picture>
				<source srcset="images/${image}.webp" type="image/webp">
				<source srcset="images/${image}.jpg" type="image/jpeg">
				<img class="gallery-img" src="images/${image}.jpg" alt="picture">
			</picture>
		`;
		container.insertAdjacentHTML('afterbegin', picture);
	};
	// создание галлереи
	const setGallery = () => {
		if (!isInit) {
			shuffle(galerylist).map(item => {
				addPicture(item);
			});
			isInit = true;
		}
	}
	// инит галлереи при скролле к ней
	new Waypoint({
		element: document.querySelector('.gallery'),
		handler: function (direction) {
			setGallery();
		},
		offset: '100%',
	});
}

export default Gallery
