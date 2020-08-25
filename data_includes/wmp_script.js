  
var shuffleSequence = seq("setcounter", "tcle", "demografia", "intro1", "practice1", "intro2", "practice2", "intro3", "block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8", "block9", "block10", "intro4", "practice4", "intro5", "practice5", "intro3", "certificado", "hiddenCompletionCode");

// Define valores default a serem usados em todo o experimento

var defaults = [
  "Question", {as: ["Sim", "Não"], randomOrder: false, presentHorizontally: true, timeout: 10000},
  "FlashSentence", {timeout: 1000}
  ];

var sendingResultsMessage = "Por favor, aguarde enquanto registramos suas respostas. Isso pode demorar alguns segundos, então não feche esta janela ainda.";

var completionMessage = "Agradecemos sua participação! Você pode fechar essa janela agora.";

var items = [
  
  //formulários 
  
  ["tcle", "Form", {consentRequired: true, continueMessage: "Clique aqui para continuar", html: {include: "tcle.html"}}],  

  ["demografia", "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "demografia.html"}}],
  
  ["intro1", "Form", {consentRequired: false, continueMessage: "Clique aqui para ver um exemplo", html: {include: "intro1.html" }} ],
  
  ["intro2", "Form", {consentRequired: false, continueMessage: "Clique aqui para ver um exemplo", html: {include: "intro2.html" }} ],
  
  ["intro3", "Form", {consentRequired: false, continueMessage: "Clique aqui para começar a tarefa", html: {include: "intro3.html" }} ],
  
  ["intro4", "Form", {consentRequired: false, continueMessage: "Clique aqui para ver um exemplo", html: {include: "intro4.html" }} ],
  
  ["certificado", "Form", {consentRequired: false, continueMessage: "Click here to finish the experiment", html: {include: "certificado.html" }} ],
  
  //WM itens de prática 
  
  ["practice1", "Question", {q: "Pedro foi parado pela polícia porque ele bebeu o sinal paraíso.", hasCorrect: "Não"}, "FlashSentence", {s: "anel"}, "Question", {q: "É possível encontrar hotéis na praia com preço baixo durante o inverno.", hasCorrect: "Sim"}, "FlashSentence", {s: "música"}, "Question", {q: "As pessoas costumam ficar mais alegres e generosas na época do Natal.", hasCorrect: "Sim", }, "FlashSentence", {s: "sacola"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "recallp1.html"}}],
  
  ["practice2", "Question", {q: "Achei que eu ia enlouquecer no período do espaguete final.", hasCorrect: "Não"}, "FlashSentence", {s: "cenoura"}, "Question", {q: "Depois que as provas finais acabaram, tiramos nossas merecidas férias.", hasCorrect: "Sim"}, "FlashSentence", {s: "manga"}, "Question", {q: "Após um longo dia de trabalho, Carla gosta de tomar uma cerveja no bar.", hasCorrect: "Sim"}, "FlashSentence", {s: "luz"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "recallp2.html"}}],
  
  ["block1", "Question", {q: "Não importa o quanto falarmos com ele, ele nunca vai mudar.", hasCorrect: "Sim"}, "FlashSentence", {s: "sistema"}, "Question", {q: "O prato do advogado foi recusado porque não era baseado em fatos.", hasCorrect: "Não"}, "FlashSentence", {s: "vestido"}, "Question", {q: "Vez ou outra eu me pego nadando na parede.", hasCorrect: "Não"}, "FlashSentence", {s: "túnel"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "recallb1.html"}}],
  
  ["block2", "Question", {q: "Nós estávamos há cadeiras mar adentro quando perdemos a terra de vista.", hasCorrect: "Não"}, "FlashSentence", {s: "cozinha"}, "Question", {q: "Durante toda a negociação, os reféns não perderam as esperanças.", hasCorrect: "Sim"}, "FlashSentence", {s: "grama"}, "Question", {q: "Lúcia tem medo de altura e se recusa a viajar de avião.", hasCorrect: "Sim"}, "FlashSentence", {s: "diabo"}, "Question", {q: "O jovem lápis manteve seus olhos fechados durante todo o passeio.", hasCorrect: "Não"}, "FlashSentence", {s: "braço"}, "Question", {q: "A maioria das pessoas que ri está preocupada com a montanha.", hasCorrect: "Não"}, "FlashSentence", {s: "culpa"},"Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "recallb2.html"}}],
  
  ["block3", "Question", {q: "Quando Rafael faz compras, ele sempre procura a menor enchente.", hasCorrect: "Não"}, "FlashSentence", {s: "projeto"}, "Question", {q: "A primeira coisa que eu faço ao acordar é dar comida a meu cachorro.", hasCorrect: "Sim"}, "FlashSentence", {s: "chá"}, "Question", {q: "Depois de gritar muito no estádio, tive certeza que ia azular a voz.", hasCorrect: "Não"}, "FlashSentence", {s: "alegria"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "recallb3.html"}}],
  
  ["block4", "Question", {q: "O cozinheiro investiu na espátula e deu um tapinha em suas costas.", hasCorrect: "Não"}, "FlashSentence", {s: "cama"}, "Question", {q: "Você não deve dar meias de aniversário todos os anos.", hasCorrect: "Sim"}, "FlashSentence", {s: "garfo"}, "Question", {q: "Todo mundo concorda que pequena é a melhor cor de bicicleta.", hasCorrect: "Não"}, "FlashSentence", {s: "soldado"}, "Question", {q: "A fumaça notou que havia algo errado com a vendedora.", hasCorrect: "Não"}, "FlashSentence", {s: "natureza"}, "Question", {q: "Na manhã seguinte, a van com todos os instrumentos havia sumido.", hasCorrect: "Sim"}, "FlashSentence", {s: "lobo"}, "Question", {q: "O clima estava muito prédio naquela manhã de setembro.", hasCorrect: "Não"}, "FlashSentence", {s: "joia"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "recallb4.html"}}],
  
  ["block5", "Question", {q: "Vitor precisou passar no shopping para comprar uma série de coisas.", hasCorrect: "Sim"}, "FlashSentence", {s: "teste"}, "Question", {q: "Minha mãe me obriga a usar um chapéu na cabeça quando está frio.", hasCorrect: "Sim"}, "FlashSentence", {s: "martelo"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "recallb5.html"}}],
  
  ["block6", "Question", {q: "Todos os pais esperam que seus relatórios cresçam saudáveis e felizes.", hasCorrect: "Não"}, "FlashSentence", {s: "armário"}, "Question", {q: "Antes de se mudar para o Japão, Ana e Felipe fizeram um enorme fone de despedida.", hasCorrect: "Não"}, "FlashSentence", {s: "capacete"}, "Question", {q: "Meu lenço e eu adoramos trabalhar no jardim na primavera.", hasCorrect: "Não"}, "FlashSentence", {s: "problema"}, "Question", {q: "O filho da Vera fez uma ameixa constrangedora na festa ontem.", hasCorrect: "Não"}, "FlashSentence", {s: "velocidade"}, "Question", {q: "Sem se dar conta da presença do caçador, o coelho entrou em sua linha de fogo.", hasCorrect: "Sim"}, "FlashSentence", {s: "gelo"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "recallb6.html"}}], 
  
  ["block7", "Question", {q: "Como era o último jogo, foi muito difícil aceitar a derrota.", hasCorrect: "Sim"}, "FlashSentence", {s: "ninho"}, "Question", {q: "Porque ela chega na faca cedo, Carla consegue uma boa vaga.", hasCorrect: "Não"}, "FlashSentence", {s: "rato"}, "Question", {q: "O primeiro móvel que Letícia teve em sua cumbuca foi um pufe verde.", hasCorrect: "Não"}, "FlashSentence", {s: "título"}, "Question", {q: "Ano passado, Iara levou advertência por correr no corredor da escola.", hasCorrect: "Não"}, "FlashSentence", {s: "calor"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "recallb7.html"}}], 
  
  ["block8", "Question", {q: "As nuvens encobriram a impressora da manhã, e começou a chover.", hasCorrect: "Não"}, "FlashSentence", {s: "mesa"}, "Question", {q: "Depois do primeiro encontro eu tive certeza que a prima do Bruno não fazia meu tipo.", hasCorrect: "Sim"}, "FlashSentence", {s: "metade"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "recallb8.html"}}],
  
  ["block9", "Question", {q: "A única xícara dessa semana foi limpar o banheiro.", hasCorrect: "Não"}, "FlashSentence", {s: "preço"}, "Question", {q: "A primeira coisa que Miguel jogou fora foi aquele tapete horrível.", hasCorrect: "Sim"}, "FlashSentence", {s: "janela"}, "Question", {q: "Algumas plantas não precisam de calendário para sobreviver.", hasCorrect: "Não"}, "FlashSentence", {s: "cérebro"}, "Question", {q: "Ficou óbvio para todos que ela leu uma orelha nele.", hasCorrect: "Não"}, "FlashSentence", {s: "maçã"}, "Question", {q: "Eu só consigo trabalhar direito se estiver tudo organizado.", hasCorrect: "Sim"}, "FlashSentence", {s: "dúvida"}, "Question", {q: "Na noite de segunda, um jovem da Colômbia foi atacado por adolescentes.", hasCorrect: "Sim"}, "FlashSentence", {s: "futuro"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "recallb9.html"}}],
  
  ["block10", "Question", {q: "Rodolfo caiu no chão quando tentava subir na árvore.", hasCorrect: "Sim"}, "FlashSentence", {s: "roda"}, "Question", {q: "A maioria das pessoas concorda que segunda-feira é a pior madeira da semana.", hasCorrect: "Não"}, "FlashSentence", {s: "porco"}, "Question", {q: "Eu adoro andar no parque em tardes de temperatura amena.", hasCorrect: "Sim"}, "FlashSentence", {s: "sonho"}, "Question", {q: "Com muita determinação, ela venceu os obstáculos e terminou a corrida.", hasCorrect: "Sim"}, "FlashSentence", {s: "rosa"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "recallb4.html"}}],
  
  //Pratica priming
  ["practice4", "FlashSentence", {s: "Carol fez um desenho da sua mãe na escola.", timeout: 4000}, "Question", {q: "Carol desenhou um parente?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "p1_img.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  
  ["practice5", "FlashSentence", {s: "A gerente está tirando uma selfie perto do bebedouro.", timeout: 4000}, "Question", {q: "A gerente está bebendo água?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "p2_img.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Sim"}],
  
  //Itens distratores priming (que são os únicos que match)
  
  ["filler", "FlashSentence", {s: "O empresário andava distraído pela cidade.", timeout: 4000}, "Question", {q: "O homem está se movimentando?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "andar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Sim"}],
  ["filler", "FlashSentence", {s: "O professor caiu da escada ao descer do palanque.", timeout: 4000}, "Question", {q: "O professor se acidentou?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "cair.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Sim"}],
  ["filler", "FlashSentence", {s: "As crianças brincaram na areia por várias horas.", timeout: 4000}, "Question", {q: "As crianças brincaram por muito tempo?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "correr.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["filler", "FlashSentence", {s: "A mulher está dançando na sala de sua casa.", timeout: 4000}, "Question", {q: "A mulher está em casa?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "dancar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Sim"}],
  ["filler", "FlashSentence", {s: "A secretária levantou da cadeira para comer.", timeout: 4000}, "Question", {q: "A secretária se moveu?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "levantar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Sim"}],
  ["filler", "FlashSentence", {s: "A professora de yoga está meditando na academia.", timeout: 4000}, "Question", {q: "A professora está dando aula?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "meditar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Sim"}],
  ["filler", "FlashSentence", {s: "Gabriela normalmente lê sentada no chão da sala.", timeout: 4000}, "Question", {q: "Gabriela costuma ler no sofá?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "ler.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Sim"}],
  ["filler", "FlashSentence", {s: "A turista está relaxando na beira da praia.", timeout: 4000}, "Question", {q: "A turista está nadando no mar?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "relaxar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Sim"}],
  ["filler", "FlashSentence", {s: "A professora recebeu um bolinho de presente da aluna.", timeout: 4000}, "Question", {q: "A aluna deu uma maçã para a professora?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "receber.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Sim"}],
  ["filler", "FlashSentence", {s: "Gisele devolveu uma pilha de livros ao bibliotecário.", timeout: 4000}, "Question", {q: "Gisele pegou livros emprestado?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "devolver.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Sim"}],
  ["filler", "FlashSentence", {s: "A criança chorou sozinha no quarto do irmão.", timeout: 4000}, "Question", {q: "A criança estava em seu próprio quarto?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "chorar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Sim"}],
  
//itens experimentais priming
  ["ativa", "FlashSentence", {s: "O avaliador aprovou o candidato no exame de direção.", timeout: 4000}, "Question", {q: "O candidato foi bem-sucedido?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "ajudar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["ativa", "FlashSentence", {s: "Joana beija seu namorado no rosto todas as manhãs.", timeout: 4000}, "Question", {q: "Joana está em um relacionamento?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "assaltar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["ativa", "FlashSentence", {s: "O macaco encontrou seus filhotes escondidos no buraco.", timeout: 4000}, "Question", {q: "O macaco tem filhotes?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "examinar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["ativa", "FlashSentence", {s: "Jussara visita seus avós por parte de pai no domingo.", timeout: 4000}, "Question", {q: "Joana visita seus avós maternos no domingo?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "pintar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["ativa", "FlashSentence", {s: "O estagiário ouviu vários elogios do seu chefe na avaliação.", timeout: 4000}, "Question", {q: "O chefe xingou o estagiário?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "servir.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["ativa", "FlashSentence", {s: "Manuela está abraçando uma amiga de infância que não vê há tempos", timeout: 4000}, "Question", {q: "As amigas se encontram frequentemente?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "prender.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["ativa", "FlashSentence", {s: "A moto atropelou a moça com as compras na mão.", timeout: 4000}, "Question", {q: "A moça tinha feito compras?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "atropelar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["ativa", "FlashSentence", {s: "Luísa chutou Tiago debaixo da mesa do bar por acidente.", timeout: 4000}, "Question", {q: "Luísa e Tiago estavam no bar?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "chutar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["ativa", "FlashSentence", {s: "O dono da loja de brinquedos demitiu os três vendedores que roubaram o caixa.", timeout: 4000}, "Question", {q: "Os vendedores pegaram dinheiro da loja?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "demitir.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["ativa", "FlashSentence", {s: "O homem mascarado esfaqueou o idoso no filme de terror.", timeout: 4000}, "Question", {q: "O filme era de comédia?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "esfaquear.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["ativa", "FlashSentence", {s: "Os agentes espiaram o suspeito sem que ele percebesse.", timeout: 4000}, "Question", {q: "O suspeito sabia dos agentes?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "espiar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["ativa", "FlashSentence", {s: "A senhora pagou o pintor com um cheque pré-datado.", timeout: 4000}, "Question", {q: "A senhora usou dinheiro?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "pagar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  
  ["passiva", "FlashSentence", {s: "O visitante foi acompanhado até o quarto pelo enfermeiro do hospital.", timeout: 4000}, "Question", {q: "O visitante queria ir a um quarto?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "abduzir.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["passiva", "FlashSentence", {s: "A corredora foi preparada pela treinadora durante seis meses.", timeout: 4000}, "Question", {q: "Elas trabalharam por mais de uma semana?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "carregar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["passiva", "FlashSentence", {s: "O jogador mais baixo foi excluído do time pelo novo técnico.", timeout: 4000}, "Question", {q: "O jogador era baixo?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "entrevistar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["passiva", "FlashSentence", {s: "A cantora foi descoberta pelo empresário no supermercado.", timeout: 4000}, "Question", {q: "A cantora e o empresário estavam no bar?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "lamber.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["passiva", "FlashSentence", {s: "Os moradores do interior foram atingidos por uma enchente imprevisível.", timeout: 4000}, "Question", {q: "Os moradores poderiam ter evitado a enchente?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "morder.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["passiva", "FlashSentence", {s: "A prefeita da periferia foi eleita pela população da cidade com 90% dos votos.", timeout: 4000}, "Question", {q: "A margem da vitória foi pequena?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "puxar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["passiva", "FlashSentence", {s: "Lucas foi acordado pelo pai porque o despertador tocou baixinho.", timeout: 4000}, "Question", {q: "O volume do despertador estava baixo?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "acordar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["passiva", "FlashSentence", {s: "Tim foi assustado por sua mulher chegando da rua de madrugada.", timeout: 4000}, "Question", {q: "A mulher estava na rua até tarde?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "assustar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["passiva", "FlashSentence", {s: "Os estudantes foram empurrados pelos guardas durante o protesto.", timeout: 4000}, "Question", {q: "Os estudantes estavam protestando?", hasCorrect:"Sim"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "empurrar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["passiva", "FlashSentence", {s: "Helena foi filmada pela sua mãe em seu concerto de piano.", timeout: 4000}, "Question", {q: "Helena toca flauta?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "filmar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["passiva", "FlashSentence", {s: "A cantor foi perseguido pelos fãs insatisfeitos após um show extremamente curto.", timeout: 4000}, "Question", {q: "Os fãs estavam felizes?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "perseguir.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  ["passiva", "FlashSentence", {s: "Rose foi segurada por sua irmã quando desmaiou no meio da rua.", timeout: 4000}, "Question", {q: "Rose estava em casa?", hasCorrect:"Não"}, "Form", {consentRequired: false, continueMessage: "Clique aqui para continuar", html: {include: "segurar.html"}}, "Question", {q: "A imagem corresponde à sentença que você leu?", hasCorrect: "Não"}],
  
  ];

