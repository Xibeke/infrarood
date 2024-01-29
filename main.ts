let IRwaarde = 0
let Vooruit = 94
let Achteruit = 95
let Links = 93
let Rechts = 92
let Stop = 37
basic.forever(function () {
    IRwaarde = IR.IR_read()
})
basic.forever(function () {
    if (IRwaarde == Vooruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 90)
    }
})
basic.forever(function () {
    if (IRwaarde == Links) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 90)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 90)
        basic.pause(440)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 90)
    }
})
basic.forever(function () {
    if (IRwaarde == Achteruit) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 90)
    }
})
basic.forever(function () {
    if (IRwaarde == Rechts) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 90)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 90)
        basic.pause(440)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 90)
    }
})
basic.forever(function () {
    if (IRwaarde == Stop) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
