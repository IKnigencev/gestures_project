import {STATUS} from "../types/auth.ts";
import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {LevelsData, LevelsService} from "../services/levels";

export type TUserStore = {
    data: LevelsData | null
    error: null | true
    status: STATUS
}

type Actions = {
    getLevels: () => Promise<void>
}

const initialState: TUserStore = {
    data: null,
    error: null,
    status: STATUS.initial
}

export const useLevelsStore = create<TUserStore & Actions>()(
    devtools((set) => ({
        ...initialState,
        getLevels: async () => {
            const {data} = await LevelsService.getLevels()
            if(data)
                set(state => ({...state, data, error: null}))
            else
                set(state => ({...state, data: null, error: true}))
        },
    })),
)