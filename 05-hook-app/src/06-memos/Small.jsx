/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { memo } from "react"

export const Small = memo(({ value }) => {
    console.log('generado nuevamente :)')

    return (
        <small> { value } </small>
    )
})
