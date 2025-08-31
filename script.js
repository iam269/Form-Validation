document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('contactForm');
	form.addEventListener('submit', function(e) {
		e.preventDefault();

		// Preluare valori
		const fullName = document.getElementById('fullName').value.trim();
		const phoneNo = document.getElementById('phoneNo').value.trim();
		const emailId = document.getElementById('emailId').value.trim();
		const message = document.getElementById('message').value.trim();

		// Validare simplă
		let errors = [];
		if (fullName.length < 3) {
			errors.push('Full Name trebuie să aibă minim 3 caractere.');
		}
		if (!/^\d{10,15}$/.test(phoneNo)) {
			errors.push('Phone No. trebuie să conțină doar cifre (10-15).');
		}
		if (!/^\S+@\S+\.\S+$/.test(emailId)) {
			errors.push('Email Id nu este valid.');
		}
		if (message.length < 5) {
			errors.push('Mesajul trebuie să aibă minim 5 caractere.');
		}

		// Afișare erori sau succes
		let feedback = document.getElementById('formFeedback');
		if (!feedback) {
			feedback = document.createElement('div');
			feedback.id = 'formFeedback';
			feedback.style.marginTop = '16px';
			form.appendChild(feedback);
		}

		if (errors.length > 0) {
			feedback.style.color = 'red';
			feedback.innerHTML = errors.join('<br>');
		} else {
			feedback.style.color = 'green';
			feedback.innerHTML = 'Formular trimis cu succes!';
			form.reset();
		}
	});
});
