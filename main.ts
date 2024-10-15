spikerbit.startHeartRecording()
basic.forever(function () {
    serial.writeNumber(spikerbit.heartRate())
    serial.writeLine("")
})
