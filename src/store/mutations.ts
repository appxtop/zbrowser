/* eslint-disable @typescript-eslint/no-empty-function */
import state from "./state"


const { tabs } = state;


function addTab(tab?: Tab) {
    if (!tab) {
        tab = {
            id: Math.random().toString(36).substring(2),
            title: '新标签页',
            url: ''
        }
    }
    tabs.push(tab);
    changeTab(tab.id);
}

function changeTab(id: string) {
    const index = tabs.findIndex(tb => tb.id === id);
    if (index < 0) {
        return;
    }
    state.tabIndex = index;
}

function removeTab(id: string) {
    const index = tabs.findIndex(tb => tb.id === id);
    if (index < 0) {
        return;
    }
    tabs.splice(index, 1);
    state.tabIndex = Math.min(state.tabIndex, tabs.length - 1);
}




export default {
    addTab,
    changeTab,
    removeTab
}