import { InvalidParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class CompareFieldsValidation implements Validation {
  private readonly fieldname: string
  private readonly fieldToCompareName: string

  constructor (fieldname: string, fieldToCompareName: string) {
    this.fieldname = fieldname
    this.fieldToCompareName = fieldToCompareName
  }

  validate (input: any): Error | undefined {
    if (input[this.fieldname] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}
