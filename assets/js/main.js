
// funcao de carregar as imagens e outros recursos
const preload = function () {
    // Carrega os recursos de imagens para o jogo
    this.load.atlas('hamtaro_atlas', 'assets/sprites/hamtaro/hamham.png', 'assets/sprites/maps/hamtaro.json')
    this.load.atlas('comida_atlas', 'assets/sprites/assest/food.png', 'assets/sprites/maps/food.json')
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
    // Cria as animações
    this.anims.create({ 
        key: 'direita', 
        frames: this.anims.generateFrameNames('hamtaro_atlas', { 
            prefix: 'hamtaro_', 
            start: 1,
            end: 3            
        }),
        repeat: -1,
        duration: 300
    });
        // Cria as animações
        this.anims.create({ 
            key: 'esquerda', 
            frames: this.anims.generateFrameNames('hamtaro_atlas', { 
                prefix: 'hamtaro_', 
                start: 4,
                end: 6            
            }),
            repeat: -1,
            duration: 300
        });
            // Cria as animações
    this.anims.create({ 
        key: 'cima', 
        frames: this.anims.generateFrameNames('hamtaro_atlas', { 
            prefix: 'hamtaro_', 
            start: 7,
            end: 8            
        }),
        repeat: -1,
        duration: 300
    });
        // Cria as animações
        this.anims.create({ 
            key: 'baixo', 
            frames: this.anims.generateFrameNames('hamtaro_atlas', { 
                prefix: 'hamtaro_', 
                start: 9,
                end: 10            
            }),
            repeat: -1,
            duration: 300
        });
            // Cria as animações
    this.anims.create({ 
        key: 'parado', 
        frames: this.anims.generateFrameNames('hamtaro_atlas', { 
            prefix: 'hamtaro_', 
            start: 11,
            end: 12            
        }),
        repeat: -1,
        duration: 300
    });
// Cria um sprite de comida
    comida = this.physics.add.sprite(10, 60, 'comida_atlas', 'sprite92')
    // Variavel para guardar a pontuação
    this.score = 0;
    
    // Informa que o hamtaro e a comida são passíveis de colisão
    this.physics.add.collider(hamtaro, comida) 
    // Cria o evento que acontecerá quando o hamtaro colidir com uma comida
    this.physics.add.overlap(hamtaro, comida, function(){
        //Escolhe randomicamente a nova posicao da comida
        comida.x = randomNumber(50, window.innerWidth - 50)
        comida.y = randomNumber(50, window.innerHeight - 50)
          // Adiciona pontuação ao score
          this.score += 3
                  // Adiciona a informação ao texto da tela
                  pontuacao.setText(`SCORE: ${this.score}`)
          // Cada numero indica uma imagem para uma comida diferente
          let number = [92, 88, 87, 86, 85, 81, 78, 77, 76]
                  // Escolhe um numero da lista acima 
                  number = random(number)
                  // Troca a imagem da comida de acordo com o numero escolhido
                  comida.setTexture('comida_atlas', `sprite${number}`)
        
                // vamos implementar uma logica para essa colisãoo!
        
            }, null, this);
}


// funcao para atualizar o jogo
function update () {
    if (cursors.left.isDown) {
        hamtaro.x -= 3
        hamtaro.anims.play('esquerda', true)
    } else if (cursors.right.isDown) {
        hamtaro.x += 3
        hamtaro.anims.play('direita', true)
    } else if (cursors.up.isDown) {
        hamtaro.y -= 2
    } else if (cursors.down.isDown) {
        hamtaro.y += 2
    }
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
        backgroundColor: 'blue',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    }
    var game = new Phaser.Game(conf)
}

// Estamos adicionando uma função para o evento OnLoad da janela
window.onload = principal