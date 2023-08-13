import * as React from "react";
import DashboardIcon from "../../assets/Icons/fluent_board-split-24-regular.svg";
import TaskIcon from "../../assets/Icons/task icon.svg";
import TeamIcon from "../../assets/Icons/team icon.svg";
import CalendarIcon from "../../assets/Icons/calender icon.svg";
import MessagesIcon from "../../assets/Icons/Messages icon.svg";
import SettingsIcon from "../../assets/Icons/Settings.svg";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <img src={DashboardIcon} alt="" />,
    link: "/dashboard",
  },
  {
    title: "Tasklist",
    icon: <img src={TaskIcon} alt="" />,
    link: "/tasklist",
  },
  {
    title: "Teams",
    icon: <img src={TeamIcon} alt="" />,
    link: "/teams",
  },
  {
    title: "Calendar",
    icon: <img src={CalendarIcon} alt="" />,
    link: "/calendar",
  },
  {
    title: "Messages",
    icon: <img src={MessagesIcon} alt="" />,
    link: "/messages",
  },
  {
    title: "Settings",
    icon: <img src={SettingsIcon} alt="" />,
    link: "/settings",
  },
];
