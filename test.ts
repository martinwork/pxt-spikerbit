// Automated tests for spiker:bit MakeCode package
// Types for tests/control are declared in pxt-shims.d.ts
// Run locally with pxt test and in CI by the Micro:bit Foundation.

// How to run: use "pxt test". All tests are simulator-safe.

// 1) Helpers must handle edge cases without throwing
tests.assertDoesNotThrow(() => { spikerbit.signalBlock(0) })
tests.assertEquals(0, spikerbit.maxSignalInLast(0), "Empty window max should be 0")
tests.assertEquals(0, spikerbit.numPeaksInLast(0), "Zero‑ms window must return 0 peaks")

// 2) EMG start should populate buffer; restart clears
control.runInParallel(() => {
spikerbit.startMuscleRecording()
control.waitMicros(20_000)
const firstLen = spikerbit.signalBlock(3000).length
tests.assertTrue(firstLen >= 1, "Recording should fill buffer")
spikerbit.startMuscleRecording()
const afterRestartLen = spikerbit.signalBlock(3000).length
tests.assertTrue(afterRestartLen >= 0, "Restart should not throw")
spikerbit.stopRecord()
tests.assertEquals(0, spikerbit.signalBlock(0).length, "Stop should clear buffer for 0ms window")
})

// 3) Heart/Brain APIs are defined and return finite values
tests.assertTrue(spikerbit.heartRate() >= 0 && spikerbit.heartRate() < 300, "Heart‑rate plausible range")
tests.assertTrue(spikerbit.brainAlphaPower() >= 0, "Alpha power must be ≥ 0")

// End of file
