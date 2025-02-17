radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
    	
    }
    if (receivedNumber == 1) {
    	
    }
    if (receivedNumber == 2) {
    	
    }
    if (receivedNumber == 3) {
    	
    }
})
radio.setGroup(2)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(0)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(2)
    }
    if (!(input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B))) {
        radio.sendNumber(3)
    }
})
