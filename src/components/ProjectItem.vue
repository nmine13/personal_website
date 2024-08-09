<script>
export default {
    name: 'ProjectItem',
    props: {
        item: {
            title: String,
            img_path: String,
        },
    },
}
</script>

<template>
    <img :src="item.img_path" width="300" />
</template>

<style lang="scss" scoped></style>