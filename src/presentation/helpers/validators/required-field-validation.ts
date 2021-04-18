import { MissingParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class RequiredFieldValidation implements Validation {
  constructor (private readonly fieldname: string) {}

  validate (input: any): Error | undefined {
    if (!input[this.fieldname]) {
      return new MissingParamError(this.fieldname)
    }
  }
}
