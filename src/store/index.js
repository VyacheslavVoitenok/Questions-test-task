import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        questions: [
            'Сосны выше берез?',
            'Москва больше Питера?',
            'Киллер смелее кондитера?',
            'Кока-кола популярнее гексогена?',
            'Чебурашка моднее крокодила Гены?'
        ],
        answers: [],
        current_question_index: 0,
        quiz_not_completed: true,
        questions_missed: false,
        list_of_missed_questions: []

    },

    mutations: {
        PREVIOUS_QUESTION(state) {
            if (state.current_question_index <= 0) return
            state.current_question_index -= 1
        },
        NEXT_QUESTION(state) {
            if (state.current_question_index === state.questions.length - 1) return
            state.current_question_index += 1
        },
        SAVE_ANSWER(state, answer) {
            state.answers.push(answer)

            if(state.answers.length === state.questions.length) state.quiz_not_completed = false
        }
    },

    actions: {
        changeQuestion({ commit, state, getters }, direction) {
            if (direction === 'prev') return commit('PREVIOUS_QUESTION')
            else if (direction === 'next') {
                if(!state.list_of_missed_questions.includes(getters.current_question_index + 1))
                state.list_of_missed_questions.push(getters.current_question_index + 1)

                return commit('NEXT_QUESTION')
            }

        },

        answer({ commit, getters, state }, answer) {
            const current_question = getters.current_question
            const previous_answer = state.answers.find(answer => answer.question === current_question)

            if (previous_answer) {
                previous_answer.answer = answer
            } else {
                const obj = {
                    question: current_question,
                    answer
                }

                commit('SAVE_ANSWER', obj)
            }

            if(state.current_question_index === state.questions.length - 1) {
                state.questions_missed = true

            }
            if(state.answers.length === state.questions.length) state.quiz_not_completed = false
            commit('NEXT_QUESTION')
        }
    },

    getters: {
        current_question: state => state.questions[state.current_question_index],
        current_question_index: state => state.current_question_index,
        total_questions_count: state => state.questions.length
    }
})
