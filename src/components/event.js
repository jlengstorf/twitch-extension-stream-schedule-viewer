/**@jsx jsx */
import {jsx} from '../contexts/theme-context'

export const Event = ({event}) => (
    <details>
        <summary>
            <h2 sx={{display: 'inline', marginX: 2}}>{event.title}</h2>
            <time dateTime={event.date}>{event.date.toLocaleDateString()}</time>
        </summary>
        {event.description}
    </details>
)

export default Event