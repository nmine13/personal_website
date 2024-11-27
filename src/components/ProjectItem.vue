<script>
export default {
    name: 'ProjectItem',
    props: {
        item: {
            title: String,
            img_path: String,
        },
    }
}
</script>

<template>
    <!-- <img :src="'compressed/' + item.img_path" width="300" /> -->
    <img :src="'compressed' + item.img_path" width="300" />
</template>

<style lang="scss" scoped>
img {
    cursor: pointer;
}
</style>