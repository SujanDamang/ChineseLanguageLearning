<template>
  <div class="about">
    <!-- 页面头部 -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title chinese-text">关于我们</h1>
          <p class="page-subtitle">About Us</p>
          <p class="page-description">
            专业的中文教学平台，致力于为全球学习者提供优质的中文教育服务<br>
            Professional Chinese teaching platform dedicated to providing quality Chinese education services for global learners
          </p>
        </div>
      </div>
    </section>

    <!-- 我们的使命 -->
    <section class="mission section">
      <div class="container">
        <div class="mission-content">
          <div class="mission-text">
            <h2 class="section-title chinese-text">我们的使命</h2>
            <p class="section-subtitle">Our Mission</p>
            <div class="mission-description">
              <p>
                我们致力于打破语言障碍，让世界各地的人们都能轻松学习中文，了解中国文化。
                通过专业的教学方法和个性化的课程设计，我们帮助每一位学习者实现他们的中文学习目标。
              </p>
              <p>
                We are committed to breaking down language barriers and making it easy for people around the world 
                to learn Chinese and understand Chinese culture. Through professional teaching methods and 
                personalized curriculum design, we help every learner achieve their Chinese learning goals.
              </p>
            </div>
          </div>
          <div class="mission-visual">
            <div class="mission-icon">
              <i class="el-icon-globe"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 我们的优势 -->
    <section class="advantages section" style="background: var(--bg-light);">
      <div class="container">
        <h2 class="section-title chinese-text">我们的优势</h2>
        <p class="section-subtitle">Our Advantages</p>
        <div class="advantages-grid">
          <div class="advantage-card card" v-for="advantage in advantages" :key="advantage.id">
            <div class="advantage-icon">
              <i :class="advantage.icon"></i>
            </div>
            <h3 class="advantage-title chinese-text">{{ advantage.title }}</h3>
            <p class="advantage-description">{{ advantage.description }}</p>
            <ul class="advantage-features">
              <li v-for="feature in advantage.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 教学理念 -->
    <section class="philosophy section">
      <div class="container">
        <div class="philosophy-content">
          <div class="philosophy-image">
            <div class="philosophy-visual">
              <div class="philosophy-circle">
                <span class="chinese-char">学</span>
              </div>
              <div class="floating-elements">
                <div class="element element-1">听</div>
                <div class="element element-2">说</div>
                <div class="element element-3">读</div>
                <div class="element element-4">写</div>
              </div>
            </div>
          </div>
          <div class="philosophy-text">
            <h2 class="section-title chinese-text">教学理念</h2>
            <p class="section-subtitle">Teaching Philosophy</p>
            <div class="philosophy-description">
              <div class="philosophy-item">
                <h4 class="chinese-text">以学生为中心</h4>
                <p>Student-Centered Approach</p>
                <p>根据每位学生的学习特点和目标，制定个性化的学习计划，确保最佳的学习效果。</p>
              </div>
              <div class="philosophy-item">
                <h4 class="chinese-text">实用性导向</h4>
                <p>Practical Orientation</p>
                <p>注重实际应用能力的培养，让学生能够在真实场景中自信地使用中文进行交流。</p>
              </div>
              <div class="philosophy-item">
                <h4 class="chinese-text">文化融合</h4>
                <p>Cultural Integration</p>
                <p>在语言学习的同时，深入了解中国文化，让语言学习更加生动有趣。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 学习成果 -->
    <section class="achievements section" style="background: var(--bg-light);">
      <div class="container">
        <h2 class="section-title chinese-text">学习成果</h2>
        <p class="section-subtitle">Learning Achievements</p>
        <div class="stats-grid">
          <div class="stat-card" v-for="stat in stats" :key="stat.id">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label chinese-text">{{ stat.label }}</div>
            <div class="stat-description">{{ stat.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 为什么选择在线学习 -->
    <section class="why-online section">
      <div class="container">
        <h2 class="section-title chinese-text">为什么选择在线学习</h2>
        <p class="section-subtitle">Why Choose Online Learning</p>
        <div class="benefits-grid">
          <div class="benefit-item" v-for="benefit in benefits" :key="benefit.id">
            <div class="benefit-icon">
              <i :class="benefit.icon"></i>
            </div>
            <div class="benefit-content">
              <h3 class="benefit-title chinese-text">{{ benefit.title }}</h3>
              <p class="benefit-description">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 CTA -->
    <section class="cta section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title chinese-text">准备开始学习了吗？</h2>
          <p class="cta-subtitle">Ready to Start Learning?</p>
          <p class="cta-description">
            联系我们，获取免费的学习咨询和课程试听<br>
            Contact us for free learning consultation and course trial
          </p>
          <div class="cta-buttons">
            <el-button type="primary" size="large" @click="$router.push('/contact')">
              <i class="el-icon-phone"></i>
              联系我们 Contact Us
            </el-button>
            <el-button size="large" @click="$router.push('/courses')">
              <i class="el-icon-document"></i>
              查看课程 View Courses
            </el-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      advantages: [
        {
          id: 1,
          icon: 'el-icon-user',
          title: '专业师资',
          description: 'Professional Teachers',
          features: [
            '持有对外汉语教学资格证书',
            '丰富的国际教学经验',
            '英语流利，沟通无障碍',
            '了解西方学习者特点'
          ]
        },
        {
          id: 2,
          icon: 'el-icon-document',
          title: '科学课程',
          description: 'Scientific Curriculum',
          features: [
            '分级教学体系',
            '个性化学习计划',
            '实用性强的教学内容',
            '定期学习评估'
          ]
        },
        {
          id: 3,
          icon: 'el-icon-time',
          title: '灵活安排',
          description: 'Flexible Schedule',
          features: [
            '自由选择上课时间',
            '适应不同时区',
            '课程可重复观看',
            '随时调整学习进度'
          ]
        },
        {
          id: 4,
          icon: 'el-icon-chat-dot-round',
          title: '互动教学',
          description: 'Interactive Teaching',
          features: [
            '实时在线互动',
            '多媒体教学工具',
            '即时反馈和纠正',
            '情景模拟练习'
          ]
        }
      ],
      stats: [
        {
          id: 1,
          number: '500+',
          label: '成功学员',
          description: 'Successful Students'
        },
        {
          id: 2,
          number: '5+',
          label: '教学经验',
          description: 'Years of Experience'
        },
        {
          id: 3,
          number: '95%',
          label: '满意度',
          description: 'Satisfaction Rate'
        },
        {
          id: 4,
          number: '20+',
          label: '国家地区',
          description: 'Countries Served'
        }
      ],
      benefits: [
        {
          id: 1,
          icon: 'el-icon-location',
          title: '随时随地',
          description: '无需通勤，在家就能享受专业的中文教学服务，节省时间和交通成本。'
        },
        {
          id: 2,
          icon: 'el-icon-money',
          title: '性价比高',
          description: '相比传统线下课程，在线教学成本更低，让更多人能够负担得起优质教育。'
        },
        {
          id: 3,
          icon: 'el-icon-video-camera',
          title: '一对一关注',
          description: '老师能够全程关注每位学生的学习状态，及时调整教学方法和进度。'
        },
        {
          id: 4,
          icon: 'el-icon-refresh',
          title: '可重复学习',
          description: '课程录像可以反复观看，巩固学习内容，确保知识点完全掌握。'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* 页面头部 */
.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 0 80px;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.page-subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.page-description {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.8;
}

/* 使命区域 */
.mission-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: center;
}

.mission-description p {
  margin-bottom: 20px;
  line-height: 1.6;
  color: var(--text-dark);
}

.mission-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mission-icon {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  box-shadow: var(--shadow-hover);
}

/* 优势区域 */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.advantage-card {
  text-align: center;
  padding: 40px 25px;
}

.advantage-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 2rem;
}

.advantage-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.advantage-description {
  color: var(--text-light);
  margin-bottom: 20px;
  font-weight: 500;
}

.advantage-features {
  list-style: none;
  padding: 0;
  text-align: left;
}

.advantage-features li {
  padding: 8px 0;
  color: var(--text-dark);
  position: relative;
  padding-left: 20px;
}

.advantage-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

/* 教学理念 */
.philosophy-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  align-items: center;
}

.philosophy-visual {
  position: relative;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.philosophy-circle {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  box-shadow: var(--shadow-hover);
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--primary-color);
  box-shadow: var(--shadow);
  animation: orbit 8s linear infinite;
}

.element-1 { animation-delay: 0s; }
.element-2 { animation-delay: 2s; }
.element-3 { animation-delay: 4s; }
.element-4 { animation-delay: 6s; }

@keyframes orbit {
  from {
    transform: rotate(0deg) translateX(120px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(120px) rotate(-360deg);
  }
}

.philosophy-item {
  margin-bottom: 30px;
}

.philosophy-item h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text-dark);
}

.philosophy-item p {
  margin-bottom: 10px;
  line-height: 1.6;
}

.philosophy-item p:first-of-type {
  color: var(--text-light);
  font-weight: 500;
}

.philosophy-item p:last-of-type {
  color: var(--text-dark);
}

/* 统计数据 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.stat-card {
  text-align: center;
  padding: 40px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 5px;
}

.stat-description {
  color: var(--text-light);
  font-size: 0.9rem;
}

/* 在线学习优势 */
.benefits-grid {
  display: grid;
  gap: 30px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
}

.benefit-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.benefit-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.benefit-description {
  color: var(--text-dark);
  line-height: 1.6;
}

/* CTA区域 */
.cta {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.cta-subtitle {
  font-size: 1.3rem;
  margin-bottom: 20px;
  opacity: 0.9;
}

.cta-description {
  font-size: 1.1rem;
  margin-bottom: 40px;
  opacity: 0.8;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-header {
    padding: 100px 0 60px;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .mission-content,
  .philosophy-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .philosophy-visual {
    height: 250px;
  }

  .element {
    width: 50px;
    height: 50px;
    font-size: 0.9rem;
  }

  .benefit-item {
    flex-direction: column;
    text-align: center;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 2rem;
  }

  .page-description {
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta-title {
    font-size: 2rem;
  }

  .floating-elements {
    display: none;
  }
}
</style>