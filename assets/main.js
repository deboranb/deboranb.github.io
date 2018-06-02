function preload () {}
// funcao para atualizar o jogo
function update () {

    // Controle pelas setas esquerda direita cima e baixo do teclado
    if (cursors.left.isDown) {
        hamtaro.x -= 3
    } else if (cursors.right.isDown) {
        hamtaro.x += 3
    } else if (cursors.up.isDown) {
        hamtaro.y -= 2
    } else if (cursors.down.isDown) {
        hamtaro.y += 2
    }

}
function create () {

    // Adiciona um texto para informar o score a jogadora
    pontuacao = this.add.text(10, 10, 'SCORE: 0', { 
        fontFamily: 'Arial', 
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    })
    // Cria um hamtaro que será controlado pela participante
    hamtaro = this.physics.add.sprite(150, 150, 'hamtaro_atlas')
     // Captura todas as teclas do teclado
     cursors = this.input.keyboard.createCursorKeys()

}

function update () {}
// funcao de carregar as imagens e outros recursos
const preload = function () {

    // Carrega os recursos de imagens para o jogo
    this.load.atlas('hamtaro_atlas', 'assets/sprites/hamtaro/hamham.png', 'assets/sprites/maps/hamtaro.json')
    this.load.atlas('comida_atlas', 'assets/sprites/assest/food.png', 'assets/sprites/maps/food.json')

}
function principal () {

    var largura = 500
    var altura = 500
    

    // cria uma variável com as configurações do jogo
    var conf = {
        type: Phaser.AUTO,
        width: largura,
        height: altura,
        pixelArt: true,
        backgroundColor: blue,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
        
        
      
        }
    }

    var game = new Phaser.Game(conf)
}

// Estamos adicionando uma função para o evento OnLoad da janela
window.onload = principal
scene: {
    preload: preload,
    create: create,
    update: update
}