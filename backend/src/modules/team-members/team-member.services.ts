import { AppError } from "../../utils/http";
import { getPaginationMeta, Pagination } from "../../utils/pagination";
import { getMediaById } from "../media/models/media.queries";
import {
      countTeamMembers,
      deleteTeamMember,
      getTeamMemberById,
      getTeamMemberBySlug,
      getTeamMembers,
      insertTeamMember,
      teamMemberHasEventSpeakerReferences,
      updateTeamMember,
} from "./models/team-member.queries";
import {
      CreateTeamMemberDTO,
      UpdateTeamMemberDTO,
} from "./team-member.validations";

export const createTeamMemberService = async (data: CreateTeamMemberDTO) => {
      if (await getTeamMemberBySlug(data.slug)) {
            throw new AppError(409, "Team member slug already exists");
      }

      if (data.profileMediaId && !(await getMediaById(data.profileMediaId))) {
            throw new AppError(
                  400,
                  "profileMediaId must reference existing media",
            );
      }

      return insertTeamMember(data);
};

export const getTeamMembersService = async (pagination: Pagination) => {
      const [teamMembers, total] = await Promise.all([
            getTeamMembers(pagination),
            countTeamMembers(),
      ]);

      return {
            teamMembers,
            pagination: getPaginationMeta(pagination, total),
      };
};

export const getTeamMemberByIdService = async (id: string) => {
      const teamMember = await getTeamMemberById(id);

      if (!teamMember) {
            throw new AppError(404, "Team member not found");
      }

      return teamMember;
};

export const getTeamMemberBySlugService = async (slug: string) => {
      const teamMember = await getTeamMemberBySlug(slug);

      if (!teamMember) {
            throw new AppError(404, "Team member not found");
      }

      return teamMember;
};

export const updateTeamMemberService = async (
      id: string,
      data: UpdateTeamMemberDTO,
) => {
      const teamMember = await getTeamMemberById(id);

      if (!teamMember) {
            throw new AppError(404, "Team member not found");
      }

      if (data.slug && data.slug !== teamMember.slug) {
            const existingTeamMember = await getTeamMemberBySlug(data.slug);

            if (existingTeamMember) {
                  throw new AppError(409, "Team member slug already exists");
            }
      }

      if (data.profileMediaId && !(await getMediaById(data.profileMediaId))) {
            throw new AppError(
                  400,
                  "profileMediaId must reference existing media",
            );
      }

      return updateTeamMember(id, {
            ...data,
            updatedAt: new Date(),
      });
};

export const deleteTeamMemberService = async (id: string) => {
      const teamMember = await getTeamMemberById(id);

      if (!teamMember) {
            throw new AppError(404, "Team member not found");
      }

      if (await teamMemberHasEventSpeakerReferences(id)) {
            throw new AppError(
                  409,
                  "Team member cannot be deleted while assigned to events",
            );
      }

      await deleteTeamMember(id);
};
