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
                <div class="close zcenter" @click="removeTab(tab.id)">
                    <svg t="1690403321771" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2611" width="200" height="200">
                        <path
                            d="M753.365333 843.861333a64 64 0 0 0 90.496-90.496L602.496 512l241.365333-241.365333a64 64 0 0 0-90.496-90.496L512 421.504 270.634667 180.138667a64 64 0 1 0-90.496 90.496L421.504 512l-241.365333 241.365333a64 64 0 0 0 90.496 90.496L512 602.496l241.365333 241.365333z"
                            fill="#333333" p-id="2612"></path>
                    </svg>
                </div>
                <div class="splite" :class="{
                    show: state.tabIndex !== index && index + 1 != state.tabIndex
                }">

                </div>
            </div>
        </template>
        <div class="row btn_add zcenter" @click="addTab()">
            <svg t="1690403514168" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4415" width="200" height="200">
                <path
                    d="M948.313043 442.991304l-369.530435 0 0-369.530435c0-37.843478-31.165217-69.008696-69.008696-69.008696-37.843478 0-69.008696 31.165217-69.008696 69.008696l0 369.530435-369.530435 0c-37.843478 0-69.008696 31.165217-69.008696 69.008696 0 37.843478 31.165217 69.008696 69.008696 69.008696l369.530435 0 0 369.530435c0 37.843478 31.165217 69.008696 69.008696 69.008696 37.843478 0 69.008696-31.165217 69.008696-69.008696l0-369.530435 369.530435 0c37.843478 0 69.008696-31.165217 69.008696-69.008696C1017.321739 474.156522 988.382609 442.991304 948.313043 442.991304z"
                    fill="#383b3e" p-id="4416">
                </path>
            </svg>
        </div>



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
                border-radius: 50%;
                width: 15px;
                height: 15px;

                svg {
                    width: 12px;
                    height: 12px;
                }

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

            svg {
                width: 13px;
                height: 13px;
            }

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