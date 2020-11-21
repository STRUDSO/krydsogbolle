input.onGesture(Gesture.Shake, function () {
    billedindex = randint(0, list.length - 1)
    billed = list[billedindex]
    billed.showImage(0)
})
let billed: Image = null
let billedindex = 0
let list: Image[] = []
list = [images.createImage(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `), images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `), images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)]
basic.forever(function () {
	
})
