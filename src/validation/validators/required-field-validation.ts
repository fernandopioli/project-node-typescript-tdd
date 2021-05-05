import { MissingParamError } from '../../presentation/errors'
import { Validation } from '../../presentation/protocols'

export class RequiredFieldValidation implements Validation {
  constructor (private readonly fieldname: string) {}

  validate (input: any): Error | undefined {
    if (!input[this.fieldname]) {
      return new MissingParamError(this.fieldname)
    }
  }
}
