import { defineStore } from "pinia";

export const useNavStore = defineStore({
    id: 'nav',
    state: () => ({
        topBarMenus: []
    }),
    actions: {
        setTopBarMenu(groupName, links) {
            this.topBarMenus = links
            this.topBarTitle = groupName

            // console.log(this.topBarTitle, this.topBarMenus)
        }
    }
});