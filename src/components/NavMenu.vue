<script>
export default {
    name: 'NavMenu',
    data() {
        return {
            navElements: [
                {
                    title: 'Projects',
                    route: '/projects',
                },
                {
                    title: 'Contact',
                    route: '/contact',
                },
                {
                    title: 'About',
                    route: '/about',
                },
            ]
        }
    }
}
</script>

<template>
    <div class="nav-wrapper wrapper-pad">
        <nav>
            <div :key="item.id" v-for="item in navElements" class="nav-elem">
                <router-link class="nav-link" :to="item.route">{{ item.title }}</router-link>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
/* @import '../assets/styles/main.scss'; */

.nav {
    &-link {
        font-size: 20px;
    }

    &-wrapper {
        .router-link-active {
            color: black;
        }

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        position: relative;

        nav {
            display: flex;
            justify-content: center;
            width: 100%;

            a {
                padding-right: 20px;
                letter-spacing: 2px;
                text-decoration: none;
            }
        }
    }
}
</style>