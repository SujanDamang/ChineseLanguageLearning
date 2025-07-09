<template>
  <div class="courses">
    <!-- 页面头部 -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title chinese-text">课程介绍</h1>
          <p class="page-subtitle">Our Courses</p>
          <p class="page-description">
            专业的中文课程体系，满足不同水平和需求的学习者<br>
            Professional Chinese curriculum system for learners of all levels and needs
          </p>
        </div>
      </div>
    </section>

    <!-- 课程筛选 -->
    <section class="course-filter section">
      <div class="container">
        <div class="filter-tabs">
          <div 
            class="filter-tab" 
            :class="{ active: activeFilter === filter.id }"
            v-for="filter in filters" 
            :key="filter.id"
            @click="setActiveFilter(filter.id)"
          >
            <span class="chinese-text">{{ filter.name }}</span>
            <span class="english-text">{{ filter.nameEn }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 课程列表 -->
    <section class="courses-list section" style="background: var(--bg-light);">
      <div class="container">
        <div class="courses-grid">
          <div 
            class="course-card card" 
            v-for="course in filteredCourses" 
            :key="course.id"
            @click="selectCourse(course)"
          >
            <div class="course-header">
              <div class="course-image">
                <div class="course-level" :class="course.levelClass">{{ course.level }}</div>
                <div class="course-icon">
                  <i :class="course.icon"></i>
                </div>
              </div>
              <div class="course-badge" v-if="course.popular">
                <span>热门 Popular</span>
              </div>
            </div>
            
            <div class="course-content">
              <h3 class="course-title chinese-text">{{ course.title }}</h3>
              <p class="course-subtitle">{{ course.titleEn }}</p>
              <p class="course-description">{{ course.description }}</p>
              
              <div class="course-features">
                <div class="feature-item" v-for="feature in course.features" :key="feature">
                  <i class="el-icon-check"></i>
                  <span>{{ feature }}</span>
                </div>
              </div>
              
              <div class="course-meta">
                <div class="meta-item">
                  <i class="el-icon-time"></i>
                  <span>{{ course.duration }}</span>
                </div>
                <div class="meta-item">
                  <i class="el-icon-user"></i>
                  <span>{{ course.students }} 学生</span>
                </div>
                <div class="meta-item">
                  <i class="el-icon-star-on"></i>
                  <span>{{ course.rating }} 评分</span>
                </div>
              </div>
              
              <div class="course-pricing">
                <div class="price-info">
                  <span class="price">${{ course.price }}</span>
                  <span class="price-unit">/课时</span>
                  <span class="price-original" v-if="course.originalPrice">${{ course.originalPrice }}</span>
                </div>
                <el-button type="primary" size="medium" @click.stop="bookTrial(course)">
                  预约试课 Book Trial
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 学习路径 -->
    <section class="learning-path section">
      <div class="container">
        <h2 class="section-title chinese-text">学习路径</h2>
        <p class="section-subtitle">Learning Path</p>
        <div class="path-timeline">
          <div class="path-step" v-for="(step, index) in learningPath" :key="step.id">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3 class="step-title chinese-text">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
              <div class="step-duration">{{ step.duration }}</div>
            </div>
            <div class="step-connector" v-if="index < learningPath.length - 1"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 课程优势 -->
    <section class="course-advantages section" style="background: var(--bg-light);">
      <div class="container">
        <h2 class="section-title chinese-text">课程优势</h2>
        <p class="section-subtitle">Course Advantages</p>
        <div class="advantages-grid">
          <div class="advantage-item" v-for="advantage in courseAdvantages" :key="advantage.id">
            <div class="advantage-icon">
              <i :class="advantage.icon"></i>
            </div>
            <h3 class="advantage-title chinese-text">{{ advantage.title }}</h3>
            <p class="advantage-description">{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 价格套餐 -->
    <section class="pricing-plans section">
      <div class="container">
        <h2 class="section-title chinese-text">价格套餐</h2>
        <p class="section-subtitle">Pricing Plans</p>
        <div class="pricing-grid">
          <div 
            class="pricing-card card" 
            :class="{ recommended: plan.recommended }"
            v-for="plan in pricingPlans" 
            :key="plan.id"
          >
            <div class="plan-header">
              <div class="plan-badge" v-if="plan.recommended">
                推荐 Recommended
              </div>
              <h3 class="plan-name chinese-text">{{ plan.name }}</h3>
              <p class="plan-description">{{ plan.description }}</p>
              <div class="plan-price">
                <span class="price">${{ plan.price }}</span>
                <span class="price-unit">/{{ plan.unit }}</span>
              </div>
            </div>
            
            <div class="plan-features">
              <div class="feature-item" v-for="feature in plan.features" :key="feature">
                <i class="el-icon-check"></i>
                <span>{{ feature }}</span>
              </div>
            </div>
            
            <div class="plan-action">
              <el-button 
                :type="plan.recommended ? 'primary' : 'default'" 
                size="large" 
                @click="selectPlan(plan)"
              >
                {{ plan.buttonText }}
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq section" style="background: var(--bg-light);">
      <div class="container">
        <h2 class="section-title chinese-text">常见问题</h2>
        <p class="section-subtitle">Frequently Asked Questions</p>
        <div class="faq-list">
          <div class="faq-item" v-for="faq in faqs" :key="faq.id">
            <div class="faq-question" @click="toggleFaq(faq.id)">
              <h3 class="chinese-text">{{ faq.question }}</h3>
              <i class="el-icon-arrow-down" :class="{ active: faq.open }"></i>
            </div>
            <div class="faq-answer" v-show="faq.open">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="cta section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title chinese-text">准备开始学习中文了吗？</h2>
          <p class="cta-subtitle">Ready to Start Learning Chinese?</p>
          <p class="cta-description">
            立即预约免费试课，体验我们的专业教学<br>
            Book a free trial lesson now and experience our professional teaching
          </p>
          <div class="cta-buttons">
            <el-button type="primary" size="large" @click="$router.push('/contact')">
              <i class="el-icon-phone"></i>
              免费试课 Free Trial
            </el-button>
            <el-button size="large" @click="$router.push('/teacher')">
              <i class="el-icon-user"></i>
              了解老师 Meet Teacher
            </el-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Courses',
  data() {
    return {
      activeFilter: 'all',
      filters: [
        { id: 'all', name: '全部课程', nameEn: 'All Courses' },
        { id: 'beginner', name: '初级课程', nameEn: 'Beginner' },
        { id: 'intermediate', name: '中级课程', nameEn: 'Intermediate' },
        { id: 'advanced', name: '高级课程', nameEn: 'Advanced' },
        { id: 'business', name: '商务中文', nameEn: 'Business' },
        { id: 'exam', name: '考试准备', nameEn: 'Exam Prep' }
      ],
      courses: [
        {
          id: 1,
          title: '零基础中文入门',
          titleEn: 'Chinese for Complete Beginners',
          description: '专为零基础学习者设计，从拼音开始，循序渐进学习中文基础知识',
          level: '初级',
          levelClass: 'beginner',
          category: 'beginner',
          icon: 'el-icon-edit',
          duration: '50分钟/课',
          students: '156',
          rating: '4.9',
          price: '25',
          originalPrice: '35',
          popular: true,
          features: [
            '拼音系统学习',
            '基础汉字认读',
            '日常对话练习',
            '文化背景介绍'
          ]
        },
        {
          id: 2,
          title: '商务中文专业课程',
          titleEn: 'Professional Business Chinese',
          description: '针对商务人士设计，学习商务场景下的中文表达和沟通技巧',
          level: '中级',
          levelClass: 'intermediate',
          category: 'business',
          icon: 'el-icon-suitcase',
          duration: '50分钟/课',
          students: '89',
          rating: '4.8',
          price: '35',
          features: [
            '商务词汇学习',
            '会议中文表达',
            '邮件写作技巧',
            '商务礼仪文化'
          ]
        },
        {
          id: 3,
          title: 'HSK考试冲刺班',
          titleEn: 'HSK Exam Preparation',
          description: '专业HSK考试辅导，针对性训练，快速提升考试成绩',
          level: '各级别',
          levelClass: 'exam',
          category: 'exam',
          icon: 'el-icon-document',
          duration: '50分钟/课',
          students: '234',
          rating: '4.9',
          price: '30',
          features: [
            '真题模拟练习',
            '考试技巧指导',
            '弱项针对训练',
            '考前冲刺辅导'
          ]
        },
        {
          id: 4,
          title: '中级口语强化',
          titleEn: 'Intermediate Speaking Enhancement',
          description: '专注提升口语表达能力，增强中文交流的流利度和准确性',
          level: '中级',
          levelClass: 'intermediate',
          category: 'intermediate',
          icon: 'el-icon-microphone',
          duration: '50分钟/课',
          students: '127',
          rating: '4.7',
          price: '28',
          features: [
            '发音纠正训练',
            '情景对话练习',
            '表达技巧提升',
            '文化交流讨论'
          ]
        },
        {
          id: 5,
          title: '高级中文文学',
          titleEn: 'Advanced Chinese Literature',
          description: '深入学习中国文学作品，提升高级中文理解和表达能力',
          level: '高级',
          levelClass: 'advanced',
          category: 'advanced',
          icon: 'el-icon-reading',
          duration: '50分钟/课',
          students: '67',
          rating: '4.8',
          price: '40',
          features: [
            '经典文学赏析',
            '写作技巧训练',
            '文化深度理解',
            '批判性思维培养'
          ]
        },
        {
          id: 6,
          title: '旅游中文速成',
          titleEn: 'Travel Chinese Crash Course',
          description: '为旅游者设计的实用中文课程，快速掌握旅行必备中文',
          level: '初级',
          levelClass: 'beginner',
          category: 'beginner',
          icon: 'el-icon-map-location',
          duration: '50分钟/课',
          students: '198',
          rating: '4.6',
          price: '22',
          features: [
            '旅游常用词汇',
            '问路指路表达',
            '餐厅购物用语',
            '紧急情况应对'
          ]
        }
      ],
      learningPath: [
        {
          id: 1,
          title: '基础入门',
          description: '学习拼音、基础汉字和简单对话',
          duration: '1-3个月'
        },
        {
          id: 2,
          title: '初级提升',
          description: '扩展词汇量，学习基本语法结构',
          duration: '3-6个月'
        },
        {
          id: 3,
          title: '中级进阶',
          description: '复杂语法学习，提升口语表达能力',
          duration: '6-12个月'
        },
        {
          id: 4,
          title: '高级精通',
          description: '文学阅读，专业领域中文应用',
          duration: '12个月以上'
        }
      ],
      courseAdvantages: [
        {
          id: 1,
          icon: 'el-icon-user',
          title: '一对一教学',
          description: '个性化定制课程，老师全程专注于您的学习进度和需求'
        },
        {
          id: 2,
          icon: 'el-icon-time',
          title: '灵活时间',
          description: '自由安排上课时间，适应您的工作和生活节奏'
        },
        {
          id: 3,
          icon: 'el-icon-video-camera',
          title: '在线互动',
          description: '高清视频教学，实时互动，如同面对面授课'
        },
        {
          id: 4,
          icon: 'el-icon-document',
          title: '专业教材',
          description: '精心编制的教学材料，适合西方学习者的学习习惯'
        }
      ],
      pricingPlans: [
        {
          id: 1,
          name: '体验套餐',
          description: 'Trial Package',
          price: '20',
          unit: '课时',
          buttonText: '立即体验',
          features: [
            '1节试听课',
            '学习计划制定',
            '基础水平测试',
            '学习资料包'
          ]
        },
        {
          id: 2,
          name: '标准套餐',
          description: 'Standard Package',
          price: '25',
          unit: '课时',
          recommended: true,
          buttonText: '选择标准',
          features: [
            '10节正式课程',
            '个性化教学计划',
            '课后作业辅导',
            '学习进度跟踪',
            '免费重修机会'
          ]
        },
        {
          id: 3,
          name: '高级套餐',
          description: 'Premium Package',
          price: '30',
          unit: '课时',
          buttonText: '选择高级',
          features: [
            '20节深度课程',
            '专业能力测评',
            '文化背景讲解',
            '考试辅导服务',
            '终身学习支持',
            '优先预约时间'
          ]
        }
      ],
      faqs: [
        {
          id: 1,
          question: '我完全没有中文基础，可以学习吗？',
          answer: '当然可以！我们有专门为零基础学习者设计的课程，从拼音开始，循序渐进。老师会根据您的学习进度调整教学方法，确保您能够轻松入门。',
          open: false
        },
        {
          id: 2,
          question: '上课时间如何安排？',
          answer: '我们提供灵活的时间安排，您可以根据自己的时间表预约课程。我们会尽量配合您的时区和工作时间，确保学习的连续性。',
          open: false
        },
        {
          id: 3,
          question: '如果错过了课程怎么办？',
          answer: '如果您因故无法参加预约的课程，请提前24小时通知我们，我们可以为您重新安排时间。课程录像也会保存，您可以随时回看复习。',
          open: false
        },
        {
          id: 4,
          question: '学习多长时间能达到基本交流水平？',
          answer: '这取决于您的学习频率和个人能力。一般来说，每周2-3次课程，3-6个月可以达到基本的日常交流水平。我们会根据您的目标制定合适的学习计划。',
          open: false
        },
        {
          id: 5,
          question: '课程费用包含哪些内容？',
          answer: '课程费用包含一对一在线教学、个性化教材、课后作业辅导、学习进度跟踪等。高级套餐还包含文化背景讲解和考试辅导服务。',
          open: false
        }
      ]
    }
  },
  computed: {
    filteredCourses() {
      if (this.activeFilter === 'all') {
        return this.courses
      }
      return this.courses.filter(course => course.category === this.activeFilter)
    }
  },
  methods: {
    setActiveFilter(filterId) {
      this.activeFilter = filterId
    },
    selectCourse(course) {
      // 可以跳转到课程详情页或打开详情弹窗
      console.log('Selected course:', course)
    },
    bookTrial(course) {
      // 预约试课逻辑
      this.$router.push('/contact')
    },
    selectPlan(plan) {
      // 选择套餐逻辑
      this.$router.push('/contact')
    },
    toggleFaq(faqId) {
      const faq = this.faqs.find(f => f.id === faqId)
      if (faq) {
        faq.open = !faq.open
      }
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

/* 课程筛选 */
.course-filter {
  padding: 40px 0;
  background: white;
  border-bottom: 1px solid var(--border-color);
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 12px 24px;
  border-radius: 25px;
  background: var(--bg-light);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 120px;
}

.filter-tab:hover {
  background: var(--primary-color);
  color: white;
}

.filter-tab.active {
  background: var(--primary-color);
  color: white;
}

.filter-tab .chinese-text {
  display: block;
  font-weight: 600;
  font-size: 1rem;
}

.filter-tab .english-text {
  display: block;
  font-size: 0.8rem;
  opacity: 0.8;
}

/* 课程列表 */
.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.course-card {
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}

.course-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

.course-header {
  position: relative;
}

.course-image {
  height: 180px;
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.course-level {
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
}

.course-level.beginner {
  background: #27ae60;
}

.course-level.intermediate {
  background: #f39c12;
}

.course-level.advanced {
  background: #e74c3c;
}

.course-level.exam {
  background: #9b59b6;
}

.course-icon {
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.8);
}

.course-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--secondary-color);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  transform: rotate(15deg);
}

.course-content {
  padding: 25px;
}

.course-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text-dark);
}

.course-subtitle {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.course-description {
  color: var(--text-dark);
  line-height: 1.5;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.course-features {
  margin-bottom: 20px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: var(--text-dark);
}

.feature-item i {
  color: var(--primary-color);
  font-size: 0.8rem;
}

.course-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
  color: var(--text-light);
}

.meta-item i {
  color: var(--primary-color);
}

.course-pricing {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.price-info {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.price {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
}

.price-unit {
  color: var(--text-light);
  font-size: 0.9rem;
}

.price-original {
  color: var(--text-light);
  text-decoration: line-through;
  font-size: 0.9rem;
}

/* 学习路径 */
.path-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.path-step {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 30px;
  flex-shrink: 0;
  z-index: 2;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.step-description {
  color: var(--text-dark);
  line-height: 1.5;
  margin-bottom: 10px;
}

.step-duration {
  color: var(--text-light);
  font-size: 0.9rem;
  font-weight: 500;
}

.step-connector {
  position: absolute;
  left: 29px;
  top: 60px;
  width: 2px;
  height: 40px;
  background: var(--border-color);
  z-index: 1;
}

/* 课程优势 */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.advantage-item {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.advantage-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
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
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-dark);
}

.advantage-description {
  color: var(--text-dark);
  line-height: 1.6;
}

/* 价格套餐 */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.pricing-card {
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-card.recommended {
  transform: scale(1.05);
  border: 3px solid var(--primary-color);
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.pricing-card.recommended:hover {
  transform: scale(1.05) translateY(-5px);
}

.plan-header {
  padding: 30px 25px 20px;
  position: relative;
}

.plan-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary-color);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.plan-description {
  color: var(--text-light);
  margin-bottom: 20px;
}

.plan-price {
  margin-bottom: 20px;
}

.plan-price .price {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.plan-price .price-unit {
  color: var(--text-light);
  font-size: 1rem;
}

.plan-features {
  padding: 0 25px;
  text-align: left;
}

.plan-features .feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 0.95rem;
  color: var(--text-dark);
}

.plan-features .feature-item i {
  color: var(--primary-color);
  font-size: 0.9rem;
}

.plan-action {
  padding: 25px;
}

/* FAQ */
.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.faq-question {
  padding: 20px 25px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: var(--bg-light);
}

.faq-question h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin: 0;
}

.faq-question i {
  color: var(--primary-color);
  transition: transform 0.3s ease;
}

.faq-question i.active {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 25px 20px;
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

  .filter-tabs {
    gap: 10px;
  }

  .filter-tab {
    min-width: 100px;
    padding: 10px 16px;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }

  .course-pricing {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }

  .path-step {
    flex-direction: column;
    text-align: center;
  }

  .step-number {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .step-connector {
    display: none;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .pricing-card.recommended {
    transform: none;
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

  .course-meta {
    flex-direction: column;
    gap: 8px;
  }

  .cta-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>