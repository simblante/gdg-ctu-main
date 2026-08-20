import { Request, Response } from "express";
import {
      getPagination,
      getStringParam,
      handleControllerError,
      validateBody,
      validateUuid,
} from "../../utils/http";
import {
      createEventSpeakerService,
      deleteEventSpeakerService,
      getEventSpeakerByIdService,
      getEventSpeakerBySlugService,
      getEventSpeakersByTeamMemberIdService,
      getEventSpeakersService,
      updateEventSpeakerService,
} from "./event-speaker.services";
import {
      CreateEventSpeakerSchema,
      UpdateEventSpeakerSchema,
} from "./event-speaker.validations";

export const createEventSpeaker = async (req: Request, res: Response) => {
      try {
            const data = validateBody(CreateEventSpeakerSchema, req.body);
            const eventSpeaker = await createEventSpeakerService(data);

            return res.status(201).json({
                  success: true,
                  message: "Event speaker created successfully",
                  eventSpeaker,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to create event speaker",
            );
      }
};

export const listEventSpeakers = async (req: Request, res: Response) => {
      try {
            const paginationQuery = getPagination(req.query);
            const { eventSpeakers, pagination } =
                  await getEventSpeakersService(paginationQuery);

            return res.status(200).json({
                  success: true,
                  eventSpeakers,
                  pagination,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to list event speakers",
            );
      }
};

export const getEventSpeaker = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const eventSpeaker = await getEventSpeakerByIdService(id);

            return res.status(200).json({
                  success: true,
                  eventSpeaker,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to get event speaker",
            );
      }
};

export const getEventSpeakerBySlug = async (
      req: Request,
      res: Response,
) => {
      try {
            const slug = getStringParam(req.params.slug, "slug");
            const eventSpeaker = await getEventSpeakerBySlugService(slug);

            return res.status(200).json({
                  success: true,
                  eventSpeaker,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to get event speaker",
            );
      }
};

export const listEventSpeakersForTeamMember = async (
      req: Request,
      res: Response,
) => {
      try {
            const teamMemberId = validateUuid(
                  req.params.teamMemberId,
                  "teamMemberId",
            );
            const paginationQuery = getPagination(req.query);
            const { eventSpeakers, pagination } =
                  await getEventSpeakersByTeamMemberIdService(
                        teamMemberId,
                        paginationQuery,
                  );

            return res.status(200).json({
                  success: true,
                  eventSpeakers,
                  pagination,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to list team member event speakers",
            );
      }
};

export const updateEventSpeaker = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const data = validateBody(UpdateEventSpeakerSchema, req.body);
            const eventSpeaker = await updateEventSpeakerService(id, data);

            return res.status(200).json({
                  success: true,
                  message: "Event speaker updated successfully",
                  eventSpeaker,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to update event speaker",
            );
      }
};

export const removeEventSpeaker = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            await deleteEventSpeakerService(id);

            return res.status(200).json({
                  success: true,
                  message: "Event speaker deleted successfully",
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to delete event speaker",
            );
      }
};
