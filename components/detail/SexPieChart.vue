<template>
  <div class="p-PieChart">
    <canvas id="myPieChart"></canvas>
    <script>
      var ctx = document.getElementById('myPieChart')
      var myPieChart = new Chart(ctx, {
        backgroundColor: 'rgba(0,1,0,0.1)',
        type: 'doughnut',
        data: {
          labels: ['男', '女'],
          datasets: [
            {
              borderWidth: 0,
              backgroundColor: ['#b6c6e3', '#4074b0'],
              data: [37, 63],
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
      })
    </script>
  </div>
</template>
<style>
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
