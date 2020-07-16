scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    music.pewPew.play()
    info.changeScoreBy(1)
    Pellet_Count += -1
})
game.onGameUpdateWithHeading(function () {
    controller.moveSprite(Pacman, 50, 50)
    scene.cameraFollowSprite(Pacman)
    if (Pacman.x == 7 && controller.left.isPressed()) {
        Pacman.x = 250
    } else if (Pacman.x == 250 && controller.right.isPressed()) {
        Pacman.x = 7
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    music.powerUp.play()
    info.changeScoreBy(10)
    Pellet_Count += -1
})
let Pacman: Sprite = null
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
let Pellet_Count = tiles.getTilesByType(myTiles.tile4).length + tiles.getTilesByType(myTiles.tile5).length
game.onUpdateInterval(500, function () {
    if (Pellet_Count == 0) {
        game.over(true, effects.confetti)
    }
})
