// tests/test.ts
// Basic test 

function runTest(name: string, fn: () => void) {
    try {
        fn();
        serial.writeLine(name + " passed.");
    } catch (e) {
        serial.writeLine(name + " failed: " + e.message);
    }
}

// Test that calls each function in the extension

runTest("startMuscleRecording", () => {
    spikerbit.stopRecord(); // Ensure any ongoing recording is stopped
    spikerbit.startMuscleRecording();
});
runTest("musclePowerSignal", () => spikerbit.musclePowerSignal());
runTest("startHeartRecording", () => {
    spikerbit.stopRecord(); // Ensure any ongoing recording is stopped
    spikerbit.startHeartRecording();
});
runTest("heartSignal", () => spikerbit.heartSignal());
runTest("heartRate", () => spikerbit.heartRate());
runTest("onHeartBeat", () => spikerbit.onHeartBeat(() => { }));
runTest("startBrainRecording", () => {
    spikerbit.stopRecord(); // Ensure any ongoing recording is stopped
    spikerbit.startBrainRecording();
});
runTest("brainSignal", () => spikerbit.brainSignal());
runTest("brainAlphaPower", () => spikerbit.brainAlphaPower());
runTest("print", () => spikerbit.print(123));
runTest("signalBlock", () => spikerbit.signalBlock(500));
runTest("maxSignalInLast", () => spikerbit.maxSignalInLast(1000));
runTest("numPeaksInLast", () => spikerbit.numPeaksInLast(1000));
runTest("stopRecord", () => spikerbit.stopRecord());

// Final marker to indicate all tests are done
serial.writeLine("TESTS_DONE");

