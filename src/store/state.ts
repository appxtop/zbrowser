import { reactive } from "vue";
export interface State {
    tabs: Tab[],
    tabIndex: number
}
export default reactive<State>({
    tabs: [],
    tabIndex: 0
})