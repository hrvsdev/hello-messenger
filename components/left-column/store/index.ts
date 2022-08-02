import { hookstate, useState } from "@hookstate/core";

const store = hookstate("store");

export const useStore = () => useState(store);