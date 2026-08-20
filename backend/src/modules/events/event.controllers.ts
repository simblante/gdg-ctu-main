import { Request, Response } from "express";
import {
      getPagination,
      getStringParam,
      handleControllerError,
      validateBody,
      validateUuid,
} from "../../utils/http";
import {
      createEventService,
      deleteEventService,
      getEventByIdService,
      getEventBySlugService,
      getEventsService,
      updateEventService,
} from "./event.services";
import { CreateEventSchema, UpdateEventSchema } from "./event.validations";

export const createEvent = async (req: Request, res: Response) => {
      try {
            const data = validateBody(CreateEventSchema, req.body);
            const event = await createEventService(data);

            return res.status(201).json({
                  success: true,
                  message: "Event created successfully",
                  event,
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to create event");
      }
};

export const listEvents = async (req: Request, res: Response) => {
      try {
            const paginationQuery = getPagination(req.query);
            const { events, pagination } =
                  await getEventsService(paginationQuery);

            return res.status(200).json({
                  success: true,
                  events,
                  pagination,
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to list events");
      }
};

export const getEvent = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const event = await getEventByIdService(id);

            return res.status(200).json({
                  success: true,
                  event,
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to get event");
      }
};

export const getEventBySlug = async (req: Request, res: Response) => {
      try {
            const slug = getStringParam(req.params.slug, "slug");
            const event = await getEventBySlugService(slug);

            return res.status(200).json({
                  success: true,
                  event,
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to get event");
      }
};

export const updateEvent = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const data = validateBody(UpdateEventSchema, req.body);
            const event = await updateEventService(id, data);

            return res.status(200).json({
                  success: true,
                  message: "Event updated successfully",
                  event,
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to update event");
      }
};

export const removeEvent = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            await deleteEventService(id);

            return res.status(200).json({
                  success: true,
                  message: "Event deleted successfully",
            });
      } catch (error) {
            return handleControllerError(res, error, "Failed to delete event");
      }
};
