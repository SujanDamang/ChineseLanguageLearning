<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- 公司信息 -->
        <div class="footer-section">
          <div class="footer-logo">
            <span class="logo-icon">🇨🇳</span>
            <span class="logo-text chinese-text">学中文</span>
          </div>
          <p class="footer-description">
            专业的在线中文教学平台<br>
            Professional Online Chinese Learning Platform
          </p>
          <div class="social-links">
            <a href="#" class="social-link" title="微信 WeChat">
              <i class="el-icon-chat-dot-round"></i>
            </a>
            <a href="#" class="social-link" title="邮箱 Email">
              <i class="el-icon-message"></i>
            </a>
            <a href="#" class="social-link" title="电话 Phone">
              <i class="el-icon-phone"></i>
            </a>
          </div>
        </div>

        <!-- 快速链接 -->
        <div class="footer-section">
          <h4 class="footer-title">快速链接 Quick Links</h4>
          <ul class="footer-links">
            <li><router-link to="/">首页 Home</router-link></li>
            <li><router-link to="/about">关于我们 About Us</router-link></li>
            <li><router-link to="/courses">课程介绍 Courses</router-link></li>
            <li><router-link to="/teacher">老师介绍 Teacher</router-link></li>
          </ul>
        </div>

        <!-- 课程类型 -->
        <div class="footer-section">
          <h4 class="footer-title">课程类型 Course Types</h4>
          <ul class="footer-links">
            <li><a href="#">初级中文 Beginner Chinese</a></li>
            <li><a href="#">商务中文 Business Chinese</a></li>
            <li><a href="#">HSK考试 HSK Preparation</a></li>
            <li><a href="#">口语练习 Speaking Practice</a></li>
          </ul>
        </div>

        <!-- 联系信息 -->
        <div class="footer-section">
          <h4 class="footer-title">联系我们 Contact Us</h4>
          <div class="contact-info">
            <div class="contact-item">
              <i class="el-icon-message"></i>
              <span>contact@learnchineseonline.com</span>
            </div>
            <div class="contact-item">
              <i class="el-icon-phone"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div class="contact-item">
              <i class="el-icon-time"></i>
              <span>周一至周日 Mon-Sun<br>9:00 AM - 9:00 PM (EST)</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; 2024 学中文 Learn Chinese Online. All rights reserved.</p>
          <p class="chinese-text">专业中文教学 | 让世界了解中国文化</p>
        </div>
        <div class="footer-links-bottom">
          <a href="#">隐私政策 Privacy Policy</a>
          <a href="#">服务条款 Terms of Service</a>
          <a href="#">网站地图 Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 60px 0 20px;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.logo-icon {
  font-size: 2rem;
  margin-right: 10px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--secondary-color);
}

.footer-description {
  color: #bdc3c7;
  line-height: 1.6;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary-color);
  transform: translateY(-2px);
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--secondary-color);
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: var(--secondary-color);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #bdc3c7;
  font-size: 0.95rem;
}

.contact-item i {
  color: var(--secondary-color);
  margin-top: 2px;
  font-size: 1.1rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.copyright {
  color: #95a5a6;
  font-size: 0.9rem;
}

.copyright p {
  margin-bottom: 5px;
}

.footer-links-bottom {
  display: flex;
  gap: 20px;
}

.footer-links-bottom a {
  color: #95a5a6;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links-bottom a:hover {
  color: var(--secondary-color);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .footer-links-bottom {
    flex-wrap: wrap;
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .contact-item {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-content {
    gap: 25px;
  }

  .footer-links-bottom {
    flex-direction: column;
    gap: 10px;
  }
}
</style>