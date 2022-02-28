//Criando todas os sprites presentes no Cenário
var Tom, GatoParado, GatoAndando, GatoPego;
var Jerry, Rato1, RatoProvocando, RatoGanha;
var Jardim, Fundo;

//Carregando todas as imagens dos sprites
function preload() {
    GatoParado = loadImage("cat1.png");
    GatoAndando = loadAnimation("cat2.png", "cat3.png");
    GatoPego = loadImage("cat4.png");
    Rato1 = loadImage("mouse1.png");
    RatoProvocando = loadAnimation("mouse2.png", "mouse3.png");
    RatoGanha = loadImage("mouse4.png");
    Fundo = loadImage("garden.png");
}

//Adicionando a imagem do Jardim, do Gato e do Rato
function setup(){
    createCanvas(800,600);
    
    Jardim = createSprite(width/2,height/2,50,50);
    Jardim.addImage("Cenário", Fundo);

    Tom = createSprite(600,475,50,50);
    Tom.addImage("gatinho", GatoParado);
    Tom.scale = 0.09;

    Jerry = createSprite(200,475,50,50);
    Jerry.addImage("Ratinho", Rato1);
    Jerry.scale = 0.09;

    //Ajustando a área de colisão do Rato e do Gato
    Jerry.setCollider("circle", 0, 0, 450);   
    Tom.setCollider("circle", 0, 0, 450);
}

function draw() {

    background(0);
    
    //Código que verifica as posições horizontais do Gato e do Rato, e caso seja verdadeiro, ambos mudam de imagem
    if(Tom.x - Jerry.x-60 < (Jerry.width - Tom.width)/2){
      Tom.velocityX = 0;
      Tom.addImage("Pego", GatoPego);
      Tom.changeImage("Pego");

      Jerry.addAnimation("Pegou", RatoGanha);
      Jerry.changeAnimation("Pegou");
    }
    
    //Desenha todos os sprites no cenário
    drawSprites();
}

//Função que, caso aperte a tecla "Seta para a Esquerda", troca a imagem de ambos e da velocidade ao Gato 
function keyPressed(){
  if(keyCode === LEFT_ARROW){
    Jerry.addAnimation("Provocando", RatoProvocando);
    Jerry.changeAnimation("Provocando");
    Jerry.frameDelay = 25;

    Tom.addAnimation("Caminhar", GatoAndando);
    Tom.changeAnimation("Caminhar");
    Tom.velocityX = -5;
  }
}