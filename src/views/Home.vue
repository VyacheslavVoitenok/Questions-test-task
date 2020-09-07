<template lang="pug">
.page-wrapper
    .description-wrapper
        h1.greeting Здравствуйте
        .text-wrapper
            p.desctiption Перед вами результат выполнения тестового задания — SPA-приложение для проведения опросов.
            p.tech Для выполнения задания я использовал: Vue (Vuex + Vue-Router) как основной стек технологий и Pug/Sass для верстки.
            p.features Интерфейс приложения представляет собой появляющиеся поочередно вопросы и 2 кнопки для ответа на них: "Да" и "Нет". При выборе любого варианта появится следующий вопрос (если он есть).
            p.arrows Также вы можете увидеть две стрелки "<" и ">", которые служат для навигации по вопросам. Если вы пропустили какой-то вопрос или решили изменить данный ответ (да, в приложении можно передумать и скорректировать свой выбор), то просто перейдите к нему, нажимая настрелки.
            p.finish После ответа на последний вопрос (и если все вопросы отвечены), вы увидите результат опроса в JSON-формате и 2 кнопки. Первая удалит прогресс и настет опрос заново, вторая скопирует JSON в буфер обмена.
            p.warning Если вы пропустили какой-то вопрос, то после ответа на последний в списке появится сообщение: "Ой! Вы, кажется, ответили не на все вопросы. Пропущены номера: ...". Веритесь к ним, дайте ответ и снова получите JSON с ответами.
            p.structure Какие папки есть в проекте: 'assets' для стилей, 'components' содержит компоненты (разбитые еще на 3 папки: 'Quiz' - для самой SPA-страницы, 'SVG' - для компонентов с векторными изображениями, 'UI' - для компонентов интерфейса), 'store' и 'router' для хранилища и роутера, 'views' для статичных страниц.
            
    Button(@click.native="start") Смотреть приложение
</template>

<script>
import Button from '@/components/UI/Button'
import router from '@/router'

export default {
  name: 'Home',
  components: {
      Button
  },
  methods: {
      start() {
          router.push('/quiz')
      }
  }
}
</script>

<style lang="sass" scoped>
h1
    font-family: $montserrat
    font-size: 1em
    margin-bottom: 15px
p
    font-family: $roboto
    font-size: .85em
    margin-bottom: 10px
    &:last-child
        margin-bottom: 30px

.page-wrapper
    height: 100vh
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

.description-wrapper
    width: 1500px
</style>
