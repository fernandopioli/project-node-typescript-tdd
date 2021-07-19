import { SurveyResultModel } from '@/domain/models/survey-result'

export interface SaveSurveyResult {
  save: (data: SaveSurveyResult.Params) => Promise<SaveSurveyResult.Result>
}
export namespace SaveSurveyResult {
  export type Params = {
    urveyId: string
    accountId: string
    answer: string
    date: Date
  }
  export type Result = SurveyResultModel
}
