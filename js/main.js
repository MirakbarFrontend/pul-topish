document.addEventListener('DOMContentLoaded', function () {
	const modal = document.getElementById('modal');
	const openBtns = document.querySelectorAll('.open-modal-btn');
	const closeBtn = document.getElementById('modalClose');
	const overlay = document.querySelector('.modal__overlay');
	const submitBtn = document.getElementById('submitBtn');

	// Har ikkala tugma modalni ochadi
	openBtns.forEach(function (btn) {
		btn.addEventListener('click', function () {
			modal.classList.remove('hidden');
		});
	});

	// Modalni yopish
	closeBtn.addEventListener('click', function () {
		modal.classList.add('hidden');
	});

	overlay.addEventListener('click', function () {
		modal.classList.add('hidden');
	});

	// Formani tekshirish va redirect
	submitBtn.addEventListener('click', function () {
		const name = document.getElementById('ism').value.trim();
		const phone = document.getElementById('tel').value.trim();

		if (name !== '' && phone !== '') {
			window.location.href = 'success.html';
		} else {
			alert('Iltimos, ismingiz va telefon raqamingizni kiriting.');
		}
	});
});
