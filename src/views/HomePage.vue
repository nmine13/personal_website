<script>
</script>

<template>
    <div class="landing-wrapper">
        <div class="landing-flex-wrapper">
            <img class="landing-image" src="../assets/banner.png" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "../styles/main.scss";

.landing {
    &-wrapper {
        max-width: 1000px;
        margin: 0px auto;
        font-size: 20px;
    }

    &-flex-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &-image {
        width: 500px;
        margin-right: 20px;
    }

    &-par {
        margin-bottom: 20px;
    }

    @include breakpoint(tablet-landscape) {
        &-flex-wrapper {
            flex-direction: column;
            align-items: center;
        }

        &-text-wrapper {
            max-width: 500px;
            margin-top: 20px;
            font-size: 18px;
        }

        &-image {
            margin-right: 0;
        }
    }

    @include breakpoint(mobile) {
        &-image {
            width: 300px;
        }

        &-text-wrapper {
            max-width: 300px;
            font-size: 16px;
        }
    }
}

/* @media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
} */
</style>