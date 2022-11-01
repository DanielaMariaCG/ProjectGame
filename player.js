class Player {
    constructor() {
        this.x = 250
        this.y = 750
 
    }

    draw(){
        image(game.tony, this.x , this.y, 150, 150)

    }
 
    moveUp() {
        if (this.y >= 100) {
        this.y -= 100
        }

    }

    moveDown() {
        if (this.y <= 700) {
        this.y += 100
        }
    }    

    moveLeft() {
        if (this.x >= 50) {
        this.x -= 100
        }
    }

    moveRight() {
        if (this.x <= 550) {
        this.x += 80
        }
    }


}


class Obstacles {
    constructor(){
        // this.x = 550
        this.x = 550
        this.y = (Math.random() * 60) / 50
        this.width = 60
        this.height = 50
        this.velocity = 1

    }

    draw(){
        // this.y++
        this.y += this.velocity
        image(game.gun, this.x, this.y, this.width, this.height)

        // this.x += 0
        // this.y += 1
    }

    collision(playerInfo) {
		// console.log("collision")

		// Get the middle of the obstacle
		let obstacleX = this.x + this.width / 2
		let obstacleY = this.y + this.height / 2

		// // Get the middle of the player
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		
        // // dist(x1, y1, x2, y2) returns the distance between the objects
		if (dist(obstacleX, obstacleY, playerX, playerY) > 500) {
		// 	return false
		} else {
			// Increment the score
			game.player.score++
			return true
		}
	}

}

class Prize {
    constructor(){
        this.jamon
        this.x = 25
        // this.y = 50
        this.y = (Math.random() * 60) 
        this.width = 70
        this.height = 60
        this.velocity = 1

    }

    draw(){

        this.y += this.velocity
        image(game.jamon, this.x, this.y, this.width, this.height)
    
    }

}


class Secondprize {
    constructor(){
        this.espresso
        this.x = 250
        this.y = (Math.random() * 60) 
    }


    draw() {
        image(game.espresso, this.x, this.y, 80, 40)
        this.x += 0
        this.y += 1
    }
}