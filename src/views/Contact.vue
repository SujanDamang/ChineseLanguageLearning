<template>
  <div class="contact">
    <!-- 页面头部 -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title chinese-text">联系我们</h1>
          <p class="page-subtitle">Contact Us</p>
          <p class="page-description">
            准备开始您的中文学习之旅？立即联系我们预约免费试课<br>
            Ready to start your Chinese learning journey? Contact us now to book a free trial lesson
          </p>
        </div>
      </div>
    </section>

    <!-- 联系方式和表单 -->
    <section class="contact-main section">
      <div class="container">
        <div class="contact-grid">
          <!-- 联系信息 -->
          <div class="contact-info">
            <h2 class="info-title chinese-text">联系信息</h2>
            <p class="info-subtitle">Contact Information</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <i class="el-icon-message"></i>
                </div>
                <div class="method-details">
                  <h3>邮箱 Email</h3>
                  <p>teacher.li@chineselearning.com</p>
                  <p>info@chineselearning.com</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <i class="el-icon-phone"></i>
                </div>
                <div class="method-details">
                  <h3>电话 Phone</h3>
                  <p>+86 138-0013-8000</p>
                  <p>WhatsApp: +86 138-0013-8000</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <i class="el-icon-chat-dot-round"></i>
                </div>
                <div class="method-details">
                  <h3>即时通讯 Instant Messaging</h3>
                  <p>WeChat: TeacherLi_Chinese</p>
                  <p>Skype: teacher.li.chinese</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <i class="el-icon-time"></i>
                </div>
                <div class="method-details">
                  <h3>工作时间 Working Hours</h3>
                  <p>周一至周日 Mon-Sun</p>
                  <p>北京时间 8:00-22:00 (GMT+8)</p>
                  <p>欧洲时间 1:00-15:00 (CET)</p>
                  <p>美东时间 19:00-9:00 (EST)</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <h3 class="chinese-text">关注我们</h3>
              <p>Follow Us</p>
              <div class="social-icons">
                <a href="#" class="social-icon">
                  <i class="el-icon-chat-dot-round"></i>
                  <span>WeChat</span>
                </a>
                <a href="#" class="social-icon">
                  <i class="el-icon-video-camera"></i>
                  <span>YouTube</span>
                </a>
                <a href="#" class="social-icon">
                  <i class="el-icon-picture"></i>
                  <span>Instagram</span>
                </a>
                <a href="#" class="social-icon">
                  <i class="el-icon-share"></i>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
          
          <!-- 联系表单 -->
          <div class="contact-form-container">
            <div class="form-header">
              <h2 class="form-title chinese-text">预约免费试课</h2>
              <p class="form-subtitle">Book Your Free Trial Lesson</p>
              <p class="form-description">
                填写下方表单，我们将在24小时内与您联系安排试课时间
              </p>
            </div>
            
            <el-form 
              :model="contactForm" 
              :rules="formRules" 
              ref="contactForm" 
              class="contact-form"
              label-position="top"
            >
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="姓名 Name *" prop="name">
                    <el-input 
                      v-model="contactForm.name" 
                      placeholder="请输入您的姓名 Please enter your name"
                      size="large"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="邮箱 Email *" prop="email">
                    <el-input 
                      v-model="contactForm.email" 
                      placeholder="请输入您的邮箱 Please enter your email"
                      size="large"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="电话 Phone" prop="phone">
                    <el-input 
                      v-model="contactForm.phone" 
                      placeholder="请输入您的电话 Please enter your phone"
                      size="large"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="所在地区 Location" prop="location">
                    <el-select 
                      v-model="contactForm.location" 
                      placeholder="请选择您的所在地区 Please select your location"
                      size="large"
                      style="width: 100%"
                    >
                      <el-option label="欧洲 Europe" value="europe"></el-option>
                      <el-option label="北美 North America" value="north_america"></el-option>
                      <el-option label="澳洲 Australia" value="australia"></el-option>
                      <el-option label="亚洲 Asia" value="asia"></el-option>
                      <el-option label="其他 Other" value="other"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              
              <el-form-item label="中文水平 Chinese Level" prop="level">
                <el-radio-group v-model="contactForm.level" size="large">
                  <el-radio label="beginner">零基础 Complete Beginner</el-radio>
                  <el-radio label="elementary">初级 Elementary</el-radio>
                  <el-radio label="intermediate">中级 Intermediate</el-radio>
                  <el-radio label="advanced">高级 Advanced</el-radio>
                </el-radio-group>
              </el-form-item>
              
              <el-form-item label="学习目标 Learning Goals" prop="goals">
                <el-checkbox-group v-model="contactForm.goals">
                  <el-checkbox label="daily">日常交流 Daily Communication</el-checkbox>
                  <el-checkbox label="business">商务中文 Business Chinese</el-checkbox>
                  <el-checkbox label="travel">旅游中文 Travel Chinese</el-checkbox>
                  <el-checkbox label="exam">考试准备 Exam Preparation</el-checkbox>
                  <el-checkbox label="culture">文化学习 Cultural Learning</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              
              <el-form-item label="偏好上课时间 Preferred Class Time" prop="preferredTime">
                <el-select 
                  v-model="contactForm.preferredTime" 
                  placeholder="请选择您偏好的上课时间 Please select your preferred time"
                  size="large"
                  style="width: 100%"
                >
                  <el-option label="早上 Morning (8:00-12:00 GMT+8)" value="morning"></el-option>
                  <el-option label="下午 Afternoon (12:00-18:00 GMT+8)" value="afternoon"></el-option>
                  <el-option label="晚上 Evening (18:00-22:00 GMT+8)" value="evening"></el-option>
                  <el-option label="灵活安排 Flexible" value="flexible"></el-option>
                </el-select>
              </el-form-item>
              
              <el-form-item label="留言 Message" prop="message">
                <el-input 
                  type="textarea" 
                  v-model="contactForm.message" 
                  placeholder="请告诉我们您的具体需求或问题 Please tell us your specific needs or questions"
                  :rows="4"
                  size="large"
                ></el-input>
              </el-form-item>
              
              <el-form-item>
                <el-button 
                  type="primary" 
                  size="large" 
                  @click="submitForm" 
                  :loading="submitting"
                  style="width: 100%; height: 50px; font-size: 16px;"
                >
                  <i class="el-icon-s-promotion"></i>
                  {{ submitting ? '提交中...' : '提交申请 Submit Application' }}
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </section>

    <!-- 常见问题 -->
    <section class="faq section" style="background: var(--bg-light);">
      <div class="container">
        <h2 class="section-title chinese-text">常见问题</h2>
        <p class="section-subtitle">Frequently Asked Questions</p>
        <div class="faq-grid">
          <div class="faq-item" v-for="faq in faqs" :key="faq.id">
            <div class="faq-icon">
              <i :class="faq.icon"></i>
            </div>
            <h3 class="faq-question chinese-text">{{ faq.question }}</h3>
            <p class="faq-answer">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系流程 -->
    <section class="contact-process section">
      <div class="container">
        <h2 class="section-title chinese-text">联系流程</h2>
        <p class="section-subtitle">Contact Process</p>
        <div class="process-steps">
          <div class="process-step" v-for="(step, index) in contactSteps" :key="step.id">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-icon">
              <i :class="step.icon"></i>
            </div>
            <h3 class="step-title chinese-text">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 时区信息 -->
    <section class="timezone-info section" style="background: var(--bg-light);">
      <div class="container">
        <h2 class="section-title chinese-text">时区对照</h2>
        <p class="section-subtitle">Timezone Reference</p>
        <div class="timezone-grid">
          <div class="timezone-card" v-for="timezone in timezones" :key="timezone.id">
            <div class="timezone-flag">
              <span>{{ timezone.flag }}</span>
            </div>
            <h3 class="timezone-name">{{ timezone.name }}</h3>
            <p class="timezone-time">{{ timezone.time }}</p>
            <p class="timezone-note">{{ timezone.note }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      submitting: false,
      contactForm: {
        name: '',
        email: '',
        phone: '',
        location: '',
        level: 'beginner',
        goals: [],
        preferredTime: '',
        message: ''
      },
      formRules: {
        name: [
          { required: true, message: '请输入您的姓名 Please enter your name', trigger: 'blur' },
          { min: 2, max: 50, message: '姓名长度在 2 到 50 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址 Please enter email address', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址 Please enter a valid email address', trigger: ['blur', 'change'] }
        ],
        phone: [
          { min: 6, max: 20, message: '电话号码长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      },
      faqs: [
        {
          id: 1,
          icon: 'el-icon-question',
          question: '试课是免费的吗？',
          answer: '是的，我们提供完全免费的试课服务。试课时长为30分钟，您可以体验我们的教学方法和课程质量。'
        },
        {
          id: 2,
          icon: 'el-icon-time',
          question: '多久能安排试课？',
          answer: '通常在您提交申请后24小时内，我们会与您联系确认试课时间。我们会根据您的时区和偏好安排最合适的时间。'
        },
        {
          id: 3,
          icon: 'el-icon-video-camera',
          question: '试课需要什么设备？',
          answer: '您只需要一台能上网的电脑或平板，配备摄像头和麦克风。我们使用Zoom或Skype进行在线教学。'
        },
        {
          id: 4,
          icon: 'el-icon-document',
          question: '试课后如何继续学习？',
          answer: '试课结束后，老师会为您制定个性化的学习计划和课程安排。您可以选择适合的套餐开始正式学习。'
        }
      ],
      contactSteps: [
        {
          id: 1,
          icon: 'el-icon-edit',
          title: '填写申请表',
          description: '填写您的基本信息和学习需求，我们会根据这些信息为您匹配最合适的课程'
        },
        {
          id: 2,
          icon: 'el-icon-phone',
          title: '确认试课时间',
          description: '我们会在24小时内联系您，根据您的时区和偏好确认试课的具体时间'
        },
        {
          id: 3,
          icon: 'el-icon-video-camera',
          title: '参加免费试课',
          description: '30分钟的免费试课，体验我们的教学方法，了解您的中文水平'
        },
        {
          id: 4,
          icon: 'el-icon-s-promotion',
          title: '制定学习计划',
          description: '根据试课结果，为您制定个性化的学习计划和课程安排'
        }
      ],
      timezones: [
        {
          id: 1,
          flag: '🇨🇳',
          name: '北京时间 Beijing Time',
          time: 'GMT+8',
          note: '我们的标准时间'
        },
        {
          id: 2,
          flag: '🇬🇧',
          name: '伦敦时间 London Time',
          time: 'GMT+0 (GMT+1 夏令时)',
          note: '比北京时间晚8小时'
        },
        {
          id: 3,
          flag: '🇩🇪',
          name: '柏林时间 Berlin Time',
          time: 'GMT+1 (GMT+2 夏令时)',
          note: '比北京时间晚7小时'
        },
        {
          id: 4,
          flag: '🇺🇸',
          name: '纽约时间 New York Time',
          time: 'GMT-5 (GMT-4 夏令时)',
          note: '比北京时间晚13小时'
        },
        {
          id: 5,
          flag: '🇺🇸',
          name: '洛杉矶时间 Los Angeles Time',
          time: 'GMT-8 (GMT-7 夏令时)',
          note: '比北京时间晚16小时'
        },
        {
          id: 6,
          flag: '🇦🇺',
          name: '悉尼时间 Sydney Time',
          time: 'GMT+10 (GMT+11 夏令时)',
          note: '比北京时间早2小时'
        }
      ]
    }
  },
  methods: {
    submitForm() {
      this.$refs.contactForm.validate((valid) => {
        if (valid) {
          this.submitting = true
          
          // 模拟提交过程
          setTimeout(() => {
            this.submitting = false
            this.$message({
              type: 'success',
              message: '申请提交成功！我们会在24小时内与您联系。 Application submitted successfully! We will contact you within 24 hours.',
              duration: 5000
            })
            
            // 重置表单
            this.$refs.contactForm.resetFields()
            this.contactForm.goals = []
          }, 2000)
        } else {
          this.$message({
            type: 'error',
            message: '请检查表单信息 Please check the form information'
          })
          return false
        }
      })
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

/* 联系主要内容 */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: start;
}

/* 联系信息 */
.contact-info {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: var(--shadow);
  height: fit-content;
}

.info-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.info-subtitle {
  color: var(--text-light);
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.contact-methods {
  margin-bottom: 40px;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  padding: 20px;
  background: var(--bg-light);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.contact-method:hover {
  background: var(--primary-color);
  color: white;
  transform: translateX(10px);
}

.method-icon {
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  margin-right: 20px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact-method:hover .method-icon {
  background: white;
  color: var(--primary-color);
}

.method-details h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-dark);
  transition: color 0.3s ease;
}

.contact-method:hover .method-details h3 {
  color: white;
}

.method-details p {
  color: var(--text-light);
  margin-bottom: 5px;
  transition: color 0.3s ease;
}

.contact-method:hover .method-details p {
  color: rgba(255, 255, 255, 0.9);
}

/* 社交链接 */
.social-links {
  text-align: center;
}

.social-links h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text-dark);
}

.social-links p {
  color: var(--text-light);
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.social-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background: var(--bg-light);
  border-radius: 15px;
  text-decoration: none;
  color: var(--text-dark);
  transition: all 0.3s ease;
  min-width: 80px;
}

.social-icon:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-5px);
}

.social-icon i {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.social-icon span {
  font-size: 0.9rem;
  font-weight: 500;
}

/* 联系表单 */
.contact-form-container {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.form-header {
  text-align: center;
  margin-bottom: 30px;
}

.form-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.form-subtitle {
  color: var(--text-light);
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.form-description {
  color: var(--text-dark);
  line-height: 1.5;
}

.contact-form {
  margin-top: 30px;
}

/* 表单样式覆盖 */
.contact-form .el-form-item__label {
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.contact-form .el-input__inner,
.contact-form .el-textarea__inner {
  border-radius: 10px;
  border: 2px solid var(--border-color);
  transition: all 0.3s ease;
}

.contact-form .el-input__inner:focus,
.contact-form .el-textarea__inner:focus {
  border-color: var(--primary-color);
}

.contact-form .el-radio {
  margin-right: 20px;
  margin-bottom: 10px;
}

.contact-form .el-checkbox {
  margin-right: 20px;
  margin-bottom: 10px;
}

/* 常见问题 */
.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.faq-item {
  background: white;
  padding: 30px 25px;
  border-radius: 15px;
  box-shadow: var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
}

.faq-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.faq-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 1.5rem;
}

.faq-question {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-dark);
}

.faq-answer {
  color: var(--text-dark);
  line-height: 1.6;
}

/* 联系流程 */
.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.process-step {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: var(--shadow);
  position: relative;
  transition: all 0.3s ease;
}

.process-step:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.step-number {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}

.step-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto 20px;
  color: white;
  font-size: 1.8rem;
}

.step-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-dark);
}

.step-description {
  color: var(--text-dark);
  line-height: 1.6;
}

/* 时区信息 */
.timezone-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.timezone-card {
  background: white;
  padding: 25px 20px;
  border-radius: 15px;
  box-shadow: var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
}

.timezone-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
}

.timezone-flag {
  font-size: 2rem;
  margin-bottom: 15px;
}

.timezone-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.timezone-time {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 8px;
}

.timezone-note {
  color: var(--text-light);
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-header {
    padding: 100px 0 60px;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-info,
  .contact-form-container {
    padding: 30px 25px;
  }

  .contact-method {
    flex-direction: column;
    text-align: center;
  }

  .method-icon {
    margin-right: 0;
    margin-bottom: 15px;
  }

  .social-icons {
    gap: 10px;
  }

  .social-icon {
    min-width: 70px;
    padding: 12px;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }

  .timezone-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 2rem;
  }

  .contact-info,
  .contact-form-container {
    padding: 25px 20px;
  }

  .info-title,
  .form-title {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .contact-form .el-radio,
  .contact-form .el-checkbox {
    margin-right: 10px;
    margin-bottom: 15px;
  }
}
</style>