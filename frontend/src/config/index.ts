import EmptyCard from "@/widgets/EmptyCard.vue";
import Page404 from "@/widgets/Page404.vue";
import { getRandomId } from "@/tools/randId";
import type { LayoutCard } from "@/types";
import { LayoutCardHeight } from "./originLayoutConfig";
import DataOverview from "@/widgets/PanelOverview.vue";
import StatusBlock from "@/widgets/StatusBlock.vue";
import { t } from "@/lang/i18n";
import NodeOverview from "@/widgets/NodeOverview.vue";
import QuickStart from "@/widgets/QuickStart.vue";
import RequestChart from "@/widgets/RequestChart.vue";
import InstanceChart from "@/widgets/InstanceChart.vue";
import InstanceList from "@/widgets/InstanceList.vue";
import NodeList from "@/widgets/NodeList.vue";
import Settings from "@/widgets/Settings.vue";
import UserList from "@/widgets/UserList.vue";
import Terminal from "@/widgets/instance/Terminal.vue";
import InstanceManagerBtns from "@/widgets/instance/ManagerBtns.vue";
import InstanceBaseInfo from "@/widgets/instance/BaseInfo.vue";
import InstanceServerConfigOverview from "@/widgets/instance/ServerConfigOverview.vue";
import InstanceServerConfigFile from "@/widgets/instance/ServerConfigFile.vue";
import InstanceFileManager from "@/widgets/instance/FileManager.vue";
import UserAccessSettings from "@/widgets/user/AccessSettings.vue";
import ImageBox from "@/widgets/others/ImageBox.vue";
import TextCard from "@/widgets/others/TextCard.vue";
import LinkCard from "@/widgets/others/LinkCard.vue";
import QuickStartFlow from "@/widgets/setupApp/QuickStartFlow.vue";
import McPreset from "@/widgets/setupApp/McPreset.vue";
import IframeCard from "@/widgets/others/IframeCard.vue";
import ClockCard from "@/widgets/others/ClockCard.vue";
import UserStatusBlock from "@/widgets/UserStatusBlock.vue";
import UserInstanceList from "@/widgets/UserInstanceList.vue";
import ImageManager from "@/widgets/imageManager/index.vue";
import NewImage from "@/widgets/imageManager/NewImage.vue";
import Schedule from "@/widgets/instance/Schedule.vue";
import InstanceShortcut from "@/widgets/instance/Shortcut.vue";

import { NEW_CARD_TYPE } from "../types/index";
import { ROLE } from "./router";

// Register specified Vue components for each card.
export const LAYOUT_CARD_TYPES: { [key: string]: any } = {
  Page404,
  EmptyCard,
  DataOverview,
  StatusBlock,
  QuickStart,
  NodeOverview,
  RequestChart,
  InstanceChart,
  InstanceList,
  NodeList,
  Settings,
  UserList,
  Terminal,
  InstanceManagerBtns,
  InstanceBaseInfo,
  InstanceServerConfigOverview,
  InstanceServerConfigFile,
  InstanceFileManager,
  UserAccessSettings,
  ImageBox,
  QuickStartFlow,
  McPreset,
  IframeCard,
  TextCard,
  LinkCard,
  ClockCard,
  UserStatusBlock,
  UserInstanceList,
  ImageManager,
  NewImage,
  Schedule,
  InstanceShortcut
};

export interface NewCardItem extends LayoutCard {
  category: NEW_CARD_TYPE;
  permission: ROLE;
}

export function getLayoutCardPool() {
  const LAYOUT_CARD_POOL: NewCardItem[] = [
    {
      id: getRandomId(),
      permission: ROLE.GUEST,
      meta: {},
      type: "EmptyCard",
      title: t("TXT_CODE_b23e2bab"),
      width: 2,
      description: t("TXT_CODE_b3e2f83e"),
      height: LayoutCardHeight.MINI,
      category: NEW_CARD_TYPE.OTHER
    },

    {
      id: getRandomId(),
      permission: ROLE.USER,
      type: "Terminal",
      title: t("TXT_CODE_71a51d19"),
      width: 6,
      description: t("TXT_CODE_10a6d36f"),
      height: LayoutCardHeight.BIG,
      category: NEW_CARD_TYPE.INSTANCE,
      meta: {
        viewType: "card"
      },
      params: [
        {
          field: "instanceId",
          label: t("TXT_CODE_e6a5c12b"),
          type: "string"
        },
        {
          field: "daemonId",
          label: t("TXT_CODE_72cfab69"),
          type: "string"
        },
        {
          field: "instance",
          label: t("TXT_CODE_cb043d10"),
          type: "instance"
        }
      ]
    },

    {
      id: getRandomId(),
      permission: ROLE.ADMIN,
      type: "StatusBlock",
      title: t("TXT_CODE_b4a9d04a"),
      meta: {
        title: t("TXT_CODE_4b7eba50"),
        type: "node"
      },
      width: 3,
      description: t("TXT_CODE_55ade942"),
      height: LayoutCardHeight.SMALL,
      category: NEW_CARD_TYPE.COMMON
    },

    {
      id: getRandomId(),
      permission: ROLE.ADMIN,
      meta: {},
      type: "Settings",
      title: t("TXT_CODE_b5c7b82d"),
      width: 8,
      description: t("TXT_CODE_e78047a5"),
      height: LayoutCardHeight.MEDIUM,
      category: NEW_CARD_TYPE.COMMON
    },

    {
      id: getRandomId(),
      permission: ROLE.GUEST,
      meta: {},
      type: "ImageBox",
      title: t("TXT_CODE_4d993ca4"),
      width: 4,
      description: t("TXT_CODE_6ef5195f"),
      height: LayoutCardHeight.SMALL,
      category: NEW_CARD_TYPE.OTHER
    },

    {
      id: getRandomId(),
      permission: ROLE.GUEST,
      meta: {},
      type: "IframeCard",
      title: t("TXT_CODE_3ed96265"),
      width: 4,
      description: t("TXT_CODE_db9375a5"),
      height: LayoutCardHeight.SMALL,
      category: NEW_CARD_TYPE.OTHER
    },

    {
      id: getRandomId(),
      permission: ROLE.GUEST,
      meta: {},
      type: "TextCard",
      title: t("TXT_CODE_ddcca0b9"),
      width: 4,
      description: t("TXT_CODE_2ca42b39"),
      height: LayoutCardHeight.SMALL,
      category: NEW_CARD_TYPE.OTHER
    },

    {
      id: getRandomId(),
      permission: ROLE.GUEST,
      meta: {},
      type: "LinkCard",
      title: t("TXT_CODE_745d8a03"),
      width: 4,
      description: t("TXT_CODE_d6a96ea4"),
      height: LayoutCardHeight.SMALL,
      category: NEW_CARD_TYPE.OTHER
    },

    {
      id: getRandomId(),
      permission: ROLE.GUEST,
      meta: {},
      type: "ClockCard",
      title: t("TXT_CODE_af143e18"),
      width: 4,
      description: t("TXT_CODE_cf9e259c"),
      height: LayoutCardHeight.SMALL,
      category: NEW_CARD_TYPE.OTHER
    },

    {
      id: getRandomId(),
      permission: ROLE.USER,
      meta: {},
      type: "InstanceShortcut",
      title: t("实例快捷方式"),
      width: 3,
      description: t("显示实例状态"),
      height: LayoutCardHeight.MINI,
      category: NEW_CARD_TYPE.INSTANCE,
      params: [
        {
          field: "instanceId",
          label: t("TXT_CODE_e6a5c12b"),
          type: "string"
        },
        {
          field: "daemonId",
          label: t("TXT_CODE_72cfab69"),
          type: "string"
        },
        {
          field: "instance",
          label: t("TXT_CODE_cb043d10"),
          type: "instance"
        }
      ]
    }
  ];
  return LAYOUT_CARD_POOL;
}
