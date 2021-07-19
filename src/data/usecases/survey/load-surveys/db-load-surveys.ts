import { LoadSurveysRepository, LoadSurveys } from './db-load-surveys-protocols'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}

  async load (): Promise<LoadSurveys.Result> {
    const surveys = await this.loadSurveysRepository.loadAll()
    return surveys
  }
}
