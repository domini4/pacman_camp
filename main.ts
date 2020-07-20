enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Floating,
    Scared
}
function animatePacman () {
    animation.runImageAnimation(
    Pacman,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 . . . . 
        . 5 5 5 5 5 5 5 5 5 5 . . . . . 
        . 5 5 5 5 5 5 5 5 5 . . . . . . 
        . 5 5 5 5 5 5 5 5 . . . . . . . 
        . 5 5 5 5 5 5 5 5 . . . . . . . 
        . 5 5 5 5 5 5 5 5 5 . . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 . . . . . 
        . 5 5 5 5 5 5 5 5 . . . . . . . 
        . 5 5 5 5 5 5 5 5 . . . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 . . . . . 
        . 5 5 5 5 5 5 5 5 . . . . . . . 
        . 5 5 5 5 5 5 5 5 . . . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 . . . . 
        . 5 5 5 5 5 5 5 5 5 5 . . . . . 
        . 5 5 5 5 5 5 5 5 5 . . . . . . 
        . 5 5 5 5 5 5 5 5 . . . . . . . 
        . 5 5 5 5 5 5 5 5 . . . . . . . 
        . 5 5 5 5 5 5 5 5 5 . . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    music.pewPew.play()
    info.changeScoreBy(1)
    Pellet_Count += -1
})
function clydeVelocity (dir: number) {
    if (dir == 0) {
        Clyde.setVelocity(0, -50)
    } else if (dir == 90) {
        Clyde.setVelocity(50, 0)
    } else if (dir == 180) {
        Clyde.setVelocity(0, 50)
    } else if (dir == 270) {
        Clyde.setVelocity(-50, 0)
    }
}
function clydeResponse () {
    ClydePossibleDirections = []
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Right, Clyde)))) {
        ClydePossibleDirections.push(Math.mod(sprites.heading(Clyde) + 90, 360))
    }
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Left, Clyde)))) {
        ClydePossibleDirections.push(Math.mod(sprites.heading(Clyde) - 90, 360))
    }
    if (!(scene.isTileAWallAt(scene.getCoordinateNTilesAwayFromTile(1, TravelDirection.Ahead, Clyde)))) {
        ClydePossibleDirections.push(sprites.heading(Clyde))
    }
    clydeVelocity(arrays.choose(ClydePossibleDirections))
}
game.onGameUpdateWithHeading(function () {
    controller.moveSprite(Pacman, 50, 50)
    scene.cameraFollowSprite(Pacman)
    if (Pacman.x == 7 && controller.left.isPressed()) {
        Pacman.x = 250
    } else if (Pacman.x == 250 && controller.right.isPressed()) {
        Pacman.x = 7
    }
    if (scene.spriteContainedWithinTile(Clyde)) {
        clydeMovement()
    }
    if (Clyde.vx == 0 && Clyde.vy == 0) {
        clydeVelocity(randint(0, 3) * 90)
    }
})
function animateClyde () {
    animClyde = animation.createAnimation(ActionKind.Floating, 100)
    animation.attachAnimation(Clyde, animClyde)
    animClyde.addAnimationFrame(img`
        . . . . . 4 4 4 4 . . . . . . . 
        . . . 4 4 4 4 4 4 4 4 . . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . 4 4 1 1 4 4 4 4 1 1 4 4 . . 
        . 4 4 1 1 1 1 4 4 1 1 1 1 4 4 . 
        . 4 4 8 8 1 1 4 4 8 8 1 1 4 4 . 
        . 4 4 8 8 1 1 4 4 8 8 1 1 4 4 4 
        4 4 4 4 1 1 4 4 4 4 1 1 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 . 4 4 4 . . 4 4 4 . 4 4 4 4 
        4 . . . 4 . . . . 4 . . . 4 4 4 
        `)
    animClyde.addAnimationFrame(img`
        . . . . . 4 4 4 4 . . . . . . . 
        . . . 4 4 4 4 4 4 4 4 . . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . 4 4 1 1 4 4 4 4 1 1 4 4 . . 
        . 4 4 1 1 1 1 4 4 1 1 1 1 4 4 . 
        . 4 4 1 8 8 1 4 4 1 8 8 1 4 4 . 
        . 4 4 1 8 8 1 4 4 1 8 8 1 4 4 4 
        4 4 4 4 1 1 4 4 4 4 1 1 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 . . 4 4 4 . 4 4 4 . . 4 4 4 
        4 . . . . 4 . . . 4 . . . . 4 4 
        `)
    animClyde.addAnimationFrame(img`
        . . . . . 4 4 4 4 . . . . . . . 
        . . . 4 4 4 4 4 4 4 4 . . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . 4 4 1 1 4 4 4 4 1 1 4 4 . . 
        . 4 4 1 1 1 1 4 4 1 1 1 1 4 4 . 
        . 4 4 1 1 8 8 4 4 1 1 8 8 4 4 . 
        . 4 4 1 1 8 8 4 4 1 1 8 8 4 4 4 
        4 4 4 4 1 1 4 4 4 4 1 1 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 . 4 4 4 . . 4 4 4 . 4 4 4 4 
        4 . . . 4 . . . . 4 . . . 4 4 4 
        `)
    animClyde.addAnimationFrame(img`
        . . . . . 4 4 4 4 . . . . . . . 
        . . . 4 4 4 4 4 4 4 4 . . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . 4 4 1 1 4 4 4 4 1 1 4 4 . . 
        . 4 4 1 1 1 1 4 4 1 1 1 1 4 4 . 
        . 4 4 1 8 8 1 4 4 1 8 8 1 4 4 . 
        . 4 4 1 8 8 1 4 4 1 8 8 1 4 4 4 
        4 4 4 4 1 1 4 4 4 4 1 1 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 . . 4 4 4 . 4 4 4 . . 4 4 4 
        4 . . . . 4 . . . 4 . . . . 4 4 
        `)
    animClyde.addAnimationFrame(img`
        . . . . . 4 4 4 4 . . . . . . . 
        . . . 4 4 4 4 4 4 4 4 . . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . 4 4 1 1 4 4 4 4 1 1 4 4 . . 
        . 4 4 1 1 1 1 4 4 1 1 1 1 4 4 . 
        . 4 4 8 8 1 1 4 4 8 8 1 1 4 4 . 
        . 4 4 8 8 1 1 4 4 8 8 1 1 4 4 4 
        4 4 4 4 1 1 4 4 4 4 1 1 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 . 4 4 4 . . 4 4 4 . 4 4 4 4 
        4 . . . 4 . . . . 4 . . . 4 4 4 
        `)
    animClyde = animation.createAnimation(ActionKind.Scared, 100)
    animation.attachAnimation(Clyde, animClyde)
    animClyde.addAnimationFrame(img`
        . . . . . 8 8 8 8 . . . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 1 1 8 8 8 8 1 1 8 8 . . 
        . 8 8 1 1 1 1 8 8 1 1 1 1 8 8 . 
        . 8 8 d d 1 1 8 8 d d 1 1 8 8 . 
        . 8 8 d d 1 1 8 8 d d 1 1 8 8 8 
        8 8 8 8 1 1 8 8 8 8 1 1 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 d d 8 8 d d 8 8 d d 8 8 d d 8 
        d 8 8 d d 8 8 d d 8 8 d d 8 8 d 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 . 8 8 8 . . 8 8 8 . 8 8 8 8 
        8 . . . 8 . . . . 8 . . . 8 8 8 
        `)
    animClyde.addAnimationFrame(img`
        . . . . . 8 8 8 8 . . . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 1 1 8 8 8 8 1 1 8 8 . . 
        . 8 8 1 1 1 1 8 8 1 1 1 1 8 8 . 
        . 8 8 1 d d 1 8 8 1 d d 1 8 8 . 
        . 8 8 1 d d 1 8 8 1 d d 1 8 8 8 
        8 8 8 8 1 1 8 8 8 8 1 1 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 d d 8 8 d d 8 8 d d 8 8 d d 
        d d 8 8 d d 8 8 d d 8 8 d d 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 . . 8 8 8 . 8 8 8 . . 8 8 8 
        8 . . . . 8 . . . 8 . . . . 8 8 
        `)
    animClyde.addAnimationFrame(img`
        . . . . . 8 8 8 8 . . . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 1 1 8 8 8 8 1 1 8 8 . . 
        . 8 8 1 1 1 1 8 8 1 1 1 1 8 8 . 
        . 8 8 1 1 d d 8 8 1 1 d d 8 8 . 
        . 8 8 1 1 d d 8 8 1 1 d d 8 8 8 
        8 8 8 8 1 1 8 8 8 8 1 1 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        d 8 8 d d 8 8 d d 8 8 d d 8 8 d 
        8 d d 8 8 d d 8 8 d d 8 8 d d 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 . 8 8 8 . . 8 8 8 . 8 8 8 8 
        8 . . . 8 . . . . 8 . . . 8 8 8 
        `)
    animClyde.addAnimationFrame(img`
        . . . . . 8 8 8 8 . . . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 1 1 8 8 8 8 1 1 8 8 . . 
        . 8 8 1 1 1 1 8 8 1 1 1 1 8 8 . 
        . 8 8 1 d d 1 8 8 1 d d 1 8 8 . 
        . 8 8 1 d d 1 8 8 1 d d 1 8 8 8 
        8 8 8 8 1 1 8 8 8 8 1 1 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 d d 8 8 d d 8 8 d d 8 8 d d 
        d d 8 8 d d 8 8 d d 8 8 d d 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 . . 8 8 8 . 8 8 8 . . 8 8 8 
        8 . . . . 8 . . . 8 . . . . 8 8 
        `)
    animClyde.addAnimationFrame(img`
        . . . . . 8 8 8 8 . . . . . . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 1 1 8 8 8 8 1 1 8 8 . . 
        . 8 8 1 1 1 1 8 8 1 1 1 1 8 8 . 
        . 8 8 d d 1 1 8 8 d d 1 1 8 8 . 
        . 8 8 d d 1 1 8 8 d d 1 1 8 8 8 
        8 8 8 8 1 1 8 8 8 8 1 1 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 d d 8 8 d d 8 8 d d 8 8 d d 8 
        d 8 8 d d 8 8 d d 8 8 d d 8 8 d 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 . 8 8 8 . . 8 8 8 . 8 8 8 8 
        8 . . . 8 . . . . 8 . . . 8 8 8 
        `)
}
info.onCountdownEnd(function () {
    clydeScared = 0
    animation.setAction(Clyde, ActionKind.Floating)
})
function clydeMovement () {
    if (scene.getTileColCoordinate(scene.getTileLocationOfSprite(Clyde)) != clydePrevCol || scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Clyde)) != clydePrevRow) {
        clydeResponse()
        clydePrevRow = scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Clyde))
        clydePrevCol = scene.getTileColCoordinate(scene.getTileLocationOfSprite(Clyde))
    }
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    music.powerUp.play()
    info.changeScoreBy(10)
    Pellet_Count += -1
    clydeScared = 1
    animation.setAction(Clyde, ActionKind.Scared)
    info.startCountdown(30)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (clydeScared == 1) {
        info.changeScoreBy(100)
        music.powerUp.play()
        tiles.placeOnTile(Clyde, tiles.getTileLocation(5, 3))
    } else {
        info.changeLifeBy(-1)
        music.wawawawaa.play()
        tiles.placeOnTile(Pacman, tiles.getTileLocation(1, 4))
        tiles.placeOnTile(Clyde, tiles.getTileLocation(5, 3))
    }
})
let animClyde: animation.Animation = null
let ClydePossibleDirections: number[] = []
let clydeScared = 0
let clydePrevRow = 0
let clydePrevCol = 0
let Clyde: Sprite = null
let Pacman: Sprite = null
music.setVolume(20)
info.setScore(0)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010302020202020202020202020203010102010101020101010102010101020101020202020201010101020202020201010201010102010101010201010102010102020202020202020202020202020101010101010201010101020101010101020202020202010000010202020202020101010101020101010102010101010101020202020202020202020202020201010201010102010101010201010102010102020202020202020202020202020101020102010201010101020102010201010201020102010101010201020102010103020202020202020202020202030101010101010101010101010101010101`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . 2 2 2 . 2 2 2 2 . 2 2 2 . 2 
    2 . . . . . 2 2 2 2 . . . . . 2 
    2 . 2 2 2 . 2 2 2 2 . 2 2 2 . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
    . . . . . . 2 . . 2 . . . . . . 
    2 2 2 2 2 . 2 2 2 2 . 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . 2 2 2 . 2 2 2 2 . 2 2 2 . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . 2 . 2 . 2 2 2 2 . 2 . 2 . 2 
    2 . 2 . 2 . 2 2 2 2 . 2 . 2 . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile4,myTiles.tile5], TileScale.Sixteen))
Pacman = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 . . . . 
    . 5 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 5 5 5 5 5 5 5 . . . . . . . 
    . 5 5 5 5 5 5 5 . . . . . . . . 
    . 5 5 5 5 5 5 5 . . . . . . . . 
    . 5 5 5 5 5 5 5 5 . . . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Pacman, tiles.getTileLocation(1, 4))
info.setLife(1)
let Pellet_Count = tiles.getTilesByType(myTiles.tile4).length + tiles.getTilesByType(myTiles.tile5).length
animatePacman()
Clyde = sprites.create(img`
    . . . . . 4 4 4 4 . . . . . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . . 4 4 1 1 4 4 4 4 1 1 4 . . . 
    . 4 4 1 1 1 1 4 4 1 1 1 1 . . . 
    . 4 4 8 8 1 1 4 4 8 8 1 1 . . . 
    . 4 4 8 8 1 1 4 4 8 8 1 1 4 . . 
    4 4 4 4 1 1 4 4 4 4 1 1 4 4 . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    4 4 . 4 4 4 . . 4 4 4 . 4 4 . . 
    4 . . . 4 . . . . 4 . . . 4 . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(Clyde, tiles.getTileLocation(5, 3))
Clyde.setVelocity(0, -50)
clydePrevCol = scene.getTileColCoordinate(scene.getTileLocationOfSprite(Clyde))
clydePrevRow = scene.getTileRowCoordinate(scene.getTileLocationOfSprite(Clyde))
animateClyde()
animation.setAction(Clyde, ActionKind.Floating)
clydeScared = 0
game.onUpdateInterval(500, function () {
    if (Pellet_Count == 0) {
        game.over(true, effects.confetti)
    }
})
