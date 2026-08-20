import { Request, Response } from "express";
import {
      getPagination,
      getStringParam,
      handleControllerError,
      validateBody,
      validateUuid,
} from "../../utils/http";
import {
      createTeamMemberService,
      deleteTeamMemberService,
      getTeamMemberByIdService,
      getTeamMemberBySlugService,
      getTeamMembersService,
      updateTeamMemberService,
} from "./team-member.services";
import {
      CreateTeamMemberSchema,
      UpdateTeamMemberSchema,
} from "./team-member.validations";

export const createTeamMember = async (req: Request, res: Response) => {
      try {
            const data = validateBody(CreateTeamMemberSchema, req.body);
            const teamMember = await createTeamMemberService(data);

            return res.status(201).json({
                  success: true,
                  message: "Team member created successfully",
                  teamMember,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to create team member",
            );
      }
};

export const listTeamMembers = async (req: Request, res: Response) => {
      try {
            const paginationQuery = getPagination(req.query);
            const { teamMembers, pagination } =
                  await getTeamMembersService(paginationQuery);

            return res.status(200).json({
                  success: true,
                  teamMembers,
                  pagination,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to list team members",
            );
      }
};

export const getTeamMember = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const teamMember = await getTeamMemberByIdService(id);

            return res.status(200).json({
                  success: true,
                  teamMember,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to get team member",
            );
      }
};

export const getTeamMemberBySlug = async (req: Request, res: Response) => {
      try {
            const slug = getStringParam(req.params.slug, "slug");
            const teamMember = await getTeamMemberBySlugService(slug);

            return res.status(200).json({
                  success: true,
                  teamMember,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to get team member",
            );
      }
};

export const updateTeamMember = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            const data = validateBody(UpdateTeamMemberSchema, req.body);
            const teamMember = await updateTeamMemberService(id, data);

            return res.status(200).json({
                  success: true,
                  message: "Team member updated successfully",
                  teamMember,
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to update team member",
            );
      }
};

export const removeTeamMember = async (req: Request, res: Response) => {
      try {
            const id = validateUuid(req.params.id);
            await deleteTeamMemberService(id);

            return res.status(200).json({
                  success: true,
                  message: "Team member deleted successfully",
            });
      } catch (error) {
            return handleControllerError(
                  res,
                  error,
                  "Failed to delete team member",
            );
      }
};
