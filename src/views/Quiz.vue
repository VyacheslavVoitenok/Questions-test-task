<template lang="pug">
.app
    .quiz-container(v-if="quiz_not_completed")
        .arrow-left(@click="changeQuestion('prev')")
            LeftArrow(:display="is_first_question")
        .quiz
            .progress {{ progress }}
            transition(name="fade" mode="out-in")
                .quiz-body(:key="current_question_index")
                    p.question {{ current_question }}
                    .buttons-row
                        Button.m-r-20(@click.native="answer('Да')") Да
                        Button(@click.native="answer('Нет')") Нет
                    p.warning(v-if="questions_missed") Ой! Вы, кажется, ответили не на все вопросы. Пропущены номера: {{ list_of_missed_questions }}
        .arrow-right(@click="changeQuestion('next')")
            RightArrow(:display="is_last_question")
    .quiz-results(v-else)  
        Results
</template>

<script>
import { mapActions } from 'vuex'
import Button from '@/components/UI/Button'
import LeftArrow from '@/components/SVG/LeftArrow'
import RightArrow from '@/components/SVG/RightArrow'
import Results from '@/components/Quiz/Results'

export default {
    name: 'Quiz',
    components: {
        Button,
        LeftArrow,
        RightArrow,
        Results
    },
    computed: {
        current_question() {
            return this.$store.getters['current_question']
        },
        current_question_index() {
            return this.$store.getters['current_question_index']
        },
        progress() {
            const current = this.current_question_index + 1 
            const total = this.$store.getters['total_questions_count']

            return `Вопрос ${current} из ${total}`
        },
        quiz_not_completed() {
            return this.$store.state.quiz_not_completed
        },
        is_first_question() {
            return this.$store.state.current_question_index === 0 ? 'none' : 'block'
        },
        is_last_question() {
            return this.$store.state.current_question_index === this.$store.state.questions.length - 1 ? 'none' : 'block'
        },
        questions_missed() {
            return this.$store.state.questions_missed
        },
        list_of_missed_questions() {
            return this.$store.state.list_of_missed_questions.join()
        }
    },
    methods: {
        ...mapActions([
            'changeQuestion',
            'answer'
        ]),
    }
}
</script>

<style lang="sass">
.question
    font-family: $montserrat
    font-size: 50px

.app
    width: 100%
    min-height: 100vh
    display: flex
    align-items: center
    justify-content: center

.quiz-container
    display: grid
    grid-template-columns: 50px 1fr 50px
    grid-gap: 50px
    align-items: center

.arrow-left, .arrow-right
    width: 100%
    height: 50px
    cursor: pointer
    display: flex
    align-items: center
    justify-content: center
    transition: background-color .2s linear
    &:hover
        background-color: #F7F7F7

.quiz
    width: 100%
    width: 1000px
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

.progress
    font-family: $montserrat
    font-size: 1em

.quiz-body
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

.warning
    font-family: $montserrat
    font-size: 10px

.quiz-results
    width: 1000px
    display: flex
    flex-direction: column

.results-buttons
    display: flex

.fade-enter-active, .fade-leave-active 
    transition: opacity .5s

.fade-enter, .fade-leave-to
    opacity: 0

</style>