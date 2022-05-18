import { WorkingPosition } from '../enums/workingPosition';

export interface User {
  name: string,
  age: number,
  email: string,
  workingPosition: WorkingPosition,
}
