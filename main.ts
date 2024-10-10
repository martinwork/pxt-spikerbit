spikerbit.startMuscleRecording()
basic.forever(function () {
    if (spikerbit.musclePower() > 10) {
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
