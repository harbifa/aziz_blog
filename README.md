# مدونة عزيز (Aziz Blog)

مرحبًا بك في مستودع مدونتي الشخصية. هذا المشروع هو موقع ثابت تم بناؤه باستخدام مولد المواقع السريع **Hugo** وبتصميم من قالب **Ananke**.

## التقنيات المستخدمة

*   **مولد الموقع:** [Hugo](https://gohugo.io/)
*   **القالب (Theme):** [Ananke](https://github.com/theNewDynamic/gohugo-theme-ananke)
*   **النشر:** [Cloudflare Pages](https://pages.cloudflare.com/)

## كيفية تشغيل المشروع محليًا

لتشغيل نسخة من هذا الموقع على جهازك، ستحتاج إلى تثبيت Hugo.

1.  **تثبيت Hugo:**
    اتبع التعليمات الرسمية لتثبيت Hugo على نظام التشغيل الخاص بك: [دليل تثبيت Hugo](https://gohugo.io/installation/).

2.  **استنساخ المستودع:**
    استنسخ هذا المستودع وتأكد من تضمين القالب (theme) كـ submodule:
    ```bash
    git clone --recurse-submodules https://github.com/harbifa/aziz_blog.git
    ```

3.  **تشغيل الخادم المحلي:**
    انتقل إلى مجلد المشروع وشغّل خادم Hugo المحلي:
    ```bash
    cd aziz_blog
    hugo server
    ```

4.  **افتح الموقع:**
    افتح متصفحك وادخل على العنوان `http://localhost:1313`. 
