import { Request, Response } from "express";
import {
      getPagination,
      handleControllerError,
      validateBody,
      validateUuid,
} from "../../utils/http";
import {
      createEventHostService,
      listEventHostsService,
      getEventHostService,
      updateEventHostService,
      deleteEventHostService,
} from "./event-hosts.services";
import { CreateEventHostSchema, UpdateEventHostSchema } from "./event-hosts.validations";

export const createEventHost = async (req: Request, res: Response) => {
      try {
            const data = validateBody(CreateEventHostSchema, req.body);
            const host = await createEventHostService(data);
            return res.status(201).json({ success: true, host });
      } catch (error) {
            return handleControllerError(res, error, "Failed to create event host");
      }
};

export const listEventHosts = async (req: Request, res: Response) => {
      try {
            const paginationQuery = getPagination(req.query);
            const result = await listEventHostsService(paginationQuery);
            return res.status(200).json({ success: true, ...result });
      } catch (error) {
            return handleControllerError(res, error, "Failed to list event hosts");
      }
};

export const getEventHost = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const host = await getEventHostService(id);
            return res.status(200).json({ success: true, host });
      } catch (error) {
            return handleControllerError(res, error, "Failed to get event host");
      }
};

export const updateEventHost = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const data = validateBody(UpdateEventHostSchema, req.body);
            const host = await updateEventHostService(id, data);
            return res.status(200).json({ success: true, host });
      } catch (error) {
            return handleControllerError(res, error, "Failed to update event host");
      }
};

export const deleteEventHost = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            await deleteEventHostService(id);
            return res.status(200).json({ success: true, message: "Event host deleted" });
      } catch (error) {
            return handleControllerError(res, error, "Failed to delete event host");
      }
};
