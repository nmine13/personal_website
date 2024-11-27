<script>
export default {
    name: "ProjectNavMenu",
    props: {
        activeCat: String,
    }
};
</script>

<template>
    <div class="project-nav">
        <div class="project-category">
            <router-link :to="{ hash: '#drawings' }"
                v-bind:class="{ activeCat: activeCat === 'drawings' }">drawings</router-link>
        </div>
        <div class="project-category">
            <router-link :to="{ hash: '#paintings' }"
                v-bind:class="{ activeCat: activeCat === 'paintings' }">paintings</router-link>
        </div>
        <div class="project-category">
            <router-link :to="{ hash: '#collage' }" v-bind:class="{ activeCat: activeCat === 'collage' }">
                collage</router-link>
        </div>
        <div class="project-category">
            <router-link :to="{ hash: '#plants' }"
                v-bind:class="{ activeCat: activeCat === 'plants' }">plants</router-link>
        </div>
        <!-- <div class="project-category">
            <router-link :to="{ hash: '#fabric' }" v-bind:class="{ activeCat: activeCat === 'fabric' }">textile &
                fiber</router-link>
        </div> -->
        <div class="project-category">
            <router-link :to="{ hash: '#prints' }"
                v-bind:class="{ activeCat: activeCat === 'prints' }">prints</router-link>
        </div>
        <div class="project-category">
            <router-link :to="{ hash: '#music' }"
                v-bind:class="{ activeCat: activeCat === 'music' }">music</router-link>
        </div>
        <!-- <div class="project-category">
            <router-link :to="{ hash: '#video' }"
                v-bind:class="{ activeCat: activeCat === 'video' }">video</router-link>
        </div> -->
    </div>
</template>


<style lang="scss" scoped>
@import '../styles/main.scss';

.project {
    &-category {
        padding-bottom: 8px;
        font-size: 20px;
    }

    &-nav {
        width: 25%;
    }

    @include breakpoint(tablet-landscape) {
        &-category {
            margin: 0 8px 20px 8px;
            padding-bottom: 4px;
            font-size: 20px;
        }

        &-nav {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

    @include breakpoint(tablet-portrait) {
        &-category {
            margin: 0 8px;
            font-size: 18px;
        }

        &-nav {
            flex-wrap: wrap;
            margin-bottom: 20px;
        }
    }

    @include breakpoint(tablet-portrait) {
        &-category {
            font-size: 14px;
        }

        &-nav {
            margin-bottom: 15px;
        }
    }
}

.activeCat {
    font-weight: bold;
}
</style>