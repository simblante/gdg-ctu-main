import { AppError } from "../../utils/http";
import { getPaginationMeta, Pagination } from "../../utils/pagination";
import { getMediaById } from "../media/models/media.queries";
import { getTeamMemberById } from "../team-members/models/team-member.queries";
import {
      countEventSpeakers,
      countEventSpeakersByTeamMemberId,
      deleteEventSpeaker,
      getEventSpeakerById,
      getEventSpeakerBySlug,
      getEventSpeakers,
      getEventSpeakersByTeamMemberId,
      insertEventSpeaker,
      updateEventSpeaker,
} from "./models/event-speaker.queries";
import {
      CreateEventSpeakerDTO,
      UpdateEventSpeakerDTO,
} from "./event-speaker.validations";

const validateEventSpeakerReferences = async (
      data: Partial<
            Pick<CreateEventSpeakerDTO, "profileMediaId" | "teamMemberId">
      >,
) => {
      if (data.profileMediaId && !(await getMediaById(data.profileMediaId))) {
            throw new AppError(
                  400,
                  "profileMediaId must reference existing media",
            );
      }

      if (data.teamMemberId && !(await getTeamMemberById(data.teamMemberId))) {
            throw new AppError(
                  400,
                  "teamMemberId must reference an existing team member",
            );
      }
};

export const createEventSpeakerService = async (
      data: CreateEventSpeakerDTO,
) => {
      if (await getEventSpeakerBySlug(data.slug)) {
            throw new AppError(409, "Event speaker slug already exists");
      }

      await validateEventSpeakerReferences(data);

      return insertEventSpeaker(data);
};

export const getEventSpeakersService = async (pagination: Pagination) => {
      const [eventSpeakers, total] = await Promise.all([
            getEventSpeakers(pagination),
            countEventSpeakers(),
      ]);

      return {
            eventSpeakers,
            pagination: getPaginationMeta(pagination, total),
      };
};

export const getEventSpeakerByIdService = async (id: string) => {
      const eventSpeaker = await getEventSpeakerById(id);

      if (!eventSpeaker) {
            throw new AppError(404, "Event speaker not found");
      }

      return eventSpeaker;
};

export const getEventSpeakerBySlugService = async (slug: string) => {
      const eventSpeaker = await getEventSpeakerBySlug(slug);

      if (!eventSpeaker) {
            throw new AppError(404, "Event speaker not found");
      }

      return eventSpeaker;
};

export const getEventSpeakersByTeamMemberIdService = async (
      teamMemberId: string,
      pagination: Pagination,
) => {
      if (!(await getTeamMemberById(teamMemberId))) {
            throw new AppError(404, "Team member not found");
      }

      const [eventSpeakers, total] = await Promise.all([
            getEventSpeakersByTeamMemberId(teamMemberId, pagination),
            countEventSpeakersByTeamMemberId(teamMemberId),
      ]);

      return {
            eventSpeakers,
            pagination: getPaginationMeta(pagination, total),
      };
};

export const updateEventSpeakerService = async (
      id: string,
      data: UpdateEventSpeakerDTO,
) => {
      const eventSpeaker = await getEventSpeakerById(id);

      if (!eventSpeaker) {
            throw new AppError(404, "Event speaker not found");
      }

      if (data.slug && data.slug !== eventSpeaker.slug) {
            const existingEventSpeaker = await getEventSpeakerBySlug(data.slug);

            if (existingEventSpeaker) {
                  throw new AppError(409, "Event speaker slug already exists");
            }
      }

      await validateEventSpeakerReferences(data);

      return updateEventSpeaker(id, {
            ...data,
            updatedAt: new Date(),
      });
};

export const deleteEventSpeakerService = async (id: string) => {
      const eventSpeaker = await getEventSpeakerById(id);

      if (!eventSpeaker) {
            throw new AppError(404, "Event speaker not found");
      }

      await deleteEventSpeaker(id);
};
