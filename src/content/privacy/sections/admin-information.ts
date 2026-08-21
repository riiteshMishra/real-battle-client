import {
  adminInformation,
  organizerInformation,
  administrativeActivityLogs,
} from "../data-definitions/admin-info";

export const adminInformationSection = {
  id: "admin-information",
  title: "7. Administrator & Organizer Information",
  type: "subsections" as const,
  subsections: [
    {
      title: "Administrator Information",
      items: adminInformation,
    },
    {
      title: "Organizer Information",
      items: organizerInformation,
    },
    {
      title: "Administrative Activity Logs",
      items: administrativeActivityLogs,
    },
  ],
};
