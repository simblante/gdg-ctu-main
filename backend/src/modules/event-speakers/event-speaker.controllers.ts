import { Request, Response } from "express";
import {
      getPagination,
      handleControllerError,
      validateBody,
      validateUuid,
} from "../../utils/http";
import {
      addEventSpeakerService,
      getEventsByTeamMemberIdService,
      getSpeakersByEventIdService,
      removeEventSpeakerService,
      updateEventSpeakerService,
} from "./event-speaker.services";
import {
      CreateEventSpeakerSchema,
      UpdateEventSpeakerSchema,
} from "./event-speaker.validations";

export const addEventSpeaker = async (req: Request, res: Response) => {
      try {
            const eventId = validateUuid(req.params.eventId, "eventId");
            const data = validateBody(CreateEventSpeakerSchema, req.body);
            const eventSpeaker = await addEventSpeakerService(
                  eventId,
                  data,
            );

            return res.status(201).json({
                  success: true,
                  message: "Event speaker added successfully",
                  eventSpeaker,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to add event speaker",
            );
      }
};

export const listSpeakersForEvent = async (req: Request, res: Response) => {
      try {
            const eventId = validateUuid(req.params.eventId, "eventId");
            const paginationQuery = getPagination(req.query);
            const { speakers, pagination } = await getSpeakersByEventIdService(
                  eventId,
                  paginationQuery,
            );

            return res.status(200).json({
                  success: true,
                  speakers,
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

export const listEventsForTeamMember = async (
      req: Request,
      res: Response,
) => {
      try {
            const teamMemberId = validateUuid(
                  req.params.teamMemberId,
                  "teamMemberId",
            );
            const paginationQuery = getPagination(req.query);
            const { events, pagination } = await getEventsByTeamMemberIdService(
                  teamMemberId,
                  paginationQuery,
            );

            return res.status(200).json({
                  success: true,
                  events,
                  pagination,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to list team member events",
            );
      }
};

export const updateEventSpeaker = async (req: Request, res: Response) => {
      try {
            const eventId = validateUuid(req.params.eventId, "eventId");
            const teamMemberId = validateUuid(
                  req.params.teamMemberId,
                  "teamMemberId",
            );
            const data = validateBody(UpdateEventSpeakerSchema, req.body);
            const eventSpeaker = await updateEventSpeakerService(
                  eventId,
                  teamMemberId,
                  data,
            );

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
            const eventId = validateUuid(req.params.eventId, "eventId");
            const teamMemberId = validateUuid(
                  req.params.teamMemberId,
                  "teamMemberId",
            );
            await removeEventSpeakerService(eventId, teamMemberId);

            return res.status(200).json({
                  success: true,
                  message: "Event speaker removed successfully",
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to remove event speaker",
            );
      }
};
