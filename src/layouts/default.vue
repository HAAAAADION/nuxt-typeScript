<template>
    <div class="layouts">
        <h-topbar />
        <div class="layouts__container">
            <h-sidebar />
            <nuxt class="layouts__content" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import HTopbar from '@/components/nav/topbar.vue'
import HSidebar from '@/components/nav/sidebar.vue'

@Component({
    components: {
        HTopbar,
        HSidebar
    }
})
export default class extends Vue {
}
</script>

<style lang="scss">
    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        /*font-size: 16px;*/
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        font-size: calc(100vw / 3.75);
    }

    *, *:before, *:after {
        /*box-sizing: border-box;*/
        margin: 0;
    }

    .button--green {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #3b8070;
        color: #3b8070;
        text-decoration: none;
        padding: 10px 30px;
    }

    .button--green:hover {
        color: #fff;
        background-color: #3b8070;
    }

    .button--grey {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #35495e;
        color: #35495e;
        text-decoration: none;
        padding: 10px 30px;
        margin-left: 15px;
    }

    .button--grey:hover {
        color: #fff;
        background-color: #35495e;
    }

    .layouts {
        position: absolute;
        height: 100%;
        min-height: 100vh;
        width: 100%;
        font-size: 14px;
        display: flex;
        flex-direction: column;

        &__container {
            width: 100%;
            height: 100%;
            display: flex;
        }

        &__content {
            width: 100%;
            padding: 30px;
        }
    }
</style>
