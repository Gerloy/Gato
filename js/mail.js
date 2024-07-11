//Mail input del newsletter de Clima
var mail_arriba_news = document.getElementById('mail-clima-arriba');
var mail_news = document.getElementById('mail-clima');
var focus_news = false;

mail_news.value = 'Mail';
mail_arriba_news.style.display = 'none';

mail_news.addEventListener('mouseover', function() {
	if (this.value == 'Mail'){
		this.value = ' ';
	}
    mail_arriba_news.style.display = 'flex';
})

mail_arriba_news.addEventListener('mouseout', function() {
    if (focus_news == false){
        if (this.value == ' '){
            this.value = 'Mail';
        }
        mail_arriba_news.style.display = 'none';
    }
})

mail_news.addEventListener('click', function() {
    focus_news = true;
	if (this.value == 'Mail'){
		this.value = ' ';
	}
    mail_arriba_news.style.display = 'flex';
})

mail_news.addEventListener('focusout', function() {
    focus_news = false;
    if (this.value == ' '){
		this.value = 'Mail';
	}
    mail_arriba_news.style.display = 'none';
})

//Mail input de gatohoy
var mail_arriba_gato = document.getElementById('mail-final-arriba');
var mail_gato = document.getElementById('mail-final');
var form_gato = document.getElementById('form');
var focus_gato = false;

mail_gato.value = 'Email';
mail_arriba_gato.style.display = 'none';

mail_gato.addEventListener('mouseover', function() {
	if (this.value == 'Email'){
		this.value = '';
	}
    mail_arriba_gato.style.display = 'flex';
    form_gato.style.marginTop = '5.85%';
})

mail_gato.addEventListener('mouseout', function() {
    if (focus_gato == false){
        if (this.value == ''){
            this.value = 'Email';
        }
        mail_arriba_gato.style.display = 'none';
        form_gato.style.marginTop = '10%';
    }
})

mail_gato.addEventListener('click', function() {
    focus_gato = true;
	if (this.value == 'Email'){
		this.value = '';
	}
    mail_arriba_gato.style.display = 'flex';
    form_gato.style.marginTop = '5.5%';
})

mail_gato.addEventListener('focusout', function() {
    focus_gato = false; 
    if (this.value == ''){
		this.value = 'Email';
	}
    mail_arriba_gato.style.display = 'none';
    form_gato.style.marginTop = '10%';
})