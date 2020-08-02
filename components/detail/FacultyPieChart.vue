<template>
  <div class="p-PieChart">
    <canvas id="myBarChart"></canvas>
    <script>
      var ctx = document.getElementById('myBarChart')
      var myBarChart = new Chart(ctx, {
        backgroundColor: 'rgba(0,1,0,0.1)',
        type: 'bar',
        data: {
          labels: ['経済', '商', '政策', '文', '法', 'グロ地', '理工'],
          datasets: [
            {
              label: '所属学部',
              data: [62, 65, 93, 85, 51, 66, 47],
              backgroundColor: '#b6c6e3',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: '学部構成比',
            fontStyle: 'normal',
            fontColor: '#595959',
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  suggestedMax: 100,
                  suggestedMin: 0,
                  stepSize: 20,
                  callback: function (value, index, values) {
                    return value + '%'
                  },
                },
              },
            ],
          },
        },
      })
    </script>
  </div>
</template>
<style lang="scss" scoped>
.p-PieChart {
  background-color: rgba(0, 0, 0, 0);
  position: relative;
  width: 50vw;
  height: 50%;
}
@media screen and (max-width: 480px) {
  .p-PieChart {
    width: 100vw;
    margin: 20px auto;
  }
}
</style>
