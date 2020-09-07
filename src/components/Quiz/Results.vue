<template lang="pug">
.results-wrapper
    p.title Ваши ответы в JSON:
    pre.results {{ copied_message }}
    .results-buttons
        Button.m-r-20(@click.native="restart") Начать сначала
        Button(v-clipboard:copy="JSON.stringify(copied_message)") Копировать результат
</template>

<script>
import Button from '@/components/UI/Button'
import router from '@/router'

export default {
    name: 'Results',
    components: {
        Button
    },
    methods: {
        restart() {
            window.location.reload()
        }
    },
    data() {
        return {
            copied_message: this.$store.state.answers
        }
    },
}
</script>

<style lang="sass" scoped>
.results-wrapper
    display: flex
    flex-direction: column
    align-items: center

.results
    max-width: 500px
    padding: 10px 20px
    margin-bottom: 20px
    background-color: #292727
    border-radius: 5px
    color: white

.results-buttons
    display: flex
</style>