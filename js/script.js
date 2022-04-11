//Português
$(function(){
    $(".br").click(function(){
        $(".language-selected").text("pt-br");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-br");
        //cabecalho
        $(".cabecalho h1").text("Cadastro web");
        $(".cabecalho p").text("complete suas informações");
        //form
        $(".dados .campo label:nth-child(1)").text("Nome");
        $(".dados .campo label:nth-child(2)").text("Sobrenome");
        $(".emails label").email("Email");
        //sobre
        $(".dados .sobre label:nth-child(1)").text("qué lado de la aplicación desarrollas");
        $(".dados .sobre label input:nth-child(2)").radio("Front-end");
        $(".dados .sobre label input:nth-child(3)").radio("Back-end");
        $(".dados .sobre label input:nth-child(4)").radio("Full-stack");
        //experiência
        $(".exp label:nth-child(1)").text("competencia");
        $(".exp select option:nth-child(1)").option("Seleccione");
        $(".exp select option:nth-child(2)").option("júnior");
        $(".exp select option:nth-child(3)").option("nivel medio");
        $(".exp select option:nth-child(4)").option("sénior");
        //tech
        $(".tech label:nth-child(1)").text("seleccione las tecnologías que utiliza:");
        $(".tech label:nth-child(2)").checkbox("Html");
        $(".tech label:nth-child(3)").checkbox("CSS");
        $(".tech label:nth-child(4)").checkbox("JavaScript");
        $(".tech label:nth-child(5)").checkbox("PHP");
        $(".tech label:nth-child(6)").checkbox("C#");
        $(".tech label:nth-child(7)").checkbox("Python");
        //final
        $(".coment label:nth-child(1)").text("cuéntanos un poco tu experiencia");

        $(".botao").text("concluido");
    });
});

//English
$(function(){
    $(".en").click(function(){
        $(".language-selected").text("en");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-en");
        //header
        $(".cabecalho").text("web registration");
        $(".cabecalho").text("complete your information");
        //form
        $(".dados .campo label:nth-child(1)").text("Name");
        $(".dados .campo label:nth-child(2)").text("Surname");
        $(".emails label:nth-child(1)").email("Email");
        //about
        $(".sobre label:nth-child(1)").text("which stack do you develop");
        $(".sobre label:nth-child(2)").radio("Front-end");
        $(".sobre label:nth-child(3)").radio("Back-end");
        $(".sobre label:nth-child(4)").radio("Full-stack");
        //experience
        $(".exp label:nth-child(1)").text("seniority");
        $(".exp select option:nth-child(1)").option("select");
        $(".exp select option:nth-child(2)").option("junior");
        $(".exp select option:nth-child(3)").option("Mid-level");
        $(".exp select option:nth-child(4)").option("Senior");
        //tech
        $(".tech label:nth-child(1)").text("select as technologies you use:");
        $(".tech label:nth-child(2)").checkbox("Html");
        $(".tech label:nth-child(3)").checkbox("CSS");
        $(".tech label:nth-child(4)").checkbox("JavaScript");
        $(".tech label:nth-child(5)").checkbox("PHP");
        $(".tech label:nth-child(6)").checkbox("C#");
        $(".tech label:nth-child(7)").checkbox("Python");
        //last
        $(".coment label:nth-child(1)").text("tell us a little about your experience");

        $(".botao").text("conclude");
    });
});

//Español
$(function(){
    $(".es").click(function(){
        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-es");
        //header
        $(".cabecalho").text("registro web");
        $(".cabecalho").text("completa tu información");
        //form
        $(".dados .campo label:nth-child(1)").text("Nombre");
        $(".dados .campo label:nth-child(2)").text("apellido");
        $(".emails label:nth-child(1)").email("Email");
        //about
        $(".sobre label:nth-child(1)").text("¿Qué stack desarrollas?");
        $(".sobre label:nth-child(2) input:nth-child(1)").radio("Front-end");
        $(".sobre label:nth-child(3) input:nth-child(1)").radio("Back-end");
        $(".sobre label:nth-child(4) input:nth-child(1)").radio("Full-stack");
        //experience
        $(".exp label:nth-child(1)").text("seniority");
        $(".exp select option:nth-child(1)").text("select");
        $(".exp select option:nth-child(2)").option("junior");
        $(".exp select option:nth-child(3)").option("Mid-level");
        $(".exp select option:nth-child(4)").option("Senior");
        //tech
        $(".tech label:nth-child(1)").text("select as technologies you use:");
        $(".tech label:nth-child(2)").checkbox("Html");
        $(".tech label:nth-child(3)").checkbox("CSS");
        $(".tech label:nth-child(4)").checkbox("JavaScript");
        $(".tech label:nth-child(5)").checkbox("PHP");
        $(".tech label:nth-child(6)").checkbox("C#");
        $(".tech label:nth-child(7)").checkbox("Python");
        //last
        $(".coment label:nth-child(1)").text("tell us a little about your experience");

        $(".botao").text("conclude");
    });
});