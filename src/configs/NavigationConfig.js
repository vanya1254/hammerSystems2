import {
  DashboardOutlined,
  CalendarOutlined,
  FileTextOutlined,
  UserOutlined,
  StarOutlined,
  HomeOutlined,
  ShopOutlined,
  TeamOutlined,
  GlobalOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const mainNavTree = [
  {
    key: "main",
    path: `${APP_PREFIX_PATH}/main`,
    title: "sidenav.main",
    icon: HomeOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "main-dashboard",
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        title: "sidenav.main.dashboard",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-scheduler",
        path: `${APP_PREFIX_PATH}/main/scheduler`,
        title: "sidenav.main.scheduler",
        icon: CalendarOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-bookings",
        path: `${APP_PREFIX_PATH}/main/bookings`,
        title: "sidenav.main.bookings",
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-clients",
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: "sidenav.main.clients",
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-reviews",
        path: `${APP_PREFIX_PATH}/main/reviews`,
        title: "sidenav.main.reviews",
        icon: StarOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-venues",
        path: `${APP_PREFIX_PATH}/main/venues`,
        title: "sidenav.main.venues",
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-events",
        path: `${APP_PREFIX_PATH}/main/events`,
        title: "sidenav.main.events",
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "main-events-groups",
            path: `${APP_PREFIX_PATH}/main/events/groups`,
            title: "sidenav.main.events.groups",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "main-staff",
        path: `${APP_PREFIX_PATH}/main/staff`,
        title: "sidenav.main.staff",
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-webModule",
        path: `${APP_PREFIX_PATH}/main/webModule`,
        title: "sidenav.main.webModule",
        icon: GlobalOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-reservationBook",
        path: `${APP_PREFIX_PATH}/main/reservationBook`,
        title: "sidenav.main.reservationBook",
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemNavTree = [
  {
    key: "system",
    path: `${APP_PREFIX_PATH}/system`,
    title: "sidenav.system",
    icon: SettingOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "system-settings",
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: "sidenav.system.settings",
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

export { mainNavTree, systemNavTree };

const navigationConfig = [...mainNavTree, ...systemNavTree];

export default navigationConfig;
