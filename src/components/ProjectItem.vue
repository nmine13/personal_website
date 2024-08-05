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
    <div>{{ item.title }}</div>
    <img :src="item.img_path" width="300" />
</template>

<style lang="scss" scoped></style>