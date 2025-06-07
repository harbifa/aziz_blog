document.addEventListener('DOMContentLoaded', function () {
    const searchToggle = document.querySelector('.search-toggle');
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    let fuse;
    let data;
    let isIndexLoaded = false;

    // 1. إظهار وإخفاء صندوق البحث
    searchToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            searchInput.focus();
            // تحميل الفهرس عند أول فتح لصندوق البحث
            if (!isIndexLoaded) {
                loadSearchIndex();
            }
        }
    });

    // إخفاء الصندوق عند النقر في أي مكان آخر
    document.addEventListener('click', function (e) {
        if (searchBox.classList.contains('active') && !searchBox.contains(e.target)) {
            searchBox.classList.remove('active');
        }
    });

    // منع إغلاق الصندوق عند النقر داخله
    searchBox.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    // 2. تحميل ملف الفهرس
    async function loadSearchIndex() {
        try {
            const response = await fetch('/index.json');
            if (!response.ok) {
                console.error('Failed to load search index.');
                return;
            }
            data = await response.json();
            
            const options = {
                keys: ['title', 'content', 'tags'],
                includeScore: true,
                threshold: 0.3, // كن أكثر صرامة في البحث (0.0 = تطابق تام, 1.0 = أي شيء)
                minMatchCharLength: 2,
                ignoreLocation: true,
            };
            fuse = new Fuse(data, options);
            isIndexLoaded = true;
            console.log('Search index loaded successfully.');
        } catch (error) {
            console.error('Error loading search index:', error);
        }
    }

    // 3. تنفيذ البحث وعرض النتائج
    searchInput.addEventListener('input', function () {
        if (!isIndexLoaded || !fuse) return;

        const query = this.value.trim();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }

        const results = fuse.search(query).slice(0, 10); // عرض أفضل 10 نتائج فقط

        searchResults.innerHTML = ''; // مسح النتائج القديمة

        if (results.length > 0) {
            results.forEach(result => {
                const item = result.item;
                const resultElement = document.createElement('a');
                resultElement.href = item.permalink;
                resultElement.classList.add('search-result-item');
                resultElement.innerHTML = `
                    <div class="search-result-title">${item.title}</div>
                    <div class="search-result-summary">${item.content.substring(0, 80)}...</div>
                `;
                searchResults.appendChild(resultElement);
            });
        } else {
            searchResults.innerHTML = '<div class="search-result-item">لا توجد نتائج.</div>';
        }
    });
});