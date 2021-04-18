import { InvalidParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fieldname: string,
    private readonly fieldToCompareName: string
  ) {}

  validate (input: any): Error | undefined {
    if (input[this.fieldname] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}
