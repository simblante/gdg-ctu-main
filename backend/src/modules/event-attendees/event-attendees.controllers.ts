import { Request, Response } from "express";
import {
      getPagination,
      handleControllerError,
      validateBody,
      validateUuid,
} from "../../utils/http";
import {
      createEventAttendeeService,
      listEventAttendeesService,
      getEventAttendeeService,
      updateEventAttendeeService,
      deleteEventAttendeeService,
} from "./event-attendees.services";
import { CreateEventAttendeeSchema, UpdateEventAttendeeSchema } from "./event-attendees.validations";

export const createEventAttendee = async (req: Request, res: Response) => {
      try {
            const data = validateBody(CreateEventAttendeeSchema, req.body);
            const attendee = await createEventAttendeeService(data);
            return res.status(201).json({ success: true, attendee });
      } catch (error) {
            return handleControllerError(res, error, "Failed to create event attendee");
      }
};

export const listEventAttendees = async (req: Request, res: Response) => {
      try {
            const paginationQuery = getPagination(req.query);
            const result = await listEventAttendeesService(paginationQuery);
            return res.status(200).json({ success: true, ...result });
      } catch (error) {
            return handleControllerError(res, error, "Failed to list event attendees");
      }
};

export const getEventAttendee = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const attendee = await getEventAttendeeService(id);
            return res.status(200).json({ success: true, attendee });
      } catch (error) {
            return handleControllerError(res, error, "Failed to get event attendee");
      }
};

export const updateEventAttendee = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const data = validateBody(UpdateEventAttendeeSchema, req.body);
            const attendee = await updateEventAttendeeService(id, data);
            return res.status(200).json({ success: true, attendee });
      } catch (error) {
            return handleControllerError(res, error, "Failed to update event attendee");
      }
};

export const deleteEventAttendee = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            await deleteEventAttendeeService(id);
            return res.status(200).json({ success: true, message: "Event attendee deleted" });
      } catch (error) {
            return handleControllerError(res, error, "Failed to delete event attendee");
      }
};
