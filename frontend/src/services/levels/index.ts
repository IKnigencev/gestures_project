import { apiInstance} from "../../contants.ts";
import {TokenService} from "../token";
import {AxiosError, isAxiosError} from "axios";

export type LevelsData = {
    lessons: {
        title: string,
        description: string,
        priority_index: number,
        active: boolean,
        is_finish: boolean,
        all_step: number,
        current_step: number | null,
        step_id: number | null
        id: number
    }[],
    all_lessons_count: number,
    active_lessons_count: number,
    finish_lessons_count: number
}

export class LevelsService {
    static async getLevels(): Promise<{error: null, data: LevelsData } | {error: true, data: null }>{
        try {
            const {data} = await apiInstance.get('/', {
                headers:{
                    Authorization: TokenService.getAuthorization()
                }
            })
            return {error: null, data: data }
        }
        catch (e: any | AxiosError) {
            return {error: isAxiosError(e) && e.response ? e.response.data : <AxiosError>{}, data: null}
        }
    }
}