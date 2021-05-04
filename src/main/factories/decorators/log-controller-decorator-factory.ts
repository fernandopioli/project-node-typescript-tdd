import { LogMongoRepository } from '../../../infra/db/mongodb/log/log-mongo-repository'
import { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'

export const makeLogControllerController = (controller: Controller): Controller => {
  const logMongoRespository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongoRespository)
}
