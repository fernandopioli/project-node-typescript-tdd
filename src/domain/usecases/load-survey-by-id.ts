import { SurveyModel } from '@/presentation/controllers/survey/load-surveys/load-surveys-controller-protocols'

export interface LoadSurveyById {
  loadById: (id: string) => Promise<SurveyModel>
}
