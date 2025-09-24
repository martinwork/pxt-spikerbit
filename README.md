

## Spiker:Bit extension 

![MakeCode](https://img.shields.io/badge/for%20PXT-micro:bit-blue) • EMG • EEG • ECG

This extension enables the use of the Backyard Brains Spiker:Bit with the Microsoft MakeCode editor.
The Spiker:Bit records electrical activity from the brain (EEG), muscles (EMG), and heart (ECG), making neuroscience and physiology experiments accessible in educational settings. Use this extension to create interactive projects and explore real‑time bio‑signals in your classroom or lab.
For more details about the Spiker:Bit please check our product page [Backyard Brains Spiker:Bit](https://backyardbrains.com/products/spiker-bit).

Further learning and lesson ideas:
- [Backyard Brains Education and Experiments](https://backyardbrains.com/experiments)
- [micro:bit MakeCode Tutorials](https://makecode.microbit.org/projects)
- [MakeCode Docs on Extensions](https://makecode.com/extensions)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/BackyardBrains/pxt-spikerbit** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/BackyardBrains/pxt-spikerbit** and click import

## Example

Here is the API with teacher‑friendly examples. You can copy these into MakeCode JavaScript editor.

Classroom example: show EMG envelope on the LEDs for 3 seconds, then stop.
```blocks
spikerbit.startMuscleRecording()
loops.everyInterval(100, function () {
    let value = spikerbit.musclePowerSignal()
    let bar = Math.map(value, 0, 1023, 0, 25)
    led.plotBarGraph(bar, 25)
})
basic.pause(3000)
spikerbit.stopRecord()
```blocks

---

## API Functions

### Muscle Group

#### `startMuscleRecording()`
Starts recording muscle (EMG) signals.

```sig
spikerbit.startMuscleRecording();
```

#### `musclePowerSignal(): number`
Returns the last envelope value of the EMG signal.

```sig
let power = spikerbit.musclePowerSignal();
```

// Raw EMG function is not exposed; use the envelope with `musclePowerSignal()`.

### Heart Group

#### `startHeartRecording()`
Starts recording heart (ECG) signals.

```sig
spikerbit.startHeartRecording();
```

#### `heartSignal(): number`
Returns the last measured ECG signal.

```sig
let signal = spikerbit.heartSignal();
```

#### `heartRate(): number`
Returns the calculated heart rate based on the last two heart beats.

```sig
let rate = spikerbit.heartRate();
```

### Brain Group

#### `startBrainRecording()`
Starts recording brain (EEG) signals.

```sig
spikerbit.startBrainRecording();
```

#### `brainSignal(): number`
Returns the last measured EEG signal.

```sig
let signal = spikerbit.brainSignal();
```

#### `brainAlphaPower(): number`
Returns the alpha wave power of the EEG signal.

```sig
let alphaPower = spikerbit.brainAlphaPower();
```

### Helper Utility

#### `print(value: number): void`
Prints the signal value to the serial output.

```sig
spikerbit.print(spikerbit.heartRate());
```

#### `signalBlock(): number[]`
Returns the recorded signal block for the last 3 seconds. If you pass durationMs parameter it will return just last durationMs of data.

```sig
let signalBlock = spikerbit.signalBlock();
let shortSignalBlock = spikerbit.signalBlock(500);
```

#### `maxSignalInLast(durationMs: number): number`
Returns max value of signal for the specified duration in milliseconds.
For EMG it returns max of power (envelope) of the signal. For EEG and ECG it returns max of raw signal. 
Uses an internal buffer sampled at 250 Hz. 

```sig
let maxDuringLastSecond = spikerbit.maxSignalInLast(1000);
```
#### `numPeaksInLast(durationMs: number): number`
Returns the number of peaks in the signal for the specified duration in milliseconds.

```sig
let numPeaks = spikerbit.numPeaksInLast(1000);
```
#### Metadata (used for search, rendering)

* for PXT/microbit
