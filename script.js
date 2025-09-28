document.addEventListener('DOMContentLoaded', function() {
    // 防止页面内容闪现消失的优化
    document.body.style.visibility = 'visible';
    
    // 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('bg-white', 'shadow');
            navbar.classList.remove('bg-white/80');
        } else {
            navbar.classList.remove('bg-white', 'shadow');
            navbar.classList.add('bg-white/80');
        }
    });
    
    // 初始化核心功能
    initCoreFunctions();
    
    // 初始化时直接显示内容，避免动画引起的闪烁
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('opacity-0');
        section.classList.add('slide-up', 'fade-in');
    });
    
    // 初始化预约规则弹窗
    initRulesModal();
    
    // 初始化所有核心功能
    function initCoreFunctions() {
        console.log('图书馆座位预约系统核心功能已初始化');
        
        // 初始化进度条数据
        initProgressBars();
        
        // 初始化实时座位查询功能
        initSeatQuery();
        
        // 初始化热门区域预约功能
        initHotAreaReservation();
        
        // 初始化实时拥挤度看板
        initCrowdMonitor();
        
        // 初始化用户反馈功能
        initUserFeedback();
        
        // 初始化特色轮播图
    initFeaturedCarousel();
    }
    
    // 实时拥挤度看板初始化
    function initCrowdMonitor() {
        // 初始化拥挤度数据
        updateCrowdData();
        
        // 模拟数据更新
        setInterval(updateCrowdData, 30000); // 每30秒更新一次
    }
    
    // 更新拥挤度数据
    function updateCrowdData() {
        // 总座位数和使用情况数据
        const totalSeats = 1255;
        const usedSeats = 439;
        const freeSeats = 816;
        const usageRate = 35;
        
        // 更新数据显示
        try {
            document.querySelector('#total-seats').textContent = totalSeats;
            document.querySelector('#used-seats').textContent = usedSeats;
            document.querySelector('#available-seats').textContent = freeSeats;
            document.querySelector('#overall-utilization').textContent = usageRate + '%';
        } catch (error) {
            console.log('数据显示元素尚未加载完成');
        }
        
        // 随机更新区域拥挤度数据 - 热门区域（60-90%范围）
        try {
            // 大自习室A拥挤度更新
            const studyRoomARate = Math.round(Math.random() * 30) + 60; // 60-90%范围
            if (document.querySelector('.study-room-a .progress-fill')) {
                document.querySelector('.study-room-a .flex.justify-between.text-sm.mb-1 span:last-child').textContent = studyRoomARate + '%';
                document.querySelector('.study-room-a .progress-fill').style.width = studyRoomARate + '%';
            }
            
            // 大自习室B拥挤度更新
            const studyRoomBRate = Math.round(Math.random() * 30) + 60; // 60-90%范围
            if (document.querySelector('.study-room-b .progress-fill')) {
                document.querySelector('.study-room-b .flex.justify-between.text-sm.mb-1 span:last-child').textContent = studyRoomBRate + '%';
                document.querySelector('.study-room-b .progress-fill').style.width = studyRoomBRate + '%';
            }
            
            // 大自习室C拥挤度更新
            const studyRoomCRate = Math.round(Math.random() * 30) + 60; // 60-90%范围
            if (document.querySelector('.study-room-c .progress-fill')) {
                document.querySelector('.study-room-c .flex.justify-between.text-sm.mb-1 span:last-child').textContent = studyRoomCRate + '%';
                document.querySelector('.study-room-c .progress-fill').style.width = studyRoomCRate + '%';
            }
            
            // 大自习室D拥挤度更新
            const studyRoomDRate = Math.round(Math.random() * 30) + 60; // 60-90%范围
            if (document.querySelector('.study-room-d .progress-fill')) {
                document.querySelector('.study-room-d .flex.justify-between.text-sm.mb-1 span:last-child').textContent = studyRoomDRate + '%';
                document.querySelector('.study-room-d .progress-fill').style.width = studyRoomDRate + '%';
            }
            
            // 计科阅览室拥挤度更新
            const csRoomRate = Math.round(Math.random() * 30) + 60; // 60-90%范围
            if (document.querySelector('.computer-science .progress-fill')) {
                document.querySelector('.computer-science .flex.justify-between.text-sm.mb-1 span:last-child').textContent = csRoomRate + '%';
                document.querySelector('.computer-science .progress-fill').style.width = csRoomRate + '%';
            }
            
            // 语言文艺阅览室A拥挤度更新
            const languageARate = Math.round(Math.random() * 30) + 60; // 60-90%范围
            if (document.querySelector('.language-a .progress-fill')) {
                document.querySelector('.language-a .flex.justify-between.text-sm.mb-1 span:last-child').textContent = languageARate + '%';
                document.querySelector('.language-a .progress-fill').style.width = languageARate + '%';
            }
            
            // 语言文艺阅览室B拥挤度更新
            const languageBRate = Math.round(Math.random() * 30) + 60; // 60-90%范围
            if (document.querySelector('.language-b .progress-fill')) {
                document.querySelector('.language-b .flex.justify-between.text-sm.mb-1 span:last-child').textContent = languageBRate + '%';
                document.querySelector('.language-b .progress-fill').style.width = languageBRate + '%';
            }
            
            // 经管阅览室1A拥挤度更新
            const economic1ARate = Math.round(Math.random() * 30) + 60; // 60-90%范围
            if (document.querySelector('.economic-1a .progress-fill')) {
                document.querySelector('.economic-1a .flex.justify-between.text-sm.mb-1 span:last-child').textContent = economic1ARate + '%';
                document.querySelector('.economic-1a .progress-fill').style.width = economic1ARate + '%';
            }
            
            // 经管阅览室1B拥挤度更新
            const economic1BRate = Math.round(Math.random() * 30) + 60; // 60-90%范围
            if (document.querySelector('.economic-1b .progress-fill')) {
                document.querySelector('.economic-1b .flex.justify-between.text-sm.mb-1 span:last-child').textContent = economic1BRate + '%';
                document.querySelector('.economic-1b .progress-fill').style.width = economic1BRate + '%';
            }
            
            // 经管阅览室2A拥挤度更新
            const economic2ARate = Math.round(Math.random() * 30) + 60; // 60-90%范围
            if (document.querySelector('.economic-2a .progress-fill')) {
                document.querySelector('.economic-2a .flex.justify-between.text-sm.mb-1 span:last-child').textContent = economic2ARate + '%';
                document.querySelector('.economic-2a .progress-fill').style.width = economic2ARate + '%';
            }
            
            // 经管阅览室2B拥挤度更新
            const economic2BRate = Math.round(Math.random() * 30) + 60; // 60-90%范围
            if (document.querySelector('.economic-2b .progress-fill')) {
                document.querySelector('.economic-2b .flex.justify-between.text-sm.mb-1 span:last-child').textContent = economic2BRate + '%';
                document.querySelector('.economic-2b .progress-fill').style.width = economic2BRate + '%';
            }
        } catch (error) {
            console.log('热门区域拥挤度元素尚未加载完成');
        }
        
        // 随机更新区域拥挤度数据 - 次热门区域（30-50%范围）
        try {
            // 报刊工具阅览室A拥挤度更新
            const newspaperARate = Math.round(Math.random() * 20) + 30; // 30-50%范围
            if (document.querySelector('.newspaper-a .progress-fill')) {
                document.querySelector('.newspaper-a .flex.justify-between.text-sm.mb-1 span:last-child').textContent = newspaperARate + '%';
                document.querySelector('.newspaper-a .progress-fill').style.width = newspaperARate + '%';
            }
            
            // 报刊工具阅览室B拥挤度更新
            const newspaperBRate = Math.round(Math.random() * 20) + 30; // 30-50%范围
            if (document.querySelector('.newspaper-b .progress-fill')) {
                document.querySelector('.newspaper-b .flex.justify-between.text-sm.mb-1 span:last-child').textContent = newspaperBRate + '%';
                document.querySelector('.newspaper-b .progress-fill').style.width = newspaperBRate + '%';
            }
            
            // 社科阅览区A拥挤度更新
            const socialARate = Math.round(Math.random() * 20) + 30; // 30-50%范围
            if (document.querySelector('.social-a .progress-fill')) {
                document.querySelector('.social-a .flex.justify-between.text-sm.mb-1 span:last-child').textContent = socialARate + '%';
                document.querySelector('.social-a .progress-fill').style.width = socialARate + '%';
            }
            
            // 社科阅览区B拥挤度更新
            const socialBRate = Math.round(Math.random() * 20) + 30; // 30-50%范围
            if (document.querySelector('.social-b .progress-fill')) {
                document.querySelector('.social-b .flex.justify-between.text-sm.mb-1 span:last-child').textContent = socialBRate + '%';
                document.querySelector('.social-b .progress-fill').style.width = socialBRate + '%';
            }
        } catch (error) {
            console.log('次热门区域拥挤度元素尚未加载完成');
        }
        
        // 随机更新区域拥挤度数据 - 小众区域（5-20%范围）
        try {
            // 政法外文阅览室拥挤度更新
            const lawForeignRate = Math.round(Math.random() * 15) + 5; // 5-20%范围
            if (document.querySelector('.law-foreign .progress-fill')) {
                document.querySelector('.law-foreign .flex.justify-between.text-sm.mb-1 span:last-child').textContent = lawForeignRate + '%';
                document.querySelector('.law-foreign .progress-fill').style.width = lawForeignRate + '%';
            }
            
            // 教师阅览室拥挤度更新
            const teacherRoomRate = Math.round(Math.random() * 15) + 5; // 5-20%范围
            if (document.querySelector('.teacher-reading .progress-fill')) {
                document.querySelector('.teacher-reading .flex.justify-between.text-sm.mb-1 span:last-child').textContent = teacherRoomRate + '%';
                document.querySelector('.teacher-reading .progress-fill').style.width = teacherRoomRate + '%';
            }
            
            // 素教中心拥挤度更新
            const qualityEdRate = Math.round(Math.random() * 15) + 5; // 5-20%范围
            if (document.querySelector('.quality-education .progress-fill')) {
                document.querySelector('.quality-education .flex.justify-between.text-sm.mb-1 span:last-child').textContent = qualityEdRate + '%';
                document.querySelector('.quality-education .progress-fill').style.width = qualityEdRate + '%';
            }
            
            // 蒙文阅览室A拥挤度更新
            const mongolianARate = Math.round(Math.random() * 15) + 5; // 5-20%范围
            if (document.querySelector('.mongolian-a .progress-fill')) {
                document.querySelector('.mongolian-a .flex.justify-between.text-sm.mb-1 span:last-child').textContent = mongolianARate + '%';
                document.querySelector('.mongolian-a .progress-fill').style.width = mongolianARate + '%';
            }
            
            // 蒙文阅览室B拥挤度更新
            const mongolianBRate = Math.round(Math.random() * 15) + 5; // 5-20%范围
            if (document.querySelector('.mongolian-b .progress-fill')) {
                document.querySelector('.mongolian-b .flex.justify-between.text-sm.mb-1 span:last-child').textContent = mongolianBRate + '%';
                document.querySelector('.mongolian-b .progress-fill').style.width = mongolianBRate + '%';
            }
        } catch (error) {
            console.log('小众区域拥挤度元素尚未加载完成');
        }
    }

    // 移动端菜单切换
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            if (mobileMenu.classList.contains('opacity-0')) {
                // 打开菜单
                mobileMenu.classList.remove('opacity-0', '-translate-y-full', 'pointer-events-none');
                menuToggle.innerHTML = '<i class="fa fa-times"></i>';
            } else {
                // 关闭菜单
                mobileMenu.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
                menuToggle.innerHTML = '<i class="fa fa-bars"></i>';
            }
        });
    }
    
    // 登录/注册功能
    const loginButton = document.getElementById('login-button');
    const mobileLoginButton = document.getElementById('mobile-login-button');
    const loginModal = document.getElementById('login-modal');
    const closeLoginModal = document.getElementById('close-login-modal');
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    // 登录表单元素
    const loginPhoneInput = document.getElementById('login-phone');
    const loginVerifyCodeInput = document.getElementById('login-verify-code');
    const loginSubmitButton = document.getElementById('login-submit');
    const getVerifyCodeButton = document.getElementById('get-verify-code');
    const rememberMeCheckbox = document.getElementById('remember-me');
    const loginErrorElement = document.getElementById('login-error');
    
    // 注册表单元素
    const registerUsernameInput = document.getElementById('register-username');
    const registerPhoneInput = document.getElementById('register-phone');
    const registerPasswordInput = document.getElementById('register-password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const registerSubmitButton = document.getElementById('register-submit');
    const toggleRegisterPasswordButton = document.getElementById('toggle-register-password');
    const toggleConfirmPasswordButton = document.getElementById('toggle-confirm-password');
    const clearUsernameButton = document.getElementById('clear-username');
    const goToLoginLink = document.getElementById('go-to-login');
    const registerErrorElement = document.getElementById('register-error');
    
    // 密码强度相关元素
    const passwordStrengthWeak = document.getElementById('password-strength-weak');
    const passwordStrengthMedium = document.getElementById('password-strength-medium');
    const passwordStrengthStrong = document.getElementById('password-strength-strong');
    const passwordStrengthText = document.getElementById('password-strength-text');
    
    // 错误提示元素
    const usernameError = document.getElementById('username-error');
    const phoneError = document.getElementById('phone-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    
    // 打开登录弹窗
    if (loginButton && loginModal) {
        loginButton.addEventListener('click', () => {
            loginModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // 防止背景滚动
            // 确保默认显示登录表单
            showLoginForm();
            // 检查是否有记住的手机号
            const savedPhone = localStorage.getItem('rememberedPhone');
            if (savedPhone && loginPhoneInput) {
                loginPhoneInput.value = savedPhone;
                if (rememberMeCheckbox) rememberMeCheckbox.checked = true;
            }
        });
    }
    
    if (mobileLoginButton && loginModal) {
        mobileLoginButton.addEventListener('click', () => {
            loginModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            // 关闭移动端菜单
            if (mobileMenu && !mobileMenu.classList.contains('opacity-0')) {
                mobileMenu.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
                menuToggle.innerHTML = '<i class="fa fa-bars"></i>';
            }
            // 确保默认显示登录表单
            showLoginForm();
            // 检查是否有记住的手机号
            const savedPhone = localStorage.getItem('rememberedPhone');
            if (savedPhone && loginPhoneInput) {
                loginPhoneInput.value = savedPhone;
                if (rememberMeCheckbox) rememberMeCheckbox.checked = true;
            }
        });
    }
    
    // 关闭登录弹窗
    if (closeLoginModal && loginModal) {
        closeLoginModal.addEventListener('click', () => {
            loginModal.classList.add('hidden');
            document.body.style.overflow = '';
            // 重置错误提示
            resetAllErrors();
        });
    }
    
    // 点击模态框外部关闭
    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.add('hidden');
                document.body.style.overflow = '';
                // 重置错误提示
                resetAllErrors();
            }
        });
    }
    
    // 切换到登录表单
    if (loginTab) {
        loginTab.addEventListener('click', showLoginForm);
    }
    
    // 切换到注册表单
    if (registerTab) {
        registerTab.addEventListener('click', showRegisterForm);
    }
    
    // 去登录链接
    if (goToLoginLink) {
        goToLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            showLoginForm();
        });
    }
    
    // 显示登录表单
    function showLoginForm() {
        if (loginTab && registerTab && loginFormContainer && registerFormContainer) {
            loginTab.classList.add('text-primary', 'border-b-2', 'border-primary');
            loginTab.classList.remove('text-gray-500');
            registerTab.classList.remove('text-primary', 'border-b-2', 'border-primary');
            registerTab.classList.add('text-gray-500');
            loginFormContainer.classList.remove('hidden');
            registerFormContainer.classList.add('hidden');
        }
        // 重置错误提示
        resetAllErrors();
    }
    
    // 显示注册表单
    function showRegisterForm() {
        if (loginTab && registerTab && loginFormContainer && registerFormContainer) {
            registerTab.classList.add('text-primary', 'border-b-2', 'border-primary');
            registerTab.classList.remove('text-gray-500');
            loginTab.classList.remove('text-primary', 'border-b-2', 'border-primary');
            loginTab.classList.add('text-gray-500');
            registerFormContainer.classList.remove('hidden');
            loginFormContainer.classList.add('hidden');
        }
        // 重置错误提示
        resetAllErrors();
    }
    
    // 切换密码可见性
    function togglePasswordVisibility(input, button) {
        if (!input || !button) return;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        button.innerHTML = type === 'password' ? '<i class="fa fa-eye-slash"></i>' : '<i class="fa fa-eye"></i>';
    }
    
    // 获取验证码按钮点击事件
    if (getVerifyCodeButton) {
        getVerifyCodeButton.addEventListener('click', () => {
            if (!loginPhoneInput) return;
            
            const phone = loginPhoneInput.value.trim();
            
            // 验证手机号格式
            if (!/^1[3-9]\d{9}$/.test(phone)) {
                loginErrorElement.textContent = '请输入有效的手机号码';
                loginErrorElement.classList.remove('hidden');
                return;
            }
            
            // 隐藏错误提示
            loginErrorElement.classList.add('hidden');
            
            // 倒计时功能
            let countdown = 60;
            getVerifyCodeButton.disabled = true;
            getVerifyCodeButton.textContent = `${countdown}秒后重试`;
            
            const timer = setInterval(() => {
                countdown--;
                getVerifyCodeButton.textContent = `${countdown}秒后重试`;
                
                if (countdown <= 0) {
                    clearInterval(timer);
                    getVerifyCodeButton.disabled = false;
                    getVerifyCodeButton.textContent = '获取验证码';
                }
            }, 1000);
            
            // 模拟发送验证码（实际项目中应该发送请求到服务器）
            console.log('向手机号发送验证码:', phone);
            alert('验证码已发送，请注意查收');
        });
    }
    
    // 清除用户名
    if (clearUsernameButton && registerUsernameInput) {
        clearUsernameButton.addEventListener('click', () => {
            registerUsernameInput.value = '';
            clearUsernameButton.classList.add('hidden');
            if (usernameError) usernameError.classList.add('hidden');
            validateRegisterForm();
        });
    }
    
    // 手机号输入事件（登录表单）
    if (loginPhoneInput) {
        loginPhoneInput.addEventListener('input', () => {
            const phone = loginPhoneInput.value.trim();
            // 只允许输入数字
            loginPhoneInput.value = phone.replace(/\D/g, '');
            validateLoginForm();
        });
    }
    
    // 验证码输入事件（登录表单）
    if (loginVerifyCodeInput) {
        loginVerifyCodeInput.addEventListener('input', () => {
            const verifyCode = loginVerifyCodeInput.value.trim();
            // 只允许输入数字
            loginVerifyCodeInput.value = verifyCode.replace(/\D/g, '');
            validateLoginForm();
        });
    }
    
    // 用户名输入事件
    if (registerUsernameInput) {
        registerUsernameInput.addEventListener('input', () => {
            const username = registerUsernameInput.value.trim();
            if (username && clearUsernameButton) {
                clearUsernameButton.classList.remove('hidden');
                // 实时校验用户名格式
                if (!/^[a-zA-Z0-9]{4,16}$/.test(username)) {
                    registerUsernameInput.classList.add('border-red-500');
                    if (usernameError) {
                        usernameError.textContent = '用户名必须为4-16位字母、数字组合';
                        usernameError.classList.remove('hidden');
                    }
                } else {
                    registerUsernameInput.classList.remove('border-red-500');
                    if (usernameError) usernameError.classList.add('hidden');
                }
            } else if (clearUsernameButton) {
                clearUsernameButton.classList.add('hidden');
                registerUsernameInput.classList.remove('border-red-500');
                if (usernameError) usernameError.classList.add('hidden');
            }
            validateRegisterForm();
        });
    }
    
    // 手机号输入事件
    if (registerPhoneInput) {
        registerPhoneInput.addEventListener('input', () => {
            const phone = registerPhoneInput.value.trim();
            // 只允许输入数字
            registerPhoneInput.value = phone.replace(/\D/g, '');
            
            // 实时校验手机号格式
            if (phone && !/^1[3-9]\d{9}$/.test(phone)) {
                registerPhoneInput.classList.add('border-red-500');
                if (phoneError) {
                    phoneError.textContent = '请输入有效的11位手机号码';
                    phoneError.classList.remove('hidden');
                }
            } else {
                registerPhoneInput.classList.remove('border-red-500');
                if (phoneError) phoneError.classList.add('hidden');
            }
            validateRegisterForm();
        });
    }
    
    // 密码强度检测
    if (registerPasswordInput) {
        registerPasswordInput.addEventListener('input', () => {
            const password = registerPasswordInput.value;
            let strength = 0;
            
            // 重置强度指示器
            if (passwordStrengthWeak) passwordStrengthWeak.className = 'flex-1 h-1 bg-gray-200 rounded-full';
            if (passwordStrengthMedium) passwordStrengthMedium.className = 'flex-1 h-1 bg-gray-200 rounded-full';
            if (passwordStrengthStrong) passwordStrengthStrong.className = 'flex-1 h-1 bg-gray-200 rounded-full';
            if (passwordStrengthText) passwordStrengthText.textContent = '';
            
            if (password.length >= 6) {
                // 简单密码（仅数字或仅字母）
                if (/^\d+$/.test(password) || /^[a-zA-Z]+$/.test(password)) {
                    strength = 1;
                    if (passwordStrengthWeak) passwordStrengthWeak.className = 'flex-1 h-1 bg-red-500 rounded-full';
                    if (passwordStrengthText) {
                        passwordStrengthText.textContent = '弱';
                        passwordStrengthText.className = 'mt-1 text-xs text-red-500';
                    }
                }
                // 中等密码（字母+数字）
                else if (/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(password)) {
                    strength = 2;
                    if (passwordStrengthWeak) passwordStrengthWeak.className = 'flex-1 h-1 bg-yellow-500 rounded-full';
                    if (passwordStrengthMedium) passwordStrengthMedium.className = 'flex-1 h-1 bg-yellow-500 rounded-full';
                    if (passwordStrengthText) {
                        passwordStrengthText.textContent = '中';
                        passwordStrengthText.className = 'mt-1 text-xs text-yellow-500';
                    }
                }
                // 强密码（字母+数字+特殊字符）
                else if (/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]+$/.test(password)) {
                    strength = 3;
                    if (passwordStrengthWeak) passwordStrengthWeak.className = 'flex-1 h-1 bg-green-500 rounded-full';
                    if (passwordStrengthMedium) passwordStrengthMedium.className = 'flex-1 h-1 bg-green-500 rounded-full';
                    if (passwordStrengthStrong) passwordStrengthStrong.className = 'flex-1 h-1 bg-green-500 rounded-full';
                    if (passwordStrengthText) {
                        passwordStrengthText.textContent = '强';
                        passwordStrengthText.className = 'mt-1 text-xs text-green-500';
                    }
                }
            }
            
            validateRegisterForm();
            validateConfirmPassword();
        });
    }
    
    // 确认密码校验
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    }
    
    function validateConfirmPassword() {
        if (!registerPasswordInput || !confirmPasswordInput || !confirmPasswordError) return;
        
        const password = registerPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (confirmPassword && password !== confirmPassword) {
            confirmPasswordInput.classList.add('border-red-500');
            confirmPasswordError.textContent = '两次密码输入不一致，请重新输入';
            confirmPasswordError.classList.remove('hidden');
        } else {
            confirmPasswordInput.classList.remove('border-red-500');
            confirmPasswordError.classList.add('hidden');
        }
        validateRegisterForm();
    }
    
    // 验证注册表单
    function validateRegisterForm() {
        if (!registerSubmitButton || !registerUsernameInput || !registerPhoneInput || !registerPasswordInput || !confirmPasswordInput) return;
        
        const username = registerUsernameInput.value.trim();
        const phone = registerPhoneInput.value.trim();
        const password = registerPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        const isUsernameValid = username && /^[a-zA-Z0-9]{4,16}$/.test(username);
        const isPhoneValid = phone && /^1[3-9]\d{9}$/.test(phone);
        const isPasswordValid = password.length >= 6 && password.length <= 12;
        const isConfirmPasswordValid = password === confirmPassword;
        
        if (isUsernameValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
            registerSubmitButton.classList.remove('bg-gray-300', 'cursor-not-allowed');
            registerSubmitButton.classList.add('bg-primary');
            registerSubmitButton.disabled = false;
        } else {
            registerSubmitButton.classList.add('bg-gray-300', 'cursor-not-allowed');
            registerSubmitButton.classList.remove('bg-primary');
            registerSubmitButton.disabled = true;
        }
    }
    
    // 验证登录表单
    function validateLoginForm() {
        if (!loginSubmitButton || !loginPhoneInput || !loginVerifyCodeInput) return;
        
        const phone = loginPhoneInput.value.trim();
        const verifyCode = loginVerifyCodeInput.value.trim();
        
        if (phone && verifyCode && verifyCode.length === 6) {
            loginSubmitButton.classList.remove('bg-gray-300', 'cursor-not-allowed');
            loginSubmitButton.classList.add('bg-primary');
            loginSubmitButton.disabled = false;
        } else {
            loginSubmitButton.classList.add('bg-gray-300', 'cursor-not-allowed');
            loginSubmitButton.classList.remove('bg-primary');
            loginSubmitButton.disabled = true;
        }
    }
    
    // 重置所有错误提示
    function resetAllErrors() {
        if (loginErrorElement) loginErrorElement.classList.add('hidden');
        if (registerErrorElement) registerErrorElement.classList.add('hidden');
        if (usernameError) usernameError.classList.add('hidden');
        if (phoneError) phoneError.classList.add('hidden');
        if (confirmPasswordError) confirmPasswordError.classList.add('hidden');
        
        if (registerUsernameInput) registerUsernameInput.classList.remove('border-red-500');
        if (registerPhoneInput) registerPhoneInput.classList.remove('border-red-500');
        if (confirmPasswordInput) confirmPasswordInput.classList.remove('border-red-500');
    }
    
    // 登录表单提交
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!loginPhoneInput || !loginVerifyCodeInput || !loginSubmitButton || !loginErrorElement) return;
            
            const phone = loginPhoneInput.value.trim();
            const verifyCode = loginVerifyCodeInput.value.trim();
            
            // 隐藏之前的错误信息
            loginErrorElement.classList.add('hidden');
            
            // 验证手机号格式
            if (!/^1[3-9]\d{9}$/.test(phone)) {
                loginErrorElement.textContent = '请输入有效的手机号码';
                loginErrorElement.classList.remove('hidden');
                return;
            }
            
            // 验证验证码长度
            if (verifyCode.length !== 6 || !/^\d+$/.test(verifyCode)) {
                loginErrorElement.textContent = '请输入6位数字验证码';
                loginErrorElement.classList.remove('hidden');
                return;
            }
            
            // 模拟登录处理
            loginSubmitButton.textContent = '登录中...';
            loginSubmitButton.disabled = true;
            
            setTimeout(() => {
                // 模拟成功登录（实际项目中应该发送请求到服务器）
                if (verifyCode === '123456') { // 简单模拟，实际应该是服务器验证
                    console.log('登录成功:', { phone });
                    
                    // 记住手机号
                    if (rememberMeCheckbox && rememberMeCheckbox.checked) {
                        localStorage.setItem('rememberedPhone', phone);
                    } else {
                        localStorage.removeItem('rememberedPhone');
                    }
                    
                    loginModal.classList.add('hidden');
                    document.body.style.overflow = '';
                    alert('登录成功');
                    // 这里可以添加登录成功后的操作，比如跳转到首页或刷新页面
                } else {
                    loginErrorElement.textContent = '验证码错误，请重新输入';
                    loginErrorElement.classList.remove('hidden');
                    loginSubmitButton.textContent = '登录';
                    loginSubmitButton.disabled = false;
                }
            }, 1000);
        });
    }
    
    // 注册表单提交
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!registerUsernameInput || !registerPhoneInput || !registerPasswordInput || !registerSubmitButton || !registerErrorElement) return;
            
            const username = registerUsernameInput.value.trim();
            const phone = registerPhoneInput.value.trim();
            const password = registerPasswordInput.value;
            
            // 隐藏之前的错误信息
            registerErrorElement.classList.add('hidden');
            
            // 模拟注册处理
            registerSubmitButton.textContent = '注册中...';
            registerSubmitButton.disabled = true;
            
            setTimeout(() => {
                // 模拟注册成功（实际项目中应该发送请求到服务器）
                const randomSuccess = Math.random() > 0.2; // 80%的概率成功
                
                if (randomSuccess) {
                    console.log('注册成功:', { username, phone });
                    
                    // 注册成功后自动切换到登录表单并填充手机号
                    showLoginForm();
                    if (loginPhoneInput) {
                        loginPhoneInput.value = phone;
                        validateLoginForm();
                    }
                    alert('注册成功，请登录');
                } else {
                    // 模拟注册失败
                    registerErrorElement.textContent = '用户名已存在';
                    registerErrorElement.classList.remove('hidden');
                    registerSubmitButton.textContent = '注册';
                    registerSubmitButton.disabled = false;
                }
            }, 1000);
        });
    }
    
    // 切换注册密码可见性
    if (toggleRegisterPasswordButton && registerPasswordInput) {
        toggleRegisterPasswordButton.addEventListener('click', () => {
            togglePasswordVisibility(registerPasswordInput, toggleRegisterPasswordButton);
        });
    }
    
    // 切换确认密码可见性
    if (toggleConfirmPasswordButton && confirmPasswordInput) {
        toggleConfirmPasswordButton.addEventListener('click', () => {
            togglePasswordVisibility(confirmPasswordInput, toggleConfirmPasswordButton);
        });
    }
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                // 关闭移动端菜单
                if (!mobileMenu.classList.contains('opacity-0')) {
                    mobileMenu.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
                    mobileMenu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
                }
            }
        });
    });

    // 初始化进度条数据展示
    function initProgressBars() {
        // 核心区域占用率数据
        const highDemandData = [
            { name: '教师阅览室', rate: 100 },
            { name: '报刊工具阅览室A', rate: 64 },
            { name: '报刊工具阅览室B', rate: 62 },
            { name: '三楼走廊', rate: 59 },
            { name: '四楼走廊', rate: 54 }
        ];

        // 创建进度条展示
        const highDemandContainer = document.getElementById('highDemandChart');
        if (highDemandContainer) {
            let html = '<div class="space-y-4">';
            highDemandData.forEach(item => {
                html += `
                    <div class="data-card p-4 bg-white rounded-lg shadow">
                        <div class="flex justify-between mb-2">
                            <span class="font-medium text-gray-700">${item.name}</span>
                            <span class="text-blue-600 font-bold">${item.rate}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 0%" data-rate="${item.rate}"></div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            highDemandContainer.innerHTML = html;
        }

        // 楼层利用率数据
        const floorUtilizationData = [
            { name: '三楼', rate: 65, color: '#165DFF' },
            { name: '四楼', rate: 45, color: '#36CBCB' },
            { name: '五楼', rate: 15, color: '#722ED1' }
        ];

        const utilizationContainer = document.getElementById('utilizationChart');
        if (utilizationContainer) {
            let html = '<div class="space-y-4">';
            floorUtilizationData.forEach(item => {
                html += `
                    <div class="data-card p-4 bg-white rounded-lg shadow">
                        <div class="flex justify-between mb-2">
                            <span class="font-medium text-gray-700">${item.name}</span>
                            <span style="color: ${item.color}" class="font-bold">${item.rate}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 0%; background-color: ${item.color}" data-rate="${item.rate}"></div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            utilizationContainer.innerHTML = html;
        }

        // 时间段座位使用数据
        const seatUsageData = [
            { time: '8:00', occupied: 180, total: 300 },
            { time: '10:00', occupied: 280, total: 300 },
            { time: '14:00', occupied: 292, total: 300 },
            { time: '16:00', occupied: 270, total: 300 },
            { time: '18:00', occupied: 220, total: 300 }
        ];

        const seatUsageContainer = document.getElementById('seatUsageChart');
        if (seatUsageContainer) {
            let html = '<div class="space-y-4">';
            seatUsageData.forEach(item => {
                const percentage = (item.occupied / item.total) * 100;
                html += `
                    <div class="data-card p-4 bg-white rounded-lg shadow">
                        <div class="flex justify-between mb-2">
                            <span class="font-medium text-gray-700">${item.time}</span>
                            <span class="text-green-600 font-bold">${item.occupied}/${item.total} (${Math.round(percentage)}%)</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 0%; background-color: #36CBCB" data-rate="${percentage}"></div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            seatUsageContainer.innerHTML = html;
        }


    }

    // 动画显示进度条
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const rate = bar.getAttribute('data-rate');
            // 添加延迟动画效果
            setTimeout(() => {
                bar.style.width = rate + '%';
            }, 300);
        });
    }

    // 滚动监听，添加动画效果
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // 避免重复添加动画类导致的闪烁问题
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('slide-up')) {
                entry.target.classList.add('slide-up', 'fade-in');
                entry.target.classList.remove('opacity-0');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察所有section元素
    document.querySelectorAll('section').forEach(section => {
        // 只对还没有动画类的元素添加观察
        if (!section.classList.contains('slide-up')) {
            section.classList.add('opacity-0');
            observer.observe(section);
        }
    });

    // 观察图表容器，当进入视口时动画显示进度条
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => {
        const chartObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    chartObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        chartObserver.observe(container);
    });

    // 响应式调整
    function handleResize() {
        // 响应式调整逻辑
    }

    // 添加窗口大小改变监听器
    window.addEventListener('resize', handleResize);

    // 初始化时执行一次
    handleResize();

    // 初始化实时座位查询功能
    function initSeatQuery() {
        // 获取筛选器元素
        const floorSelect = document.getElementById('floor-select');
        const areaSelect = document.getElementById('area-select');
        const seatTypeSelect = document.getElementById('seat-type-select');
        const dateSelect = document.getElementById('date-select');
        const seatGridContainer = document.getElementById('seat-grid');
        const searchBtn = document.getElementById('search-btn');
        const areaTitle = document.querySelector('#seat-query .bg-white.rounded-xl.shadow-md.p-8 h3');
        
        // 绑定筛选器事件
        if (floorSelect && areaSelect && seatTypeSelect && dateSelect && seatGridContainer && searchBtn && areaTitle) {
            // 楼层变化时更新区域选项
            floorSelect.addEventListener('change', function() {
                updateAreaOptions(floorSelect.value, areaSelect);
                validateSelection();
            });
            
            // 区域变化时验证选择
            areaSelect.addEventListener('change', validateSelection);
            
            // 座位类型变化时验证选择
            seatTypeSelect.addEventListener('change', validateSelection);
            
            // 只保留查询按钮的点击事件，让座位显示只在用户点击查询按钮后才更新
            searchBtn.addEventListener('click', updateSeatGrid);
            
            // 初始化时验证选择
            validateSelection();
            
            // 初始化区域标题为空
            areaTitle.textContent = '';
            
            // 初始化座位网格为空，使用更美观的提示样式
            seatGridContainer.innerHTML = `
                <div class="grid-cols-10 gap-4 col-span-10 flex flex-col items-center justify-center py-24 text-center">
                    <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i class="fa fa-search text-primary text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-700 mb-2">请完成选择</h3>
                    <p class="text-gray-500 max-w-md text-center">
                        请选择具体的楼层、区域和座位类型，然后点击查询按钮查看可用座位
                    </p>
                </div>
            `;
        }
    }
    
    // 验证用户是否选择了具体的楼层、区域和类型
    function validateSelection() {
        const floorSelect = document.getElementById('floor-select');
        const areaSelect = document.getElementById('area-select');
        const seatTypeSelect = document.getElementById('seat-type-select');
        const searchBtn = document.getElementById('search-btn');
        
        if (!floorSelect || !areaSelect || !seatTypeSelect || !searchBtn) return;
        
        const isFloorSelected = floorSelect.value !== 'all';
        const isAreaSelected = areaSelect.value !== 'all';
        const isTypeSelected = seatTypeSelect.value !== 'all';
        
        // 只有当用户选择了具体的楼层、区域和类型时，查询按钮才可点击
        if (isFloorSelected && isAreaSelected && isTypeSelected) {
            searchBtn.classList.remove('bg-gray-300', 'cursor-not-allowed');
            searchBtn.classList.add('bg-primary');
            searchBtn.disabled = false;
        } else {
            searchBtn.classList.add('bg-gray-300', 'cursor-not-allowed');
            searchBtn.classList.remove('bg-primary');
            searchBtn.disabled = true;
        }
    }
    
    // 根据选择的楼层更新区域选项
    function updateAreaOptions(selectedFloor, areaSelect) {
        // 定义楼层与区域的映射关系
        const floorAreaMap = {
            '1': ['走廊', '大自习室A', '大自习室B', '大自习室C', '大自习室D'],
            '2': ['蒙文阅览室A', '蒙文阅览室B', '经管阅览室1A', '经管阅览室1B', '经管阅览室2A', '经管阅览室2B'],
            '3': ['走廊', '语言文艺阅览室A', '语言文艺阅览室B', '计科阅览室', '教师阅览室'],
            '4': ['走廊', '报刊工具阅览室A', '报刊工具阅览室B', '社科阅览区A', '社科阅览区B'],
            '5': ['走廊', '政法外文阅览室', '素教中心']
        };
        
        // 保存当前选中的区域值
        const currentArea = areaSelect.value;
        
        // 清空区域选择下拉菜单
        areaSelect.innerHTML = '';
        
        // 添加"全部区域"选项
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = '全部区域';
        areaSelect.appendChild(allOption);
        
        // 根据选择的楼层添加相应的区域选项
        if (selectedFloor === 'all') {
            // 显示所有区域
            Object.values(floorAreaMap).forEach(floorAreas => {
                floorAreas.forEach(area => {
                    const option = document.createElement('option');
                    option.value = area.toLowerCase().replace(/\s+/g, '-');
                    option.textContent = area;
                    areaSelect.appendChild(option);
                });
            });
        } else if (floorAreaMap[selectedFloor]) {
            // 显示指定楼层的区域
            floorAreaMap[selectedFloor].forEach(area => {
                const option = document.createElement('option');
                option.value = area.toLowerCase().replace(/\s+/g, '-');
                option.textContent = area;
                areaSelect.appendChild(option);
            });
        }
        
        // 尝试恢复之前的选中状态，如果不存在则保持"全部区域"为选中状态
        if (Array.from(areaSelect.options).some(option => option.value === currentArea)) {
            areaSelect.value = currentArea;
        } else {
            areaSelect.value = 'all';
        }
    }
    
    // 更新座位网格显示
    function updateSeatGrid() {
        const floorSelect = document.getElementById('floor-select');
        const areaSelect = document.getElementById('area-select');
        const seatTypeSelect = document.getElementById('seat-type-select');
        const dateSelect = document.getElementById('date-select');
        const seatGridContainer = document.getElementById('seat-grid');
        const areaTitle = document.querySelector('#seat-query .bg-white.rounded-xl.shadow-md.p-8 h3');
        
        if (!floorSelect || !areaSelect || !seatTypeSelect || !dateSelect || !seatGridContainer || !areaTitle) return;
        
        const selectedFloor = floorSelect.value;
        const selectedArea = areaSelect.value;
        const selectedType = seatTypeSelect.value;
        const selectedDate = dateSelect.value;
        
        // 验证是否选择了具体的楼层、区域和类型
        if (selectedFloor === 'all' || selectedArea === 'all' || selectedType === 'all') {
            // 设置区域标题为空
            areaTitle.textContent = '';
            
            // 显示美观的提示文字
            seatGridContainer.innerHTML = `
                <div class="grid-cols-10 gap-4 col-span-10 flex flex-col items-center justify-center py-24 text-center">
                    <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i class="fa fa-search text-primary text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-700 mb-2">请完成选择</h3>
                    <p class="text-gray-500 max-w-md text-center">
                        请选择具体的楼层、区域和座位类型，然后点击查询按钮查看可用座位
                    </p>
                </div>
            `;
            return;
        }
        
        // 根据选择获取显示的楼层和区域名称
        let displayFloor = '一';
        if (selectedFloor !== 'all') {
            displayFloor = selectedFloor;
        }
        
        let displayArea = '大自习室 A';
        if (selectedArea !== 'all') {
            // 从区域选择框中找到当前选中的文本
            const selectedOption = Array.from(areaSelect.options).find(option => option.value === selectedArea);
            if (selectedOption) {
                displayArea = selectedOption.textContent;
            }
        }
        
        // 更新区域标题，包含选择的日期
        if (areaTitle) {
            let dateText = '';
            if (selectedDate !== 'today') {
                // 获取日期选择框中选中的文本
                const dateOption = Array.from(dateSelect.options).find(option => option.value === selectedDate);
                if (dateOption) {
                    dateText = ' [' + dateOption.textContent + ']';
                }
            }
            areaTitle.textContent = displayFloor + '楼 - ' + displayArea + dateText;
        }
        
        // 清空座位网格
        seatGridContainer.innerHTML = '';
        
        // 重新设计座位排版 - 让座位占满整个页面宽度
        // 移除原有grid样式，重新设置样式使其占满整个宽度
        seatGridContainer.className = 'w-full overflow-hidden mb-8';
        
        // 根据当前窗口宽度动态计算每行座位数
        const containerWidth = seatGridContainer.parentElement.offsetWidth;
        
        // 生成座位容器 - 重新设计样式，让座位占满整个页面宽度
        const grid = document.createElement('div');
        grid.className = 'flex flex-wrap justify-between w-full';
        grid.style.gap = '8px';
        
        // 定义不同楼层和区域的座位布局
        const seatLayoutMap = {
            '1': {
                '走廊': { seatsPerRow: 8, totalRows: 4, totalSeats: 32 },
                '大自习室A': { seatsPerRow: 12, totalRows: 6, totalSeats: 72 },
                '大自习室B': { seatsPerRow: 12, totalRows: 6, totalSeats: 72 },
                '大自习室C': { seatsPerRow: 10, totalRows: 5, totalSeats: 50 },
                '大自习室D': { seatsPerRow: 10, totalRows: 5, totalSeats: 50 }
            },
            '2': {
                '蒙文阅览室A': { seatsPerRow: 9, totalRows: 5, totalSeats: 45 },
                '蒙文阅览室B': { seatsPerRow: 9, totalRows: 5, totalSeats: 45 },
                '经管阅览室1A': { seatsPerRow: 11, totalRows: 5, totalSeats: 55 },
                '经管阅览室1B': { seatsPerRow: 11, totalRows: 5, totalSeats: 55 },
                '经管阅览室2A': { seatsPerRow: 10, totalRows: 5, totalSeats: 50 },
                '经管阅览室2B': { seatsPerRow: 10, totalRows: 5, totalSeats: 50 }
            },
            '3': {
                '走廊': { seatsPerRow: 8, totalRows: 3, totalSeats: 24 },
                '语言文艺阅览室A': { seatsPerRow: 12, totalRows: 5, totalSeats: 60 },
                '语言文艺阅览室B': { seatsPerRow: 12, totalRows: 5, totalSeats: 60 },
                '计科阅览室': { seatsPerRow: 10, totalRows: 6, totalSeats: 60 },
                '教师阅览室': { seatsPerRow: 8, totalRows: 6, totalSeats: 48 }
            },
            '4': {
                '走廊': { seatsPerRow: 8, totalRows: 4, totalSeats: 32 },
                '报刊工具阅览室A': { seatsPerRow: 11, totalRows: 5, totalSeats: 55 },
                '报刊工具阅览室B': { seatsPerRow: 11, totalRows: 5, totalSeats: 55 },
                '社科阅览区A': { seatsPerRow: 12, totalRows: 5, totalSeats: 60 },
                '社科阅览区B': { seatsPerRow: 12, totalRows: 5, totalSeats: 60 }
            },
            '5': {
                '走廊': { seatsPerRow: 7, totalRows: 3, totalSeats: 21 },
                '政法外文阅览室': { seatsPerRow: 10, totalRows: 5, totalSeats: 50 },
                '素教中心': { seatsPerRow: 12, totalRows: 4, totalSeats: 48 }
            }
        };
        
        // 默认座位布局
        let seatsPerRow = 12;
        let totalRows = 6;
        
        // 如果选择了特定楼层和区域，使用对应的座位布局
        if (selectedFloor !== 'all' && selectedArea !== 'all') {
            const areaName = displayArea;
            if (seatLayoutMap[selectedFloor] && seatLayoutMap[selectedFloor][areaName]) {
                seatsPerRow = seatLayoutMap[selectedFloor][areaName].seatsPerRow;
                totalRows = seatLayoutMap[selectedFloor][areaName].totalRows;
            }
        }
        
        // 生成座位
        for (let row = 0; row < totalRows; row++) {
            for (let col = 0; col < seatsPerRow; col++) {
                const seat = createSeat(row, col, selectedFloor, selectedArea, selectedType, selectedDate);
                // 计算每个座位的宽度，使其均匀分布并占满整行
                seat.style.width = `calc((100% - ${(seatsPerRow - 1) * 8}px) / ${seatsPerRow})`;
                grid.appendChild(seat);
            }
        }
        
        seatGridContainer.appendChild(grid);
        
        // 更新座位统计
        updateSeatStats();
    }
    
    // 创建单个座位元素
    function createSeat(row, col, floor, area, type, selectedDate) {
        const seat = document.createElement('div');
        const seatId = `seat-${floor}-${area}-${row}-${col}`;
        
        // 计算座位编号
        let seatNumber;
        if (row === 5 && col >= 10) {
            // 第6行（索引为5）的最后两个座位应该是71和72
            seatNumber = (row) * 12 + col + 1;
        } else {
            seatNumber = row * 12 + col + 1;
        }
        
        // 根据选择的日期调整座位状态生成逻辑
        const random = Math.random();
        let statusClass, status;
        
        // 对于未来日期，提供更多的空闲座位
        if (selectedDate === 'today') {
            // 今天：约60%空闲，25%占用，15%已预约
            if (random < 0.6) {
                statusClass = 'seat-available';
                status = 'available';
            } else if (random < 0.85) {
                statusClass = 'seat-occupied';
                status = 'occupied';
            } else {
                statusClass = 'seat-reserved';
                status = 'reserved';
            }
        } else {
            // 未来日期：约80%空闲，15%已预约，5%占用
            if (random < 0.8) {
                statusClass = 'seat-available';
                status = 'available';
            } else if (random < 0.95) {
                statusClass = 'seat-reserved';
                status = 'reserved';
            } else {
                statusClass = 'seat-occupied';
                status = 'occupied';
            }
        }
        
        // 设置座位基本属性
        seat.className = `seat ${statusClass} flex items-center justify-center aspect-square rounded-md cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg`;
        seat.dataset.seatId = seatId;
        seat.dataset.status = status;
        seat.dataset.floor = floor;
        seat.dataset.area = area;
        seat.dataset.type = type;
        seat.dataset.seatNumber = seatNumber;
        
        // 只添加座位号，移除所有其他文字信息
        const seatNum = document.createElement('span');
        seatNum.className = 'text-lg font-bold';
        seatNum.textContent = seatNumber.toString();
        seat.appendChild(seatNum);
        
        // 添加点击事件处理
        seat.addEventListener('click', function() {
            handleSeatClick(this);
        });
        
        return seat;
    }
    
    // 获取当天的开放时间范围
    function getOpeningHours() {
        const now = new Date();
        const dayOfWeek = now.getDay();
        // 简化处理：这里假设不是法定节假日
        // 实际应用中需要接入节假日API判断
        
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            // 周一至周五
            return { start: 6, end: 24 };
        } else {
            // 周六至周日
            return { start: 8, end: 22 };
        }
    }
    
    // 生成随机时间段
    function generateRandomTime() {
        const { start, end } = getOpeningHours();
        // 生成开始时间，确保距离结束时间至少有1小时
        const maxStartHour = end - 1;
        const startHour = Math.floor(Math.random() * (maxStartHour - start + 1)) + start;
        const startMinute = Math.random() > 0.5 ? '30' : '00';
        // 生成结束时间，最多比开始时间多3小时，且不超过结束时间
        const endHour = Math.min(startHour + Math.floor(Math.random() * 3) + 1, end);
        const endMinute = Math.random() > 0.5 ? '30' : '00';
        
        return `${String(startHour).padStart(2, '0')}:${startMinute}-${String(endHour).padStart(2, '0')}:${endMinute}`;
    }
    
    // 生成签到时间
    function generateSignInTime() {
        const { start, end } = getOpeningHours();
        const now = new Date();
        // 生成一个合理的签到时间，不早于开始时间，不晚于结束时间减去1小时
        const maxHour = Math.min(now.getHours(), end - 1);
        const hours = Math.max(start, maxHour - Math.floor(Math.random() * 3));
        const minutes = Math.random() > 0.5 ? '30' : '00';
        return `${String(hours).padStart(2, '0')}:${minutes}`;
    }
    
    // 生成结束时间
    function generateEndTime(signInTime) {
        const { end } = getOpeningHours();
        const [hour, minute] = signInTime.split(':');
        // 生成结束时间，最多比签到时间多4小时，且不超过结束时间
        const endHour = Math.min(parseInt(hour) + Math.floor(Math.random() * 4) + 1, end);
        // 确保分钟部分始终是两位数格式
        const formattedMinute = minute.padStart(2, '0');
        return `${String(endHour).padStart(2, '0')}:${formattedMinute}`;
    }
    
    // 处理临时离开
    function handleTemporaryLeave(seat) {
        const confirmLeave = confirm('确定要临时离开吗？15分钟内未返回，座位将被释放。');
        if (confirmLeave) {
            alert('临时离开已登记，请在15分钟内返回。');
        }
    }
    
    // 处理座位点击事件
    function handleSeatClick(seatElement) {
        const status = seatElement.dataset.status;
        const seatNumber = seatElement.dataset.seatNumber;
        const floor = seatElement.dataset.floor;
        const area = seatElement.dataset.area;
        
        // 显示座位详情（在下方弹出）
        updateSeatDetails(seatElement);
        
        if (status === 'available') {
            // 显示预约确认对话框
            showReservationDialog(seatElement);
        }
        // 已占用和已预约的座位不再显示alert提示，只在下方显示详情
    }
    
    // 更新座位详情区域
    function updateSeatDetails(seatElement) {
        const seatDetails = document.getElementById('seat-details');
        if (!seatDetails) return;
        
        const status = seatElement.dataset.status;
        const seatNumber = seatElement.dataset.seatNumber;
        const floor = seatElement.dataset.floor;
        const area = seatElement.dataset.area;
        
        // 获取上方标题文本作为位置信息
        const titleElement = document.querySelector('#seat-query .bg-white.rounded-xl.shadow-md.p-8 h3');
        const locationText = titleElement ? titleElement.textContent.trim() : `${floor}楼${area}区域`;
        
        let detailsHTML = `<h4 class="font-bold mb-2">座位 ${seatNumber} 详情</h4>`;
        detailsHTML += `<p class="text-dark/70 mb-2">位置：${locationText}</p>`;
        
        if (status === 'available') {
            detailsHTML += `<p class="text-green-600 font-medium">状态：空闲可预约</p>`;
        } else if (status === 'reserved') {
            // 生成随机预约信息
            const userInfo = `预约人：***${Math.floor(Math.random() * 9000) + 1000}`;
            const timeInfo = `预约时段：${generateRandomTime()}`;
            detailsHTML += `<p class="text-blue-600 font-medium">状态：已预约（待使用）</p>`;
            detailsHTML += `<p class="text-dark/70 mt-1">${userInfo}</p>`;
            detailsHTML += `<p class="text-dark/70">${timeInfo}</p>`;
            detailsHTML += `<p class="text-dark/70">若预约用户未在预约开始后15分钟内签到，系统自动将座位状态转为空闲可预约</p>`;
        } else if (status === 'occupied') {
            // 生成随机占用信息
            const signInTime = `签到时间：${generateSignInTime()}`;
            const endTime = `预计结束：${generateEndTime(signInTime.split('：')[1])}`;
            detailsHTML += `<p class="text-[#F59E0B] font-medium">状态：已签到（使用中）</p>`;
            detailsHTML += `<p class="text-dark/70 mt-1">${signInTime}</p>`;
            detailsHTML += `<p class="text-dark/70">${endTime}</p>`;
            detailsHTML += `<p class="text-dark/70">支持临时离开登记（最长15分钟）</p>`;
        }
        
        seatDetails.innerHTML = detailsHTML;
    }
    
    // 显示座位预约对话框
        function showReservationDialog(seatElement) {
            // 确保传入的是有效的座位元素
            if (!seatElement || !seatElement.dataset || !seatElement.dataset.status) {
                console.error('无效的座位元素');
                return;
            }
        const seatId = seatElement.dataset.seatId;
        const floor = seatElement.dataset.floor;
        const area = seatElement.dataset.area;
        const seatNumber = seatElement.dataset.seatNumber;
        
        // 创建预约对话框
        const dialog = document.createElement('div');
        dialog.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
        
        // 生成未来7天的日期（6月23日到6月29日）
        const today = new Date('2023-06-23');
        const dates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            dates.push(date);
        }
        
        // 获取当前选中日期的开放时间
        function getSelectedDateOpeningHours(selectedDate) {
            const dayOfWeek = selectedDate.getDay();
            
            // 这里可以添加法定节假日判断逻辑
            // 简化处理：当前实现基于工作日/周末区分
            
            if (dayOfWeek >= 1 && dayOfWeek <= 5) {
                // 周一至周五
                return { start: 6, end: 24 };
            } else {
                // 周六至周日 - 严格按照用户要求设置时间范围
                return { start: 8, end: 22 };
            }
        }
        
        // 增强座位选择的视觉反馈
        function highlightSelectedSeat(seatNumber) {
            const allSeats = document.querySelectorAll('.seat');
            allSeats.forEach(seat => {
                if (seat.dataset.seatNumber === seatNumber) {
                    seat.classList.add('ring-4', 'ring-primary', 'ring-offset-2');
                    setTimeout(() => {
                        seat.classList.remove('ring-4', 'ring-primary', 'ring-offset-2');
                    }, 1500);
                }
            });
        }
        
        // 初始选择今天
        const initialDate = dates[0];
        const dayOfWeek = initialDate.getDay();
        let start, end;
        
        // 根据日期类型设置初始开放时间
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            // 周末
            start = 8;
            end = 22;
        } else {
            // 工作日
            const openingHours = getSelectedDateOpeningHours(initialDate);
            start = openingHours.start;
            end = openingHours.end;
        }
        
        dialog.innerHTML = `
            <div class="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-auto">
                <div class="text-center mb-6">
                    <h3 class="text-2xl font-bold">预约座位</h3>
                    <p class="text-dark/70 mt-2">${floor}楼${area}区域的座位 ${seatNumber}</p>
                </div>
                
                <!-- 日期选择 -->
                <div class="mb-6">
                    <h4 class="font-bold mb-3">选择日期</h4>
                    <div class="flex overflow-x-auto pb-2 space-x-2" id="date-selector">
                        ${dates.map((date, index) => {
                            const dayOfWeek = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][date.getDay()];
                            const isSelected = index === 0;
                            return `
                                <div class="date-item flex-shrink-0 w-16 p-2 rounded-lg cursor-pointer text-center transition-colors ${
                                    isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-dark hover:bg-gray-200'
                                }">
                                    <div class="text-sm">${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}</div>
                                    <div class="text-xs mt-1">${dayOfWeek}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <!-- 时间段选择 -->
                <div class="mb-6">
                    <h4 class="font-bold mb-3">选择时间段</h4>
                    
                    <!-- 开始时间 -->
                    <div class="mb-4">
                        <div class="flex justify-between mb-2">
                            <label class="text-sm text-dark/70">开始时间</label>
                            <span id="start-time-display" class="text-sm font-medium">${String(start).padStart(2, '0')}:00</span>
                        </div>
                        <div class="flex space-x-4">
                            <div class="flex-1">
                                <label class="block text-xs text-dark/50 mb-1">小时</label>
                                <input type="range" min="${start}" max="${end - 1}" value="${start}" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="start-hour-slider">
                                <div class="flex justify-between text-xs text-dark/50 mt-1" id="start-hour-labels">
                                    ${Array.from({length: end - start}, (_, i) => i + start).map(hour => 
                                        `<span>${hour}</span>`
                                    ).join('')}
                                </div>
                            </div>
                            <div class="flex-1">
                                <label class="block text-xs text-dark/50 mb-1">分钟</label>
                                <input type="range" min="0" max="59" step="5" value="0" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="start-minute-slider">
                                <div class="flex justify-between text-xs text-dark/50 mt-1">
                                    ${Array.from({length: 12}, (_, i) => i * 5).map(minute => 
                                        `<span>${String(minute).padStart(2, '0')}</span>`
                                    ).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 结束时间 -->
                    <div>
                        <div class="flex justify-between mb-2">
                            <label class="text-sm text-dark/70">结束时间</label>
                            <span id="end-time-display" class="text-sm font-medium">${String(start + 1).padStart(2, '0')}:00</span>
                        </div>
                        <div class="flex space-x-4">
                            <div class="flex-1">
                                <label class="block text-xs text-dark/50 mb-1">小时</label>
                                <input type="range" min="${start + 1}" max="${end}" value="${Math.min(start + 1, end)}" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="end-hour-slider">
                                <div class="flex justify-between text-xs text-dark/50 mt-1" id="end-hour-labels">
                                    ${Array.from({length: end - start}, (_, i) => i + start + 1).map(hour => 
                                        `<span>${hour}</span>`
                                    ).join('')}
                                </div>
                            </div>
                            <div class="flex-1">
                                <label class="block text-xs text-dark/50 mb-1">分钟</label>
                                <input type="range" min="0" max="59" step="5" value="0" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="end-minute-slider">
                                <div class="flex justify-between text-xs text-dark/50 mt-1">
                                    ${Array.from({length: 12}, (_, i) => i * 5).map(minute => 
                                        `<span>${String(minute).padStart(2, '0')}</span>`
                                    ).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 预约说明 -->
                <div class="bg-amber-50 p-4 rounded-lg mb-6">
                    <p class="text-sm text-amber-700">注意：请在预约开始后15分钟内到馆签到，否则预约将自动取消。预约时长限制为30分钟至4小时。</p>
                </div>
                
                <!-- 按钮 -->
                <div class="flex space-x-4">
                    <button id="cancel-reservation" class="flex-1 px-6 py-3 border border-gray-300 text-dark rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        取消
                    </button>
                    <button id="confirm-reservation" class="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                        确认预约
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(dialog);
        
        // 日期选择逻辑
        const dateItems = dialog.querySelectorAll('.date-item');
        const startHourSlider = dialog.querySelector('#start-hour-slider');
        const startMinuteSlider = dialog.querySelector('#start-minute-slider');
        const endHourSlider = dialog.querySelector('#end-hour-slider');
        const endMinuteSlider = dialog.querySelector('#end-minute-slider');
        const startTimeDisplay = dialog.querySelector('#start-time-display');
        const endTimeDisplay = dialog.querySelector('#end-time-display');
        
        // 更新时间显示
        function updateStartTimeDisplay() {
            const hour = parseInt(startHourSlider.value);
            const minute = parseInt(startMinuteSlider.value);
            startTimeDisplay.textContent = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
            
            // 计算开始时间的总分钟数
            const startTotalMinutes = hour * 60 + minute;
            
            // 获取选中日期的开放时间
            let selectedDateIndex = 0;
            dateItems.forEach((item, index) => {
                if (item.classList.contains('bg-primary')) {
                    selectedDateIndex = index;
                }
            });
            const selectedDate = dates[selectedDateIndex];
            const { start, end } = getSelectedDateOpeningHours(selectedDate);
            const dayOfWeek = selectedDate.getDay();
            
            // 计算最小结束时间（开始时间+30分钟）
            const minEndTotalMinutes = startTotalMinutes + 30;
            const minEndHour = Math.floor(minEndTotalMinutes / 60);
            const minEndMinute = minEndTotalMinutes % 60;
            
            // 计算最大结束时间（开始时间+4小时 或 开放结束时间）
            const maxEndFromStart = startTotalMinutes + 240;
            const maxEndFromOpening = end * 60;
            const maxEndTotalMinutes = Math.min(maxEndFromStart, maxEndFromOpening);
            const maxEndHour = Math.floor(maxEndTotalMinutes / 60);
            
            // 更新结束时间的最小范围
            endHourSlider.min = minEndHour;
            endHourSlider.max = maxEndHour;
            
            // 周六和周日特殊处理：结束时间最小为9点，最大为22点
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                endHourSlider.min = Math.max(minEndHour, 9);
                endHourSlider.max = 22;
            }
            
            // 如果当前结束时间不在新范围内，自动调整
            const currentEndHour = parseInt(endHourSlider.value);
            const currentEndMinute = parseInt(endMinuteSlider.value);
            const currentEndTotalMinutes = currentEndHour * 60 + currentEndMinute;
            
            if (currentEndTotalMinutes < minEndTotalMinutes) {
                // 如果结束时间小于最小允许时间，设置为最小时间
                if (dayOfWeek === 0 || dayOfWeek === 6) {
                    // 周六和周日特殊处理：确保结束时间不小于9点
                    endHourSlider.value = Math.max(minEndHour, 9);
                } else {
                    endHourSlider.value = minEndHour;
                }
                endMinuteSlider.value = minEndMinute;
            } else if (currentEndTotalMinutes > maxEndTotalMinutes) {
                // 如果结束时间大于最大允许时间，设置为最大时间
                if (dayOfWeek === 0 || dayOfWeek === 6) {
                    // 周六和周日特殊处理：确保结束时间不大于22点
                    endHourSlider.value = 22;
                } else {
                    endHourSlider.value = maxEndHour;
                }
                endMinuteSlider.value = maxEndTotalMinutes % 60;
            }
            
            // 更新结束时间显示
            updateEndTimeDisplay();
        }
        
        function updateEndTimeDisplay() {
            const hour = parseInt(endHourSlider.value);
            const minute = parseInt(endMinuteSlider.value);
            endTimeDisplay.textContent = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
        }
        
        // 日期选择事件
        dateItems.forEach((item, index) => {
            item.addEventListener('click', function() {
                // 移除其他日期的选中状态
                dateItems.forEach(i => {
                    i.classList.remove('bg-primary', 'text-white');
                    i.classList.add('bg-gray-100', 'text-dark', 'hover:bg-gray-200');
                });
                
                // 设置当前日期为选中状态
                this.classList.remove('bg-gray-100', 'text-dark', 'hover:bg-gray-200');
                this.classList.add('bg-primary', 'text-white');
                
                // 获取选中日期的开放时间
                const selectedDate = dates[index];
                const { start, end } = getSelectedDateOpeningHours(selectedDate);
                const dayOfWeek = selectedDate.getDay();
                
                // 更新时间滑块范围
                if (dayOfWeek === 0 || dayOfWeek === 6) {
                    // 周六和周日特殊处理：开始时间范围为8-21点
                    startHourSlider.min = 8;
                    startHourSlider.max = 21;
                    // 周六和周日特殊处理：结束时间范围为9-22点
                    endHourSlider.min = 9;
                    endHourSlider.max = 22;
                    // 设置默认开始时间为8点
                    startHourSlider.value = 8;
                } else {
                    // 工作日设置
                    startHourSlider.min = start;
                    startHourSlider.max = end - 1;
                    endHourSlider.max = end;
                    // 设置默认开始时间为开放时间的开始
                    startHourSlider.value = start;
                }
                
                // 动态更新开始时间标签
                const startHourLabels = dialog.querySelector('#start-hour-labels');
                const startMin = parseInt(startHourSlider.min);
                const startMax = parseInt(startHourSlider.max);
                startHourLabels.innerHTML = Array.from({length: startMax - startMin + 1}, (_, i) => i + startMin).map(hour => 
                    `<span>${hour}</span>`
                ).join('');
                
                // 动态更新结束时间标签
                const endHourLabels = dialog.querySelector('#end-hour-labels');
                const endMin = parseInt(endHourSlider.min);
                const endMax = parseInt(endHourSlider.max);
                endHourLabels.innerHTML = Array.from({length: endMax - endMin + 1}, (_, i) => i + endMin).map(hour => 
                    `<span>${hour}</span>`
                ).join('');
                startMinuteSlider.value = 0;
                
                // 设置默认结束时间
                if (dayOfWeek === 0 || dayOfWeek === 6) {
                    // 周六和周日默认结束时间为9点
                    endHourSlider.value = 9;
                } else {
                    // 工作日默认结束时间为开始时间+1小时
                    endHourSlider.min = start + 1;
                    endHourSlider.value = Math.min(start + 1, end);
                }
                endMinuteSlider.value = 0;
                
                // 更新时间显示
                updateStartTimeDisplay();
                updateEndTimeDisplay();
            });
        });
        
        // 时间滑块事件
        startHourSlider.addEventListener('input', updateStartTimeDisplay);
        startMinuteSlider.addEventListener('input', updateStartTimeDisplay);
        
        // 修改结束时间滑块事件，添加时间段长度限制
        endHourSlider.addEventListener('input', function() {
            validateEndTime();
            updateEndTimeDisplay();
        });
        
        endMinuteSlider.addEventListener('input', function() {
            validateEndTime();
            updateEndTimeDisplay();
        });
        
        // 验证结束时间是否超过开始时间+4小时
        function validateEndTime() {
            const startHour = parseInt(startHourSlider.value);
            const startMinute = parseInt(startMinuteSlider.value);
            const endHour = parseInt(endHourSlider.value);
            const endMinute = parseInt(endMinuteSlider.value);
            
            const startTotalMinutes = startHour * 60 + startMinute;
            const endTotalMinutes = endHour * 60 + endMinute;
            const durationMinutes = endTotalMinutes - startTotalMinutes;
            
            // 如果时间段超过4小时（240分钟），自动调整
            if (durationMinutes > 240) {
                // 设置结束时间为开始时间+4小时
                const maxEndTotalMinutes = startTotalMinutes + 240;
                const maxEndHour = Math.floor(maxEndTotalMinutes / 60);
                const maxEndMinute = maxEndTotalMinutes % 60;
                
                // 更新结束时间滑块值
                endHourSlider.value = maxEndHour;
                endMinuteSlider.value = maxEndMinute;
                
                // 显示自定义的时长限制提示框
                showDurationLimitNotification('预约时长不能超过4小时，请重新选择时间段。');
            }
        }
        
        // 自定义时长限制提示函数
        function showDurationLimitNotification(message) {
            // 创建半透明遮罩层
            const overlay = document.createElement('div');
            overlay.className = 'fixed inset-0 bg-black/30 flex items-center justify-center z-50';
            
            // 创建提示框
            const notification = document.createElement('div');
            notification.className = 'bg-white rounded-lg p-8 shadow-lg max-w-xs w-full text-center';
            
            // 添加提示信息
            const messageElement = document.createElement('p');
            messageElement.className = 'text-xl font-medium text-gray-800 mb-6';
            messageElement.textContent = message;
            
            // 添加确认按钮
            const confirmButton = document.createElement('button');
            confirmButton.className = 'px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors';
            confirmButton.textContent = '确认';
            confirmButton.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
            
            // 组装提示框
            notification.appendChild(messageElement);
            notification.appendChild(confirmButton);
            overlay.appendChild(notification);
            
            // 添加到页面
            document.body.appendChild(overlay);
        }
        
        // 取消按钮事件
        dialog.querySelector('#cancel-reservation').addEventListener('click', function() {
            document.body.removeChild(dialog);
        });
        
        // 确认预约按钮事件
        dialog.querySelector('#confirm-reservation').addEventListener('click', function() {
            // 获取选中的日期和时间
            let selectedDateIndex = 0;
            dateItems.forEach((item, index) => {
                if (item.classList.contains('bg-primary')) {
                    selectedDateIndex = index;
                }
            });
            
            const selectedDate = dates[selectedDateIndex];
            const startDateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
            const startTime = startTimeDisplay.textContent;
            const endTime = endTimeDisplay.textContent;
            
            // 验证预约时长（30分钟到4小时）
            const startDateTime = new Date(`${startDateStr}T${startTime}`);
            const endDateTime = new Date(`${startDateStr}T${endTime}`);
            const durationMinutes = (endDateTime - startDateTime) / (1000 * 60);
            
            if (durationMinutes < 30) {
                alert('预约时长不能少于30分钟');
                return;
            }
            
            if (durationMinutes > 240) {
                alert('预约时长不能超过4小时');
                return;
            }
            
            // 更新座位状态为已预约
            seatElement.dataset.status = 'reserved';
            seatElement.classList.remove('seat-available');
            seatElement.classList.add('seat-reserved');
            
            // 高亮选中的座位
            highlightSelectedSeat(seatNumber);
            
            // 显示自定义的预约成功提示框
            showSuccessNotification('预约成功');

        // 自定义成功提示函数
        function showSuccessNotification(message) {
            // 创建半透明遮罩层
            const overlay = document.createElement('div');
            overlay.className = 'fixed inset-0 bg-black/30 flex items-center justify-center z-50';
            
            // 创建提示框
            const notification = document.createElement('div');
            notification.className = 'bg-white rounded-lg p-8 shadow-lg max-w-xs w-full text-center';
            
            // 添加提示信息
            const messageElement = document.createElement('p');
            messageElement.className = 'text-xl font-medium text-gray-800 mb-6';
            messageElement.textContent = message;
            
            // 添加确认按钮
            const confirmButton = document.createElement('button');
            confirmButton.className = 'px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors';
            confirmButton.textContent = '确认';
            confirmButton.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
            
            // 组装提示框
            notification.appendChild(messageElement);
            notification.appendChild(confirmButton);
            overlay.appendChild(notification);
            
            // 添加到页面
            document.body.appendChild(overlay);
        }
            
            // 更新座位详情区域
            updateSeatDetails(seatElement);
            
            // 更新座位统计
            updateSeatStats();
            
            // 关闭对话框
            document.body.removeChild(dialog);
        });
        
        // 点击对话框外部关闭
        dialog.addEventListener('click', function(e) {
            if (e.target === dialog) {
                document.body.removeChild(dialog);
            }
        });
    }
    
    // 更新座位统计信息
    function updateSeatStats() {
        const allSeats = document.querySelectorAll('.seat');
        const availableSeats = document.querySelectorAll('.seat-available');
        const occupiedSeats = document.querySelectorAll('.seat-occupied');
        const reservedSeats = document.querySelectorAll('.seat-reserved');
        
        const totalCount = allSeats.length;
        const availableCount = availableSeats.length;
        const occupiedCount = occupiedSeats.length;
        const reservedCount = reservedSeats.length;
        
        // 更新统计显示
        const statsContainer = document.getElementById('seat-stats');
        if (statsContainer) {
            statsContainer.innerHTML = `
                <div class="grid grid-cols-4 gap-4">
                    <div class="stat-card p-3 bg-white rounded-lg shadow text-center">
                        <div class="text-sm text-gray-500">总座位</div>
                        <div class="text-xl font-bold">${totalCount}</div>
                    </div>
                    <div class="stat-card p-3 bg-white rounded-lg shadow text-center">
                        <div class="text-sm text-gray-500">可用</div>
                        <div class="text-xl font-bold text-green-600">${availableCount}</div>
                    </div>
                    <div class="stat-card p-3 bg-white rounded-lg shadow text-center">
                        <div class="text-sm text-gray-500">已使用</div>
                        <div class="text-xl font-bold text-orange-500">${occupiedCount}</div>
                    </div>
                    <div class="stat-card p-3 bg-white rounded-lg shadow text-center">
                        <div class="text-sm text-gray-500">已预约</div>
                        <div class="text-xl font-bold text-blue-600">${reservedCount}</div>
                    </div>
                </div>
            `;
        }
    }
    
    // 初始化热门区域预约功能
    function initHotAreaReservation() {
        // 为所有预约按钮添加点击事件
        const reserveButtons = document.querySelectorAll('.bg-white.rounded-xl.shadow-md button:last-child');
        reserveButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const areaName = this.closest('.bg-white').querySelector('h3').textContent;
                showAreaReservationDialog(areaName);
            });
        });

        // 为查看更多按钮添加点击事件
        const viewMoreButton = document.querySelector('.text-center.mt-12 button');
        if (viewMoreButton) {
            viewMoreButton.addEventListener('click', function(e) {
                e.preventDefault();
                alert('加载更多热门区域...');
            });
        }
    }

    // 初始化区域标签切换功能
    function initAreaTabs() {
        const tabs = document.querySelectorAll('.overflow-x-auto button');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // 移除所有标签的活跃状态
                tabs.forEach(t => {
                    t.classList.remove('bg-primary', 'text-white');
                    t.classList.add('bg-white', 'text-dark/70');
                });
                
                // 添加当前标签的活跃状态
                this.classList.remove('bg-white', 'text-dark/70');
                this.classList.add('bg-primary', 'text-white');
                
                // 模拟加载对应区域数据
                const tabText = this.textContent.trim();
                loadAreaData(tabText);
            });
        });
    }

    // 加载不同区域的数据
    function loadAreaData(areaType) {
        console.log(`加载${areaType}数据`);
        
        // 模拟加载延迟
        const areaGrid = document.querySelector('.grid.md\:grid-cols-2.lg\:grid-cols-3');
        areaGrid.style.opacity = '0.5';
        
        setTimeout(() => {
            // 根据不同区域类型显示不同的提示
            if (areaType !== '热门区域') {
                alert(`已切换到${areaType}，数据加载完成！`);
            }
            areaGrid.style.opacity = '1';
        }, 500);
    }

    // 显示区域预约成功对话框
function showAreaReservationDialog(areaName) {
    // 创建预约成功的提示
    const dialog = document.createElement('div');
    dialog.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    dialog.innerHTML = `
        <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <div class="text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-check text-2xl text-green-500"></i>
                </div>
                <h3 class="text-2xl font-bold mb-2">预约成功！</h3>
                <p class="text-dark/70 mb-6">您已成功预约<span class="font-bold text-primary">${areaName}</span>的座位</p>
                <button id="close-reservation-dialog" class="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    确定
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(dialog);
    
    // 关闭对话框
    const closeButton = dialog.querySelector('#close-reservation-dialog');
    closeButton.addEventListener('click', function() {
        document.body.removeChild(dialog);
    });
    
    // 点击对话框外部关闭
    dialog.addEventListener('click', function(e) {
        if (e.target === dialog) {
            document.body.removeChild(dialog);
        }
    });
}



    // 初始化进度条
    initProgressBars();

    // 初始化区域标签切换功能
        initAreaTabs();
        


    // 平滑滚动到顶部按钮
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // 初始化用户反馈功能
    function initUserFeedback() {
        const feedbackModal = document.getElementById('user-feedback-modal');
        const feedbackLinks = document.querySelectorAll('a[href="#user-feedback"]');
        const cancelButton = document.getElementById('cancel-feedback');
        const feedbackForm = document.getElementById('feedback-form');
        
        // 显示弹窗函数
        function showFeedbackModal() {
            if (feedbackModal) {
                feedbackModal.classList.remove('hidden');
                // 防止背景滚动
                document.body.style.overflow = 'hidden';
            }
        }
        
        // 隐藏弹窗函数
        function hideFeedbackModal() {
            if (feedbackModal) {
                feedbackModal.classList.add('hidden');
                // 恢复背景滚动
                document.body.style.overflow = '';
            }
        }
        
        // 为所有用户反馈链接添加点击事件
        feedbackLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // 阻止默认跳转行为
                showFeedbackModal();
            });
        });
        
        // 为取消按钮添加点击事件
        if (cancelButton) {
            cancelButton.addEventListener('click', hideFeedbackModal);
        }
        
        // 点击弹窗外部关闭弹窗
        if (feedbackModal) {
            feedbackModal.addEventListener('click', (e) => {
                if (e.target === feedbackModal) {
                    hideFeedbackModal();
                }
            });
        }
        
        // 按ESC键关闭弹窗
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && feedbackModal && !feedbackModal.classList.contains('hidden')) {
                hideFeedbackModal();
            }
        });
        
        // 处理表单提交
        if (feedbackForm) {
            feedbackForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const feedbackType = document.getElementById('feedback-type').value;
                const feedbackContent = document.getElementById('feedback-content').value;
                const contactInfo = document.getElementById('contact-info').value;
                
                // 验证反馈内容
                if (!feedbackContent.trim()) {
                    alert('请输入反馈内容');
                    return;
                }
                
                // 在实际应用中，这里会发送反馈到服务器
                console.log('用户反馈已提交:', {
                    type: feedbackType,
                    content: feedbackContent,
                    contact: contactInfo
                });
                
                // 显示提交成功提示
                alert('感谢您的反馈！我们会认真对待每一条建议。');
                
                // 重置表单
                feedbackForm.reset();
                
                // 关闭弹窗
                hideFeedbackModal();
            });
        }
    }

    // 初始化预约规则弹窗
    function initRulesModal() {
        const rulesModal = document.getElementById('rules-modal');
        const rulesLinks = document.querySelectorAll('a[href="#rules"]');
        const confirmButton = document.getElementById('confirm-rules');
        
        // 显示弹窗函数
        function showRulesModal() {
            if (rulesModal) {
                rulesModal.classList.remove('hidden');
                // 防止背景滚动
                document.body.style.overflow = 'hidden';
                // 添加动画效果
                setTimeout(() => {
                    rulesModal.classList.add('opacity-100');
                    const content = rulesModal.querySelector('.rules-content');
                    if (content) {
                        content.classList.add('scale-100');
                        content.classList.remove('scale-95');
                    }
                }, 10);
            }
        }
        
        // 隐藏弹窗函数
        function hideRulesModal() {
            if (rulesModal) {
                rulesModal.classList.remove('opacity-100');
                const content = rulesModal.querySelector('.rules-content');
                if (content) {
                    content.classList.remove('scale-100');
                    content.classList.add('scale-95');
                }
                // 允许背景滚动
                document.body.style.overflow = 'auto';
                // 延迟隐藏，等待动画完成
                setTimeout(() => {
                    rulesModal.classList.add('hidden');
                }, 300);
            }
        }
        
        // 为所有预约规则链接添加点击事件
        rulesLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // 阻止默认跳转行为
                showRulesModal();
            });
        });
        
        // 为确认按钮添加点击事件
        if (confirmButton) {
            confirmButton.addEventListener('click', hideRulesModal);
        }
        
        // 点击弹窗外部关闭弹窗
        if (rulesModal) {
            rulesModal.addEventListener('click', (e) => {
                if (e.target === rulesModal) {
                    hideRulesModal();
                }
            });
        }
        
        // 按ESC键关闭弹窗
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && rulesModal && !rulesModal.classList.contains('hidden')) {
                hideRulesModal();
            }
        });
    }
    
    // 初始化轮播图
    function initCarousel() {
        const carousel = document.getElementById('main-carousel');
        if (!carousel) return;
        
        const slides = document.querySelectorAll('.carousel-slide');
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');
        const indicators = document.querySelectorAll('.indicator');
        
        let currentSlide = 0;
        let slideInterval;
        
        // 显示指定的幻灯片
        function showSlide(index) {
            // 隐藏所有幻灯片
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // 移除所有指示器的活动状态
            indicators.forEach(indicator => {
                indicator.classList.remove('active');
            });
            
            // 确保索引在有效范围内
            if (index < 0) {
                currentSlide = slides.length - 1;
            } else if (index >= slides.length) {
                currentSlide = 0;
            } else {
                currentSlide = index;
            }
            
            // 显示当前幻灯片并激活相应的指示器
            slides[currentSlide].classList.add('active');
            indicators[currentSlide].classList.add('active');
        }
        
        // 下一张幻灯片
        function nextSlide() {
            showSlide(currentSlide + 1);
            resetInterval();
        }
        
        // 上一张幻灯片
        function prevSlide() {
            showSlide(currentSlide - 1);
            resetInterval();
        }
        
        // 设置自动播放
        function startSlideInterval() {
            slideInterval = setInterval(nextSlide, 5000); // 每5秒切换一次
        }
        
        // 重置自动播放计时器
        function resetInterval() {
            clearInterval(slideInterval);
            startSlideInterval();
        }
        
        // 添加点击事件监听
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        // 为指示器添加点击事件
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
                resetInterval();
            });
        });
        
        // 开始自动播放
        startSlideInterval();
        
        // 鼠标悬停时暂停自动播放
        carousel.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        // 鼠标离开时恢复自动播放
        carousel.addEventListener('mouseleave', startSlideInterval);
    }
    
    // 初始化特色轮播图
    function initFeaturedCarousel() {
        console.log('开始初始化特色轮播图');
        const carousel = document.getElementById('featured-carousel');
        if (!carousel) {
            console.log('特色轮播图元素未找到');
            return;
        }
        
        const slides = carousel.querySelectorAll('.featured-slide');
        const prevBtn = document.getElementById('featured-prev');
        const nextBtn = document.getElementById('featured-next');
        const indicators = carousel.querySelectorAll('.featured-indicator');
        
        console.log('轮播图元素数量:', slides.length);
        console.log('控制按钮:', !!prevBtn, !!nextBtn);
        console.log('指示器数量:', indicators.length);
        
        // 初始化变量
        let currentSlide = 0;
        let slideInterval;
        
        // 输出每张幻灯片的图片路径
        slides.forEach((slide, index) => {
            const img = slide.querySelector('img');
            if (img) {
                console.log(`幻灯片${index}图片路径:`, img.src);
            }
        });
        
        // 显示指定的幻灯片
        function showSlide(index) {
            // 确保索引在有效范围内
            if (index < 0) {
                currentSlide = slides.length - 1;
            } else if (index >= slides.length) {
                currentSlide = 0;
            } else {
                currentSlide = index;
            }
            
            console.log('显示幻灯片:', currentSlide);
            
            // 控制整个幻灯片的显示，包括图片和文字
            slides.forEach((slide, i) => {
                if (i === currentSlide) {
                    slide.style.opacity = '1';
                    slide.style.zIndex = '1';
                } else {
                    slide.style.opacity = '0';
                    slide.style.zIndex = '0';
                }
            });
            
            // 更新指示器状态
            indicators.forEach((indicator, i) => {
                if (i === currentSlide) {
                    indicator.classList.add('active');
                    indicator.style.width = '24px';
                    indicator.style.backgroundColor = 'white';
                } else {
                    indicator.classList.remove('active');
                    indicator.style.width = '8px';
                    indicator.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                }
            });
        }
        
        // 下一张幻灯片
        function nextSlide() {
            console.log('下一张幻灯片');
            showSlide(currentSlide + 1);
            resetInterval();
        }
        
        // 上一张幻灯片
        function prevSlide() {
            console.log('上一张幻灯片');
            showSlide(currentSlide - 1);
            resetInterval();
        }
        
        // 设置自动播放
        function startSlideInterval() {
            console.log('启动自动播放');
            slideInterval = setInterval(nextSlide, 3000); // 每3秒切换一次（更短的间隔便于测试）
        }
        
        // 重置自动播放计时器
        function resetInterval() {
            console.log('重置自动播放');
            clearInterval(slideInterval);
            startSlideInterval();
        }
        
        // 添加点击事件监听
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
            console.log('添加前按钮点击事件');
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
            console.log('添加后按钮点击事件');
        }
        
        // 为指示器添加点击事件
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                console.log('点击指示器:', index);
                showSlide(index);
                resetInterval();
            });
        });
        
        // 显示第一张幻灯片
        showSlide(0);
        
        // 开始自动播放
        startSlideInterval();
        
        // 鼠标悬停时暂停自动播放
        carousel.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        // 鼠标离开时恢复自动播放
        carousel.addEventListener('mouseleave', startSlideInterval);
        
        // 确保初始状态正确
        showSlide(0);
        
        // 开始自动播放
        startSlideInterval();
        
        // 鼠标悬停时暂停自动播放
        carousel.addEventListener('mouseenter', () => {
            console.log('鼠标悬停，暂停自动播放');
            clearInterval(slideInterval);
        });
        
        // 鼠标离开时恢复自动播放
        carousel.addEventListener('mouseleave', startSlideInterval);
    }

    // 确保第一个DOMContentLoaded事件监听器正确关闭
});