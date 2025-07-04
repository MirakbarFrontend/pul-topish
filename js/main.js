document.addEventListener('DOMContentLoaded', function () {
	const modal = document.getElementById('modal');
	const openBtn = document.querySelector('.lesson__btn');
	const closeBtn = document.getElementById('modalClose');
	const overlay = document.querySelector('.modal__overlay');

	openBtn.addEventListener('click', function () {
		modal.classList.remove('hidden');
	});

	closeBtn.addEventListener('click', function () {
		modal.classList.add('hidden');
	});

	overlay.addEventListener('click', function () {
		modal.classList.add('hidden');
	});

	document.getElementById('submitBtn').addEventListener('click', function () {
		const name = document.getElementById('ism').value.trim();
		const phone = document.getElementById('tel').value.trim();

		if (name !== '' && phone !== '') {
			window.location.href = 'success.html';
		} else {
			alert('Iltimos, ismingiz va telefon raqamingizni kiriting.');
		}
	});
});
