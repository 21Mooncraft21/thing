input.onButtonPressed(Button.A, function () {
    if (go == 1) {
        if (random == 0) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    go = 0
    random = randint(0, 1)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(100)
    }
    basic.pause(500)
    basic.showString("?")
    go = 1
})
input.onButtonPressed(Button.B, function () {
    if (go == 1) {
        if (random == 1) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
    }
})
let random = 0
let go = 0
go = 0
