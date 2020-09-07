<template lang="pug">
button.button
    slot
</template>

<script>

export default {
    name: 'Button'
}
</script>

<style lang="sass" scoped>
.button
    padding: 10px 30px
    border-radius: 5px
    background: $blue
    color: white
    border: none
    font-family: $roboto
    cursor: pointer
    transition: background .15s linear
    &:hover
        background: lighten($blue, 10%)
    &:focus
        outline: none
    &:active
        background: darken($blue, 5%)
</style>