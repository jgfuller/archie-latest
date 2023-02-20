let myImage: Image = null
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
moveMotorZIP.setBrightness(255)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.pause(100)
basic.clearScreen()
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    myImage = images.createBigImage(`
        # # # # # # # # # #
        # . . . . . . . . #
        # . . . . . . . . #
        # . . . . . . . . .
        # # # # # # # # # #
        `)
    myImage.scrollImage(1, 200)
})
basic.forever(function () {
	
})
basic.forever(function () {
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MES_ALERT_EVT_PLAY_RINGTONE
    )
    if (true) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 100)
    } else {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    }
})
basic.forever(function () {
    moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
    moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
})
