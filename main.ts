spikerbit.startHeartRecording()
basic.forever(function () {
    serial.writeValue("heart", spikerbit.heartSignal())
})
