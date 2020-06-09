<template>
  <div>
    <!--Charts-->
    <div class="container-fluid mt--7">
      <!--Tables-->
      <div class="row mt-5">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <div class="card">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="mb-0">{{ course.name }}</h3>
                  <base-pagination 
                    class="d-none"
                    :total="20" 
                    :perPage="1" 
                    :value="active" 
                    size="20" 
                    align="center"
                    @input="pageChange"
                  />
                </div>
              </div>
            </div>

            <!-- Card body -->
            <div class="card-body px-8">
              <exam-tile
                v-if="activeQuestion"
                :id="active"
                :number="activeQuestion.number"
                :question="activeQuestion.question"
                :image="activeQuestion.image"
                :answers="activeQuestion.answers"
                :answer="savedAnswer"
                :buttonText="textButton"
                @onSubmit="onSubmit"
              />
            </div>
          </div>
        </div>
      </div>
      <!--End tables-->
      <thanks-modal :model="thanksModal" />
    </div>
  </div>
</template>
<script>
import ExamTile from "./Exam/ExamTile";
import ThanksModal from "./Exam/ThanksModal";
export default {
  components: {
    ExamTile,
    ThanksModal
  },
  data() {
    return {
      course: {
        name: "",
        exams: []
      },
      answers: [],
      thanksModal: false,
      active: 1,
      mapAnswer: {
        'answer_a': 'A',
        'answer_b': 'B',
        'answer_c': 'C',
        'answer_d': 'D',
        'answer_e': 'E',
      }
    };
  },
  methods: {
    pageChange(value) {
      this.active = value
    },
    onSubmit(answer) {
      this.answers[this.active] = answer
      if (this.course.exams.length != this.active)
        this.active += 1
      else {
        this.thanksModal = true
        const answer = this.answers.map((value, index) => {
          return {
            number: index,
            answer: this.mapAnswer[value]
          }
        })
        this.$api.post(`courses/answers/${this.$route.params.id}`, {
          'student_id': 1,
          'answer': answer
        })
      }
    }
  },
  computed: {
    activeQuestion() {
      const number = this.active;
      const exam = this.course.exams[number -1];
      if (!exam) return false;

      return {
        number: number,
        question: exam.question,
        image: exam.image,
        answers: [
          {
            id: "answer_a",
            value: exam.answer_a
          },
          {
            id: "answer_b",
            value: exam.answer_b
          },
          {
            id: "answer_c",
            value: exam.answer_c
          },
          {
            id: "answer_d",
            value: exam.answer_d
          },
          {
            id: "answer_e",
            value: exam.answer_e
          }
        ]
      };
    },
    savedAnswer() {
      return this.answers[this.active]
    },
    textButton() {
      return this.course.exams.length == this.active ? "Selesai" : "Selanjutnya"
    }
  },
  async beforeCreate() {
    const id = this.$route.params.id;
    const { data } = await this.$api.get(`courses/${id}`);
    this.course = data.data;
  }
};
</script>
<style></style>
