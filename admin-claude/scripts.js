// Global state management
let appState = {
    currentUser: null,
    sidebarCollapsed: false,
    currentPage: '',
    formErrors: {},
    files: [],
    selectedTags: [],
    selectedOptions: [],
    permissions: {}
};

// Utility functions
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        let errorDiv = element.nextElementSibling;
        if (!errorDiv || !errorDiv.classList.contains('error-message')) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            element.parentNode.insertBefore(errorDiv, element.nextSibling);
        }
        errorDiv.textContent = message;
        element.style.borderColor = '#dc3545';
    }
}

function clearError(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const errorDiv = element.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('error-message')) {
            errorDiv.remove();
        }
        element.style.borderColor = '#e1e5e9';
    }
}

function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.position = 'fixed';
    successDiv.style.top = '20px';
    successDiv.style.right = '20px';
    successDiv.style.zIndex = '10000';
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

// Authentication functions
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    let hasErrors = false;
    
    // Clear previous errors
    clearError('email');
    clearError('password');
    
    // Validate email
    if (!email) {
        showError('email', 'Email is required');
        hasErrors = true;
    } else if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        hasErrors = true;
    }
    
    // Validate password
    if (!password) {
        showError('password', 'Password is required');
        hasErrors = true;
    }
    
    if (!hasErrors) {
        // Simulate login
        appState.currentUser = { email: email, name: 'John Doe', role: 'admin' };
        showSuccess('Login successful!');
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    let hasErrors = false;
    
    // Clear previous errors
    clearError('name');
    clearError('email');
    clearError('password');
    clearError('confirmPassword');
    
    // Validate name
    if (!name) {
        showError('name', 'Name is required');
        hasErrors = true;
    }
    
    // Validate email
    if (!email) {
        showError('email', 'Email is required');
        hasErrors = true;
    } else if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        hasErrors = true;
    }
    
    // Validate password
    if (!password) {
        showError('password', 'Password is required');
        hasErrors = true;
    } else if (!validatePassword(password)) {
        showError('password', 'Password must be at least 6 characters long');
        hasErrors = true;
    }
    
    // Validate confirm password
    if (!confirmPassword) {
        showError('confirmPassword', 'Please confirm your password');
        hasErrors = true;
    } else if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match');
        hasErrors = true;
    }
    
    if (!hasErrors) {
        showSuccess('Registration successful!');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    }
}

// Sidebar functions
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (sidebar && mainContent) {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
        appState.sidebarCollapsed = !appState.sidebarCollapsed;
    }
}

function toggleSubmenu(element) {
    const submenu = element.nextElementSibling;
    if (submenu && submenu.classList.contains('nav-submenu')) {
        submenu.classList.toggle('open');
        element.classList.toggle('open');
    }
}

function setActiveNav(currentPage) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
}

// File upload functions
function initFileUpload(uploadId, multiple = false) {
    const uploadArea = document.getElementById(uploadId);
    const fileInput = uploadArea.querySelector('input[type="file"]');
    const fileList = uploadArea.querySelector('.file-list');
    
    if (!uploadArea || !fileInput) return;
    
    fileInput.multiple = multiple;
    
    uploadArea.addEventListener('click', () => fileInput.click());
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', (e) => handleDrop(e, fileInput, fileList));
    fileInput.addEventListener('change', (e) => handleFileSelect(e, fileList));
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
}

function handleDrop(e, fileInput, fileList) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    
    const files = Array.from(e.dataTransfer.files);
    displayFiles(files, fileList);
}

function handleFileSelect(e, fileList) {
    const files = Array.from(e.target.files);
    displayFiles(files, fileList);
}

function displayFiles(files, fileList) {
    if (!fileList) return;
    
    fileList.innerHTML = '';
    files.forEach((file, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <div class="file-info">
                <span>📄</span>
                <span>${file.name}</span>
                <span>(${formatFileSize(file.size)})</span>
            </div>
            <button type="button" class="file-remove" onclick="removeFile(${index}, this)">Remove</button>
        `;
        fileList.appendChild(fileItem);
    });
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function removeFile(index, button) {
    button.closest('.file-item').remove();
}

// Tags input functions
function initTagsInput(inputId) {
    const container = document.getElementById(inputId);
    if (!container) return;
    
    const input = container.querySelector('.tags-input');
    
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTag(this.value.trim(), container);
            this.value = '';
        }
        if (e.key === 'Backspace' && this.value === '') {
            removeLastTag(container);
        }
    });
    
    container.addEventListener('click', () => input.focus());
}

function addTag(tagText, container) {
    if (!tagText || appState.selectedTags.includes(tagText)) return;
    
    appState.selectedTags.push(tagText);
    
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.innerHTML = `
        ${tagText}
        <button type="button" class="tag-remove" onclick="removeTag('${tagText}', this)">&times;</button>
    `;
    
    const input = container.querySelector('.tags-input');
    container.insertBefore(tag, input);
}

function removeTag(tagText, button) {
    appState.selectedTags = appState.selectedTags.filter(tag => tag !== tagText);
    button.closest('.tag').remove();
}

function removeLastTag(container) {
    const tags = container.querySelectorAll('.tag');
    if (tags.length > 0) {
        const lastTag = tags[tags.length - 1];
        const tagText = lastTag.textContent.replace('×', '').trim();
        removeTag(tagText, lastTag.querySelector('.tag-remove'));
    }
}

// Multi-select functions
function initMultiSelect(selectId) {
    const container = document.getElementById(selectId);
    if (!container) return;
    
    const display = container.querySelector('.multiselect-display');
    const dropdown = container.querySelector('.multiselect-dropdown');
    
    display.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    });
    
    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
    
    const options = dropdown.querySelectorAll('.multiselect-option');
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleOption(option, display);
        });
    });
}

function toggleOption(option, display) {
    const checkbox = option.querySelector('.multiselect-checkbox');
    const value = option.dataset.value;
    const text = option.textContent.trim();
    
    checkbox.checked = !checkbox.checked;
    option.classList.toggle('selected');
    
    if (checkbox.checked) {
        if (!appState.selectedOptions.includes(value)) {
            appState.selectedOptions.push(value);
            addSelectedTag(value, text, display);
        }
    } else {
        appState.selectedOptions = appState.selectedOptions.filter(opt => opt !== value);
        removeSelectedTag(value, display);
    }
    
    updateMultiSelectDisplay(display);
}

function addSelectedTag(value, text, display) {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.dataset.value = value;
    tag.innerHTML = `
        ${text}
        <button type="button" class="tag-remove" onclick="removeMultiSelectOption('${value}', this)">&times;</button>
    `;
    display.appendChild(tag);
}

function removeSelectedTag(value, display) {
    const tag = display.querySelector(`[data-value="${value}"]`);
    if (tag) tag.remove();
}

function removeMultiSelectOption(value, button) {
    const container = button.closest('.multiselect-container');
    const option = container.querySelector(`[data-value="${value}"]`);
    const checkbox = option.querySelector('.multiselect-checkbox');
    
    checkbox.checked = false;
    option.classList.remove('selected');
    appState.selectedOptions = appState.selectedOptions.filter(opt => opt !== value);
    button.closest('.tag').remove();
    
    updateMultiSelectDisplay(container.querySelector('.multiselect-display'));
}

function updateMultiSelectDisplay(display) {
    const placeholder = display.querySelector('.multiselect-placeholder');
    const hasTags = display.querySelectorAll('.tag').length > 0;
    
    if (placeholder) {
        placeholder.style.display = hasTags ? 'none' : 'block';
    }
}

// Calendar functions
function initCalendar() {
    const calendar = document.querySelector('.calendar-grid');
    if (!calendar) return;
    
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    renderCalendar(currentMonth, currentYear);
}

function renderCalendar(month, year) {
    const calendar = document.querySelector('.calendar-grid');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Update header
    const monthYear = document.querySelector('.calendar-month-year');
    if (monthYear) {
        monthYear.textContent = `${monthNames[month]} ${year}`;
    }
    
    // Clear calendar
    calendar.innerHTML = '';
    
    // Add day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day';
        dayHeader.style.fontWeight = 'bold';
        dayHeader.style.background = '#f8f9fa';
        dayHeader.textContent = day;
        calendar.appendChild(dayHeader);
    });
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day other-month';
        calendar.appendChild(emptyDay);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        // Highlight today
        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            dayElement.classList.add('today');
        }
        
        calendar.appendChild(dayElement);
    }
}

function changeMonth(direction) {
    const monthYear = document.querySelector('.calendar-month-year').textContent;
    const [monthName, year] = monthYear.split(' ');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    
    let month = monthNames.indexOf(monthName);
    let newYear = parseInt(year);
    
    if (direction === 'prev') {
        month--;
        if (month < 0) {
            month = 11;
            newYear--;
        }
    } else {
        month++;
        if (month > 11) {
            month = 0;
            newYear++;
        }
    }
    
    renderCalendar(month, newYear);
}

// Chart functions (using Canvas for simple charts)
function initCharts() {
    drawLineChart();
    drawBarChart();
}

function drawLineChart() {
    const canvas = document.getElementById('lineChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 300;
    
    // Sample data
    const data = [65, 59, 80, 81, 56, 55, 40];
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    // Clear canvas
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, width, height);
    
    // Draw axes
    ctx.strokeStyle = '#e1e5e9';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(50, height - 50);
    ctx.lineTo(width - 20, height - 50);
    ctx.moveTo(50, 20);
    ctx.lineTo(50, height - 50);
    ctx.stroke();
    
    // Draw data line
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    const stepX = (width - 70) / (data.length - 1);
    const maxY = Math.max(...data);
    
    data.forEach((value, index) => {
        const x = 50 + (index * stepX);
        const y = height - 50 - ((value / maxY) * (height - 70));
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        
        // Draw points
        ctx.fillStyle = '#667eea';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    });
    
    ctx.stroke();
    
    // Draw labels
    ctx.fillStyle = '#666';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    labels.forEach((label, index) => {
        const x = 50 + (index * stepX);
        ctx.fillText(label, x, height - 25);
    });
}

function drawBarChart() {
    const canvas = document.getElementById('barChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 200;
    
    // Sample data
    const data = [45, 67, 23, 89, 56];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    const colors = ['#3498db', '#2ecc71', '#f39c12', '#e74c3c', '#9b59b6'];
    
    // Clear canvas
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, width, height);
    
    const barWidth = (width - 100) / data.length;
    const maxY = Math.max(...data);
    
    data.forEach((value, index) => {
        const barHeight = (value / maxY) * (height - 60);
        const x = 50 + (index * barWidth) + (barWidth * 0.1);
        const y = height - 40 - barHeight;
        
        // Draw bar
        ctx.fillStyle = colors[index];
        ctx.fillRect(x, y, barWidth * 0.8, barHeight);
        
        // Draw label
        ctx.fillStyle = '#666';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(labels[index], x + (barWidth * 0.4), height - 15);
        
        // Draw value
        ctx.fillStyle = '#333';
        ctx.fillText(value, x + (barWidth * 0.4), y - 5);
    });
}

// Permission functions
function togglePermission(role, permission, checkbox) {
    if (!appState.permissions[role]) {
        appState.permissions[role] = {};
    }
    appState.permissions[role][permission] = checkbox.checked;
    
    console.log('Permissions updated:', appState.permissions);
}

function savePermissions() {
    showSuccess('Permissions saved successfully!');
    console.log('Saving permissions:', appState.permissions);
}

// Settings functions
function handleSettingsSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const settings = {};
    
    for (let [key, value] of formData.entries()) {
        settings[key] = value;
    }
    
    console.log('Settings saved:', settings);
    showSuccess('Settings saved successfully!');
}

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        clearError(field.id);
        
        if (!field.value.trim()) {
            showError(field.id, `${field.labels[0].textContent} is required`);
            isValid = false;
        }
        
        if (field.type === 'email' && field.value && !validateEmail(field.value)) {
            showError(field.id, 'Please enter a valid email address');
            isValid = false;
        }
        
        if (field.type === 'password' && field.value && !validatePassword(field.value)) {
            showError(field.id, 'Password must be at least 6 characters long');
            isValid = false;
        }
    });
    
    return isValid;
}

// Initialize functions for different pages
function initDashboard() {
    setActiveNav('dashboard');
    initCalendar();
    setTimeout(initCharts, 100); // Delay to ensure canvas is rendered
}

function initSettings() {
    setActiveNav('settings');
    initFileUpload('singleFileUpload', false);
    initFileUpload('multiFileUpload', true);
    initTagsInput('tagsInput');
    initMultiSelect('multiSelect');
}

function initPermissions() {
    setActiveNav('permissions');
}

function initForms() {
    setActiveNav('forms');
    initFileUpload('formFileUpload', false);
    initTagsInput('formTagsInput');
    initMultiSelect('formMultiSelect');
}

// Page initialization
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'login.html';
    
    // Initialize sidebar toggle if present
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
    
    // Initialize dropdown menus
    const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggleSubmenu(toggle);
        });
    });
    
    // Page-specific initialization
    if (currentPage.includes('dashboard')) {
        initDashboard();
    } else if (currentPage.includes('settings')) {
        initSettings();
    } else if (currentPage.includes('permissions')) {
        initPermissions();
    } else if (currentPage.includes('forms')) {
        initForms();
    }
    
    // Initialize auth forms
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    const settingsForm = document.getElementById('settingsForm');
    if (settingsForm) {
        settingsForm.addEventListener('submit', handleSettingsSubmit);
    }
});

// Logout function
function logout() {
    appState.currentUser = null;
    window.location.href = 'login.html';
}