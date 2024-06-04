function ValidSenha() {
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    function eventoSenha(event) {
        const novaSenha = event.target.value;
        setSenha(novaSenha);

        if (validarSenha(novaSenha) && novaSenha.length >= 6) {
            setErro('');
        } else {
            setErro('A senha deve conter 6 caracteres com pelo menos uma letra e um número.');
        }
    }

    function checkSenha() {
        const novaSenha = event.target.value;
        
        if (novaSenha.trim() === '') {
            setValue('password', '');
            setErro('');
            return;
        }
    }

    function validarSenha(senha) {
        const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
        return regex.test(senha);
    }
}

export default ValidSenha;