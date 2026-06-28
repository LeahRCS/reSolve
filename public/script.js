document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('themeSwitch');
    const themeLabel = document.getElementById('themeLabel');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeSwitch.checked = false;
        themeLabel.textContent = 'Light Mode';
    }

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeLabel.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeLabel.textContent = 'Light Mode';
            localStorage.setItem('theme', 'light');
        }
    });

    const fabBtn = document.getElementById('fabBtn');
    const fabMenu = document.getElementById('fabMenu');

    fabBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fabMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!fabContainer.contains(e.target)) {
            fabMenu.classList.add('hidden');
        }
    });

    const fabContainer = document.querySelector('.fab-container');

    const learnBtn = document.getElementById('learnBtn');
    const learnModal = document.getElementById('learnModal');
    const faqBtn = document.getElementById('faqBtn');
    const faqModal = document.getElementById('faqModal');
    const closeModals = document.querySelectorAll('.close-modal');

    learnBtn.addEventListener('click', () => {
        learnModal.classList.remove('hidden');
        fabMenu.classList.add('hidden');
    });

    closeModals.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.parentElement.classList.add('hidden');
        });
    });

    faqBtn.addEventListener('click', () => {
        faqModal.classList.remove('hidden');
        fabMenu.classList.add('hidden');
    });

    learnModal.addEventListener('click', (e) => {
        if (e.target === learnModal) {
            learnModal.classList.add('hidden');
        }
    });

    faqModal.addEventListener('click', (e) => {
        if (e.target === faqModal) {
            faqModal.classList.add('hidden');
        }
    });

    const analyzeBtn = document.getElementById('analyzeBtn');
    const codeInput = document.getElementById('codeInput');
    const loading = document.getElementById('loading');
    const reportOutput = document.getElementById('reportOutput');
    const outputArea = document.getElementById('outputArea');
    const copyBtn = document.getElementById('copyBtn');
    let currentMarkdown = '';

    // Funções principais
    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(currentMarkdown);
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✅ Copiado!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        } catch (err) {
            alert('Falha ao copiar texto.');
        }
    }

    async function performAnalysis() {
        const code = codeInput.value.trim();
        const selectedModel = document.getElementById('modelSelect').value;
        if (!code) {
            alert('Por favor, insira o código fonte para análise.');
            return;
        }

        outputArea.classList.remove('hidden');
        reportOutput.classList.add('hidden');
        copyBtn.classList.add('hidden');
        loading.classList.remove('hidden');
        analyzeBtn.disabled = true;
        analyzeBtn.textContent = 'Analisando...';

        setTimeout(() => {
            outputArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);

        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code, model: selectedModel })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Erro desconhecido ao processar requisição');
            }

            currentMarkdown = data.result;
            reportOutput.innerHTML = marked.parse(data.result);
            reportOutput.classList.remove('hidden');
            copyBtn.classList.remove('hidden');

        } catch (error) {
            reportOutput.innerHTML = `<h3 style="color: #ff3333;">Erro</h3><p>${error.message}</p>`;
            reportOutput.classList.remove('hidden');
            copyBtn.classList.add('hidden');
        } finally {
            loading.classList.add('hidden');
            analyzeBtn.disabled = false;
            analyzeBtn.textContent = 'Analisar Código';

            reportOutput.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Bind de eventos
    copyBtn.addEventListener('click', copyToClipboard);
    analyzeBtn.addEventListener('click', performAnalysis);
});
