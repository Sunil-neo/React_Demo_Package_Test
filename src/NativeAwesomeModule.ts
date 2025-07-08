import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  addition(a: number, b: number): number;
  multiply(a: number, b: number): number;
}

export default TurboModuleRegistry.getEnforcing<Spec>('AwesomeModule');
