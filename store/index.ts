import { hookstate, useState } from "@hookstate/core";

const globalStore = hookstate("store");

export const useGlobalStore = () => useState(globalStore);