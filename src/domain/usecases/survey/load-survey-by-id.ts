import { SurveyModel } from '@/presentation/controllers/survey/load-surveys/load-surveys-controller-protocols'

export interface LoadSurveyById {
  loadById: (id: string) => Promise<LoadSurveyById.Result>
}
export namespace LoadSurveyById {
  export type Result = Omit<SurveyModel, 'id'>
}
