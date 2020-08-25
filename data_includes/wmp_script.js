  
var shuffleSequence = seq("setcounter", "tcle", "demografia", "intro1", "practice1", "intro2", "practice2", "intro3", "block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8", "block9", "block10", "intro4", "practice4", "certificado", "hiddenCompletionCode");

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
  ["practice4", "FlashSentence", {s: "Carol fez um desenho da sua mãe na escola.", timeout: 6000}, "Question", {q: "Carol desenhou um parente?", hasCorrect:"Sim"}, ],
  
  
  ];

