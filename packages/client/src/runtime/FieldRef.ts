export declare class FieldRef<Model, FieldType> {
  private _type: FieldType
  private _model: Model
}

class FieldRefImpl {}

export function createFieldRef<Model, FieldType>(): FieldRef<Model, FieldType> {
  return new FieldRefImpl() as FieldRef<Model, FieldType>
}
