const i18nTranslations = {
    vi: {
        // Styler panel
        'theme-colors': 'Màu chủ đề',
        'pick-color': 'Chọn một màu',
        'btn-default': 'Mặc định',
        'btn-close': 'Đóng',

        // Sidebar
        'sidebar-subtitle': 'Senior Laravel / Full-stack Engineer',
        'nav-home': 'Trang chủ',
        'nav-about': 'Giới thiệu',
        'nav-portfolio': 'Dự án',
        'nav-contact': 'Liên Hệ',

        // Home hero
        'hero-rotating': 'Senior Laravel Engineer, Full-stack Developer, Distributed Systems',
        'contact-email': 'Liên hệ qua email',
        'github-profile': 'Xem GitHub',

        // About section
        'section-about': 'Giới thiệu',
        'about-name': 'Nguyễn Khắc',
        'about-mark': 'Bình',
        'about-job-title': 'Senior Laravel / Full-stack Engineer',
        'about-p1': 'Kỹ sư PHP/Laravel với hơn 5 năm kinh nghiệm phát triển SaaS và nền tảng thương mại điện tử trên môi trường production, sử dụng Laravel, CakePHP và AWS/GCP.',
        'about-p2': 'Tập trung vào queue, concurrency, hệ thống tài chính và tối ưu hiệu năng — có API giảm từ 5–10 giây xuống khoảng 100 ms, cùng các luồng import bất đồng bộ 500–5.000 bản ghi.',
        'about-p3': 'Định hướng Technical Lead; có kinh nghiệm code review, hỗ trợ thành viên trong nhóm, viết tài liệu và phối hợp cùng product/stakeholders.',

        // Personal info
        'info-name-label': 'Họ và tên',
        'info-name-value': 'Nguyễn Khắc Bình',
        'info-city-label': 'Thành phố',
        'info-city-value': 'Hà Nội, Việt Nam',
        'metric-years': 'năm kinh nghiệm',
        'metric-api': 'API routes',
        'metric-admin': 'trang quản trị',
        'metric-modules': 'modules · 131 models · 143 service classes',
        'metric-context': 'Quy mô các hệ thống tôi từng tham gia, không phải số liệu của một sản phẩm riêng lẻ.',

        // Skills
        'section-skills': 'Kỹ năng chuyên môn',
        'skill-communication': 'Kỹ Năng Giao Tiếp',
        'skill-teamwork': 'Làm Việc Nhóm',
        'skill-creative': 'Sáng tạo',
        'skill-multitask': 'Đa nhiệm',
        'skill-backend': 'Backend & APIs',
        'skill-frontend': 'Frontend',
        'skill-data': 'Dữ liệu & xử lý bất đồng bộ',
        'skill-cloud': 'Cloud & triển khai',

        // Experience
        'section-experience': 'Kinh nghiệm',
        'ibis-name': 'IBIS STUDIO CO., LTD',
        'ibis-role': 'Backend / Platform Engineer',
        'ibis-date': '10/2023 - 05/2026',
        'ibis-current': 'Hiện tại',
        'ibis-d1': 'Phát triển RESTful APIs cho hệ thống workflow và E-commerce sử dụng Laravel, CakePHP; tham gia vận hành các hệ thống có khoảng 1.300 API routes.',
        'ibis-d2': 'Tối ưu query, Eloquent relationships và business logic, đưa các luồng API trọng điểm từ 5–10 giây xuống khoảng 100 ms.',
        'ibis-d3': 'Xử lý race condition khi khoảng 20 queue workers chạy đồng thời bằng distributed locking, idempotency và transaction rõ ràng.',
        'ibis-d4': 'Chuyển import 500–5.000 bản ghi sang background jobs, theo dõi tiến độ/lỗi; triển khai production trên GCP và Sakura Server.',
        'netbase-name': 'CÔNG TY CỔ PHẦN GIẢI PHÁP VÀ ỨNG DỤNG DOANH NGHIỆP NETBASE',
        'netbase-role': 'Backend / Fullstack Engineer',
        'netbase-date': '08/2021 - 10/2023',
        'netbase-d1': 'Xây dựng RESTful APIs và tính năng frontend cho nền tảng E-commerce scalable, phục vụ khách hàng quốc tế.',
        'netbase-d2': 'Tích hợp APIs của Shopify, BigCommerce và Wix nhằm triển khai workflow đồng bộ product/order đa nền tảng.',
        'netbase-d3': 'Phát triển SDKs, WebApps và frontend modules; triển khai nhiều sản phẩm white-label cho lĩnh vực giao nhận.',
        'netbase-d4': 'Quản lý cloud infrastructure trên AWS, Cloudflare, Render và Vercel, đảm bảo scalability và system stability.',
        'netbase-d5': 'Tối ưu AWS resources, caching và checkout/page load, góp phần giảm khoảng 30% chi phí hạ tầng và 40% thời gian tải.',
        'netbase-d6': 'Phối hợp với frontend team, product team và stakeholders để xây dựng scalable business workflows phục vụ khách hàng quốc tế.',

        // Education
        'section-education': 'Học vấn',
        'edu-school': 'VIỆN CÔNG NGHỆ THÔNG TIN T3H - ĐẠI HỌC QUỐC GIA TP.HCM',
        'edu-degree': 'Lập trình viên chuyên nghiệp',
        'edu-date': '08/2019 - 05/2024',
        'edu-desc': 'Lập trình viên PHP (2020), ASP.NET (2021), JAVA (2024), Android (2024).',

        // Services
        'section-services': 'Dịch vụ',

        // Certificates
        'section-certs': 'Chứng chỉ',
        'cert-php': 'Lập trình viên PHP',
        'cert-aspnet': 'Lập trình viên ASP.NET',
        'cert-java': 'Lập trình viên JAVA',
        'cert-android': 'Lập trình viên Android',

        // Portfolio
        'section-portfolio': 'Các bài toán đã giải quyết',
        'case-queue-title': 'Nhiều worker, không xử lý trùng',
        'case-queue-body': 'Giải quyết race condition khi khoảng 20 queue workers chạy đồng thời bằng distributed lock, idempotency và transaction.',
        'case-queue-result': 'Kết quả: một tác vụ chỉ tạo một kết quả nghiệp vụ.',
        'case-api-title': 'Tối ưu API từ 5–10 giây xuống ~100 ms',
        'case-api-body': 'Rà soát N+1, tối ưu truy vấn và quan hệ dữ liệu, tinh gọn business logic và cache đúng vị trí.',
        'case-api-result': 'Kết quả: phản hồi khoảng 100 ms ở luồng trọng điểm.',
        'case-import-title': 'Import dữ liệu lớn không chặn request',
        'case-import-body': 'Chuyển luồng 500–5.000 bản ghi sang background jobs, chia lô, theo dõi tiến độ và ghi nhận lỗi để kiểm tra/chạy lại.',
        'case-import-result': 'Kết quả: request không còn chờ xử lý toàn bộ dữ liệu.',
        'case-ledger-title': 'Ví điện tử và đối soát COD',
        'case-ledger-body': 'Áp dụng double-entry ledger, transaction traceability và kiểm soát tính nhất quán cho các luồng tài chính.',
        'case-ledger-result': 'Nguyên tắc: sổ cái cân bằng và có thể đối soát.',

        // Contact
        'section-map': 'Bản đồ vị trí',
        'section-contact-info': 'Thông tin liên hệ',
        'contact-address': 'Hà Nội, Việt Nam',
        'github-intro': 'Xem các dự án mã nguồn mở và hoạt động công khai trên GitHub.',
        'contact-form-heading': 'Gửi email cho tôi',
        'form-name': 'Họ và tên',
        'form-email': 'Email',
        'form-company': 'Công ty',
        'form-subject': 'Chủ đề',
        'form-message': 'Nội dung tin nhắn',
        'form-submit': 'Soạn email',
    },
    en: {
        // Styler panel
        'theme-colors': 'Theme Colors',
        'pick-color': 'Pick a color',
        'btn-default': 'Default',
        'btn-close': 'Close',

        // Sidebar
        'sidebar-subtitle': 'Senior Laravel / Full-stack Engineer',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',

        // Home hero
        'hero-rotating': 'Senior Laravel Engineer, Full-stack Developer, Distributed Systems',
        'contact-email': 'Contact me by email',
        'github-profile': 'View GitHub',

        // About section
        'section-about': 'About Me',
        'about-name': 'Nguyen Khac',
        'about-mark': 'Binh',
        'about-job-title': 'Senior Laravel / Full-stack Engineer',
        'about-p1': 'PHP/Laravel engineer with 5+ years of experience building production SaaS and e-commerce platforms with Laravel, CakePHP, and AWS/GCP.',
        'about-p2': 'Focused on queues, concurrency, financial workflows, and performance — reducing selected API response times from 5–10 seconds to around 100 ms and building asynchronous imports for 500–5,000 records.',
        'about-p3': 'Growing toward technical leadership, with experience in code reviews, supporting teammates, technical documentation, and product/stakeholder collaboration.',

        // Personal info
        'info-name-label': 'Full Name',
        'info-name-value': 'Nguyen Khac Binh',
        'info-city-label': 'City',
        'info-city-value': 'Hanoi, Vietnam',
        'metric-years': 'years of experience',
        'metric-api': 'API routes',
        'metric-admin': 'admin pages',
        'metric-modules': 'modules · 131 models · 143 service classes',
        'metric-context': 'Scale of systems I contributed to, not metrics from a single product.',

        // Skills
        'section-skills': 'Professional Skills',
        'skill-communication': 'Communication Skills',
        'skill-teamwork': 'Teamwork',
        'skill-creative': 'Creative',
        'skill-multitask': 'Multitasking',
        'skill-backend': 'Backend & APIs',
        'skill-frontend': 'Frontend',
        'skill-data': 'Data & asynchronous processing',
        'skill-cloud': 'Cloud & delivery',

        // Experience
        'section-experience': 'Experience',
        'ibis-name': 'IBIS STUDIO CO., LTD',
        'ibis-role': 'Backend / Platform Engineer',
        'ibis-date': '10/2023 - 05/2026',
        'ibis-current': 'Present',
        'ibis-d1': 'Developed RESTful APIs for workflow and e-commerce platforms with Laravel and CakePHP, contributing to systems with around 1,300 API routes.',
        'ibis-d2': 'Optimized queries, Eloquent relationships, and business logic, reducing selected API response times from 5–10 seconds to around 100 ms.',
        'ibis-d3': 'Addressed race conditions with around 20 concurrent queue workers using distributed locking, idempotency, and clear transaction boundaries.',
        'ibis-d4': 'Moved imports of 500–5,000 records to background jobs with progress/error tracking; deployed production services on GCP and Sakura Server.',
        'netbase-name': 'NETBASE ENTERPRISE SOLUTIONS AND APPLICATIONS JOINT STOCK COMPANY',
        'netbase-role': 'Backend / Fullstack Engineer',
        'netbase-date': '08/2021 - 10/2023',
        'netbase-d1': 'Built RESTful APIs and frontend features for a scalable e-commerce platform serving international customers.',
        'netbase-d2': 'Integrated Shopify, BigCommerce and Wix APIs for multi-platform product/order synchronization workflows.',
        'netbase-d3': 'Developed SDKs, web apps, and frontend modules; delivered multiple white-label products for logistics.',
        'netbase-d4': 'Managed cloud infrastructure on AWS, Cloudflare, Render and Vercel for production systems.',
        'netbase-d5': 'Optimized AWS resources, caching, and checkout/page load performance, contributing to about 30% lower infrastructure costs and 40% faster load times.',
        'netbase-d6': 'Collaborated with frontend and product teams to deliver scalable business workflows for international customers.',

        // Education
        'section-education': 'Education',
        'edu-school': 'T3H INSTITUTE OF INFORMATION TECHNOLOGY - VIETNAM NATIONAL UNIVERSITY HO CHI MINH CITY',
        'edu-degree': 'Professional Programmer',
        'edu-date': '08/2019 - 05/2024',
        'edu-desc': 'PHP (2020), ASP.NET (2021), JAVA (2024), Android (2024).',

        // Services
        'section-services': 'Services',

        // Certificates
        'section-certs': 'Certificates',
        'cert-php': 'PHP Programmer',
        'cert-aspnet': 'ASP.NET Programmer',
        'cert-java': 'JAVA Programmer',
        'cert-android': 'Android Programmer',

        // Portfolio
        'section-portfolio': 'Selected engineering challenges',
        'case-queue-title': 'Many workers, no duplicate processing',
        'case-queue-body': 'Addressed race conditions across around 20 concurrent queue workers with distributed locks, idempotency, and explicit transactions.',
        'case-queue-result': 'Outcome: one job produces one business result.',
        'case-api-title': 'Reduced API response times to around 100 ms',
        'case-api-body': 'Investigated N+1 issues, optimized queries and data relationships, simplified business logic, and applied caching where appropriate.',
        'case-api-result': 'Outcome: around 100 ms on a key workflow.',
        'case-import-title': 'Large imports without blocking requests',
        'case-import-body': 'Moved imports of 500–5,000 records to background jobs with batching, progress tracking, and recorded errors for review and retry.',
        'case-import-result': 'Outcome: requests no longer wait for the full import.',
        'case-ledger-title': 'Wallet workflows and COD reconciliation',
        'case-ledger-body': 'Applied double-entry ledger principles, transaction traceability, and consistency controls to financial workflows.',
        'case-ledger-result': 'Principle: a balanced, reconcilable ledger.',

        // Contact
        'section-map': 'Map Location',
        'section-contact-info': 'Contact Info',
        'contact-address': 'Hanoi, Vietnam',
        'github-intro': 'Explore my open-source projects and public activity on GitHub.',
        'contact-form-heading': 'Send me an email',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-company': 'Company',
        'form-subject': 'Subject',
        'form-message': 'Message',
        'form-submit': 'Compose email',
    }
};

let currentLang = 'vi';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cv-lang', lang);
    const t = i18nTranslations[lang];

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) {
            el.setAttribute('placeholder', t[key]);
            el.setAttribute('aria-label', t[key]);
        }
    });

    // Update toggle button label
    var btn = document.getElementById('lang-toggle-btn');
    if (btn) {
        btn.textContent = lang === 'vi' ? 'EN' : 'VI';
        btn.setAttribute('title', lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt');
    }

    document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';
    document.title = lang === 'vi'
        ? 'Nguyễn Khắc Bình | Senior Laravel & Full-stack Engineer'
        : 'Nguyen Khac Binh | Senior Laravel & Full-stack Engineer';
    var description = document.querySelector('meta[name="description"]');
    if (description) {
        description.content = lang === 'vi'
            ? 'Nguyễn Khắc Bình — kỹ sư Laravel và Full-stack với hơn 5 năm kinh nghiệm xây dựng SaaS, thương mại điện tử, xử lý bất đồng bộ và tối ưu hệ thống production.'
            : 'Nguyen Khac Binh — Laravel and full-stack engineer with 5+ years building SaaS, e-commerce, asynchronous systems, and production platforms.';
    }
}

function toggleLanguage() {
    applyLanguage(currentLang === 'vi' ? 'en' : 'vi');
}

document.addEventListener('DOMContentLoaded', function() {
    var saved = localStorage.getItem('cv-lang') || 'vi';
    applyLanguage(saved);
});
