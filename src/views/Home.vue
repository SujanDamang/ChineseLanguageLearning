<template>
  <div class="home">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title animate-fade-in-up">
              专业中文教学 Professional Chinese Teaching
            </h1>
            <p class="hero-subtitle animate-fade-in-up">
              让学习中文变得简单有趣 Making Chinese Learning Simple and Fun
            </p>
            <p class="hero-description animate-fade-in-up">
              经验丰富的专业教师，个性化教学方案，帮助您快速掌握中文技能。无论您是初学者还是希望提高现有水平，我们都能为您提供最适合的学习体验。
            </p>
            <div class="hero-buttons animate-fade-in-up">
              <el-button type="primary" size="large" @click="scrollToContact">
                <i class="el-icon-video-camera"></i>
                免费试课 Free Trial
              </el-button>
              <el-button size="large" @click="scrollToCourses">
                <i class="el-icon-document"></i>
                课程介绍 Courses
              </el-button>
            </div>
          </div>
          <div class="hero-image">
            <div class="hero-visual">
              <div class="floating-card card-1">
                <span class="chinese-char">你好</span>
                <span class="english-text">Hello</span>
              </div>
              <div class="floating-card card-2">
                <span class="chinese-char">谢谢</span>
                <span class="english-text">Thank you</span>
              </div>
              <div class="floating-card card-3">
                <span class="chinese-char">学习</span>
                <span class="english-text">Learn</span>
              </div>
              <div class="hero-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 特色功能 -->
    <section class="features section">
      <div class="container">
        <h2 class="section-title chinese-text">教学特色 Teaching Features</h2>
        <div class="features-grid">
          <div class="feature-card card" v-for="feature in features" :key="feature.id">
            <div class="feature-icon">
              <i :class="feature.icon"></i>
            </div>
            <h3 class="feature-title chinese-text">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 课程预览 -->
    <section class="courses-preview section" style="background: var(--bg-light);">
      <div class="container">
        <h2 class="section-title chinese-text">课程介绍 Course Overview</h2>
        <div class="courses-grid">
          <div class="course-card card" v-for="course in courses" :key="course.id">
            <div class="course-image">
              <div class="course-level">{{ course.level }}</div>
            </div>
            <div class="course-content">
              <h3 class="course-title chinese-text">{{ course.title }}</h3>
              <p class="course-description">{{ course.description }}</p>
              <div class="course-meta">
                <span class="course-duration">
                  <i class="el-icon-time"></i>
                  {{ course.duration }}
                </span>
                <span class="course-students">
                  <i class="el-icon-user"></i>
                  {{ course.students }} 学生
                </span>
              </div>
              <div class="course-price">
                <span class="price">${{ course.price }}</span>
                <span class="price-unit">/课时</span>
              </div>
            </div>
          </div>
        </div>
        <div class="courses-cta">
          <el-button type="primary" size="large" @click="$router.push('/courses')">
            查看所有课程 View All Courses
          </el-button>
        </div>
      </div>
    </section>

    <!-- 老师介绍 -->
    <section class="teacher-intro section">
      <div class="container">
        <div class="teacher-content">
          <div class="teacher-image">
            <div class="teacher-photo">
              <div class="teacher-placeholder">
                <i class="el-icon-user-solid"></i>
              </div>
            </div>
            <div class="teacher-badges">
              <div class="badge">认证教师</div>
              <div class="badge">5年经验</div>
            </div>
          </div>
          <div class="teacher-info">
            <h2 class="teacher-name chinese-text">李老师 Teacher Li</h2>
            <p class="teacher-title">专业中文教师 Professional Chinese Teacher</p>
            <div class="teacher-description">
              <p>拥有丰富的中文教学经验，专注于为不同水平的学生提供个性化的学习方案。教学风格生动有趣，能够帮助学生快速掌握中文技能。</p>
              <ul class="teacher-qualifications">
                <li>北京师范大学中文系硕士学位</li>
                <li>国际中文教师资格证书</li>
                <li>5年以上线上线下教学经验</li>
                <li>专业普通话水平测试一级乙等</li>
              </ul>
            </div>
            <el-button type="primary" size="large" @click="$router.push('/teacher')">
              了解更多 Learn More
            </el-button>
          </div>
        </div>
      </div>
    </section>

    <!-- 学生评价 -->
    <section class="testimonials section" style="background: var(--bg-light);">
      <div class="container">
        <h2 class="section-title chinese-text">学生评价 Student Reviews</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card card" v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="testimonial-content">
              <div class="quote-icon">"</div>
              <p class="testimonial-text">{{ testimonial.text }}</p>
              <div class="testimonial-author">
                <div class="author-avatar">
                  {{ testimonial.name.charAt(0) }}
                </div>
                <div class="author-info">
                  <h4 class="author-name">{{ testimonial.name }}</h4>
                  <p class="author-title">{{ testimonial.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="cta section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title chinese-text">开始您的中文学习之旅 Start Your Chinese Learning Journey</h2>
          <p class="cta-subtitle">立即预约免费试课 Book Your Free Trial Now</p>
          <p class="cta-description">
            专业的教学团队，个性化的学习方案，让您的中文学习更加高效有趣。现在就联系我们，开启您的中文学习之旅！
          </p>
          <el-button type="primary" size="large" @click="scrollToContact">
            <i class="el-icon-phone"></i>
            立即预约 Book Now
          </el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: '首页 - 学中文 | 专业中文教学平台',
    meta: [
      {
        name: 'description',
        content: '专业的在线中文教学平台，提供个性化中文课程。经验丰富的教师团队，帮助欧美学习者快速掌握中文技能。'
      },
      {
        name: 'keywords',
        content: '中文教学,汉语学习,Chinese learning,Mandarin,在线中文课程,中文老师'
      },
      {
        property: 'og:title',
        content: '学中文 - 专业中文教学平台'
      },
      {
        property: 'og:description',
        content: '专业的在线中文教学平台，提供个性化中文课程。经验丰富的教师团队，帮助欧美学习者快速掌握中文技能。'
      }
    ]
  },
  data() {
    return {
      features: [
        {
          id: 1,
          icon: 'el-icon-user',
          title: '个性化教学 Personalized Teaching',
          description: '根据学生的水平和需求，制定专属的学习计划，确保每位学生都能获得最适合的教学方式。'
        },
        {
          id: 2,
          icon: 'el-icon-time',
          title: '灵活时间 Flexible Schedule',
          description: '提供灵活的上课时间安排，适应不同学生的时间需求，让学习更加便利。'
        },
        {
          id: 3,
          icon: 'el-icon-document',
          title: '丰富教材 Rich Materials',
          description: '使用多样化的教学材料和现代化的教学方法，让中文学习更加生动有趣。'
        },
        {
          id: 4,
          icon: 'el-icon-chat-dot-round',
          title: '互动交流 Interactive Communication',
          description: '注重口语练习和实际应用，通过大量的互动练习提高学生的中文交流能力。'
        }
      ],
      courses: [
        {
          id: 1,
          title: '初级中文 Beginner Chinese',
          description: '适合零基础学生，从拼音开始，学习基础汉字和日常对话。',
          level: '初级',
          duration: '50分钟',
          students: '120',
          price: '25'
        },
        {
          id: 2,
          title: '中级中文 Intermediate Chinese',
          description: '适合有一定基础的学生，提高语法理解和表达能力。',
          level: '中级',
          duration: '50分钟',
          students: '85',
          price: '35'
        },
        {
          id: 3,
          title: '商务中文 Business Chinese',
          description: '专注于商务场景的中文应用，提高职场中文沟通能力。',
          level: '全级别',
          duration: '50分钟',
          students: '200',
          price: '30'
        }
      ],
      testimonials: [
        {
          id: 1,
          name: 'Sarah Johnson',
          title: '初级学生',
          text: '李老师的教学方法非常有效，我在短时间内就能进行基本的中文对话了。课程内容丰富，学习氛围轻松愉快。'
        },
        {
          id: 2,
          name: 'Michael Brown',
          title: '中级学生',
          text: '通过李老师的指导，我的中文水平有了显著提高。老师很耐心，总是能够解答我的疑问，让我对中文学习更有信心。'
        },
        {
          id: 3,
          name: 'Emma Wilson',
          title: '商务学生',
          text: '商务中文课程对我的工作帮助很大。李老师不仅教授语言技能，还分享了很多中国商务文化知识，非常实用。'
        }
      ]
    }
  },
  methods: {
    scrollToContact() {
      this.$router.push('/contact')
    },
    scrollToCourses() {
      this.$router.push('/courses')
    }
  }
}
</script>

<style scoped>
/* 英雄区域 */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 0 80px;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
}

.chinese-text {
  color: #fff;
}

.english-text {
  color: #e8f4f8;
  font-size: 0.7em;
  font-weight: 500;
}

.hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #e8f4f8;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.hero-visual {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.floating-card {
  position: absolute;
  background: white;
  padding: 15px 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: float 3s ease-in-out infinite;
}

.floating-card .chinese-char {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.floating-card .english-text {
  font-size: 0.9rem;
  color: var(--text-light);
}

.card-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 60%;
  right: 10%;
  animation-delay: 1s;
}

.card-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* 特色服务 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  text-align: center;
  padding: 40px 20px;
}

.feature-icon {
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

.feature-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-dark);
}

.feature-description {
  color: var(--text-light);
  line-height: 1.6;
}

/* 课程预览 */
.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.course-card {
  overflow: hidden;
  padding: 0;
}

.course-image {
  height: 200px;
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.course-level {
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary-color);
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.course-content {
  padding: 25px;
}

.course-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.course-description {
  color: var(--text-light);
  margin-bottom: 20px;
  line-height: 1.5;
}

.course-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  font-size: 0.9rem;
  color: var(--text-light);
}

.course-meta span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.course-price {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.price-unit {
  color: var(--text-light);
  font-size: 0.9rem;
}

.courses-cta {
  text-align: center;
}

/* 老师介绍 */
.teacher-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  align-items: center;
}

.teacher-image {
  text-align: center;
}

.teacher-photo {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 0 auto 20px;
  overflow: hidden;
  border: 5px solid var(--primary-color);
}

.teacher-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
}

.teacher-badges {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.badge {
  background: var(--primary-color);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.teacher-name {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.teacher-title {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 30px;
}

.teacher-description p {
  margin-bottom: 20px;
  line-height: 1.6;
  color: var(--text-dark);
}

.teacher-qualifications {
  list-style: none;
  margin: 30px 0;
}

.teacher-qualifications li {
  margin-bottom: 10px;
  color: var(--text-dark);
  font-weight: 500;
}

/* 学生评价 */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.testimonial-card {
  position: relative;
}

.quote-icon {
  font-size: 4rem;
  color: var(--primary-color);
  opacity: 0.3;
  position: absolute;
  top: 10px;
  left: 20px;
  font-family: serif;
}

.testimonial-text {
  font-style: italic;
  line-height: 1.6;
  margin: 40px 0 30px;
  color: var(--text-dark);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
}

.author-name {
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 5px;
}

.author-title {
  color: var(--text-light);
  font-size: 0.9rem;
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

/* 响应式设计 */
@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .teacher-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .teacher-photo {
    width: 200px;
    height: 200px;
  }

  .cta-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .floating-card {
    display: none;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>