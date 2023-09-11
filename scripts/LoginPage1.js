/**
 *  JAVA É UMA PLATAFORMA BINÁRIA FAMÍLIA...E EU AMO ELA!!!!
 */

var errorEmail = window.document.getElementById("error-email");
var btnNext = window.document.getElementById("next");
var email =  window.document.getElementById("email");
var btnOpSessao = document.getElementById("btn-sessao");
var bntOSAnterior =document.getElementById("previous1")
var loading = document.getElementById("loading");
var bar = window.document.getElementById("bar");
var formSessao = document.getElementById("contain");
var opsSessao = document.getElementById("opcoes-sessao");
var opcao = [];
var texto = [];
var nextPage = false; //Variável para permitir o usuário ir para a próxima página
var emailWritten = true; //Variável para verificar se o usuário inseriu dados
var writting = false; //Variável que afirma que o usuário começou a inserir dados



/**
 * Alguns métodos executados logo ao inicializar o script
 */
pegarElementos()

function pegarElementos(){
    opsSessao.style.display = "none";
    var ajudaOpcao = "imagem0";
    var ajudaTexto = "opcao0";
    var j = 0;
    for(var i=0;i<=2;i++){
        var j = i+1;
        ajudaOpcao = ajudaOpcao.substring(0,ajudaOpcao.length-1) + j;
        ajudaTexto = ajudaTexto.substring(0,ajudaTexto.length-1) + j;
        opcao[i] =document.getElementById(ajudaOpcao);
        texto[i] = document.getElementById(ajudaTexto);
    }
}

/*Eventos irritantes  */
        opcao[0].addEventListener("mouseenter",()=>{
            texto[0].style.backgroundColor = " #f1f0f0";
        })
        opcao[0].addEventListener("mouseleave",()=>{
            texto[0].style.backgroundColor = " #FFFFFF";
        })
        opcao[0].addEventListener("click",()=>{
            reset(4);
            borda(0,"dashed","1px");
        })
        opcao[1].addEventListener("mouseenter",()=>{
            texto[1].style.backgroundColor = "#f1f0f0";
        })
        opcao[1].addEventListener("mouseleave",()=>{
            texto[1].style.backgroundColor = " #FFFFFF";
        })
        opcao[1].addEventListener("click",()=>{
            reset(4);
            borda(1,"dashed","1px");
        })
        opcao[2].addEventListener("mouseenter",()=>{
            texto[2].style.backgroundColor = " #f1f0f0";
        })
        opcao[2].addEventListener("mouseleave",()=>{
            texto[2].style.backgroundColor = " #FFFFFF";
        })
        opcao[2].addEventListener("click",()=>{
            reset(4);
            borda(2,"dashed","1px");
        })
        function reset(pos){
            if(pos>=0 && pos<=2){
                borda(pos,"none","0px");
            }else if (pos==4){
                for(var i=0;i<=2;i++){
                    borda(i,"none","0px");
                }
            }
        }
        function borda(pos,estilo,altura){
            opcao[pos].style.borderStyle = estilo;
            opcao[pos].style.borderWidth = altura;
        }
/*Fim Eventos irritantes  */


btnOpSessao.addEventListener("click",()=>{
    formSessao.style.opacity = "0%";
    opsSessao.style.opacity = "100%";
    btnOpSessao.style.opacity = "0%";
    opsSessao.style.display = "block";
})

bntOSAnterior.addEventListener("click",()=>{
    opsSessao.style.opacity = "0%";
    opsSessao.style.display = "none";
    formSessao.style.opacity = "100%";
    btnOpSessao.style.opacity = "100%";
})


/**
 * Este evento adiciona a cor azul decorativa na barra inferior em relação à
 * caixa de texto quando o usuário for a escrever
 * e declara a variável 'writting' que usuário está escrevendo ou escreveu(true).
 */
email.addEventListener("focus",()=>{
    bar.style.borderColor = "#0067B8";
    emailWritten = false;
    writting = true;
})


/**
 * Este evento procura verificar se o usuário inseriu quaisquer dados na caixa de texto.
 * Caso ele não tenha digitado,irá deixar a barra inferior decorativa na cor  vermelha.
 * Caso contrário, ele irá deixar a barra na cor padrão.
 */
email.addEventListener("focusout",()=>{
    if (emailWritten == false){
        bar.style.borderColor = " #ED4452";
    }else{
        bar.style.borderColor = "#ccc";
    }
})


/**
 * Este evento, procura saber se usuário inseriu quaisquer dado na caixa de texto
 * quando ele for a deixar a caixa de texto.
 * - Se ele digitar, Será declarado que o 'emailWritten' como verdadeiro e vai
 * executar o método 'unBlock'.
 * - Caso contrário o 'emailWritten será declarado como falso e vai
 * executar o método 'Block'.
 */
email.addEventListener("mouseleave",()=>{
    if(writting == true) {
        if(email.value ==""){
            block();
            emailWritten =false;
        }else{
            unBlock();
            emailWritten = true;
        }

    }
})


/**
 * Este evento ao tocar no botão denominado "Seguinte", procura verificar se o usuário
 * inseriu quaisquer dados na caixa de texo.
 * - Caso ele não tenha inserido, Será mostrada uma mensagem acima da caixa de texto na
 * cor vermelha pedindo que o usuário insira os dados.
 */
btnNext.addEventListener("mouseenter",()=>{
    if(email.value == ""){
        block();
    }else{
        unBlock();
    }
})


/**
 * Este Método, serve para  esconder a mensagem avermelhada acima da caixa de texto,
 * também dizer ao usuário que ele pode ir à página seguinte(nextPage=true) e outros.
 */
function unBlock(){
    bar.style.borderColor = "#0067B8";
    errorEmail.style.display = "none";
    nextPage = true;
    bar.style.transition = "4s";
}


/**
 * Este Método, serve para  mostrar a mensagem avermelhada acima da caixa de texto,
 * também dizer ao usuário que ele não pode ir à página seguinte(nextPage=false) e outros.
 */
function block(){
    bar.style.transition = "0s";
    errorEmail.style.display = "block";
    bar.style.borderColor = " #ED4452";
    nextPage = false;
}


/**
 * Este Evento quando o usuário pressionar o botão, procura verificar
 * se o usuário pode ir para próxima página ou não. Esta verificação é
 * dependente do evento 'mouseleave'.
 */
btnNext.addEventListener("focus",()=>{
    if (nextPage == true){
        loading.style.display = "block";
        //location.href = "Login-Page2.html";
        //EU SOU FUDIDO!!!!!
    }
})

/**
 * COMER ARROZ E FEIJÃO FAZ BEM PARA SAÚDE !!!!!
 */