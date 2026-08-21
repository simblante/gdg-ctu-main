import { AppError } from "../../utils/http";
import { getPaginationMeta, Pagination } from "../../utils/pagination";
import {
      insertEventHost,
      getEventHosts,
      countEventHosts,
      getEventHostById,
      updateEventHost,
      deleteEventHost,
} from "./models/event-host.queries";
import { EventHostRecord } from "./event-hosts.validations";
import { NewEventHostRecord } from "./models/event-host.queries";

export const toEventHostResponse = (host: EventHostRecord) => {
      // No sensitive fields to strip currently
      return host;
};

export const createEventHostService = async (data: NewEventHostRecord) => {
      const host = await insertEventHost(data);
      return toEventHostResponse(host);
};

export const listEventHostsService = async (pagination: Pagination) => {
      const [hosts, total] = await Promise.all([
            getEventHosts(pagination),
            countEventHosts(),
      ]);
      return {
            hosts: hosts.map(toEventHostResponse),
            pagination: getPaginationMeta(pagination, total),
      };
};

export const getEventHostService = async (id: string) => {
      const host = await getEventHostById(id);
      if (!host) {
            throw new AppError(404, "Event host not found");
      }
      return toEventHostResponse(host);
};

export const updateEventHostService = async (
      id: string,
      data: Partial<NewEventHostRecord>,
) => {
      const existing = await getEventHostById(id);
      if (!existing) {
            throw new AppError(404, "Event host not found");
      }
      const updated = await updateEventHost(id, data);
      return toEventHostResponse(updated);
};

export const deleteEventHostService = async (id: string) => {
      const existing = await getEventHostById(id);
      if (!existing) {
            throw new AppError(404, "Event host not found");
      }
      await deleteEventHost(id);
};
