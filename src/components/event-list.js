/**@jsx jsx */
import {jsx} from '../contexts/theme-context'

import Event from './event'

export const EventList = ({ events }) => (
  <ol>
    {events.map(event => {
      return (
        <li key={event.id} sx={{
            listStyle: 'none'
        }}>
          <Event event={event} />
        </li>
      );
    })}
  </ol>
);

export default EventList
