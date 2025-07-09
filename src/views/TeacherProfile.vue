<template>
  <div class="teacher-profile">
    <!-- 页面头部 -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title chinese-text">认识您的老师</h1>
          <p class="page-subtitle">Meet Your Teacher</p>
          <p class="page-description">
            专业的中文教师，丰富的教学经验，为您提供最优质的中文学习体验<br>
            Professional Chinese teacher with rich teaching experience for the best learning experience
          </p>
        </div>
      </div>
    </section>

    <!-- 教师介绍主要内容 -->
    <section class="teacher-intro section">
      <div class="container">
        <div class="teacher-main">
          <div class="teacher-photo">
            <div class="photo-container">
              <div class="photo-placeholder">
                <i class="el-icon-user-solid"></i>
              </div>
              <div class="photo-badge">
                <span>认证教师</span>
                <span>Certified</span>
              </div>
            </div>
          </div>
          
          <div class="teacher-info">
            <h2 class="teacher-name chinese-text">李老师</h2>
            <p class="teacher-name-en">Teacher Li</p>
            <div class="teacher-title">
              <span class="chinese-text">专业中文教师</span>
              <span class="english-text">Professional Chinese Teacher</span>
            </div>
            
            <div class="teacher-stats">
              <div class="stat-item">
                <div class="stat-number">{{ teacherStats.experience }}</div>
                <div class="stat-label">年教学经验<br>Years Experience</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{{ teacherStats.students }}</div>
                <div class="stat-label">学生总数<br>Total Students</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{{ teacherStats.lessons }}</div>
                <div class="stat-label">授课时数<br>Lessons Taught</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{{ teacherStats.rating }}</div>
                <div class="stat-label">学生评分<br>Student Rating</div>
              </div>
            </div>
            
            <div class="teacher-description">
              <p>
                李老师拥有丰富的中文教学经验，专注于为欧美学习者提供高质量的中文教育。她深谙西方学习者的学习特点，
                能够用最适合的方法帮助学生快速掌握中文技能。
              </p>
              <p>
                Teacher Li has extensive experience in Chinese language teaching, focusing on providing high-quality 
                Chinese education for European and American learners. She understands the learning characteristics 
                of Western learners and can help students master Chinese skills quickly with the most suitable methods.
              </p>
            </div>
            
            <div class="teacher-actions">
              <el-button type="primary" size="large" @click="bookTrial">
                <i class="el-icon-phone"></i>
                预约试课 Book Trial
              </el-button>
              <el-button size="large" @click="scrollToContact">
                <i class="el-icon-message"></i>
                联系老师 Contact
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 教育背景 -->
    <section class="education-background section" style="background: var(--bg-light);">
      <div class="container">
        <h2 class="section-title chinese-text">教育背景</h2>
        <p class="section-subtitle">Educational Background</p>
        <div class="education-timeline">
          <div class="timeline-item" v-for="education in educationHistory" :key="education.id">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-year">{{ education.year }}</div>
              <h3 class="timeline-title chinese-text">{{ education.degree }}</h3>
              <p class="timeline-institution">{{ education.institution }}</p>
              <p class="timeline-description">{{ education.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 专业资质 -->
    <section class="certifications section">
      <div class="container">
        <h2 class="section-title chinese-text">专业资质</h2>
        <p class="section-subtitle">Professional Certifications</p>
        <div class="certifications-grid">
          <div class="cert-card card" v-for="cert in certifications" :key="cert.id">
            <div class="cert-icon">
              <i :class="cert.icon"></i>
            </div>
            <h3 class="cert-title chinese-text">{{ cert.title }}</h3>
            <p class="cert-issuer">{{ cert.issuer }}</p>
            <p class="cert-year">{{ cert.year }}</p>
            <p class="cert-description">{{ cert.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 教学特色 -->
    <section class="teaching-features section" style="background: var(--bg-light);">
      <div class="container">
        <h2 class="section-title chinese-text">教学特色</h2>
        <p class="section-subtitle">Teaching Features</p>
        <div class="features-grid">
          <div class="feature-card" v-for="feature in teachingFeatures" :key="feature.id">
            <div class="feature-icon">
              <i :class="feature.icon"></i>
            </div>
            <h3 class="feature-title chinese-text">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 学生评价 -->
    <section class="student-reviews section">
      <div class="container">
        <h2 class="section-title chinese-text">学生评价</h2>
        <p class="section-subtitle">Student Reviews</p>
        <div class="reviews-grid">
          <div class="review-card card" v-for="review in studentReviews" :key="review.id">
            <div class="review-header">
              <div class="student-avatar">
                <span>{{ review.name.charAt(0) }}</span>
              </div>
              <div class="student-info">
                <h4 class="student-name">{{ review.name }}</h4>
                <p class="student-location">{{ review.location }}</p>
                <div class="review-rating">
                  <i class="el-icon-star-on" v-for="star in review.rating" :key="star"></i>
                </div>
              </div>
            </div>
            <div class="review-content">
              <p class="review-text">{{ review.comment }}</p>
              <div class="review-date">{{ review.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 教学方法 -->
    <section class="teaching-method section" style="background: var(--bg-light);">
      <div class="container">
        <h2 class="section-title chinese-text">教学方法</h2>
        <p class="section-subtitle">Teaching Methodology</p>
        <div class="method-steps">
          <div class="method-step" v-for="(step, index) in teachingSteps" :key="step.id">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3 class="step-title chinese-text">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 课程安排 -->
    <section class="schedule-info section">
      <div class="container">
        <h2 class="section-title chinese-text">课程安排</h2>
        <p class="section-subtitle">Class Schedule</p>
        <div class="schedule-content">
          <div class="schedule-item">
            <div class="schedule-icon">
              <i class="el-icon-time"></i>
            </div>
            <div class="schedule-details">
              <h3 class="chinese-text">灵活时间安排</h3>
              <p>根据您的时区和工作时间，灵活安排上课时间。支持欧洲和美洲时区。</p>
              <p>Flexible scheduling based on your timezone and work hours. Supporting European and American timezones.</p>
            </div>
          </div>
          
          <div class="schedule-item">
            <div class="schedule-icon">
              <i class="el-icon-video-camera"></i>
            </div>
            <div class="schedule-details">
              <h3 class="chinese-text">在线一对一教学</h3>
              <p>通过高清视频进行一对一教学，确保最佳的学习效果和互动体验。</p>
              <p>One-on-one teaching via HD video to ensure the best learning outcomes and interactive experience.</p>
            </div>
          </div>
          
          <div class="schedule-item">
            <div class="schedule-icon">
              <i class="el-icon-document"></i>
            </div>
            <div class="schedule-details">
              <h3 class="chinese-text">个性化教材</h3>
              <p>根据学生水平和学习目标，定制专属的教学材料和学习计划。</p>
              <p>Customized teaching materials and learning plans based on student level and learning goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="cta section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title chinese-text">准备开始您的中文学习之旅吗？</h2>
          <p class="cta-subtitle">Ready to Start Your Chinese Learning Journey?</p>
          <p class="cta-description">
            立即预约免费试课，与李老师面对面交流，体验专业的中文教学<br>
            Book a free trial lesson now and communicate with Teacher Li face-to-face to experience professional Chinese teaching
          </p>
          <div class="cta-buttons">
            <el-button type="primary" size="large" @click="$router.push('/contact')">
              <i class="el-icon-phone"></i>
              免费试课 Free Trial
            </el-button>
            <el-button size="large" @click="$router.push('/courses')">
              <i class="el-icon-reading"></i>
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
  name: 'TeacherProfile',
  data() {
    return {
      teacherStats: {
        experience: '8+',
        students: '500+',
        lessons: '3000+',
        rating: '4.9'
      },
      educationHistory: [
        {
          id: 1,
          year: '2015',
          degree: '汉语国际教育硕士',
          institution: '北京语言大学 Beijing Language and Culture University',
          description: '专业学习汉语国际教育理论与实践，深入研究对外汉语教学方法'
        },
        {
          id: 2,
          year: '2013',
          degree: '中文文学学士',
          institution: '北京师范大学 Beijing Normal University',
          description: '系统学习中国语言文学，具备深厚的中文功底和文化素养'
        },
        {
          id: 3,
          year: '2016',
          degree: '国际中文教师证书',
          institution: '孔子学院总部 Confucius Institute Headquarters',
          description: '获得国际认可的中文教师资格，具备专业的对外汉语教学能力'
        }
      ],
      certifications: [
        {
          id: 1,
          title: '国际中文教师证书',
          issuer: '孔子学院总部',
          year: '2016',
          icon: 'el-icon-medal',
          description: '国际认可的中文教师专业资格证书'
        },
        {
          id: 2,
          title: '普通话水平测试一级甲等',
          issuer: '国家语言文字工作委员会',
          year: '2014',
          icon: 'el-icon-microphone',
          description: '最高等级的普通话水平认证'
        },
        {
          id: 3,
          title: 'TESOL国际英语教师资格证',
          issuer: 'TESOL International',
          year: '2017',
          icon: 'el-icon-reading',
          description: '国际英语教学资格，便于双语教学'
        },
        {
          id: 4,
          title: '在线教育技术认证',
          issuer: '教育部在线教育研究中心',
          year: '2020',
          icon: 'el-icon-monitor',
          description: '专业的在线教育技术和方法认证'
        }
      ],
      teachingFeatures: [
        {
          id: 1,
          icon: 'el-icon-user',
          title: '个性化教学',
          description: '根据每位学生的学习特点和目标，制定专属的学习计划和教学方法，确保最佳学习效果。'
        },
        {
          id: 2,
          icon: 'el-icon-chat-dot-round',
          title: '互动式教学',
          description: '采用互动式教学方法，鼓励学生积极参与，通过对话练习提升实际应用能力。'
        },
        {
          id: 3,
          icon: 'el-icon-picture',
          title: '文化融入',
          description: '将中国文化元素融入语言教学，帮助学生更好地理解和掌握中文的文化内涵。'
        },
        {
          id: 4,
          icon: 'el-icon-data-analysis',
          title: '进度跟踪',
          description: '定期评估学习进度，及时调整教学策略，确保学生持续进步。'
        }
      ],
      studentReviews: [
        {
          id: 1,
          name: 'Sarah Johnson',
          location: 'London, UK',
          rating: 5,
          comment: '李老师是一位非常专业和耐心的老师。她的教学方法很适合我这样的初学者，现在我已经可以进行基本的中文对话了！',
          date: '2024年1月'
        },
        {
          id: 2,
          name: 'Michael Brown',
          location: 'New York, USA',
          rating: 5,
          comment: 'Teacher Li is amazing! Her teaching style is very engaging and she makes learning Chinese fun. I\'ve made great progress in just 3 months.',
          date: '2024年2月'
        },
        {
          id: 3,
          name: 'Emma Wilson',
          location: 'Sydney, Australia',
          rating: 5,
          comment: '我很喜欢李老师的课程。她总是很有耐心地纠正我的发音，并且会分享很多有趣的中国文化知识。强烈推荐！',
          date: '2024年3月'
        },
        {
          id: 4,
          name: 'David Miller',
          location: 'Toronto, Canada',
          rating: 5,
          comment: 'Excellent teacher! Very professional and knowledgeable. The lessons are well-structured and I feel confident speaking Chinese now.',
          date: '2024年3月'
        }
      ],
      teachingSteps: [
        {
          id: 1,
          title: '水平评估',
          description: '首先进行全面的中文水平测试，了解学生的现有水平和学习需求，为制定个性化学习计划提供依据。'
        },
        {
          id: 2,
          title: '目标设定',
          description: '与学生共同制定明确的学习目标和时间计划，确保学习方向清晰，进度可控。'
        },
        {
          id: 3,
          title: '系统教学',
          description: '采用系统性的教学方法，从基础语音、词汇到语法、文化，循序渐进地提升学生的中文能力。'
        },
        {
          id: 4,
          title: '实践应用',
          description: '通过大量的实际对话练习和情景模拟，帮助学生将所学知识转化为实际应用能力。'
        },
        {
          id: 5,
          title: '持续跟进',
          description: '定期评估学习效果，及时调整教学策略，确保学生能够持续进步并达到预期目标。'
        }
      ]
    }
  },
  methods: {
    bookTrial() {
      this.$router.push('/contact')
    },
    scrollToContact() {
      this.$router.push('/contact')
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

/* 教师介绍主要内容 */
.teacher-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  align-items: start;
}

.teacher-photo {
  text-align: center;
}

.photo-container {
  position: relative;
  display: inline-block;
}

.photo-placeholder {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 6rem;
  margin-bottom: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.photo-badge {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: var(--accent-color);
  color: white;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.photo-badge span {
  display: block;
  line-height: 1.2;
}

.teacher-info {
  padding-top: 20px;
}

.teacher-name {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: var(--text-dark);
}

.teacher-name-en {
  font-size: 1.3rem;
  color: var(--text-light);
  margin-bottom: 20px;
}

.teacher-title {
  margin-bottom: 30px;
}

.teacher-title .chinese-text {
  display: block;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.teacher-title .english-text {
  display: block;
  font-size: 1rem;
  color: var(--text-light);
}

.teacher-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  padding: 25px;
  background: var(--bg-light);
  border-radius: 15px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-light);
  line-height: 1.3;
}

.teacher-description {
  margin-bottom: 30px;
}

.teacher-description p {
  margin-bottom: 15px;
  line-height: 1.6;
  color: var(--text-dark);
}

.teacher-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

/* 教育背景 */
.education-timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.education-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 80px;
}

.timeline-marker {
  position: absolute;
  left: 20px;
  top: 10px;
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 0 0 2px var(--primary-color);
}

.timeline-content {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: var(--shadow);
}

.timeline-year {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.timeline-institution {
  color: var(--text-light);
  margin-bottom: 15px;
  font-weight: 500;
}

.timeline-description {
  color: var(--text-dark);
  line-height: 1.6;
}

/* 专业资质 */
.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.cert-card {
  text-align: center;
  padding: 30px 25px;
  transition: all 0.3s ease;
}

.cert-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.cert-icon {
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

.cert-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.cert-issuer {
  color: var(--text-light);
  margin-bottom: 5px;
  font-weight: 500;
}

.cert-year {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 15px;
}

.cert-description {
  color: var(--text-dark);
  line-height: 1.5;
  font-size: 0.95rem;
}

/* 教学特色 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 30px 25px;
  border-radius: 15px;
  box-shadow: var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 1.8rem;
}

.feature-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-dark);
}

.feature-description {
  color: var(--text-dark);
  line-height: 1.6;
}

/* 学生评价 */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.review-card {
  padding: 25px;
  transition: all 0.3s ease;
}

.review-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.review-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.student-avatar {
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  margin-right: 15px;
}

.student-info {
  flex: 1;
}

.student-name {
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text-dark);
}

.student-location {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.review-rating {
  color: #ffd700;
}

.review-content {
  color: var(--text-dark);
  line-height: 1.6;
}

.review-text {
  margin-bottom: 15px;
  font-style: italic;
}

.review-date {
  color: var(--text-light);
  font-size: 0.9rem;
}

/* 教学方法 */
.method-steps {
  max-width: 800px;
  margin: 0 auto;
}

.method-step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: var(--shadow);
}

.step-number {
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  margin-right: 25px;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-dark);
}

.step-description {
  color: var(--text-dark);
  line-height: 1.6;
}

/* 课程安排 */
.schedule-content {
  max-width: 800px;
  margin: 0 auto;
}

.schedule-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: var(--shadow);
}

.schedule-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin-right: 25px;
  flex-shrink: 0;
}

.schedule-details {
  flex: 1;
}

.schedule-details h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-dark);
}

.schedule-details p {
  color: var(--text-dark);
  line-height: 1.6;
  margin-bottom: 10px;
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

  .teacher-main {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .photo-placeholder {
    width: 200px;
    height: 200px;
    font-size: 4rem;
  }

  .teacher-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .teacher-actions {
    justify-content: center;
  }

  .timeline-item {
    padding-left: 60px;
  }

  .education-timeline::before {
    left: 20px;
  }

  .timeline-marker {
    left: 10px;
  }

  .method-step,
  .schedule-item {
    flex-direction: column;
    text-align: center;
  }

  .step-number,
  .schedule-icon {
    margin-right: 0;
    margin-bottom: 20px;
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

  .teacher-name {
    font-size: 2rem;
  }

  .teacher-stats {
    grid-template-columns: 1fr;
  }

  .cta-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>