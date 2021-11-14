input.onGesture(Gesture.Shake, function () {
    bang.showImage(0)
    basic.pause(5000)
})
let draai = 0
let bang: Image = null
let blij = images.createImage(`
    . . . . .
    . . . . .
    # . . . #
    # # # # #
    . # # # .
    `)
let verdrietig = images.createImage(`
    . . . . .
    . . . . .
    # # # # #
    # . . . #
    # # # # #
    `)
bang = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    `)
basic.forever(function () {
    draai = input.rotation(Rotation.Pitch)
    if (draai >= 50 && draai <= 100) {
        blij.showImage(0)
    } else if (draai >= 0 && draai <= 49) {
        verdrietig.showImage(0)
        basic.pause(5000)
    } else {
        bang.showImage(0)
        basic.pause(5000)
    }
})
