import { LogControllerDecorator } from '@/main/decorators/log-controller-decorator'
import { LogErrorRepository } from '@/data/protocols/db/log/log-error-repository'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok } from '@/presentation/helpers/http/http-helper'
import { mockAccountModel } from '@/tests/domain/mocks'
import { mockLogErrorRepository } from '@/tests/data/mocks'

type SutTypes = {
  sut: LogControllerDecorator
  controllerStub: Controller
  logErrorRepositoryStub: LogErrorRepository
}

const makeController = (): Controller => {
  class ControllerStub implements Controller {
    async handle (httpRequest: any): Promise<HttpResponse> {
      return await Promise.resolve(ok(mockAccountModel()))
    }
  }
  return new ControllerStub()
}

const makeSut = (): SutTypes => {
  const controllerStub = makeController()
  const logErrorRepositoryStub = mockLogErrorRepository()
  const sut = new LogControllerDecorator(controllerStub, logErrorRepositoryStub)
  return {
    sut,
    controllerStub,
    logErrorRepositoryStub
  }
}

const makeFakeServerError = (): HttpResponse => {
  const fakeError = new Error()
  fakeError.stack = 'any_stack'
  return serverError(fakeError)
}

describe('LogController Decorator', () => {
  test('should call controller handle', async () => {
    const { sut, controllerStub } = makeSut()
    const handleSpy = jest.spyOn(controllerStub, 'handle')
    await sut.handle({ name: 'any_name' })
    expect(handleSpy).toHaveBeenCalledWith({ name: 'any_name' })
  })

  test('should return the result of the controller', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle({ name: 'any_name' })
    expect(httpResponse).toEqual(ok(mockAccountModel()))
  })

  test('should call LogErrorRepository with correct error if controller returns a server error', async () => {
    const { sut, controllerStub, logErrorRepositoryStub } = makeSut()

    const logSpy = jest.spyOn(logErrorRepositoryStub, 'logError')
    jest.spyOn(controllerStub, 'handle').mockReturnValueOnce(Promise.resolve(makeFakeServerError()))
    await sut.handle({ name: 'any_name' })
    expect(logSpy).toHaveBeenCalledWith('any_stack')
  })
})
