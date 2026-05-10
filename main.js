const LOTTO_CONFIGS = {
    kr: {
        name: 'South Korea',
        lang: 'ko',
        lottoName: '로또 6/45',
        mainCount: 6,
        mainRange: 45,
        bonusCount: 1,
        bonusRange: 45,
        separateBonusPool: false,
        resultsUrl: 'https://www.dhlottery.co.kr/common.do?method=main',
        stats: '자주 나오는 번호: 1, 18, 27, 34, 43, 45',
        meta: {
            title: '로또 번호 생성기 - 이번 주 당첨 번호 확인 및 통계 분석',
            description: '글로벌 로또 번호 생성기입니다. 한국 로또 6/45, 미국 파워볼, 일본 로또 7 등의 번호를 통계 기반으로 생성하고 공식 당첨 결과를 확인하세요.'
        },
        texts: {
            heroTitle: '엑스퍼트 로또 번호 생성기',
            heroSub: '당신의 행운을 위한 신뢰할 수 있는 동반자. 과학적 랜덤 추출과 세련된 디자인.',
            genTitle: '행운의 번호 추출하기',
            genBtn: '번호 생성하기',
            guideTitle: '작동 원리',
            guideText: '저희 생성기는 암호학적으로 안전한 의사 난수 생성기를 사용하여 각 추첨의 독립성과 공정성을 보장합니다.',
            probTitle: '통계 기반 분석',
            probText: '최근 추첨 데이터를 분석하여 가장 자주 등장하는 번호 패턴을 제공합니다.',
            stratTitle: '전략적 선택',
            stratText: '수학적 균형을 고려한 번호 조합을 통해 당첨 확률에 한 발 더 다가가세요.',
            aboutTitle: 'LottoPro 서비스',
            aboutText: 'LottoPro는 전 세계 로또 데이터를 기반으로 깨끗한 인터페이스와 사용자 프라이버시를 최우선으로 합니다.',
            contactTitle: '제휴 및 문의',
            contactSub: '협업이나 문의 사항이 있으신가요? 아래에 메시지를 남겨주세요.',
            submitBtn: '문의 보내기',
            checkResults: '공식 당첨 번호 확인하기',
            statsTitle: '통계 데이터',
            copyBtn: '번호 복사',
            copySuccess: '복사 완료!',
            shareBtn: '공유하기',
            adPlaceholder: '광고 영역'
        }
    },
    us_pb: {
        name: 'USA (Powerball)',
        lang: 'en',
        lottoName: 'Powerball',
        mainCount: 5,
        mainRange: 69,
        bonusCount: 1,
        bonusRange: 26,
        bonusLabel: 'PB',
        separateBonusPool: true,
        resultsUrl: 'https://www.powerball.com/draw-results',
        stats: 'Most frequent numbers: 32, 39, 61, 63, 69',
        meta: {
            title: 'LottoPro - Global Powerball Generator & Official Results',
            description: 'The ultimate global lotto number generator. Get Powerball, Mega Millions, and international lottery numbers with statistical insights.'
        },
        texts: {
            heroTitle: 'Expert Powerball Generator',
            heroSub: 'Your reliable companion for random number selection. Scientifically random, visually stunning.',
            genTitle: 'Generate Your Lucky Numbers',
            genBtn: 'Generate Numbers',
            guideTitle: 'Advanced Algorithm',
            guideText: 'Our generator uses cryptographically secure PRNG for guaranteed fairness and independence.',
            probTitle: 'Statistical Insights',
            probText: 'Leveraging historical draw frequency to provide smarter number combinations.',
            stratTitle: 'Strategic Picking',
            stratText: 'Balanced selections increase your chances of being the sole jackpot winner.',
            aboutTitle: 'About LottoPro',
            aboutText: 'LottoPro focuses on clean UI and global lottery standards. No data is stored.',
            contactTitle: 'Partnership & Inquiry',
            contactSub: 'Interested in collaborating? Drop us a message below.',
            submitBtn: 'Send Inquiry',
            checkResults: 'Check Official Results',
            statsTitle: 'Live Statistics',
            copyBtn: 'Copy Set',
            copySuccess: 'Copied!',
            shareBtn: 'Share',
            adPlaceholder: 'Sponsored Content'
        }
    },
    uk: {
        name: 'United Kingdom',
        lang: 'en',
        lottoName: 'Lotto (UK)',
        mainCount: 6,
        mainRange: 59,
        bonusCount: 1,
        bonusRange: 59,
        bonusLabel: 'Bonus',
        separateBonusPool: false,
        resultsUrl: 'https://www.national-lottery.co.uk/results',
        stats: 'Hot numbers: 23, 38, 41, 49, 52, 58',
        meta: {
            title: 'UK Lotto Generator - National Lottery Results & Statistics',
            description: 'Generate UK National Lottery numbers and check the latest results. Statistical analysis for the best lottery combinations.'
        },
        texts: {
            heroTitle: 'UK Lotto Number Generator',
            heroSub: 'Generate your lucky numbers for the UK National Lottery with confidence.',
            genTitle: 'Get Your Lucky Numbers',
            genBtn: 'Generate Numbers',
            guideTitle: 'UK Lotto Format',
            guideText: 'The UK Lotto uses a 6/59 format. We provide 6 main numbers for your next ticket.',
            probTitle: 'Win Probability',
            probText: 'Analyzing the 1 in 45 million odds to help you pick balanced lines.',
            stratTitle: 'Expert Tips',
            stratText: 'Avoid birthdays to minimize prize sharing among multiple winners.',
            aboutTitle: 'Global Service',
            aboutText: 'Independent tools for lottery enthusiasts worldwide, focusing on speed and accuracy.',
            contactTitle: 'Contact Us',
            contactSub: 'For partnership inquiries, please use the form below.',
            submitBtn: 'Submit',
            checkResults: 'Check UK Lotto Results',
            statsTitle: 'Lotto Statistics',
            copyBtn: 'Copy Set',
            copySuccess: 'Saved!',
            shareBtn: 'Share',
            adPlaceholder: 'Advertisement'
        }
    },
    jp_l7: {
        name: 'Japan',
        lang: 'ja',
        lottoName: 'ロト7 (Loto 7)',
        mainCount: 7,
        mainRange: 37,
        bonusCount: 2,
        bonusRange: 37,
        separateBonusPool: false,
        resultsUrl: 'https://www.mizuhobank.co.jp/retail/takarakuji/check/loto/loto7/index.html',
        stats: '出現頻度の高い数字: 13, 15, 21, 26, 30, 32, 34',
        meta: {
            title: 'ロト番号生成器 - ロト7 当選番号確認と最新統計分析',
            description: '日本と世界のロト番号生成ツール。ロト7、ロト6、パワーボール等の当選確率を高める統計的アプローチを提供します。'
        },
        texts: {
            heroTitle: 'プロフェッショナル・ロト番号生成器',
            heroSub: 'あなたの幸運をサポートする信頼のパートナー。科学的な乱数抽出と洗練されたデザイン。',
            genTitle: '幸運の番号を抽出する',
            genBtn: '番号を生成する',
            guideTitle: '仕組みについて',
            guideText: '当生成器は、各回の独立性と公平性を保証するため、暗号学的に安全な疑似乱数生成器を使用しています。',
            probTitle: '統計的分析',
            probText: '最新の抽選データを分析し、最も出現頻度の高い番号パターンを提供します。',
            stratTitle: '戦略的な選択',
            stratText: '数学的なバランスを考慮した番号の組み合わせにより、当選確率の向上を目指します。',
            aboutTitle: 'LottoProのサービス',
            aboutText: 'LottoProは世界中のロトデータに基づき、クリーンなUIとプライバシー保護を最優先しています。',
            contactTitle: '提携・お問い合わせ',
            contactSub: '提携やご質問がございましたら、以下のフォームよりご連絡ください。',
            submitBtn: '送信する',
            checkResults: '公式サイトで当選番号を確認',
            statsTitle: '最新統計データ',
            copyBtn: 'コピー',
            copySuccess: 'コピー完了！',
            shareBtn: '共有する',
            adPlaceholder: '広告エリア'
        }
    },
    eu_em: {
        name: 'Europe',
        lang: 'en',
        lottoName: 'EuroMillions',
        mainCount: 5,
        mainRange: 50,
        bonusCount: 2,
        bonusRange: 12,
        bonusLabel: 'Star',
        separateBonusPool: true,
        resultsUrl: 'https://www.euro-millions.com/results',
        stats: 'Frequent stars: 3, 9 | Main: 17, 21, 42, 44, 50',
        meta: {
            title: 'EuroMillions Generator - Results, Stats & Predictions',
            description: 'The ultimate tool for EuroMillions players. Generate random numbers based on statistics and check official results.'
        },
        texts: {
            heroTitle: 'EuroMillions Lucky Pick',
            heroSub: 'The ultimate tool for European lottery players with full statistics.',
            genTitle: 'Generate EuroMillions Sets',
            genBtn: 'Generate Now',
            guideTitle: 'How to Play',
            guideText: 'EuroMillions requires 5 main numbers and 2 Lucky Stars for the jackpot.',
            probTitle: 'Jackpot Odds',
            probText: 'Providing insights into the 1 in 139 million odds with historical data.',
            stratTitle: 'Pro Strategy',
            stratText: 'Mixing high and low numbers often yields better statistical distribution.',
            aboutTitle: 'Global Support',
            aboutText: 'LottoPro supports multiple languages and international lottery standards.',
            contactTitle: 'Partnership',
            contactSub: 'Reach out for international business opportunities.',
            submitBtn: 'Send Message',
            checkResults: 'Check Official Results',
            statsTitle: 'Star Statistics',
            copyBtn: 'Copy',
            copySuccess: 'Done!',
            shareBtn: 'Share',
            adPlaceholder: 'Ads'
        }
    }
};

const LUCK_MESSAGES = [
    "Good Luck!", "Today is your day!", "Believe in your luck!", 
    "Fortune favors the bold!", "May the odds be in your favor!",
    "Your lucky numbers are here!", "Jackpot calling?"
];

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
                    font-size: 1.1rem; font-weight: 700; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    position: relative;
                    animation: ${rolling ? 'roll 0.2s infinite linear' : 'pop-in 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards'};
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

document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const countrySelect = document.getElementById('country-select');
    const numbersContainer = document.getElementById('lotto-numbers');
    const generateBtn = document.getElementById('generate-btn');
    const mainTabBtns = document.querySelectorAll('.main-tab-btn');
    const mainTabContents = document.querySelectorAll('.main-tab-content');

    // Theme Logic
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('.icon');
        if (icon) icon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
    updateThemeIcon(savedTheme);

    // Tab Logic
    mainTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-main-tab');
            mainTabBtns.forEach(b => b.classList.remove('active'));
            mainTabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(target).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Internationalization & UI
    let currentConfig = LOTTO_CONFIGS.us_pb;
    countrySelect.value = 'us_pb';
    countrySelect.addEventListener('change', (e) => {
        currentConfig = LOTTO_CONFIGS[e.target.value];
        updateUI();
    });

    function updateUI() {
        const t = currentConfig.texts;
        const m = currentConfig.meta;
        document.title = m.title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', m.description);
        document.getElementById('gen-title-text').textContent = t.genTitle;
        generateBtn.textContent = t.genBtn;
        document.getElementById('stats-title').textContent = t.statsTitle;
        document.getElementById('stats-data').textContent = currentConfig.stats;
        const resultsLink = document.getElementById('results-link');
        resultsLink.textContent = t.checkResults;
        resultsLink.href = currentConfig.resultsUrl;
        numbersContainer.innerHTML = '';
    }

    generateBtn.addEventListener('click', () => {
        const setCount = parseInt(document.getElementById('set-count').value);
        const excludeInput = document.getElementById('exclude-nums').value;
        const includeInput = document.getElementById('include-nums').value;
        const luckMsg = document.getElementById('luck-message');
        
        const exclude = excludeInput.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
        const include = includeInput.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));

        numbersContainer.innerHTML = '';
        generateBtn.disabled = true;
        luckMsg.textContent = LUCK_MESSAGES[Math.floor(Math.random() * LUCK_MESSAGES.length)];
        
        for (let i = 0; i < setCount; i++) {
            const setWrapper = document.createElement('div');
            setWrapper.className = 'set-wrapper';
            const setDiv = document.createElement('div');
            setDiv.className = 'lotto-set';
            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'set-actions';
            
            const copyBtn = document.createElement('button');
            copyBtn.className = 'action-btn';
            copyBtn.textContent = currentConfig.texts.copyBtn;

            actionsDiv.appendChild(copyBtn);
            setWrapper.appendChild(setDiv);
            setWrapper.appendChild(actionsDiv);
            numbersContainer.appendChild(setWrapper);

            for(let k=0; k<currentConfig.mainCount + currentConfig.bonusCount; k++) {
                const dummyBall = document.createElement('lotto-ball');
                dummyBall.setAttribute('number', '?');
                dummyBall.setAttribute('rolling', '');
                setDiv.appendChild(dummyBall);
            }

            const mainNumbers = generateUniqueNumbers(currentConfig.mainCount, 1, currentConfig.mainRange, exclude, include);
            let bonusNumbers = [];
            if (currentConfig.bonusCount > 0) {
                const bExclude = currentConfig.separateBonusPool ? [] : [...mainNumbers, ...exclude];
                bonusNumbers = generateUniqueNumbers(currentConfig.bonusCount, 1, currentConfig.bonusRange, bExclude);
            }

            setTimeout(() => {
                setDiv.innerHTML = '';
                mainNumbers.forEach((num, index) => {
                    setTimeout(() => {
                        const ball = document.createElement('lotto-ball');
                        ball.setAttribute('number', num);
                        ball.style.setProperty('--ball-color', getBallColor(num));
                        setDiv.appendChild(ball);
                    }, index * 50);
                });

                bonusNumbers.forEach((num, index) => {
                    setTimeout(() => {
                        const ball = document.createElement('lotto-ball');
                        ball.setAttribute('number', num);
                        ball.setAttribute('label', currentConfig.bonusLabel || 'Bonus');
                        ball.style.setProperty('--ball-color', '#ef4444');
                        setDiv.appendChild(ball);
                    }, (currentConfig.mainCount + index) * 50);
                });
                if (i === setCount - 1) generateBtn.disabled = false;
            }, 800);

            copyBtn.addEventListener('click', () => {
                const text = `${currentConfig.lottoName}: ${mainNumbers.join(', ')}${bonusNumbers.length ? ' + ' + bonusNumbers.join(', ') : ''}`;
                navigator.clipboard.writeText(text).then(() => {
                    copyBtn.textContent = currentConfig.texts.copySuccess;
                    setTimeout(() => copyBtn.textContent = currentConfig.texts.copyBtn, 2000);
                });
            });
        }
    });

    function generateUniqueNumbers(count, min, max, exclude = [], include = []) {
        const numbers = new Set();
        include.forEach(n => { if(n >= min && n <= max && numbers.size < count) numbers.add(n); });
        while (numbers.size < count) {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!exclude.includes(num)) numbers.add(num);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function getBallColor(number) {
        if (number <= 10) return '#f59e0b';
        if (number <= 20) return '#3b82f6';
        if (number <= 30) return '#ef4444';
        if (number <= 40) return '#10b981';
        return '#8b5cf6';
    }

    updateUI();
});
