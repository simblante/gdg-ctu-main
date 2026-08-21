import { AppError } from "../../utils/http";
import { getPaginationMeta, Pagination } from "../../utils/pagination";
import {
      insertEventAttendee,
      getEventAttendees,
      countEventAttendees,
      getEventAttendeeById,
      updateEventAttendee,
      deleteEventAttendee,
} from "./models/event-attendee.queries";
import { NewEventAttendeeRecord } from "./models/event-attendee.queries";
import { EventAttendeeRecord } from "./event-attendees.validations";

export const toEventAttendeeResponse = (att: EventAttendeeRecord) => att;

export const createEventAttendeeService = async (
      data: NewEventAttendeeRecord,
) => {
      const att = await insertEventAttendee(data);
      return toEventAttendeeResponse(att);
};

export const listEventAttendeesService = async (pagination: Pagination) => {
      const [atts, total] = await Promise.all([
            getEventAttendees(pagination),
            countEventAttendees(),
      ]);
      return {
            attendees: atts.map(toEventAttendeeResponse),
            pagination: getPaginationMeta(pagination, total),
      };
};

export const getEventAttendeeService = async (id: string) => {
      const att = await getEventAttendeeById(id);
      if (!att) {
            throw new AppError(404, "Event attendee not found");
      }
      return toEventAttendeeResponse(att);
};

export const updateEventAttendeeService = async (
      id: string,
      data: Partial<NewEventAttendeeRecord>,
) => {
      const existing = await getEventAttendeeById(id);
      if (!existing) {
            throw new AppError(404, "Event attendee not found");
      }
      const updated = await updateEventAttendee(id, data);
      return toEventAttendeeResponse(updated);
};

export const deleteEventAttendeeService = async (id: string) => {
      const existing = await getEventAttendeeById(id);
      if (!existing) {
            throw new AppError(404, "Event attendee not found");
      }
      await deleteEventAttendee(id);
};
