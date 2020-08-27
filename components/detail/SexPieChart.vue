<script>
import { Doughnut } from 'vue-chartjs'
export default {
  extends: Doughnut,
  props: {
    rate: {
      type: Number,
      require: true,
      default: 0.5,
    },
  },
  data() {
    return {
      datas: {
        labels: ['男', '女'],
        datasets: [
          {
            borderWidth: 0,
            backgroundColor: ['#4074b0', '#b6c6e3'],
            data: [this.rate * 100, (1 - this.rate) * 100],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: '男女比',
          fontStyle: 'normal',
          fontColor: '#595959',
        },
        legend: {
          labels: {
            fontColor: '#595959',
          },
        },
      },
    }
  },
  watch: {
    rate: (rate) => {
      console.error(rate)
      // this.datas.datasets[0].data[0] = rate
      // this.datas.datasets[0].data[1] = 1 - rate
    },
  },
  mounted() {
    this.renderChart(this.datas, this.options)
  },
}
</script>
