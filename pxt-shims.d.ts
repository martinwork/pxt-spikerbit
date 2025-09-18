// Minimal ambient declarations to satisfy TypeScript linting in this repo

// PXT control API
declare const control: {
    millis(): number
    inBackground(cb: () => void): void
    runInParallel(cb: () => void): void
    waitMicros(us: number): void
    assert(cond: boolean, msg?: string): void
}

// PXT pins API
declare const pins: {
    analogReadPin(pin: AnalogPin): number
    digitalWritePin(pin: DigitalPin, value: number): void
}

// PXT serial API
declare const serial: {
    writeValue(name: string, value: number): void
}

// PXT basic API
declare const basic: {
    pause(ms: number): void
}

// Enums used in this project
declare enum AnalogPin {
    P0,
    P1,
    P2
}

declare enum DigitalPin {
    P8,
    P9,
    P19,
    P20
}

// Tests API used in test.ts
declare const tests: {
    assertTrue(cond: boolean, msg?: string): void
    assertEquals<T>(a: T, b: T, msg?: string): void
    assertDoesNotThrow(fn: () => void, msg?: string): void
}
