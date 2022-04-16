function Resumo() {
    const texto = document.querySelector('.frase-resumo');
    const tamanho = document.querySelector('.text-resumo');
    const tamanhoDiscussion = document.querySelector('.page-discussion');

    setTimeout(() => {
        if(tamanho.style.height === '189px' || tamanhoDiscussion.style.padding === '55px 40px') {
            tamanhoDiscussion.style.padding = '420px 0px'
            tamanho.style.height = '600px';
            texto.style = 'line-height: 23px';
            texto.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum. </br> </br> </br> Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio. </br> </br> </br> Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa. </br> </br> </br> Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        } else {
            tamanhoDiscussion.style.padding = '10px 0px'
            tamanho.style.height = '189px';
            texto.style = 'line-height: 23px'
            texto.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant... <span id="ver-mais">ver mais</span>'
        }
    }, 200);
}   

function alterarTela() {
    const discussion = document.querySelector('.midle-discussion');
    const feedback = document.querySelector('.feedback');
    const flexMidle = document.querySelector('.flex-text-midle-center');
    const tamanho = document.querySelector('.text-discussion');
    const footer = document.querySelector('footer');

    if(discussion.style.display === 'flex' || feedback.style.display === 'none') {
        discussion.style.display = 'none'
        feedback.style.display = 'flex'
        flexMidle.style.margin = '-30px 0px'
        tamanho.style.height = '680px'
        footer.style.padding = '50px 15px'
    } else {
        discussion.style.display = 'flex'
        feedback.style.display = 'none'
        flexMidle.style.margin = '0px'
        tamanho.style.height = '635px'
        footer.style.padding = '10px 15px'
    }
}

function NovoTopico() {
    const topico = document.querySelector('.topico');
    const feedback = document.querySelector('.feedback');
    const flexMidle = document.querySelector('.flex-text-midle');
    const flexMidle2 = document.querySelector('.flex-text-midle-2');
    const tamanho = document.querySelector('.text-discussion');
    const footer = document.querySelector('footer');

    if(feedback.style.display === 'flex' || topico.style.display === 'none') {
        feedback.style.display = 'none'
        topico.style.display = 'flex'
        flexMidle.style.margin = '25px 14px'
        flexMidle2.style.margin = '-10px 14px'
        tamanho.style.height = '785px'
        footer.style.padding = '140px 15px' 
    } else {
        feedback.style.display = 'flex'
        topico.style.display = 'none'
        flexMidle.style.margin = '50px 14px'
        flexMidle2.style.margin = '-35px 14px'
        tamanho.style.height = '635px'
        footer.style.padding = '10px 15px'
    }
}

function BackPage() {
    const topico = document.querySelector('.topico');
    const feedback = document.querySelector('.feedback');

    if(topico.style.display === 'flex' || feedback.style.display === 'none') {
        topico.style.display = 'none'
        feedback.style.display = 'flex'
    } else {
        
    }
}

function expandirDiv() {
    const expandir = document.querySelector('.box-text-flex');
    const tamanho = document.querySelector('.text-discussion');
    const footer = document.querySelector('footer');

    if(expandir.style.display === 'none') {
        expandir.style.display = 'flex';
        tamanho.style.height = '1350px';
        footer.style.padding = '690px 15px';
    } else {
        expandir.style.display = 'none';
        tamanho.style.height = '800px';
        footer.style.padding = '80px 15px'
    }

}