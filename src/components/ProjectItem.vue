<script>
export default {
    name: 'ProjectItem',
    props: {
        item: {
            title: String,
            img_path: String,
            materials: String,
        },
    }
}
</script>

<template>
    <!-- <img :src="'compressed/' + item.img_path" width="300" /> -->
    <div>
        <img :src="'compressed' + item.img_path" />
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';

img {
    cursor: pointer;
    width: 300px;

    @include breakpoint(tablet-landscape) {
        margin: auto;
        display: block;
    }
}
</style>