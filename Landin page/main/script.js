function started() {
    const $emailInput = document.getElementById('email');
    
    // Checando se há algo escrito no input de email
    if ($emailInput.value != '') {
        console.log('com email');
    } else {
        console.log('sem email');
    }
}