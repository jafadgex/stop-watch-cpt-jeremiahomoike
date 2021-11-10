let counter = 0
let countingdown = false
input.onButtonPressed(Button.A, function () {
    counter += 1
    music.playMelody("C5 - - - - - - - ", 1000)
})
input.onButtonPressed(Button.B, function () {
    countingdown = true
    music.playMelody("C5 - - - - - - - ", 1000)
})
basic.forever(function () {
    basic.showNumber(counter)
    if (countingdown == true) {
        basic.pause(1000)
        counter += -1
        if (counter <= 0) {
            countingdown = false
        }
    }
})
