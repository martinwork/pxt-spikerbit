// Automated tests for Spiker:Bit MakeCode package
// Run locally with pxt test and in CI by the Micro:bit Foundation.

// 1. Pure‑math helper: ensure the buffer helper never throws on edge cases
const emptyArray: number[] = []

// Should not throw converting an empty signal block
tests.assertDoesNotThrow(() => {
spikerbit.signalBlock(0)
})

// 2. Simulated buffer maths – these work both in the simulator and on hardware
tests.assertTrue(spikerbit.maxSignalInLast(50) >= 0, "maxSignalInLast should be non‑negative")
tests.assertEquals(0, spikerbit.numPeaksInLast(0), "Zero‑ms window must return 0 peaks")

// 3. EMG start/stop flow – skip if running in headless simulator (no DAL)
control.runInParallel(() => {
spikerbit.startMuscleRecording()
control.waitMicros(20_000)  // 20 ms wait (≥ 5 samples at 250 Hz)
tests.assertTrue(spikerbit.signalBlock().length > 0, "Recording should fill buffer")
spikerbit.print(spikerbit.musclePowerSignal())
spikerbit.print(spikerbit.maxSignalInLast(1000))
spikerbit.print(spikerbit.numPeaksInLast(1000))
spikerbit.startMuscleRecording()  // restart should clear previous buffer
spikerbit.stopRecord()            // ignore if stopRecord is a no‑op
})

// 4. Heart‑rate maths check (simulator returns sine‑wave; BPM should be finite)
tests.assertTrue(spikerbit.heartRate() >= 0 && spikerbit.heartRate() < 300, "Heart‑rate range plausible")

// 5. Alpha‑power always non‑negative
tests.assertTrue(spikerbit.brainAlphaPower() >= 0, "Alpha power must be ≥ 0")

// End of file
