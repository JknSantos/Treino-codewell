// Adicionando um evento para quando apertar enter no input do email
// EMAIL
document.getElementById('email').addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        started();
    }
});
// LOGIN
document.getElementById('login').addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        checkLogin();
    }
})
// PASSWORD
document.getElementById('password').addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        checkLogin();
    }
})

// Função para iniciar o login de usuario
function started() {
    const $emailInput = document.getElementById('email');
    const $form = document.querySelector('.form');
    
    // Mostrando a forms
    $form.classList.toggle('form-show');

    // Checando se há algo escrito no input de email
    if ($emailInput.value != '') {
        applyEmail($emailInput.value);
    } 
}

// Função para mostrar o forms
function applyEmail(email) {
    const $login = document.getElementById('login');

    // Pegando o email já digitado
    if (email != '') {
        $login.value = email;
    }
}

// Função para checar se todos os campos de login foram preenchidos
function checkLogin() {
    const $login = document.getElementById('login');
    const $password = document.getElementById('password');

    if ($login.value != '' && $password.value != '') {
        alert('Login completed');
    } else {
        alert('One of the fields has not been filled in correctly');
    }
}