// スライドデザインガイドライン用スクリプト

document.addEventListener('DOMContentLoaded', function() {
  // スライド管理
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  // 初期表示
  if (slides.length > 0) {
    slides[0].classList.add('active');
  }
  
  // 次のスライドへ移動
  window.nextSlide = function() {
    if (currentSlide < slides.length - 1) {
      slides[currentSlide].classList.remove('active');
      currentSlide++;
      slides[currentSlide].classList.add('active');
    }
  };
  
  // 前のスライドへ移動
  window.prevSlide = function() {
    if (currentSlide > 0) {
      slides[currentSlide].classList.remove('active');
      currentSlide--;
      slides[currentSlide].classList.add('active');
    }
  };

  
  // キーボードナビゲーション
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      prevSlide();
    }
  });
  
  // グラフ描画関数（Chart.jsを使用）
  window.renderCharts = function() {
    // 棒グラフサンプル
    const barChartCtx = document.getElementById('bar-chart');
    if (barChartCtx) {
      new Chart(barChartCtx, {
        type: 'bar',
        data: {
          labels: ['項目1', '項目2', '項目3', '項目4', '項目5'],
          datasets: [{
            label: 'サンプルデータ',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              'rgba(255, 42, 82, 0.7)',
              'rgba(255, 153, 162, 0.7)',
              'rgba(159, 160, 160, 0.7)',
              'rgba(86, 86, 86, 0.7)',
              'rgba(50, 42, 44, 0.7)'
            ],
            borderColor: [
              'rgb(255, 42, 82)',
              'rgb(255, 153, 162)',
              'rgb(159, 160, 160)',
              'rgb(86, 86, 86)',
              'rgb(50, 42, 44)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
    
    // 円グラフサンプル
    const pieChartCtx = document.getElementById('pie-chart');
    if (pieChartCtx) {
      new Chart(pieChartCtx, {
        type: 'pie',
        data: {
          labels: ['カテゴリA', 'カテゴリB', 'カテゴリC', 'カテゴリD'],
          datasets: [{
            data: [30, 20, 25, 25],
            backgroundColor: [
              'rgba(255, 42, 82, 0.7)',
              'rgba(255, 153, 162, 0.7)',
              'rgba(159, 160, 160, 0.7)',
              'rgba(86, 86, 86, 0.7)'
            ],
            borderColor: [
              'rgb(255, 42, 82)',
              'rgb(255, 153, 162)',
              'rgb(159, 160, 160)',
              'rgb(86, 86, 86)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true
        }
      });
    }
    
    // 折れ線グラフサンプル
    const lineChartCtx = document.getElementById('line-chart');
    if (lineChartCtx) {
      new Chart(lineChartCtx, {
        type: 'line',
        data: {
          labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
          datasets: [{
            label: 'データセットA',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgb(255, 42, 82)',
            backgroundColor: 'rgba(255, 42, 82, 0.1)',
            tension: 0.3,
            fill: true
          }, {
            label: 'データセットB',
            data: [5, 12, 18, 9, 11, 14],
            borderColor: 'rgb(86, 86, 86)',
            backgroundColor: 'rgba(86, 86, 86, 0.1)',
            tension: 0.3,
            fill: true
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  };
});
