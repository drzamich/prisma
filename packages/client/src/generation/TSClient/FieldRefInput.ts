import type { DMMF } from '../../runtime/dmmf-types'
import type { Generatable } from './Generatable'

export class FieldRefInput implements Generatable {
  constructor(private type: DMMF.FieldRefType) {}

  toTS() {
    return `
/**
 * Reference to a field
 */
export type ${this.type.name}<Model> = FieldRefInput<Model, '???'>
    `
  }
}
