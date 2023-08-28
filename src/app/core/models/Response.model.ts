import { FilmModel } from "./Films.model";

export interface ResponseModel {
    page:number;
    results : FilmModel[];
    total_pages: number;
    total_results: number;
}