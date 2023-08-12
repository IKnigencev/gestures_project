import { Navigate, useLocation } from 'react-router-dom'
import { FC, ReactElement } from 'react'
import {useUserStore} from "../../store/user.ts";

type TProtectedRouteElement = {
    element: ReactElement
    guest?: boolean
}

export const ProtectedRouteElement: FC<TProtectedRouteElement> = ({element, guest = false}): ReactElement | null => {
    const location = useLocation()
    const from = location.state?.from || '/'
    const user = useUserStore(state => state.data)
    if (user && guest) return <Navigate to={from} />
    if (!guest && !user)
        return <Navigate to='/login' state={{ from: location }} />
    return element
}