<template>
    <div class="tabs">
        <template v-for="(tab, index) in tabs" :key="tab.id">
            <div class="row tab" :class="{
                active: state.tabIndex === index,
            }" @click="changeTab(tab.id)">
                <div class="faviconBox" v-if="tab.isLoading || (tab.favicons && tab.favicons[0])">
                    <img v-if="tab.isLoading" class="loading" :src="require('../assets/throbber_small.svg')" />
                    <img v-if="tab.favicons && tab.favicons[0]" class="favicon" :src="tab.favicons[0]" />
                </div>
                <div class="title">{{ tab.title }}</div>
                <div class="close" @click="removeTab(tab.id)">
                </div>
                <div class="splite" :class="{
                    show: state.tabIndex !== index && index + 1 != state.tabIndex
                }">

                </div>
            </div>
        </template>
        <div class="row btn_add zcenter" @click="addTab()" />
    </div>
</template>
<script lang="ts" setup>
import state from '@/store/state';
import mutations from '@/store/mutations'

const {
    tabs,
} = state;

const {
    addTab,
    changeTab,
    removeTab
} = mutations;



addTab();

</script>

<style scoped lang="less">
@bg_active: white;
@bg_hover: #f2f2f2;

.tabs {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 8px;
    margin-right: 190px;
    border-radius: 8px 8px 0 0;
    user-select: none;

    .row {
        &.tab {
            position: relative;
            flex: 1;
            max-width: 226px;
            border-radius: 8px 8px 0 0;
            padding: 9px 8px;
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: transparent;

            &::before,
            &::after {
                position: absolute;
                content: '';
                bottom: 0px;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                box-shadow: 0 0 0 40px transparent;
            }

            &::before {
                left: -16px;
                clip-path: inset(50% -10px 0 50%);
            }

            &::after {
                right: -16px;
                clip-path: inset(50% 50% 0 -10px);
            }

            &:hover {
                transition: 0.2s;
                background-color: @bg_hover;

                &::before,
                &::after {
                    transition: 0.2s;
                    box-shadow: 0 0 0 30px @bg_hover;
                }
            }

            &.active {
                z-index: 1;
                background-color: @bg_active;

                &::before,
                &::after {
                    box-shadow: 0 0 0 40px @bg_active;
                }
            }

            &>.splite {
                width: 1px;
                height: 60%;
                background-color: gray;
                position: absolute;
                right: 1px;
                opacity: 0;

                &.show {
                    opacity: 1;
                }
            }

            &:hover {
                &>.splite {
                    transition: 0.2s;
                    opacity: 0;
                }
            }

            &>.faviconBox {
                width: 16px;
                height: 16px;
                position: relative;

                .favicon {
                    width: 16px;
                    height: 16px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            &>.title {
                flex: 1;
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
            }

            &>.close {
                position: absolute;
                right: 8px;
                border-radius: 100%;
                width: 15px;
                height: 15px;
                background-image: url("../assets/close.svg");
                background-size: 11px;
                background-position: center center;
                background-repeat: no-repeat;

                &:hover {
                    background-color: #cfd1d4;
                }

                &:active {
                    background-color: #bfc3c8;
                }

            }

        }

        &.btn_add {
            margin-left: 6px;
            margin-bottom: 2px;
            border-radius: 50%;
            width: 28px;
            height: 28px;
            background-image: url("../assets/add.svg");
            background-size: 13px;
            background-position: center center;
            background-repeat: no-repeat;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #c9cace;
            }

            &:active {
                background-color: rgb(169, 172, 177);
                transition: background-color 0.1s;
            }

        }

    }


}
</style>