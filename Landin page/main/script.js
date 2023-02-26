// Função para iniciar o login de usuario
function started() {
    const $emailInput = document.getElementById('email');
    const $form = document.querySelector('.form');
    
    // Mostrando a forms
    $form.classList.toggle('form-show');

    // Checando se há algo escrito no input de email
    if ($emailInput.value != '') {
        showForm($emailInput.value);
    } 
}

// Função para mostrar o forms
function showForm(email) {
    const $login = document.getElementById('login');

    // Pegando o email já digitado
    if (email != '') {
        $login.value = email;
    }
}
