import AwesomeModule from './NativeAwesomeModule';

export function multiply(a: number, b: number): number {
  return AwesomeModule.multiply(a, b);
}

export function addition(a: number, b: number): number {
  return AwesomeModule.addition(a, b);
}
