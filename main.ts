basic.forever(function () {
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.pause(500)
    basic.showString(DS18B20.TemperatureString(DS18B20.pin.pin0))
    basic.pause(500)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.pause(500)
    basic.showNumber(DS18B20.TemperatureNumber(DS18B20.pin.pin0))
    basic.pause(500)
})
