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
        <img :src="'compressed' + item.img_path" width="300" />
    </div>
</template>

<style lang="scss" scoped>
img {
    cursor: pointer;
}
</style>