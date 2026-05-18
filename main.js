const LOTTO_CONFIGS = {
    kr: {
        name: 'South Korea', lang: 'ko', lottoName: '로또 6/45',
        mainCount: 6, mainRange: 45, bonusCount: 0, bonusRange: 45,
        separateBonusPool: false,
        resultsUrl: 'https://www.dhlottery.co.kr/common.do?method=main',
        stats: '자주 나오는 번호: 1, 18, 27, 34, 43, 45',
        hotNumbers: [1, 18, 27, 34, 43, 45],
        coldNumbers: [3, 9, 21, 25, 32, 40],
        meta: {
            title: '로또 번호 생성기 - 이번 주 당첨 번호 확인 및 통계 분석',
            description: '글로벌 로또 번호 생성기입니다. 한국 로또 6/45, 미국 파워볼, 일본 로또 7 등의 번호를 통계 기반으로 생성하고 공식 당첨 결과를 확인하세요.'
        },
        texts: {
            tabHome: '🏠 홈', tabGen: '🎰 생성기', tabGuide: '📖 가이드', tabContact: '📧 문의',
            heroTitle: '엑스퍼트 로또 번호 생성기',
            heroSub: '당신의 행운을 위한 신뢰할 수 있는 동반자. 과학적 랜덤 추출.',
            tickerJackpot: '💰 현재 파워볼 잭팟:', tickerWinner: '🔥 최근 당첨 지역:',
            quickJumpTitle: '퀵 점프 - 인기 로또',
            genTitle: '행운의 번호 추출하기',
            genBtn: '번호 생성하기',
            setCountLabel: '세트 수:',
            labelExclude: '제외할 번호:', labelInclude: '포함할 번호:',
            statsTitle: '통계 데이터', checkResults: '공식 당첨 번호 확인하기',
            guideHeader: '글로벌 로또 가이드', thLotto: '로또명', thFormat: '형식', thOdds: '당첨확률',
            tipHeader: '💡 외국인 당첨자 팁', tipDesc: '해외에서 당첨될 경우, 티켓을 구매한 국가/지역에서 당첨금을 수령해야 합니다. 공식 사이트를 꼭 확인하세요.',
            contactHeader: '문의하기', contactSub: '제안이나 버그 리포트가 있다면 언제든 연락주세요!',
            labelName: '이름', labelEmail: '이메일', labelMsg: '메시지', btnSubmit: '메시지 보내기',
            faqHeader: '자주 묻는 질문',
            faqQ1: '정말 무작위인가요?', faqA1: '네, 브라우저의 보안 난수 생성기를 사용합니다.',
            faqQ2: '무료인가요?', faqA2: '네, LottoPro는 누구나 100% 무료로 이용 가능합니다.',
            copyBtn: '번호 복사', copySuccess: '복사 완료!', shareBtn: '공유하기',
            historyTitle: '최근 생성 번호', clearHistory: '기록 삭제',
            disclaimer: '<strong>면책 조항:</strong> 이 로또 번호 생성기는 오직 재미를 위한 것이며, 실제 당첨을 보장하지 않습니다. 책임감 있게 게임을 즐겨주세요.',
            adPlaceholder: '광고 영역'
        }
    },
    us_pb: {
        name: 'USA (Powerball)', lang: 'en', lottoName: 'Powerball',
        mainCount: 5, mainRange: 69, bonusCount: 1, bonusRange: 26,
        bonusLabel: 'PB', separateBonusPool: true,
        resultsUrl: 'https://www.powerball.com/draw-results',
        stats: 'Most frequent numbers: 32, 39, 61, 63, 69',
        hotNumbers: [32, 39, 61, 63, 69, 23],
        coldNumbers: [4, 10, 18, 46, 55, 66],
        meta: {
            title: 'LottoPro - Global Powerball Generator & Official Results',
            description: 'The ultimate global lotto number generator. Get Powerball, Mega Millions, and international lottery numbers with statistical insights.'
        },
        texts: {
            tabHome: '🏠 Home', tabGen: '🎰 Generator', tabGuide: '📖 Guide', tabContact: '📧 Contact',
            heroTitle: 'Expert Powerball Generator',
            heroSub: 'Your reliable companion for random number selection.',
            tickerJackpot: '💰 Current Powerball Jackpot:', tickerWinner: '🔥 Recent Winner:',
            quickJumpTitle: 'Quick Jump - Popular Lotteries',
            genTitle: 'Generate Your Lucky Numbers',
            genBtn: 'Generate Numbers',
            setCountLabel: 'Sets:',
            labelExclude: 'Exclude Numbers:', labelInclude: 'Include Numbers:',
            statsTitle: 'Live Statistics', checkResults: 'Check Official Results',
            guideHeader: 'Global Lottery Guide', thLotto: 'Lottery', thFormat: 'Format', thOdds: 'Jackpot Odds',
            tipHeader: '💡 Pro Tip for Foreigners', tipDesc: 'If you win while abroad, you must claim the prize in the same state/country where the ticket was purchased.',
            contactHeader: 'Get in Touch', contactSub: 'Have a suggestion or found a bug? We\'d love to hear from you!',
            labelName: 'Name', labelEmail: 'Email', labelMsg: 'Message', btnSubmit: 'Send Message',
            faqHeader: 'Frequently Asked Questions',
            faqQ1: 'Is it truly random?', faqA1: 'Yes, we use the Web Crypto API for secure random numbers.',
            faqQ2: 'Is this service free?', faqA2: 'Yes, LottoPro is 100% free for everyone.',
            copyBtn: 'Copy Set', copySuccess: 'Copied!', shareBtn: 'Share',
            historyTitle: 'Recent Numbers', clearHistory: 'Clear History',
            disclaimer: '<strong>Disclaimer:</strong> This Lotto Number Generator is provided for entertainment purposes only. We do not guarantee any winnings.',
            adPlaceholder: 'Advertisement'
        }
    },
    uk: {
        name: 'United Kingdom', lang: 'en', lottoName: 'Lotto (UK)',
        mainCount: 6, mainRange: 59, bonusCount: 0, bonusRange: 59,
        separateBonusPool: false,
        resultsUrl: 'https://www.national-lottery.co.uk/results',
        stats: 'Hot numbers: 23, 38, 41, 49, 52, 58',
        hotNumbers: [23, 38, 41, 49, 52, 58],
        coldNumbers: [7, 14, 26, 35, 44, 56],
        meta: {
            title: 'UK Lotto Generator - National Lottery Results & Statistics',
            description: 'Generate UK National Lottery numbers and check the latest results. Statistical analysis for the best lottery combinations.'
        },
        texts: {
            tabHome: '🏠 Home', tabGen: '🎰 Generator', tabGuide: '📖 Guide', tabContact: '📧 Contact',
            heroTitle: 'UK Lotto Number Generator',
            heroSub: 'Generate your lucky numbers for the UK National Lottery with confidence.',
            tickerJackpot: '💰 Current Jackpot:', tickerWinner: '🔥 Recent Winner:',
            quickJumpTitle: 'Quick Jump',
            genTitle: 'Get Your Lucky Numbers',
            genBtn: 'Generate Numbers',
            setCountLabel: 'Sets:',
            labelExclude: 'Exclude:', labelInclude: 'Include:',
            statsTitle: 'Lotto Statistics', checkResults: 'Check UK Lotto Results',
            guideHeader: 'Lotto Guide', thLotto: 'Game', thFormat: 'Rules', thOdds: 'Odds',
            tipHeader: '💡 Expert Advice', tipDesc: 'Most UK lottery prizes are tax-free, but always check official rules if playing from abroad.',
            contactHeader: 'Contact Us', contactSub: 'For partnership inquiries, please use the form below.',
            labelName: 'Name', labelEmail: 'Email', labelMsg: 'Message', btnSubmit: 'Submit',
            faqHeader: 'FAQs',
            faqQ1: 'Is it random?', faqA1: 'Yes, high-entropy PRNG is used.',
            faqQ2: 'Cost?', faqA2: 'Completely free.',
            copyBtn: 'Copy', copySuccess: 'Saved!', shareBtn: 'Share',
            historyTitle: 'Recent Numbers', clearHistory: 'Clear History',
            disclaimer: '<strong>Disclaimer:</strong> This tool is for entertainment and organization only.',
            adPlaceholder: 'Ad'
        }
    },
    jp_l7: {
        name: 'Japan', lang: 'ja', lottoName: 'ロト7 (Loto 7)',
        mainCount: 7, mainRange: 37, bonusCount: 0, bonusRange: 37,
        separateBonusPool: false,
        resultsUrl: 'https://www.mizuhobank.co.jp/retail/takarakuji/check/loto/loto7/index.html',
        stats: '出現頻度の高い数字: 13, 15, 21, 26, 30, 32, 34',
        hotNumbers: [13, 15, 21, 26, 30, 32, 34],
        coldNumbers: [2, 6, 10, 18, 24, 31, 37],
        meta: {
            title: 'ロト番号生成器 - ロト7 当選番号確認と最新統計分析',
            description: '日本と世界のロト番号生成ツール。ロト7、ロト6、パワーボール等の当選確率を高める統計的アプローチを提供します。'
        },
        texts: {
            tabHome: '🏠 ホーム', tabGen: '🎰 生成器', tabGuide: '📖 ガイド', tabContact: '📧 連絡先',
            heroTitle: 'プロ・ロト番号生成器',
            heroSub: 'あなたの幸運をサポートする信頼のパートナー。',
            tickerJackpot: '💰 現在のジャックポット:', tickerWinner: '🔥 最近の当選地:',
            quickJumpTitle: 'クイックジャンプ - 人気ロト',
            genTitle: '幸運の番号を生成する',
            genBtn: '番号を生成',
            setCountLabel: 'セット数:',
            labelExclude: '除外番号:', labelInclude: '含む番号:',
            statsTitle: '最新統計データ', checkResults: '公式サイトで当選番号を確認',
            guideHeader: 'ロト・ガイド', thLotto: 'ロト名', thFormat: '形式', thOdds: '当選確率',
            tipHeader: '💡 外国人向けのヒント', tipDesc: '日本国外から参加する場合、当選金の受け取り方法について公式サイトの注意事項を必ず確認してください。',
            contactHeader: 'お問い合わせ', contactSub: '提案やバグレポートがあれば、お気軽にご連絡ください。',
            labelName: 'お名前', labelEmail: 'メール', labelMsg: 'メッセージ', btnSubmit: '送信する',
            faqHeader: 'よくある質問',
            faqQ1: '本当にランダムですか？', faqA1: 'はい、安全な疑似乱数生成器を使用しています。',
            faqQ2: '無料ですか？', faqA2: 'はい、LottoProは完全に無料で利用できます。',
            copyBtn: 'コピー', copySuccess: '完了！', shareBtn: '共有',
            historyTitle: '最近の番号', clearHistory: '履歴を削除',
            disclaimer: '<strong>免責事項:</strong> この生成器は娯楽用であり、当選を保証するものではありません。',
            adPlaceholder: '広告エリア'
        }
    },
    us_mm: {
        name: 'USA (Mega Millions)', lang: 'en', lottoName: 'Mega Millions',
        mainCount: 5, mainRange: 70, bonusCount: 1, bonusRange: 25,
        bonusLabel: 'MB', separateBonusPool: true,
        resultsUrl: 'https://www.megamillions.com/winning-numbers',
        stats: 'Most frequent numbers: 14, 17, 31, 46, 64',
        hotNumbers: [14, 17, 31, 46, 64, 10],
        coldNumbers: [3, 20, 29, 41, 55, 68],
        meta: {
            title: 'Mega Millions Generator - Lucky Numbers & Official Results',
            description: 'Generate Mega Millions lucky numbers for free. Statistical insights, official results links, and cryptographically secure random picks.'
        },
        texts: {
            tabHome: '🏠 Home', tabGen: '🎰 Generator', tabGuide: '📖 Guide', tabContact: '📧 Contact',
            heroTitle: 'Mega Millions Lucky Pick',
            heroSub: 'Your free, secure generator for Mega Millions number combinations.',
            tickerJackpot: '💰 Current Mega Millions Jackpot:', tickerWinner: '🔥 Recent Winner:',
            quickJumpTitle: 'Quick Jump - Popular Lotteries',
            genTitle: 'Generate Mega Millions Numbers',
            genBtn: 'Generate Numbers',
            setCountLabel: 'Sets:',
            labelExclude: 'Exclude Numbers:', labelInclude: 'Include Numbers:',
            statsTitle: 'Live Statistics', checkResults: 'Check Official Results',
            guideHeader: 'Global Lottery Guide', thLotto: 'Lottery', thFormat: 'Format', thOdds: 'Jackpot Odds',
            tipHeader: '💡 Mega Millions Tip', tipDesc: 'Mega Millions tickets must be purchased in the US. Winners have 180 days (or up to 1 year in some states) to claim prizes.',
            contactHeader: 'Get in Touch', contactSub: 'Have a suggestion or found a bug? We\'d love to hear from you!',
            labelName: 'Name', labelEmail: 'Email', labelMsg: 'Message', btnSubmit: 'Send Message',
            faqHeader: 'Frequently Asked Questions',
            faqQ1: 'Is it truly random?', faqA1: 'Yes, we use the Web Crypto API for cryptographically secure random numbers.',
            faqQ2: 'Is this service free?', faqA2: 'Yes, LottoPro is 100% free for everyone.',
            copyBtn: 'Copy Set', copySuccess: 'Copied!', shareBtn: 'Share',
            historyTitle: 'Recent Numbers', clearHistory: 'Clear History',
            disclaimer: '<strong>Disclaimer:</strong> This generator is for entertainment only. We do not guarantee any winnings.',
            adPlaceholder: 'Advertisement'
        }
    },
    eu_em: {
        name: 'Europe', lang: 'en', lottoName: 'EuroMillions',
        mainCount: 5, mainRange: 50, bonusCount: 2, bonusRange: 12,
        bonusLabel: 'Star', separateBonusPool: true,
        resultsUrl: 'https://www.euro-millions.com/results',
        stats: 'Frequent stars: 3, 9 | Main: 17, 21, 42, 44, 50',
        hotNumbers: [17, 21, 42, 44, 50],
        coldNumbers: [2, 9, 25, 33, 47],
        meta: {
            title: 'EuroMillions Generator - Results, Stats & Predictions',
            description: 'The ultimate tool for EuroMillions players. Generate random numbers based on statistics and check official results.'
        },
        texts: {
            tabHome: '🏠 Home', tabGen: '🎰 Generator', tabGuide: '📖 Guide', tabContact: '📧 Contact',
            heroTitle: 'EuroMillions Lucky Pick',
            heroSub: 'The ultimate tool for European lottery players with full statistics.',
            tickerJackpot: '💰 EuroMillions Jackpot:', tickerWinner: '🔥 Recent Draw:',
            quickJumpTitle: 'Quick Start',
            genTitle: 'Generate EuroMillions Sets',
            genBtn: 'Generate Now',
            setCountLabel: 'Sets:',
            labelExclude: 'Exclude:', labelInclude: 'Include:',
            statsTitle: 'Star Statistics', checkResults: 'Official Results',
            guideHeader: 'Euro Lotto Guide', thLotto: 'Game', thFormat: 'Format', thOdds: 'Odds',
            tipHeader: '💡 Playing Tip', tipDesc: 'EuroMillions prizes are paid as a lump sum and are tax-free in most countries.',
            contactHeader: 'Support', contactSub: 'Reach out for international business opportunities.',
            labelName: 'Name', labelEmail: 'Email', labelMsg: 'Message', btnSubmit: 'Send Message',
            faqHeader: 'FAQ',
            faqQ1: 'Is it random?', faqA1: 'Yes, secure algorithms are used.',
            faqQ2: 'Free?', faqA2: 'Yes, 100% free.',
            copyBtn: 'Copy', copySuccess: 'Done!', shareBtn: 'Share',
            historyTitle: 'Recent Numbers', clearHistory: 'Clear History',
            disclaimer: '<strong>Disclaimer:</strong> Provided for entertainment purposes only.',
            adPlaceholder: 'Ads'
        }
    }
};

const LUCK_MESSAGES = ["Good Luck!", "Today is your day!", "Believe in your luck!", "Fortune favors the bold!", "Your lucky numbers are here!"];

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
    const themeToggle = document.getElementById('theme-toggle');
    const countrySelect = document.getElementById('country-select');
    const numbersContainer = document.getElementById('lotto-numbers');
    const generateBtn = document.getElementById('generate-btn');
    const mainTabBtns = document.querySelectorAll('.main-tab-btn');
    const mainTabContents = document.querySelectorAll('.main-tab-content');

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    function updateThemeIcon(t) { const icon = themeToggle.querySelector('.icon'); if(icon) icon.textContent = t === 'light' ? '🌙' : '☀️'; }
    updateThemeIcon(savedTheme);

    mainTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            mainTabBtns.forEach(b => b.classList.remove('active'));
            mainTabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-main-tab')).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    let currentConfig = LOTTO_CONFIGS.us_pb;
    countrySelect.addEventListener('change', (e) => {
        currentConfig = LOTTO_CONFIGS[e.target.value];
        document.documentElement.setAttribute('lang', currentConfig.lang);
        updateUI();
    });

    function updateUI() {
        const t = currentConfig.texts;
        document.title = currentConfig.meta.title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', currentConfig.meta.description);
        
        // IDs translation
        const elements = {
            'tab-home': t.tabHome, 'tab-gen': t.tabGen, 'tab-guide': t.tabGuide, 'tab-contact': t.tabContact,
            'hero-title': t.heroTitle, 'hero-sub': t.heroSub,
            'ticker-jackpot': t.tickerJackpot, 'ticker-winner': t.tickerWinner,
            'quick-jump-title': t.quickJumpTitle,
            'gen-title-text': t.genTitle, 'generate-btn': t.genBtn,
            'set-count-label': t.setCountLabel, 'label-exclude': t.labelExclude, 'label-include': t.labelInclude,
            'stats-title': t.statsTitle, 'results-link': t.checkResults,
            'guide-header': t.guideHeader, 'th-lotto': t.thLotto, 'th-format': t.thFormat, 'th-odds': t.thOdds,
            'tip-header': t.tipHeader, 'tip-desc': t.tipDesc,
            'contact-header': t.contactHeader, 'contact-sub': t.contactSub,
            'label-name': t.labelName, 'label-email': t.labelEmail, 'label-msg': t.labelMsg, 'btn-submit': t.btnSubmit,
            'faq-header': t.faqHeader, 'faq-q1': t.faqQ1, 'faq-a1': t.faqA1, 'faq-q2': t.faqQ2, 'faq-a2': t.faqA2,
            'footer-disclaimer': t.disclaimer
        };
        for(let id in elements) { const el = document.getElementById(id); if(el) el.innerHTML = elements[id]; }
        
        renderNumberChart('hot');
        document.getElementById('results-link').href = currentConfig.resultsUrl;
        document.getElementById('name').placeholder = t.labelName;
        if (t.historyTitle) { const ht = document.getElementById('history-title'); if (ht) ht.textContent = t.historyTitle; }
        if (t.clearHistory) { const cb = document.getElementById('clear-history-btn'); if (cb) cb.textContent = t.clearHistory; }
        numbersContainer.innerHTML = '';
        renderNumberChart(currentHC);
    }

    generateBtn.addEventListener('click', () => {
        const setCount = parseInt(document.getElementById('set-count').value);
        const exclude = document.getElementById('exclude-nums').value.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
        const include = document.getElementById('include-nums').value.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
        const luckMsg = document.getElementById('luck-message');
        
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

            const shareBtn = document.createElement('button');
            shareBtn.className = 'action-btn';
            shareBtn.textContent = currentConfig.texts.shareBtn;

            actionsDiv.appendChild(copyBtn);
            actionsDiv.appendChild(shareBtn);
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
                    addToHistory(currentConfig.lottoName, mainNumbers, bonusNumbers);
                }
            }, 800);

            copyBtn.addEventListener('click', () => {
                const text = `${currentConfig.lottoName}: ${mainNumbers.join(', ')}${bonusNumbers.length ? ' + ' + bonusNumbers.join(', ') : ''}`;
                navigator.clipboard.writeText(text).then(() => {
                    copyBtn.textContent = currentConfig.texts.copySuccess;
                    setTimeout(() => copyBtn.textContent = currentConfig.texts.copyBtn, 2000);
                });
            });

            shareBtn.addEventListener('click', () => {
                const text = `Lucky ${currentConfig.lottoName}: ${mainNumbers.join(', ')}`;
                if (navigator.share) {
                    navigator.share({ title: 'LottoPro', text: text, url: window.location.href });
                } else {
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' ' + window.location.href)}`, '_blank');
                }
            });
        }
    });

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

    // Hot/Cold number chart
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
        const label = type === 'hot' ? '🔥' : '🧊';
        numberChart.innerHTML = nums.map((n, i) => `
            <div class="chart-row">
                <span class="chart-num" style="background:${getBallColor(n)}">${n}</span>
                <div class="chart-bar-wrap">
                    <div class="chart-bar" style="width:${freqSteps[i]}%;background:${color}"></div>
                </div>
                <span class="chart-pct">${label} #${i + 1}</span>
            </div>
        `).join('');
    }

    function getBallColor(n) {
        if (n <= 10) return '#f59e0b'; if (n <= 20) return '#3b82f6'; if (n <= 30) return '#ef4444'; if (n <= 40) return '#10b981'; return '#8b5cf6';
    }

    // History
    const HISTORY_KEY = 'lottopro_history';
    const historySection = document.getElementById('history-section');
    const historyList = document.getElementById('history-list');
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
