import { AppError } from "../../utils/http";
import { getPaginationMeta, Pagination } from "../../utils/pagination";
import { getEventById } from "../events/models/event.queries";
import { getTeamMemberById } from "../team-members/models/team-member.queries";
import {
      countEventsByTeamMemberId,
      countSpeakersByEventId,
      deleteEventSpeaker,
      getEventsByTeamMemberId,
      getEventSpeaker,
      getSpeakersByEventId,
      insertEventSpeaker,
      updateEventSpeaker,
} from "./models/event-speaker.queries";
import {
      CreateEventSpeakerDTO,
      UpdateEventSpeakerDTO,
} from "./event-speaker.validations";

export const addEventSpeakerService = async (
      eventId: string,
      data: CreateEventSpeakerDTO,
) => {
      if (!(await getEventById(eventId))) {
            throw new AppError(404, "Event not found");
      }

      if (!(await getTeamMemberById(data.teamMemberId))) {
            throw new AppError(404, "Team member not found");
      }

      if (await getEventSpeaker(eventId, data.teamMemberId)) {
            throw new AppError(
                  409,
                  "Team member is already assigned to this event",
            );
      }

      return insertEventSpeaker({
            ...data,
            eventId,
      });
};

export const getSpeakersByEventIdService = async (
      eventId: string,
      pagination: Pagination,
) => {
      if (!(await getEventById(eventId))) {
            throw new AppError(404, "Event not found");
      }

      const [speakers, total] = await Promise.all([
            getSpeakersByEventId(eventId, pagination),
            countSpeakersByEventId(eventId),
      ]);

      return {
            speakers,
            pagination: getPaginationMeta(pagination, total),
      };
};

export const getEventsByTeamMemberIdService = async (
      teamMemberId: string,
      pagination: Pagination,
) => {
      if (!(await getTeamMemberById(teamMemberId))) {
            throw new AppError(404, "Team member not found");
      }

      const [events, total] = await Promise.all([
            getEventsByTeamMemberId(teamMemberId, pagination),
            countEventsByTeamMemberId(teamMemberId),
      ]);

      return {
            events,
            pagination: getPaginationMeta(pagination, total),
      };
};

export const updateEventSpeakerService = async (
      eventId: string,
      teamMemberId: string,
      data: UpdateEventSpeakerDTO,
) => {
      if (!(await getEventSpeaker(eventId, teamMemberId))) {
            throw new AppError(404, "Event speaker not found");
      }

      return updateEventSpeaker(eventId, teamMemberId, data);
};

export const removeEventSpeakerService = async (
      eventId: string,
      teamMemberId: string,
) => {
      if (!(await getEventSpeaker(eventId, teamMemberId))) {
            throw new AppError(404, "Event speaker not found");
      }

      await deleteEventSpeaker(eventId, teamMemberId);
};
