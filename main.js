const LOTTO_CONFIGS = {
    kr: {
        name: 'South Korea',
        lang: 'ko',
        lottoName: 'Lotto 6/45',
        mainCount: 6,
        mainRange: 45,
        bonusCount: 1,
        bonusRange: 45,
        separateBonusPool: false,
        texts: {
            title: '전문 로또 번호 생성기',
            heroTitle: '엑스퍼트 로또 번호 생성기',
            heroSub: '당신의 행운을 위한 신뢰할 수 있는 동반자. 과학적 랜덤 추출과 세련된 디자인.',
            genTitle: '행운의 번호 추출하기',
            genBtn: '번호 생성하기',
            guideTitle: '작동 원리',
            guideText: '저희 생성기는 암호학적으로 안전한 의사 난수 생성기를 사용하여 각 추첨의 독립성과 공정성을 보장합니다. 한국 로또 표준 형식에 따라 1에서 45 사이의 번호를 제공합니다.',
            probTitle: '확률 분석',
            probText: '확률을 이해하는 것이 중요합니다. 모든 조합은 동일한 확률을 가지지만, 저희 도구는 편향 없는 선택을 돕습니다.',
            stratTitle: '전략 팁',
            stratText: '모든 짝수나 모든 홀수와 같은 일반적인 패턴을 피하세요. 균형 잡힌 선택이 시각적으로도 좋고 확률적으로도 동일합니다.',
            aboutTitle: 'LottoPro 소개',
            aboutText: 'LottoPro는 번호 선택 과정을 단순화하기 위해 만들어졌습니다. 깨끗한 UI와 사용자 개인정보 보호에 집중합니다.',
            contactTitle: '제휴 및 문의',
            contactSub: '협업이나 문의 사항이 있으신가요? 아래에 메시지를 남겨주세요.',
            submitBtn: '문의 보내기'
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
        texts: {
            title: 'Expert Lotto Generator',
            heroTitle: 'Expert Lotto Number Generator',
            heroSub: 'Your reliable companion for random number selection. Scientifically random, visually stunning.',
            genTitle: 'Generate Your Lucky Numbers',
            genBtn: 'Generate Numbers',
            guideTitle: 'How It Works',
            guideText: 'Our generator uses a cryptographically secure pseudo-random number generator to ensure that every draw is independent and fair.',
            probTitle: 'Probability Analysis',
            probText: 'Understanding the odds is key. Every combination has an equal chance, but our tool helps you pick without bias.',
            stratTitle: 'Strategy Tips',
            stratText: 'Avoid common patterns like all evens or all odds. Balanced selections are more aesthetically pleasing.',
            aboutTitle: 'About LottoPro',
            aboutText: 'LottoPro focuses on clean UI and user privacy. No data is stored, and everything happens right in your browser.',
            contactTitle: 'Partnership & Inquiry',
            contactSub: 'Interested in collaborating? Drop us a message below.',
            submitBtn: 'Send Inquiry'
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
        texts: {
            title: 'Expert Lotto Generator',
            heroTitle: 'UK Lotto Number Generator',
            heroSub: 'Generate your lucky numbers for the UK National Lottery with confidence.',
            genTitle: 'Get Your Lucky Numbers',
            genBtn: 'Generate Numbers',
            guideTitle: 'UK Lotto Format',
            guideText: 'The UK Lotto uses a 6/59 format. We provide 6 main numbers and a bonus ball suggestion.',
            probTitle: 'Odds of Winning',
            probText: 'The odds of winning the jackpot are 1 in 45,057,474. Every line has an equal chance.',
            stratTitle: 'Smart Picking',
            stratText: 'Many players use birthdays, limiting their range to 1-31. Picking higher numbers can reduce prize sharing.',
            aboutTitle: 'About Us',
            aboutText: 'LottoPro provides a clean, independent tool for lottery enthusiasts worldwide.',
            contactTitle: 'Contact Us',
            contactSub: 'For partnership inquiries, please use the form below.',
            submitBtn: 'Submit'
        }
    },
    jp_l7: {
        name: 'Japan',
        lang: 'ja',
        lottoName: 'Loto 7',
        mainCount: 7,
        mainRange: 37,
        bonusCount: 2,
        bonusRange: 37,
        separateBonusPool: false,
        texts: {
            title: '専門ロト番号生成器',
            heroTitle: 'ロト7 番호 생성기',
            heroSub: 'あなたの幸運のための信頼できるパートナー。科学的なラン덤 추출과 세련된 디자인。',
            genTitle: '幸運의 番号를 생성하기',
            genBtn: '番号를 생성하기',
            guideTitle: '仕組み',
            guideText: '当生成器은 암호학적으로 안전한疑似乱数生成器を使用し、各抽選의 독립성과 공정성을 보장합니다。',
            probTitle: '確率分析',
            probText: '確率を理解することが重要です。すべての組み合わせは等しい確率を持ちますが、当ツールは偏りのない選択을 돕습니다.',
            stratTitle: '戦略のヒント',
            stratText: 'すべての偶数や奇数のような一般的なパターンを避けてください。バランスの取れた選択が視覚的にも良く、確率적에도 동등합니다。',
            aboutTitle: 'LottoProについて',
            aboutText: 'LottoPro는 번호 선택 과정을 단순화하기 위해 만들어졌습니다. 깨끗한 UI와 사용자 개인정보 보호에 집중합니다.',
            contactTitle: '提携およびお問い合わせ',
            contactSub: '협업이나 문의 사항이 있으신가요? 아래에 메시지를 남겨주세요.',
            submitBtn: '送信する'
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
        texts: {
            title: 'EuroMillions Generator',
            heroTitle: 'EuroMillions Lucky Pick',
            heroSub: 'The ultimate tool for European lottery players.',
            genTitle: 'Generate EuroMillions Numbers',
            genBtn: 'Generate',
            guideTitle: 'Game Rules',
            guideText: 'EuroMillions requires 5 main numbers (1-50) and 2 Lucky Stars (1-12).',
            probTitle: 'Jackpot Odds',
            probText: 'The odds for the jackpot are approximately 1 in 139 million. Every draw is unique.',
            stratTitle: 'Playing Tips',
            stratText: 'Consider using a mix of numbers. Random generation is often better than manual picking.',
            aboutTitle: 'About LottoPro',
            aboutText: 'Dedicated to providing high-quality tools for global lotteries.',
            contactTitle: 'Partnership',
            contactSub: 'Reach out for business opportunities.',
            submitBtn: 'Message Us'
        }
    }
};

class LottoBall extends HTMLElement {
    static get observedAttributes() {
        return ['number', 'type', 'label'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const number = this.getAttribute('number') || '';
        const type = this.getAttribute('type') || 'main';
        const label = this.getAttribute('label') || '';
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 0.5rem;
                }
                .ball {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: var(--ball-color, #2563eb);
                    color: white;
                    font-size: 1.2rem;
                    font-weight: 700;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
                    position: relative;
                }
                .label {
                    font-size: 0.7rem;
                    color: var(--text-muted, #64748b);
                    margin-top: 4px;
                    font-weight: 600;
                    text-transform: uppercase;
                }
                @keyframes pop-in {
                    0% { transform: scale(0.5); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
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

    // Theme Logic
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('.icon');
        icon.textContent = theme === 'light' ? '🌙' : '☀️';
    }

    // Internationalization Logic
    let currentConfig = LOTTO_CONFIGS.us_pb;
    countrySelect.value = 'us_pb';

    countrySelect.addEventListener('change', (e) => {
        const key = e.target.value;
        currentConfig = LOTTO_CONFIGS[key];
        updateUI();
    });

    function updateUI() {
        const t = currentConfig.texts;
        document.title = t.title;
        document.querySelector('.hero h1').textContent = t.heroTitle;
        document.querySelector('.hero p').textContent = t.heroSub;
        document.querySelector('#generator h2').textContent = t.genTitle;
        generateBtn.textContent = t.genBtn;
        
        document.querySelector('#guide h3').textContent = t.guideTitle;
        document.querySelector('#guide > p').textContent = t.guideText;
        document.querySelector('#guide article:nth-child(1) h4').textContent = t.probTitle;
        document.querySelector('#guide article:nth-child(1) p').textContent = t.probText;
        document.querySelector('#guide article:nth-child(2) h4').textContent = t.stratTitle;
        document.querySelector('#guide article:nth-child(2) p').textContent = t.stratText;
        
        document.querySelector('#about h3').textContent = t.aboutTitle;
        document.querySelector('#about p').textContent = t.aboutText;
        
        document.querySelector('#contact h2').textContent = t.contactTitle;
        document.querySelector('#contact p').textContent = t.contactSub;
        document.querySelector('.submit-btn').textContent = t.submitBtn;

        // Form placeholders
        document.getElementById('name').placeholder = currentConfig.lang === 'ko' ? '이름' : (currentConfig.lang === 'ja' ? '名前' : 'Your Name');
        
        numbersContainer.innerHTML = ''; // Clear numbers on switch
    }

    generateBtn.addEventListener('click', () => {
        const setCount = parseInt(document.getElementById('set-count').value);
        numbersContainer.innerHTML = '';
        
        for (let i = 0; i < setCount; i++) {
            const setDiv = document.createElement('div');
            setDiv.className = 'lotto-set';
            numbersContainer.appendChild(setDiv);

            const mainNumbers = generateUniqueNumbers(currentConfig.mainCount, 1, currentConfig.mainRange);
            
            // Render Main Balls
            mainNumbers.forEach((num, index) => {
                setTimeout(() => {
                    const ball = document.createElement('lotto-ball');
                    ball.setAttribute('number', num);
                    ball.setAttribute('type', 'main');
                    ball.style.setProperty('--ball-color', getBallColor(num));
                    setDiv.appendChild(ball);
                }, (i * 100) + (index * 50));
            });

            // Render Bonus Balls if applicable
            if (currentConfig.bonusCount > 0) {
                const exclude = currentConfig.separateBonusPool ? [] : mainNumbers;
                const bonusNumbers = generateUniqueNumbers(currentConfig.bonusCount, 1, currentConfig.bonusRange, exclude);
                
                bonusNumbers.forEach((num, index) => {
                    setTimeout(() => {
                        const ball = document.createElement('lotto-ball');
                        ball.setAttribute('number', num);
                        ball.setAttribute('type', 'bonus');
                        ball.setAttribute('label', currentConfig.bonusLabel || 'Bonus');
                        ball.style.setProperty('--ball-color', '#ef4444'); // Distinct color for bonus
                        setDiv.appendChild(ball);
                    }, (i * 100) + ((currentConfig.mainCount + index) * 50));
                });
            }
        }
    });

    function generateUniqueNumbers(count, min, max, exclude = []) {
        const numbers = new Set();
        while (numbers.size < count) {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!exclude.includes(num)) numbers.add(num);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function getBallColor(number) {
        if (number <= 10) return '#f59e0b'; // Amber
        if (number <= 20) return '#3b82f6'; // Blue
        if (number <= 30) return '#ef4444'; // Red
        if (number <= 40) return '#10b981'; // Green
        return '#8b5cf6'; // Violet
    }

    updateUI(); // Initial translation
});
