<template>
  <div>
    <h3 class="card-title mb-3">Nomor {{ number }}</h3>

    <div class="text-center mb-3">
      <img v-if="image != null" class="card-img" :src="`${getBaseUrl}${image}`" alt="Image placeholder" />
    </div>

    <p class="card-text mb-4">{{ question }}</p>

    <form class="form">
      <div class="inputGroup" v-for="answer in answers" :key="answer.id">
        <input
          :id="`radio${answer.id}`"
          v-model="answerModel"
          name="answer"
          type="radio"
          :value="answer.id"
        />
        <label :for="`radio${answer.id}`">
          <img v-if="isUrl(answer.value)" :src="answer.value" width="500" />
          <span v-else>{{ answer.value }}</span>
        </label>
      </div>
    </form>
    <div class="text-right">
      <button type="button" @click="onSubmit" class="btn btn-primary" :disabled="answerModel == null">{{ buttonText }}</button>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from "@/api";

export default {
  name: "exam-tile",
  props: {
    id: {
      type: Number,
      required: true,
      description: "Exam number"
    },
    number: {
      type: Number,
      default: 0,
      description: "Exam number"
    },
    question: {
      type: String,
      required: true,
      description: "Exam question"
    },
    image: {
      type: String,
      default: null,
      description: "Image for exams question"
    },
    answers: {
      type: Array,
      required: true,
      description: "List of exams answer"
    },
    answer: {
      type: String,
      default: null,
      description: "Answer for the question"
    },
    buttonText: {
      type: String,
      default: "Selanjutnya",
      description: "Text for exam button"
    }
  },
  data() {
    return {
      answerModel: this.answer
    };
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.answerModel)
      this.answerModel = null
    },
    shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    isUrl(string) {
      const result = string.split("://");
      return 4 <= result[0].length <= 5 && result[0].includes("http");
    }
  },
  computed: {
    randomAnswers() {
      return this.shuffle(this.answers).map(value => {
        return {
          ...value,
          model: false
        };
      });
    },
    getBaseUrl() {
      return `${BASE_URL}`
    }
  }
};
</script>