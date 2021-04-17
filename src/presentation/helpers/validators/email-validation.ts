import { InvalidParamError } from '../../errors'
import { EmailValidator } from '../../protocols/email-validator'
import { Validation } from '../../protocols/validation'

export class EmailValidation implements Validation {
  private readonly fieldname: string
  private readonly emailValidator: EmailValidator

  constructor (fieldname: string, emailValidator: EmailValidator) {
    this.fieldname = fieldname
    this.emailValidator = emailValidator
  }

  validate (input: any): Error | undefined {
    const isValid = this.emailValidator.isValid(input[this.fieldname])
    if (!isValid) {
      return new InvalidParamError(this.fieldname)
    }
  }
}