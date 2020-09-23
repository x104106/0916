bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . . . . .
        . # # . .
        . # . # .
        . . # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # # #
        . # # . #
        . # # # #
        `)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    資料 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if ("F".compare(資料) == 0) {
        basic.showString("F")
    } else if ("R".compare(資料) == 0) {
        basic.showString("R")
    } else if ("L".compare(資料) == 0) {
        basic.showString("L")
    } else if ("B".compare(資料) == 0) {
        basic.showString("B")
    } else {
        if ("S".compare(資料) == 0) {
            basic.showString("S")
        }
    }
})
let 資料 = ""
basic.showString("we")
bluetooth.startTemperatureService()
bluetooth.startUartService()
資料 = ""
