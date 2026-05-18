// ─── Translations (UI strings, independent of lottery) ───────────────────────
const TRANSLATIONS = {
    en: {
        tabHome: '🏠 Home', tabGen: '🎰 Generator', tabGuide: '📖 Guide', tabContact: '📧 Contact',
        heroTitle: 'Generate Your Lucky Lottery Numbers',
        heroSub: 'Free, cryptographically secure number generation for 6 major international lotteries.',
        tickerJackpot: '💰 Current Jackpot:', tickerWinner: '🔥 Recent Winner:',
        quickJumpTitle: 'Quick Jump — Popular Lotteries',
        howItWorksTitle: 'How It Works',
        whyTitle: 'Why Choose LottoPro?',
        genTitle: 'Generate Your Lucky Numbers',
        genBtn: 'Generate Numbers',
        setCountLabel: 'Sets:',
        labelExclude: 'Exclude Numbers:', labelInclude: 'Include Numbers:',
        statsTitle: 'Statistics', checkResults: 'Check Official Results',
        tabHot: '🔥 Hot', tabCold: '🧊 Cold',
        guideHeader: 'Global Lottery Guide', thLotto: 'Lottery', thFormat: 'How to Play', thOdds: 'Jackpot Odds',
        tipHeader: '💡 Pro Tip for Foreigners',
        tipDesc: 'If you win while abroad, most lotteries require you to claim the prize in the same country where the ticket was purchased. Always check the official website!',
        contactHeader: 'Get in Touch', contactSub: "Have a suggestion or found a bug? We'd love to hear from you!",
        labelName: 'Name', labelEmail: 'Email', labelMsg: 'Message', btnSubmit: 'Send Message',
        namePlaceholder: 'Your full name',
        faqHeader: 'Frequently Asked Questions',
        faqQ1: 'Is this service free?', faqA1: 'Yes, LottoPro is 100% free with no registration, no subscription, and no hidden fees — ever.',
        faqQ2: 'Are the numbers truly random?', faqA2: 'Yes. We use the Web Crypto API (crypto.getRandomValues), the same cryptographic standard used in banking software.',
        copyBtn: 'Copy Set', copySuccess: 'Copied!', shareBtn: 'Share',
        historyTitle: 'Recent Numbers', clearHistory: 'Clear History',
        disclaimer: '<strong>Disclaimer:</strong> This generator is for entertainment only. We do not guarantee any winnings. Please play responsibly.',
        luckMessages: ["Good Luck!", "Today is your day!", "Believe in your luck!", "Fortune favors the bold!", "Your lucky numbers are here!"],
        metaTitle: 'LottoPro - Global Lottery Number Generator & Results',
        metaDesc: 'Free cryptographically secure lottery number generator for Powerball, Mega Millions, EuroMillions, UK Lotto, Korea 6/45, and Japan Loto 7.'
    },
    ko: {
        tabHome: '🏠 홈', tabGen: '🎰 생성기', tabGuide: '📖 가이드', tabContact: '📧 문의',
        heroTitle: '행운의 로또 번호를 즉시 생성하세요',
        heroSub: '전 세계 6개 주요 복권을 위한 무료 보안 난수 생성기.',
        tickerJackpot: '💰 현재 잭팟:', tickerWinner: '🔥 최근 당첨 지역:',
        quickJumpTitle: '퀵 점프 — 인기 로또',
        howItWorksTitle: '이용 방법',
        whyTitle: 'LottoPro를 선택하는 이유',
        genTitle: '행운의 번호 생성하기',
        genBtn: '번호 생성하기',
        setCountLabel: '세트 수:',
        labelExclude: '제외할 번호:', labelInclude: '포함할 번호:',
        statsTitle: '통계 데이터', checkResults: '공식 당첨 번호 확인하기',
        tabHot: '🔥 핫 번호', tabCold: '🧊 콜드 번호',
        guideHeader: '글로벌 로또 가이드', thLotto: '로또명', thFormat: '구매 방법', thOdds: '1등 당첨확률',
        tipHeader: '💡 외국인 당첨자 팁',
        tipDesc: '해외에서 당첨될 경우, 티켓을 구매한 국가에서 당첨금을 수령해야 합니다. 반드시 공식 사이트를 확인하세요.',
        contactHeader: '문의하기', contactSub: '제안이나 버그 리포트가 있다면 언제든 연락주세요!',
        labelName: '이름', labelEmail: '이메일', labelMsg: '메시지', btnSubmit: '메시지 보내기',
        namePlaceholder: '이름을 입력하세요',
        faqHeader: '자주 묻는 질문',
        faqQ1: '정말 무료인가요?', faqA1: '네, LottoPro는 회원가입 없이 100% 무료로 이용 가능합니다.',
        faqQ2: '번호는 진짜 무작위인가요?', faqA2: '네, 은행 보안 소프트웨어와 동일한 Web Crypto API(crypto.getRandomValues)를 사용합니다.',
        copyBtn: '번호 복사', copySuccess: '복사 완료!', shareBtn: '공유하기',
        historyTitle: '최근 생성 번호', clearHistory: '기록 삭제',
        disclaimer: '<strong>면책 조항:</strong> 이 생성기는 오직 재미를 위한 것이며 실제 당첨을 보장하지 않습니다. 책임감 있게 즐겨주세요.',
        luckMessages: ["행운을 빕니다!", "오늘이 바로 그날!", "당신의 행운을 믿으세요!", "행운은 용감한 자의 것!", "당신의 행운 번호가 여기 있습니다!"],
        metaTitle: '로또 번호 생성기 - LottoPro 글로벌 복권 번호 추첨',
        metaDesc: '한국 로또 6/45, 미국 파워볼, 유로밀리언즈 등 전 세계 6개 복권 번호를 무료로 생성하세요. 보안 난수 알고리즘 사용.'
    },
    ja: {
        tabHome: '🏠 ホーム', tabGen: '🎰 生成器', tabGuide: '📖 ガイド', tabContact: '📧 お問い合わせ',
        heroTitle: 'ラッキーナンバーを今すぐ生成',
        heroSub: '世界6大宝くじ対応の無料・安全な番号生成サービス。',
        tickerJackpot: '💰 現在のジャックポット:', tickerWinner: '🔥 最近の当選地:',
        quickJumpTitle: 'クイックジャンプ — 人気宝くじ',
        howItWorksTitle: '使い方',
        whyTitle: 'LottoProを選ぶ理由',
        genTitle: '幸運の番号を生成する',
        genBtn: '番号を生成',
        setCountLabel: 'セット数:',
        labelExclude: '除外番号:', labelInclude: '含む番号:',
        statsTitle: '統計データ', checkResults: '公式サイトで当選番号を確認',
        tabHot: '🔥 ホット', tabCold: '🧊 コールド',
        guideHeader: 'グローバル宝くじガイド', thLotto: '宝くじ名', thFormat: '購入方法', thOdds: '1等当選確率',
        tipHeader: '💡 外国人向けのヒント',
        tipDesc: '日本国外から参加する場合、当選金の受け取り方法について公式サイトの注意事項を必ず確認してください。',
        contactHeader: 'お問い合わせ', contactSub: 'ご提案やバグ報告があれば、お気軽にご連絡ください。',
        labelName: 'お名前', labelEmail: 'メールアドレス', labelMsg: 'メッセージ', btnSubmit: '送信する',
        namePlaceholder: 'お名前を入力してください',
        faqHeader: 'よくある質問',
        faqQ1: '本当に無料ですか？', faqA1: 'はい、登録不要で完全無料です。',
        faqQ2: '本当にランダムですか？', faqA2: 'はい、銀行レベルのWeb Crypto API(crypto.getRandomValues)を使用しています。',
        copyBtn: 'コピー', copySuccess: 'コピー完了！', shareBtn: '共有',
        historyTitle: '最近の番号', clearHistory: '履歴を削除',
        disclaimer: '<strong>免責事項:</strong> この生成器は娯楽用であり、当選を保証するものではありません。',
        luckMessages: ["幸運を祈ります！", "今日がその日！", "あなたの運を信じて！", "幸運は勇者のもの！", "ラッキーナンバーはこちら！"],
        metaTitle: 'ロト番号生成器 - LottoPro グローバル宝くじ',
        metaDesc: 'ロト7、パワーボール、ユーロミリオンズなど世界6大宝くじの番号を無料生成。暗号学的乱数を使用した安全なサービス。'
    }
};

// ─── Lottery Configurations (data only, no UI strings) ───────────────────────
const LOTTO_CONFIGS = {
    kr: {
        lottoName: 'Korea 6/45',
        lottoNames: { en: 'Korea 6/45', ko: '로또 6/45', ja: '韓国ロト6/45' },
        mainCount: 6, mainRange: 45, bonusCount: 0, bonusRange: 45,
        separateBonusPool: false,
        resultsUrl: 'https://www.dhlottery.co.kr/common.do?method=main',
        hotNumbers: [1, 18, 27, 34, 43, 45],
        coldNumbers: [3, 9, 21, 25, 32, 40]
    },
    us_pb: {
        lottoName: 'Powerball',
        lottoNames: { en: 'Powerball', ko: '파워볼', ja: 'パワーボール' },
        mainCount: 5, mainRange: 69, bonusCount: 1, bonusRange: 26,
        bonusLabel: 'PB', separateBonusPool: true,
        resultsUrl: 'https://www.powerball.com/draw-results',
        hotNumbers: [32, 39, 61, 63, 69, 23],
        coldNumbers: [4, 10, 18, 46, 55, 66]
    },
    uk: {
        lottoName: 'UK Lotto',
        lottoNames: { en: 'UK Lotto', ko: 'UK 로또', ja: 'UKロト' },
        mainCount: 6, mainRange: 59, bonusCount: 0, bonusRange: 59,
        separateBonusPool: false,
        resultsUrl: 'https://www.national-lottery.co.uk/results',
        hotNumbers: [23, 38, 41, 49, 52, 58],
        coldNumbers: [7, 14, 26, 35, 44, 56]
    },
    jp_l7: {
        lottoName: 'Loto 7',
        lottoNames: { en: 'Japan Loto 7', ko: '일본 로토7', ja: 'ロト7' },
        mainCount: 7, mainRange: 37, bonusCount: 0, bonusRange: 37,
        separateBonusPool: false,
        resultsUrl: 'https://www.mizuhobank.co.jp/retail/takarakuji/check/loto/loto7/index.html',
        hotNumbers: [13, 15, 21, 26, 30, 32, 34],
        coldNumbers: [2, 6, 10, 18, 24, 31, 37]
    },
    us_mm: {
        lottoName: 'Mega Millions',
        lottoNames: { en: 'Mega Millions', ko: '메가밀리언스', ja: 'メガミリオンズ' },
        mainCount: 5, mainRange: 70, bonusCount: 1, bonusRange: 25,
        bonusLabel: 'MB', separateBonusPool: true,
        resultsUrl: 'https://www.megamillions.com/winning-numbers',
        hotNumbers: [14, 17, 31, 46, 64, 10],
        coldNumbers: [3, 20, 29, 41, 55, 68]
    },
    eu_em: {
        lottoName: 'EuroMillions',
        lottoNames: { en: 'EuroMillions', ko: '유로밀리언즈', ja: 'ユーロミリオンズ' },
        mainCount: 5, mainRange: 50, bonusCount: 2, bonusRange: 12,
        bonusLabel: 'Star', separateBonusPool: true,
        resultsUrl: 'https://www.euro-millions.com/results',
        hotNumbers: [17, 21, 42, 44, 50],
        coldNumbers: [2, 9, 25, 33, 47]
    }
};

// ─── Custom Element: Lotto Ball ───────────────────────────────────────────────
class LottoBall extends HTMLElement {
    static get observedAttributes() { return ['number', 'type', 'label', 'rolling']; }
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); }
    attributeChangedCallback(name, oldValue, newValue) { if (oldValue !== newValue) this.render(); }
    render() {
        const number = this.getAttribute('number') || '';
        const label = this.getAttribute('label') || '';
        const rolling = this.hasAttribute('rolling');
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: inline-flex; flex-direction: column; align-items: center; margin: 0.3rem; }
                .ball {
                    display: flex; justify-content: center; align-items: center;
                    width: 45px; height: 45px; border-radius: 50%;
                    background: var(--ball-color, #2563eb); color: white;
                    font-size: 1.1rem; font-weight: 700; box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                    animation: ${rolling ? 'roll 0.2s infinite linear' : 'pop-in 0.5s cubic-bezier(0.68,-0.55,0.27,1.55) forwards'};
                }
                .label { font-size: 0.6rem; color: #64748b; margin-top: 4px; font-weight: 700; text-transform: uppercase; }
                @keyframes pop-in { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
                @keyframes roll { 0% { transform: rotate(0deg) translateY(-2px); } 50% { transform: rotate(180deg) translateY(2px); } 100% { transform: rotate(360deg) translateY(-2px); } }
            </style>
            <div class="ball">${number}</div>
            ${label ? `<div class="label">${label}</div>` : ''}
        `;
    }
}
customElements.define('lotto-ball', LottoBall);

// ─── App ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle    = document.getElementById('theme-toggle');
    const countrySelect  = document.getElementById('country-select');
    const numbersContainer = document.getElementById('lotto-numbers');
    const generateBtn    = document.getElementById('generate-btn');
    const mainTabBtns    = document.querySelectorAll('.main-tab-btn');
    const mainTabContents = document.querySelectorAll('.main-tab-content');

    // ── Theme ─────────────────────────────────────────────────────────────────
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    function updateThemeIcon(t) {
        const icon = themeToggle.querySelector('.icon');
        if (icon) icon.textContent = t === 'light' ? '🌙' : '☀️';
    }
    updateThemeIcon(savedTheme);

    // ── Tabs ──────────────────────────────────────────────────────────────────
    mainTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            mainTabBtns.forEach(b => b.classList.remove('active'));
            mainTabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-main-tab')).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // ── Language selector ─────────────────────────────────────────────────────
    let currentLang = localStorage.getItem('lang') || 'en';
    const langBtns = document.querySelectorAll('.lang-btn');

    function setLang(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.setAttribute('lang', lang);
        langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
        updateUI();
    }
    langBtns.forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
    // Init active state without triggering full updateUI twice
    langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
    document.documentElement.setAttribute('lang', currentLang);

    // ── Lottery selector ──────────────────────────────────────────────────────
    let currentConfig = LOTTO_CONFIGS.us_pb;
    countrySelect.addEventListener('change', (e) => {
        currentConfig = LOTTO_CONFIGS[e.target.value];
        updateUI();
    });

    // ── updateUI ──────────────────────────────────────────────────────────────
    function updateUI() {
        const t = TRANSLATIONS[currentLang];

        document.title = t.metaTitle;
        document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDesc);

        const ids = {
            'tab-home': t.tabHome, 'tab-gen': t.tabGen, 'tab-guide': t.tabGuide, 'tab-contact': t.tabContact,
            'hero-title': t.heroTitle, 'hero-sub': t.heroSub,
            'ticker-jackpot': t.tickerJackpot, 'ticker-winner': t.tickerWinner,
            'quick-jump-title': t.quickJumpTitle,
            'how-it-works-title': t.howItWorksTitle,
            'why-title': t.whyTitle,
            'gen-title-text': t.genTitle, 'generate-btn': t.genBtn,
            'set-count-label': t.setCountLabel,
            'label-exclude': t.labelExclude, 'label-include': t.labelInclude,
            'stats-title': t.statsTitle, 'results-link': t.checkResults,
            'tab-hot': t.tabHot, 'tab-cold': t.tabCold,
            'guide-header': t.guideHeader, 'th-lotto': t.thLotto, 'th-format': t.thFormat, 'th-odds': t.thOdds,
            'tip-header': t.tipHeader, 'tip-desc': t.tipDesc,
            'contact-header': t.contactHeader, 'contact-sub': t.contactSub,
            'label-name': t.labelName, 'label-email': t.labelEmail, 'label-msg': t.labelMsg, 'btn-submit': t.btnSubmit,
            'faq-header': t.faqHeader, 'faq-q1': t.faqQ1, 'faq-a1': t.faqA1, 'faq-q2': t.faqQ2, 'faq-a2': t.faqA2,
            'history-title': t.historyTitle, 'clear-history-btn': t.clearHistory,
            'footer-disclaimer': t.disclaimer
        };
        for (const id in ids) {
            const el = document.getElementById(id);
            if (el) el.innerHTML = ids[id];
        }

        document.getElementById('results-link').href = currentConfig.resultsUrl;
        const nameInput = document.getElementById('name');
        if (nameInput) nameInput.placeholder = t.namePlaceholder;

        numbersContainer.innerHTML = '';
        renderNumberChart(currentHC);
    }

    // ── Generate ──────────────────────────────────────────────────────────────
    generateBtn.addEventListener('click', () => {
        const t = TRANSLATIONS[currentLang];
        const setCount = parseInt(document.getElementById('set-count').value);
        const exclude = document.getElementById('exclude-nums').value.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
        const include = document.getElementById('include-nums').value.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
        const luckMsg = document.getElementById('luck-message');

        numbersContainer.innerHTML = '';
        generateBtn.disabled = true;
        luckMsg.textContent = t.luckMessages[Math.floor(Math.random() * t.luckMessages.length)];

        for (let i = 0; i < setCount; i++) {
            const setWrapper = document.createElement('div');
            setWrapper.className = 'set-wrapper';
            const setDiv = document.createElement('div');
            setDiv.className = 'lotto-set';
            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'set-actions';

            const copyBtn = document.createElement('button');
            copyBtn.className = 'action-btn';
            copyBtn.textContent = t.copyBtn;

            const shareBtn = document.createElement('button');
            shareBtn.className = 'action-btn';
            shareBtn.textContent = t.shareBtn;

            actionsDiv.appendChild(copyBtn);
            actionsDiv.appendChild(shareBtn);
            setWrapper.appendChild(setDiv);
            setWrapper.appendChild(actionsDiv);
            numbersContainer.appendChild(setWrapper);

            for (let k = 0; k < currentConfig.mainCount + currentConfig.bonusCount; k++) {
                const dummy = document.createElement('lotto-ball');
                dummy.setAttribute('number', '?');
                dummy.setAttribute('rolling', '');
                setDiv.appendChild(dummy);
            }

            const mainNumbers = generateUniqueNumbers(currentConfig.mainCount, 1, currentConfig.mainRange, exclude, include);
            let bonusNumbers = [];
            if (currentConfig.bonusCount > 0) {
                const bExclude = currentConfig.separateBonusPool ? [] : [...mainNumbers, ...exclude];
                bonusNumbers = generateUniqueNumbers(currentConfig.bonusCount, 1, currentConfig.bonusRange, bExclude);
            }

            setTimeout(() => {
                setDiv.innerHTML = '';
                mainNumbers.forEach((num, idx) => {
                    setTimeout(() => {
                        const ball = document.createElement('lotto-ball');
                        ball.setAttribute('number', num);
                        ball.style.setProperty('--ball-color', getBallColor(num));
                        setDiv.appendChild(ball);
                    }, idx * 50);
                });
                bonusNumbers.forEach((num, idx) => {
                    setTimeout(() => {
                        const ball = document.createElement('lotto-ball');
                        ball.setAttribute('number', num);
                        ball.setAttribute('label', currentConfig.bonusLabel || 'Bonus');
                        ball.style.setProperty('--ball-color', '#ef4444');
                        setDiv.appendChild(ball);
                    }, (currentConfig.mainCount + idx) * 50);
                });
                if (i === setCount - 1) {
                    generateBtn.disabled = false;
                    const localName = currentConfig.lottoNames[currentLang] || currentConfig.lottoName;
                    addToHistory(localName, mainNumbers, bonusNumbers);
                }
            }, 800);

            copyBtn.addEventListener('click', () => {
                const localName = currentConfig.lottoNames[currentLang] || currentConfig.lottoName;
                const text = `${localName}: ${mainNumbers.join(', ')}${bonusNumbers.length ? ' + ' + bonusNumbers.join(', ') : ''}`;
                navigator.clipboard.writeText(text).then(() => {
                    copyBtn.textContent = TRANSLATIONS[currentLang].copySuccess;
                    setTimeout(() => { copyBtn.textContent = TRANSLATIONS[currentLang].copyBtn; }, 2000);
                });
            });

            shareBtn.addEventListener('click', () => {
                const localName = currentConfig.lottoNames[currentLang] || currentConfig.lottoName;
                const text = `${localName}: ${mainNumbers.join(', ')}`;
                if (navigator.share) {
                    navigator.share({ title: 'LottoPro', text, url: window.location.href });
                } else {
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' ' + window.location.href)}`, '_blank');
                }
            });
        }
    });

    // ── Crypto random ─────────────────────────────────────────────────────────
    function cryptoRandom(min, max) {
        const range = max - min + 1;
        const bytesNeeded = Math.ceil(Math.log2(range) / 8);
        const maxValid = Math.floor(256 ** bytesNeeded / range) * range;
        const buf = new Uint8Array(bytesNeeded);
        let val;
        do {
            crypto.getRandomValues(buf);
            val = buf.reduce((acc, b) => acc * 256 + b, 0);
        } while (val >= maxValid);
        return min + (val % range);
    }

    function generateUniqueNumbers(count, min, max, exclude = [], include = []) {
        const numbers = new Set();
        include.forEach(n => { if (n >= min && n <= max && !exclude.includes(n) && numbers.size < count) numbers.add(n); });
        let attempts = 0;
        while (numbers.size < count && attempts < 10000) {
            const num = cryptoRandom(min, max);
            if (!exclude.includes(num)) numbers.add(num);
            attempts++;
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    // ── Hot/Cold chart ────────────────────────────────────────────────────────
    const numberChart = document.getElementById('number-chart');
    const hcTabs = document.querySelectorAll('.hc-tab');
    let currentHC = 'hot';

    hcTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            hcTabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentHC = btn.getAttribute('data-hc');
            renderNumberChart(currentHC);
        });
    });

    function renderNumberChart(type) {
        const nums = type === 'hot' ? currentConfig.hotNumbers : currentConfig.coldNumbers;
        if (!nums || !numberChart) return;
        const maxFreq = 100;
        const freqSteps = nums.map((_, i) => Math.round(maxFreq - i * (maxFreq / nums.length * 0.6)));
        const color = type === 'hot' ? '#ef4444' : '#3b82f6';
        const rank = type === 'hot' ? '🔥' : '🧊';
        numberChart.innerHTML = nums.map((n, i) => `
            <div class="chart-row">
                <span class="chart-num" style="background:${getBallColor(n)}">${n}</span>
                <div class="chart-bar-wrap">
                    <div class="chart-bar" style="width:${freqSteps[i]}%;background:${color}"></div>
                </div>
                <span class="chart-pct">${rank} #${i + 1}</span>
            </div>
        `).join('');
    }

    function getBallColor(n) {
        if (n <= 10) return '#f59e0b';
        if (n <= 20) return '#3b82f6';
        if (n <= 30) return '#ef4444';
        if (n <= 40) return '#10b981';
        return '#8b5cf6';
    }

    // ── History ───────────────────────────────────────────────────────────────
    const HISTORY_KEY = 'lottopro_history';
    const historySection = document.getElementById('history-section');
    const historyList    = document.getElementById('history-list');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

    function loadHistory() { try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; } catch { return []; } }
    function saveHistory(h) { localStorage.setItem(HISTORY_KEY, JSON.stringify(h.slice(0, 20))); }

    function addToHistory(lottoName, main, bonus) {
        const h = loadHistory();
        h.unshift({ lottoName, main, bonus, date: new Date().toLocaleDateString() });
        saveHistory(h);
        renderHistory();
    }

    function renderHistory() {
        const h = loadHistory();
        if (h.length === 0) { historySection.style.display = 'none'; return; }
        historySection.style.display = 'block';
        historyList.innerHTML = h.map(item => `
            <div class="history-item">
                <span class="history-name">${item.lottoName}</span>
                <span class="history-nums">${item.main.join(' · ')}${item.bonus.length ? ' <span class="history-bonus">+ ' + item.bonus.join(' · ') + '</span>' : ''}</span>
                <span class="history-date">${item.date}</span>
            </div>
        `).join('');
    }

    clearHistoryBtn.addEventListener('click', () => { localStorage.removeItem(HISTORY_KEY); renderHistory(); });
    renderHistory();

    updateUI();
});
