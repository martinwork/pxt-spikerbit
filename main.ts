let test = 0
spikerbit.startRecordingEEG()
// Output the filtered data
// serial.writeLine("Filtered data: " + data.join(", "));
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    test = spikerbit.getAlphaWaves()
    pins.digitalWritePin(DigitalPin.P1, 0)
})
