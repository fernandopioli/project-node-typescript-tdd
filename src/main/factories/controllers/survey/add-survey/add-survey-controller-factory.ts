import { makeAddSurveyValidation } from './add-survey-validation-factory'
import { makeDbAddSurvey } from '@/main/factories/usecases/survey/add-survey/db-add-survey-factory'
import { makeLogControllerController } from '@/main/factories/decorators/log-controller-decorator-factory'
import { Controller } from '@/presentation/protocols'
import { AddSurveyController } from '@/presentation/controllers/survey/add-survey/add-survey-controller'

export const makeAddSurveyController = (): Controller => {
  const controller = new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvey())
  return makeLogControllerController(controller)
}
