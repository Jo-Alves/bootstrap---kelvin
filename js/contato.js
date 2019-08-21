(function () {
    let $input = document.querySelectorAll("input"),
        $textArea = document.querySelector("textArea"),
        $alert = document.querySelectorAll(".alert"),
        $btnEnviar = document.querySelector(".btnEnviar"),
        validacao = false;


    $btnEnviar.addEventListener("click", EnviarCampos)

    function EnviarCampos() {
        $input.forEach((e, i) => {
            let id = e.getAttribute("id")
            if (id === "nome") {
                if (e.value.length < 4) {
                    $alert[i].innerHTML = "Por favor, insira pelo menos 4 caracteres";
                }
                else {
                    $alert[i].innerHTML = "";
                }
            }
            else if (id === "assunto") {
                if (e.value.length < 8) {
                    $alert[i].innerHTML = "Por favor, insira pelo menos 8 caracteres de assunto";
                }
                else {
                    $alert[i].innerHTML = "";
                }
            }
            else if (id === "email") {
                validarEmail(e.value);
                if (!validacao) {
                    $alert[i].innerHTML = "por favor digite um email válido";
                }
                else {
                    $alert[i].innerHTML = "";
                }
            }
        })

        if ($textArea.value.length === 0) {
            $alert[3].innerHTML = "Por favor, escreva algo para nós";
        }
        else {
            $alert[3].innerHTML = "";
        }
    }
    function validarEmail(email) {
        let user = email.substring(0, email.indexOf("@"));
        let dominio = email.substring(email.indexOf("@") + 1, email.length);

        if ((user.length >= 1) &&
            (dominio.length >= 3) &&
            (user.search("@") == -1) &&
            (dominio.search("@") == -1) &&
            (user.search(" ") == -1) &&
            (dominio.search(" ") == -1) &&
            (dominio.search(".") != -1) &&
            (dominio.indexOf(".") >= 1) &&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            validacao = true;
        }
        else {
            validacao = false;
        }
    }
})()