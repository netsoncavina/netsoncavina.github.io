function atualizarFilme(nome_do_filme){
    switch(nome_do_filme){
        case 'lucifer':
            document.getElementById("titulo").innerHTML = "Lucifer"
            document.getElementById("sinopse").innerHTML = "Entediado com a vida nas trevas, o diabo se muda para Los Angeles, abre um piano-bar e empresta sua sabedoria a uma investigadora de assassinatos."
            document.getElementById("trailer").href ="https://www.youtube.com/watch?v=X4bF_quwNtw"
            document.getElementById("info").href = "https://www.imdb.com/title/tt4052886/?ref_=fn_al_tt_1"
            document.getElementById("filme-principal").style.background = 'linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)100%), url("/img/capa-lucifer.jpg")'
            document.getElementById("filme-principal").style.backgroundSize = "100% 100%"
            break
        case 'umbrella':
            document.getElementById("titulo").innerHTML = "The Umbrella Academy" 
            document.getElementById("sinopse").innerHTML = "Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade."
            document.getElementById("trailer").href = "https://www.youtube.com/watch?v=5_4SW8HHfUs"
            document.getElementById("info").href ="https://www.imdb.com/title/tt1312171/?ref_=fn_al_tt_1"
            document.getElementById("filme-principal").style.background =  'linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)100%), url("/img/capa-umbrella.jpg")'
            document.getElementById("filme-principal").style.backgroundSize = '100% 100%'
            break
        case 'starWars9':
            document.getElementById("titulo").innerHTML = "Star Wars IX: A Ascenção Skywalker"
            document.getElementById("sinopse").innerHTML = "Com o retorno do Imperador Palpatine, todos voltam a temer seu poder e, com isso, a Resistência toma a frente da batalha que ditará os rumos da galáxia. Treinando para ser uma completa Jedi, Rey (Daisy Ridley) ainda se encontra em conflito"
            document.getElementById("trailer").href = "https://www.youtube.com/watch?v=i3X-xQIjqws"
            document.getElementById("info").href = "https://www.imdb.com/title/tt2527338/?ref_=nv_sr_srsg_0"
            document.getElementById("filme-principal").style.background =  'linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)100%), url("/img/capa-starwars.jpg")'
            document.getElementById("filme-principal").style.backgroundSize = '100% 100%'
            break
        case 'pokemon':
            document.getElementById("titulo").innerHTML = "Pokemon"
            document.getElementById("sinopse").innerHTML ="Ash Ketchum tem 10 anos, o que significa que ele já tem idade suficiente para se tornar um instrutor de Pokémon. Ash sonha muito sobre as aventuras que ele experimentará depois de ganhar seu primeiro Pokémon do Professor Oak."
            document.getElementById("trailer").href ="https://www.youtube.com/watch?v=dSnGOxOQfoA"
            document.getElementById("info").href = "https://www.imdb.com/title/tt0168366/?ref_=fn_al_tt_1"
            document.getElementById("filme-principal").style.background = 'linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)100%), url("/img/capa-pokemon.jpg")'
            document.getElementById("filme-principal").style.backgroundSize = "100% 100%"
            break
        case 'civilWar':
            document.getElementById("titulo").innerHTML = "Capitão America: Guerra Civil"
            document.getElementById("sinopse").innerHTML = "O ataque de Ultron fez com que os políticos buscassem algum meio de controlar os super-heróis, já que seus atos afetam toda a humanidade. Tal decisão coloca o Capitão América em rota de colisão com Tony Stark, o Homem de Ferro."
            document.getElementById("trailer").href = "https://www.youtube.com/watch?v=FkTybqcX-Yo"
            document.getElementById("info").href = "https://www.imdb.com/title/tt3498820/?ref_=nv_sr_srsg_0"
            document.getElementById("filme-principal").style.background = 'linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)100%), url("/img/capa-civilwar.png")'
            document.getElementById("filme-principal").style.backgroundSize = "100% 100%"
            break
        case 'hobbitFiveArmies':
            document.getElementById("titulo").innerHTML = "Hobbit: A Batalha dos Cinco Exércitos"
            document.getElementById("sinopse").innerHTML = "O dragão Smaug lança sua fúria ardente contra a Cidade do Lago que fica próxima da montanha de Erebor. Bard consegue derrotá-lo, mas, rapidamente, sem a ameaça do dragão, inicia-se uma batalha pelo controle de Erebor e sua riqueza."
            document.getElementById("trailer").href = "https://www.youtube.com/watch?v=iVAgTiBrrDA"
            document.getElementById("info").href = "https://www.imdb.com/title/tt2310332/?ref_=nv_sr_srsg_0"
            document.getElementById("filme-principal").style.background = 'linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)100%), url("/img/capa-hobbit.jpg")'
            document.getElementById("filme-principal").style.backgroundSize = "100% 100%"
            break
        case 'breakingBad':
            document.getElementById("titulo").innerHTML = "Breaking Bad"
            document.getElementById("sinopse").innerHTML = "Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos."
            document.getElementById("trailer").href = "https://www.youtube.com/watch?v=HhesaQXLuRY"
            document.getElementById("info").href = "https://www.imdb.com/title/tt0903747/?ref_=nv_sr_srsg_0"
            document.getElementById("filme-principal").style.background = 'linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)100%), url("/img/capa-breakingbad.jpg")'
            document.getElementById("filme-principal").style.backgroundSize = "100% 100%"
            break
        case 'house':
            document.getElementById("titulo").innerHTML = "House"
            document.getElementById("sinopse").innerHTML = "Um médico dissidente e anti-social, que se especializou em medicina de diagnóstico. Faz o que for preciso para resolver casos intrigantes que estão no seu caminho, usando a sua equipe de médicos e sua inteligência."
            document.getElementById("trailer").href = "https://www.youtube.com/watch?v=MczMB8nU1sY"
            document.getElementById("info").href = "https://www.imdb.com/title/tt0412142/?ref_=fn_al_tt_1"
            document.getElementById("filme-principal").style.background = 'linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)100%), url("/img/capa-house.jpg")'
            document.getElementById("filme-principal").style.backgroundSize = "100% 100%"
            break
        case 'supernatural':
            document.getElementById("titulo").innerHTML = "Supernatural"
            document.getElementById("sinopse").innerHTML = "Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho."
            document.getElementById("trailer").href = "https://www.youtube.com/watch?v=t-775JyzDTk"
            document.getElementById("info").href = "https://www.imdb.com/title/tt0460681/?ref_=fn_al_tt_1"
            document.getElementById("filme-principal").style.background = 'linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)100%), url("/img/capa-supernatural.jpg")'
            document.getElementById("filme-principal").style.backgroundSize = "100% 100%"
            break
        case 'smallville':
            document.getElementById("titulo").innerHTML = "SmallVile"
            document.getElementById("sinopse").innerHTML = "Antes da vida como Super-Homem, o jovem Clark Kent encara os problemas da adolescência enquanto aprende a controlar seus poderes e usá-los para proteger a cidade de Smallville."
            document.getElementById("trailer").href = "https://www.youtube.com/watch?v=yBHfuph4WWY"
            document.getElementById("info").href = "https://www.imdb.com/title/tt0279600/?ref_=fn_al_tt_1"
            document.getElementById("filme-principal").style.background = 'linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)100%), url("/img/capa-smallville.jpg")'
            document.getElementById("filme-principal").style.backgroundSize = "100% 100%"
            break
        case 'guerraInfinita':
            document.getElementById("titulo").innerHTML = "Vingadores: Guerra Infinita"
            document.getElementById("sinopse").innerHTML = "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade."
            document.getElementById("trailer").href = "https://www.youtube.com/watch?v=t_ULBP6V9bg"
            document.getElementById("info").href = "https://www.imdb.com/title/tt4154756/?ref_=fn_al_tt_4"
            document.getElementById("filme-principal").style.background = 'linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)100%), url("/img/capa-guerrainfinita.jpg")'
            document.getElementById("filme-principal").style.backgroundSize = "100% 100%"
            break
        case 'houseOfCards':
            document.getElementById("titulo").innerHTML = "House of Cards"
            document.getElementById("sinopse").innerHTML = "Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro."
            document.getElementById("trailer").href = "https://www.youtube.com/watch?v=8QnMmpfKWvo"
            // document.getElementById("info").href = "https://www.imdb.com/title/tt1856010/?ref_=fn_al_tt_1"
            document.getElementById("filme-principal").style.background = 'linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)100%), url("/img/capa-houseofcards.jpg")'
            document.getElementById("filme-principal").style.backgroundSize = "100% 100%"
            break
        case 'gameOfThrones':
            document.getElementById("titulo").innerHTML = "Game of Thrones"
            document.getElementById("sinopse").innerHTML = "Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra."
            document.getElementById("trailer").href = "https://www.youtube.com/watch?v=KPLWWIOCOOQ"
            document.getElementById("filme-principal").style.background = 'linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)100%), url("/img/capa-gameofthrones.jpg")'
            document.getElementById("filme-principal").style.backgroundSize = "100% 100%"
            
            document.getElementById("info").onclick = () =>{
                const str = "<br><br><span class='detalhes'>Duração 1h <br>2011-2019 <br>iMDB 9.3/10<br>Criação:George R R Martin & David Benioff <br>Elenco: Emilia Clarke, Peter Dinklage, Kit Harington</span>"
                document.getElementById("sinopse").innerHTML = str
            }
            break
    }
}
