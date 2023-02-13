import { Wrapper } from './Wrapper'
import { Event } from './Event'

export type TimelineShape = typeof Wrapper & {
  Event: typeof Event
}

export const Timeline = Wrapper as TimelineShape

Timeline.Event = Event

export default Timeline