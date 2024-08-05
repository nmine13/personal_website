<script setup>
import LinkedIcon from '../components/icons/IconLinkedin.vue'
import ContactItem from '../components/ContactItem.vue'
import InstaIcon from '../components/icons/IconInstagram.vue'
</script>

<template>
    <ContactItem linkUrl="https://www.linkedin.com/in/naomi-mine/">
        <template #icon>
            <LinkedIcon />
        </template>
    </ContactItem>
    <ContactItem linkUrl="https://www.instagram.com/naomi.mine/">
        <template #icon>
            <InstaIcon />
        </template>
    </ContactItem>
    <div class="contact-website"><a target="_blank"
            href="https://ischool.wisc.edu/blog/staff/mine-naomi/">ischool.wisc.edu/blog/staff/mine-naomi/</a></div>
    <div class="contact-email-address">naomi {dot} mine {at} gmail {dot} com</div>
</template>
<style lang="scss" scoped>
@import "../styles/main.scss";

.contact {
    &-wrapper {
        margin: 20px auto;
    }

    &-links-text {
        font-size: 20px;
    }

    &-icons {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    &-website {
        text-decoration: underline;
        margin-bottom: 10px;
    }

    @include breakpoint(tablet-landscape) {
        &-wrapper {
            text-align: center;
        }

        &-icons {
            justify-content: center;
        }
    }
}

a {
    margin-right: 14px;
}

svg {
    fill: white;
}
</style>
