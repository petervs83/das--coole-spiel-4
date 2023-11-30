input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    music.playMelody("C5 C5 B B A A G E ", 120)
    basic.setLedColor(0xff8000)
    basic.showString("Willkommen bei Team Orange ")
    basic.showLeds(`
        # . # . #
        . # . . .
        # . # . #
        . # . # .
        # . # . #
        `)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    music.playMelody("C5 B B A G G F E ", 120)
    basic.setLedColor(0xffff00)
    basic.showString("WILLKOMMEN bei Team Gelb")
    basic.showLeds(`
        . # . # .
        # . # . #
        . # # . .
        # # . . #
        . # . # .
        `)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColor(0x0000ff)
    music.playMelody("E B E A F G E A ", 120)
    basic.showString("Willkommen bei Team Blau ")
    basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # # . # #
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    if (los == 100) {
        music.playMelody("C5 B A G F E D C ", 120)
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        basic.showString("GAME OVER!!!")
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString("Start ")
    basic.setLedColor(0x00ff00)
    los = 100
})
let los = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # .
    # # # # .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # .
    # # # # .
    # # # # .
    `)
basic.showLeds(`
    # # # # #
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `)
basic.showLeds(`
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `)
basic.showLeds(`
    # # # . .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `)
basic.showLeds(`
    # # . . .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `)
basic.pause(3000)
basic.showLeds(`
    # . . . .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `)
basic.showLeds(`
    . . . . .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    # # # # .
    # # # # .
    # # # # .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    # # # # .
    # # # # .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    # # # # .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . # # .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . # .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # . .
    . # # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # . .
    . # # . .
    . # # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . . .
    . # # . .
    . # # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # . .
    . # # . .
    # # # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . # # . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(3000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
let Melodie = 1
basic.forever(function () {
	
})
basic.forever(function () {
	
})
