import { metro } from "@vendetta";
import { storage } from "@vendetta/plugin";
import { logger } from "@vendetta";

import Settings from "./Settings";

const hiddenChannels: string[] = storage.hiddenChannels ?? [];

function save() {
    storage.hiddenChannels = hiddenChannels;
}

function isHidden(id: string) {
    return hiddenChannels.includes(id);
}

function hideChannel(id: string) {
    if (!isHidden(id)) {
        hiddenChannels.push(id);
        save();
    }
}

function unhideChannel(id: string) {
    const index = hiddenChannels.indexOf(id);

    if (index !== -1) {
        hiddenChannels.splice(index, 1);
        save();
    }
}

export default {
    onLoad() {
        logger.log("Hide Channels loaded");
    },

    onUnload() {
        logger.log("Hide Channels unloaded");
    },

    settings: Settings,

    hideChannel,
    unhideChannel,
    isHidden,
};
