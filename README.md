

## Spiker:Bit extension 

This extension enables the use of the Backyard Brains Spiker:Bit with the Microsoft MakeCode editor. 
The Spiker:Bit records electrical activity from the brain (EEG), muscles (EMG), and heart (ECG), making neuroscience and physiology experiments accessible in educational settings. Use this extension to create interactive projects and explore real-time bio-signals in your classroom or lab
For more details about the Spiker:Bit please check our product page [https://backyardbrains.com/products/](https://backyardbrains.com/products/)

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


Here is the API description and examples formatted for a GitHub README file:

---

## API Functions

1. **`startMuscleRecording()`**

   Starts recording the electrical activity of muscles (EMG).

   ```typescript
   spikerbit.startMuscleRecording();
   ```

2. **`startHeartRecording()`**

   Begins recording heart electrical activity (ECG) and calculates heart rate.

   ```typescript
   spikerbit.startHeartRecording();
   ```

3. **`startBrainRecording()`**

   Starts recording brain electrical activity (EEG) and measures alpha wave power.

   ```typescript
   spikerbit.startBrainRecording();
   ```

4. **`signal()`**

   Returns the last recorded sample from the ongoing bio-signal recording.

   ```typescript
   let lastSignal = spikerbit.signal();
   ```

5. **`signalBlock()`**

   Returns an array containing the last two seconds of recorded signal data.

   ```typescript
   let signalData = spikerbit.signalBlock();
   ```

6. **`musclePower()`**

   Returns the current envelope value, representing muscle power from the EMG signal.

   ```typescript
   let power = spikerbit.musclePower();
   ```

7. **`heartRate()`**

   Returns the calculated heart rate (in BPM) based on the ECG signal.

   ```typescript
   let heartRate = spikerbit.heartRate();
   ```

8. **`brainAlphaPower()`**

   Returns the calculated alpha wave power from the EEG signal.

   ```typescript
   let alphaPower = spikerbit.brainAlphaPower();
   ```

## Examples

### Example: Recording Muscle Activity

```typescript
spikerbit.startHeartRecording()
basic.forever(function () {
    serial.writeNumber(spikerbit.musclePower())
    serial.writeLine("")
})
```

### Example: Recording Heart Rate

```typescript
spikerbit.startHeartRecording()
basic.forever(function () {
    serial.writeNumber(spikerbit.heartRate())
    serial.writeLine("")
})
```

### Example: Recording Brain Activity (Alpha Waves)

```typescript
spikerbit.startHeartRecording()
basic.forever(function () {
    serial.writeNumber(spikerbit.brainAlphaPower())
    serial.writeLine("")
})
});
```

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
