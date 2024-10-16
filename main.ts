spikerbit.startHeartRecording()
basic.forever(function () {
    serial.writeNumber(spikerbit.signal())
    serial.writeLine("")
})
