import { useState } from 'react';

function ValidEmail() {
    const [email, setEmail] = useState('');
    const [erro, setErro] = useState('');

    function eventoEmail(event) {
        const novoEmail = event.target.value;
        setEmail(novoEmail);

        if (novoEmail === '') {
            setErro('');
        } else if(validarEmail(novoEmail) && novoEmail.length >= 6) {
            setErro('');
        } else {
            setErro('O email deve conter o caractere "@" e o seu domínio.');
        }
    }

    function checkEmail(event) {
        const novoEmail = event.target.value;
        
        if (novoEmail.trim() === '') {
            setSenha('');
            setErro('');
            return;
        }
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    return { email, setEmail, erro, eventoEmail, checkEmail };
}

export default ValidEmail;