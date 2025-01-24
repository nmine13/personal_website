<script>
export default {
    props: {
        linkUrl: String,
    }
}
</script>

<template>
    <div class="item">
        <a :href="linkUrl" target="_blank">
            <slot name="icon"></slot>
        </a>
    </div>
</template>


<style scoped>
.item {
    margin: 1rem 0.4rem;
    display: flex;
    position: relative;
}
</style>