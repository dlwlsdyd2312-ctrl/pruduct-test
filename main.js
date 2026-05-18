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
        emailPlaceholder: 'Email address',
        msgPlaceholder: 'How can we help you?',
        faqHeader: 'Frequently Asked Questions',
        faqQ1: 'Is this service free?', faqA1: 'Yes, LottoPro is 100% free with no registration, no subscription, and no hidden fees — ever.',
        faqQ2: 'Are the numbers truly random?', faqA2: 'Yes. We use the Web Crypto API (crypto.getRandomValues), the same cryptographic standard used in banking software.',
        faqQ3: 'Does LottoPro generate bonus numbers?',
        faqA3: 'Only for lotteries where the buyer chooses a bonus number: Powerball (Powerball), Mega Millions (Mega Ball), and EuroMillions (Lucky Stars). For UK Lotto, Korea 6/45, and Japan Loto 7, the bonus ball is drawn by the operator — not the player — so we only generate the main numbers.',
        faqQ4: 'Can I use the same numbers every week?',
        faqA4: 'Absolutely. Use the "Include Numbers" field in the generator to lock in specific numbers you always want included. Your history is also saved automatically so you can reference past sets.',
        faqQ5: 'Does using a number generator improve my chances of winning?',
        faqA5: 'No. Each lottery draw is completely independent. No tool, system, or strategy can improve your probability of winning. LottoPro is provided for entertainment and convenience only.',
        faqQ6: 'Is my data stored or shared?',
        faqA6: 'We do not collect personal data. Your generated number history is stored only in your own browser (localStorage) and is never transmitted to our servers. See our <a href="privacy-policy.html" style="color:var(--primary-color)">Privacy Policy</a> for full details.',
        copyBtn: 'Copy Set', copySuccess: 'Copied!', shareBtn: 'Share',
        historyTitle: 'Recent Numbers', clearHistory: 'Clear History',
        disclaimer: '<strong>Disclaimer:</strong> This generator is for entertainment only. We do not guarantee any winnings. Please play responsibly.',
        luckMessages: ["Good Luck!", "Today is your day!", "Believe in your luck!", "Fortune favors the bold!", "Your lucky numbers are here!"],
        metaTitle: 'LottoPro - Global Lottery Number Generator & Results',
        metaDesc: 'Free cryptographically secure lottery number generator for Powerball, Mega Millions, EuroMillions, UK Lotto, Korea 6/45, and Japan Loto 7.',
        // Quick card titles and descriptions
        qj_pb_title: '🇺🇸 Powerball', qj_pb_desc: 'Pick 5 + Powerball',
        qj_mm_title: '🇺🇸 Mega Millions', qj_mm_desc: 'Pick 5 + Mega Ball',
        qj_eu_title: '🇪🇺 EuroMillions', qj_eu_desc: 'Pick 5 + 2 Lucky Stars',
        qj_kr_title: '🇰🇷 Korea 6/45', qj_kr_desc: 'Pick 6 numbers',
        qj_uk_title: '🇬🇧 UK Lotto', qj_uk_desc: 'Pick 6 numbers',
        qj_jp_title: '🇯🇵 Japan Loto 7', qj_jp_desc: 'Pick 7 numbers',
        quickCardBtn: 'Go to Generator',
        // How It Works steps
        step1Title: 'Select Your Lottery',
        step1Desc: 'Choose from 6 major international lotteries using the dropdown in the top navigation bar.',
        step2Title: 'Set Your Options',
        step2Desc: 'Pick how many sets to generate (up to 10), and optionally include or exclude specific numbers.',
        step3Title: 'Generate & Play',
        step3Desc: 'Hit Generate and get your cryptographically random lucky numbers instantly. Copy or share them with one click.',
        // Why Choose
        why1Title: 'Cryptographically Secure',
        why1Desc: 'Uses the Web Crypto API — the same standard as banking software — not a simple pseudo-random function.',
        why2Title: 'Truly Global',
        why2Desc: 'Full interface localization for English, Korean, and Japanese. More languages coming soon.',
        why3Title: 'Works Everywhere',
        why3Desc: 'Fully responsive design — works perfectly on phones, tablets, and desktops with no installation required.',
        why4Title: '100% Free, Always',
        why4Desc: 'No sign-up, no subscription, no hidden fees. LottoPro will always be free for everyone.',
        // Footer links
        footerPrivacy: 'Privacy Policy',
        footerTerms: 'Terms of Service',
        footerAbout: 'About Us',
        // Guide: Lottery Details header
        lotteryDetailsHeader: 'Lottery Details',
        // Guide: detail row labels
        detailDraw: 'Draw Schedule',
        detailJackpot: 'Min. Jackpot',
        detailPrice: 'Ticket Price',
        detailAnyPrize: 'Any-Prize Odds',
        detailTax: 'Tax',
        detailWhere: 'Where to Buy',
        detailClaim: 'Claim Deadline',
        detailSite: 'Official Site',
        // Frequency labels
        detailFreqWeekly: 'Weekly',
        detailFreqBiweekly: 'Bi-weekly',
        detailFreq3week: '3x / week',
        // Responsible Gaming
        responsibleTitle: '🛡️ Responsible Gaming',
        responsibleP1: 'Lottery games are a form of entertainment. Never spend more than you can afford to lose, and remember that the odds of winning a jackpot are extremely low. LottoPro does not encourage excessive gambling.',
        responsibleP2: 'If you or someone you know has a gambling problem, free help is available:',
        // Number Analysis
        analyzeTitle: '📊 Number Analysis',
        analyzeOddEven: 'Odd / Even', analyzeOdd: 'Odd', analyzeEven: 'Even',
        analyzeSum: 'Total Sum', analyzeAvg: 'Avg',
        analyzeConsec: 'Consecutive', analyzeNone: 'None',
        analyzeDist: 'Distribution', analyzeLow: 'Low', analyzeMid: 'Mid', analyzeHigh: 'High',
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
        emailPlaceholder: '이메일 주소',
        msgPlaceholder: '어떻게 도와드릴까요?',
        faqHeader: '자주 묻는 질문',
        faqQ1: '정말 무료인가요?', faqA1: '네, LottoPro는 회원가입 없이 100% 무료로 이용 가능합니다.',
        faqQ2: '번호는 진짜 무작위인가요?', faqA2: '네, 은행 보안 소프트웨어와 동일한 Web Crypto API(crypto.getRandomValues)를 사용합니다.',
        faqQ3: '보너스 번호도 생성되나요?',
        faqA3: '구매자가 보너스 번호를 직접 선택하는 복권(파워볼, 메가밀리언스, 유로밀리언즈)에 한해 보너스 번호를 생성합니다. UK 로또, 한국 로또 6/45, 일본 로토7은 운영사가 보너스 번호를 추첨하므로 메인 번호만 생성합니다.',
        faqQ4: '매주 같은 번호를 사용할 수 있나요?',
        faqA4: '네. 생성기의 "포함할 번호" 항목에 특정 번호를 입력하면 항상 해당 번호가 포함됩니다. 과거 생성 번호도 자동으로 기록됩니다.',
        faqQ5: '번호 생성기를 사용하면 당첨 확률이 높아지나요?',
        faqA5: '아니요. 각 추첨은 완전히 독립적으로 이루어집니다. 어떤 도구나 전략도 당첨 확률을 높일 수 없습니다. LottoPro는 오락 및 편의 목적으로만 제공됩니다.',
        faqQ6: '내 데이터가 저장되거나 공유되나요?',
        faqA6: '개인 정보를 수집하지 않습니다. 생성된 번호 기록은 브라우저(localStorage)에만 저장되며 서버로 전송되지 않습니다. 자세한 내용은 <a href="privacy-policy.html" style="color:var(--primary-color)">개인정보처리방침</a>을 확인하세요.',
        copyBtn: '번호 복사', copySuccess: '복사 완료!', shareBtn: '공유하기',
        historyTitle: '최근 생성 번호', clearHistory: '기록 삭제',
        disclaimer: '<strong>면책 조항:</strong> 이 생성기는 오직 재미를 위한 것이며 실제 당첨을 보장하지 않습니다. 책임감 있게 즐겨주세요.',
        luckMessages: ["행운을 빕니다!", "오늘이 바로 그날!", "당신의 행운을 믿으세요!", "행운은 용감한 자의 것!", "당신의 행운 번호가 여기 있습니다!"],
        metaTitle: '로또 번호 생성기 - LottoPro 글로벌 복권 번호 추첨',
        metaDesc: '한국 로또 6/45, 미국 파워볼, 유로밀리언즈 등 전 세계 6개 복권 번호를 무료로 생성하세요. 보안 난수 알고리즘 사용.',
        // Quick card titles and descriptions
        qj_pb_title: '🇺🇸 파워볼', qj_pb_desc: '5개 + 파워볼 선택',
        qj_mm_title: '🇺🇸 메가밀리언스', qj_mm_desc: '5개 + 메가볼 선택',
        qj_eu_title: '🇪🇺 유로밀리언즈', qj_eu_desc: '5개 + 럭키스타 2개',
        qj_kr_title: '🇰🇷 로또 6/45', qj_kr_desc: '6개 번호 선택',
        qj_uk_title: '🇬🇧 UK 로또', qj_uk_desc: '6개 번호 선택',
        qj_jp_title: '🇯🇵 일본 로토7', qj_jp_desc: '7개 번호 선택',
        quickCardBtn: '번호 생성하기',
        // How It Works steps
        step1Title: '복권 선택',
        step1Desc: '상단 내비게이션 바의 드롭다운에서 6개 주요 국제 복권 중 하나를 선택하세요.',
        step2Title: '옵션 설정',
        step2Desc: '생성할 세트 수(최대 10개)를 선택하고, 원하는 번호를 포함하거나 제외할 수 있습니다.',
        step3Title: '생성 & 플레이',
        step3Desc: '생성 버튼을 누르면 암호학적으로 무작위인 행운 번호가 즉시 생성됩니다. 한 번의 클릭으로 복사하거나 공유하세요.',
        // Why Choose
        why1Title: '암호학적 보안',
        why1Desc: '단순 의사난수 함수가 아닌 은행 소프트웨어와 동일한 표준인 Web Crypto API를 사용합니다.',
        why2Title: '진정한 글로벌 서비스',
        why2Desc: '영어, 한국어, 일본어 완전 현지화. 더 많은 언어가 곧 추가됩니다.',
        why3Title: '어디서나 작동',
        why3Desc: '완전 반응형 디자인 — 설치 없이 스마트폰, 태블릿, 데스크톱 어디서나 완벽하게 작동합니다.',
        why4Title: '영원히 100% 무료',
        why4Desc: '회원가입 없음, 구독 없음, 숨겨진 요금 없음. LottoPro는 언제나 모든 사람에게 무료입니다.',
        // Footer links
        footerPrivacy: '개인정보처리방침',
        footerTerms: '이용약관',
        footerAbout: '소개',
        // Guide: Lottery Details header
        lotteryDetailsHeader: '복권 상세 정보',
        // Guide: detail row labels
        detailDraw: '추첨 일정',
        detailJackpot: '최소 잭팟',
        detailPrice: '티켓 가격',
        detailAnyPrize: '전체 당첨 확률',
        detailTax: '세금',
        detailWhere: '구매처',
        detailClaim: '수령 기한',
        detailSite: '공식 사이트',
        // Frequency labels
        detailFreqWeekly: '주 1회',
        detailFreqBiweekly: '주 2회',
        detailFreq3week: '주 3회',
        // Responsible Gaming
        responsibleTitle: '🛡️ 책임감 있는 게임',
        responsibleP1: '복권은 오락의 한 형태입니다. 감당할 수 있는 금액 이상을 쓰지 마시고, 잭팟 당첨 확률이 극히 낮다는 점을 기억하세요. LottoPro는 과도한 도박을 권장하지 않습니다.',
        responsibleP2: '본인이나 주변에 도박 문제가 있다면 무료 도움을 받을 수 있습니다:',
        // Number Analysis
        analyzeTitle: '📊 번호 분석',
        analyzeOddEven: '홀수 / 짝수', analyzeOdd: '홀', analyzeEven: '짝',
        analyzeSum: '번호 합계', analyzeAvg: '평균',
        analyzeConsec: '연속 번호', analyzeNone: '없음',
        analyzeDist: '범위 분포', analyzeLow: '하위', analyzeMid: '중위', analyzeHigh: '상위',
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
        emailPlaceholder: 'メールアドレス',
        msgPlaceholder: 'お気軽にどうぞ',
        faqHeader: 'よくある質問',
        faqQ1: '本当に無料ですか？', faqA1: 'はい、登録不要で完全無料です。',
        faqQ2: '本当にランダムですか？', faqA2: 'はい、銀行レベルのWeb Crypto API(crypto.getRandomValues)を使用しています。',
        faqQ3: 'ボーナス番号も生成されますか？',
        faqA3: 'プレイヤーがボーナス番号を選ぶ宝くじ（パワーボール、メガミリオンズ、ユーロミリオンズ）のみボーナス番号を生成します。UKロト、韓国ロト6/45、日本ロト7はオペレーターがボーナス番号を抽選するため、メイン番号のみ生成します。',
        faqQ4: '毎週同じ番号を使えますか？',
        faqA4: 'はい。生成器の「含む番号」欄に特定の番号を入力すると、常にその番号が含まれます。過去の生成履歴も自動保存されます。',
        faqQ5: '番号生成器を使うと当選確率が上がりますか？',
        faqA5: 'いいえ。各抽選は完全に独立しており、どんなツールや戦略も当選確率を変えることはできません。LottoProは娯楽・利便性のために提供されています。',
        faqQ6: 'データは保存・共有されますか？',
        faqA6: '個人情報は収集しません。生成された番号の履歴はブラウザ（localStorage）にのみ保存され、サーバーには送信されません。詳細は<a href="privacy-policy.html" style="color:var(--primary-color)">プライバシーポリシー</a>をご確認ください。',
        copyBtn: 'コピー', copySuccess: 'コピー完了！', shareBtn: '共有',
        historyTitle: '最近の番号', clearHistory: '履歴を削除',
        disclaimer: '<strong>免責事項:</strong> この生成器は娯楽用であり、当選を保証するものではありません。',
        luckMessages: ["幸運を祈ります！", "今日がその日！", "あなたの運を信じて！", "幸運は勇者のもの！", "ラッキーナンバーはこちら！"],
        metaTitle: 'ロト番号生成器 - LottoPro グローバル宝くじ',
        metaDesc: 'ロト7、パワーボール、ユーロミリオンズなど世界6大宝くじの番号を無料生成。暗号学的乱数を使用した安全なサービス。',
        // Quick card titles and descriptions
        qj_pb_title: '🇺🇸 パワーボール', qj_pb_desc: '5個＋パワーボール選択',
        qj_mm_title: '🇺🇸 メガミリオンズ', qj_mm_desc: '5個＋メガボール選択',
        qj_eu_title: '🇪🇺 ユーロミリオンズ', qj_eu_desc: '5個＋ラッキースター2個',
        qj_kr_title: '🇰🇷 韓国ロト6/45', qj_kr_desc: '6個の番号を選択',
        qj_uk_title: '🇬🇧 UKロト', qj_uk_desc: '6個の番号を選択',
        qj_jp_title: '🇯🇵 ロト7', qj_jp_desc: '7個の番号を選択',
        quickCardBtn: '生成器へ',
        // How It Works steps
        step1Title: '宝くじを選ぶ',
        step1Desc: 'ナビゲーションバーのドロップダウンから、6つの主要な国際宝くじを選択してください。',
        step2Title: 'オプションを設定',
        step2Desc: '生成するセット数（最大10）を選び、含む番号や除外する番号を任意で設定できます。',
        step3Title: '生成してプレイ',
        step3Desc: '生成ボタンを押すと、暗号学的にランダムなラッキーナンバーが即座に生成されます。ワンクリックでコピーまたは共有できます。',
        // Why Choose
        why1Title: '暗号学的セキュリティ',
        why1Desc: '単純な疑似乱数関数ではなく、銀行ソフトウェアと同じ標準であるWeb Crypto APIを使用しています。',
        why2Title: '真のグローバル対応',
        why2Desc: '英語・韓国語・日本語の完全ローカライズ。さらに多くの言語が近日追加予定です。',
        why3Title: 'どこでも使える',
        why3Desc: '完全レスポンシブデザイン — インストール不要でスマートフォン・タブレット・デスクトップ完全対応。',
        why4Title: 'ずっと100%無料',
        why4Desc: '登録不要、サブスクなし、隠れた料金なし。LottoProはすべての人に永遠に無料です。',
        // Footer links
        footerPrivacy: 'プライバシーポリシー',
        footerTerms: '利用規約',
        footerAbout: 'について',
        // Guide: Lottery Details header
        lotteryDetailsHeader: '宝くじ詳細',
        // Guide: detail row labels
        detailDraw: '抽選日程',
        detailJackpot: '最低ジャックポット',
        detailPrice: 'チケット価格',
        detailAnyPrize: '当選確率（全体）',
        detailTax: '税金',
        detailWhere: '購入場所',
        detailClaim: '請求期限',
        detailSite: '公式サイト',
        // Frequency labels
        detailFreqWeekly: '週1回',
        detailFreqBiweekly: '週2回',
        detailFreq3week: '週3回',
        // Responsible Gaming
        responsibleTitle: '🛡️ 責任あるゲーム',
        responsibleP1: '宝くじは娯楽の一形態です。失っても惜しくない金額以上は使わず、ジャックポット当選確率が極めて低いことを忘れないでください。LottoProは過度なギャンブルを推奨しません。',
        responsibleP2: 'あなた自身や身近な方にギャンブル依存の問題がある場合、無料の支援を受けられます：',
        // Number Analysis
        analyzeTitle: '📊 番号分析',
        analyzeOddEven: '奇数 / 偶数', analyzeOdd: '奇', analyzeEven: '偶',
        analyzeSum: '合計', analyzeAvg: '平均',
        analyzeConsec: '連続番号', analyzeNone: 'なし',
        analyzeDist: '分布', analyzeLow: '低', analyzeMid: '中', analyzeHigh: '高',
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
        coldNumbers: [3, 9, 21, 25, 32, 40],
        flag: '🇰🇷',
        officialSite: 'dhlottery.co.kr',
        details: {
            freq: { en: 'Weekly', ko: '주 1회', ja: '週1回' },
            draw: { en: 'Every Saturday at 8:35 PM KST', ko: '매주 토요일 오후 8시 35분 (KST)', ja: '毎週土曜日 20:35 KST' },
            jackpot: { en: '75% of weekly prize pool (no fixed minimum)', ko: '판매금액의 75% (고정 최소금액 없음)', ja: '週間賞金プールの75%' },
            price: '₩1,000 / game (5 games/slip)',
            anyPrize: '1 in 5',
            tax: { en: '20–33% withholding on prizes over ₩200,000', ko: '20만원 초과 시 20~33% 원천징수', ja: '20万ウォン超：20〜33%源泉徴収' },
            where: { en: 'Lottery retailers (복권방) across South Korea + official app', ko: '전국 복권방 및 공식 앱', ja: '韓国全土の복권방（宝くじ販売店）' },
            claim: { en: '1 year from draw date', ko: '추첨일로부터 1년', ja: '抽選日から1年' }
        },
        brand: { bg: '#003478', header: '#c60c30', mainBall: 'white', mainBallColors: ['#fbbf24','#60a5fa','#f87171','#9ca3af','#34d399','#fbbf24'], bonusBall: null }
    },
    us_pb: {
        lottoName: 'Powerball',
        lottoNames: { en: 'Powerball', ko: '파워볼', ja: 'パワーボール' },
        mainCount: 5, mainRange: 69, bonusCount: 1, bonusRange: 26,
        bonusLabel: 'PB', separateBonusPool: true,
        resultsUrl: 'https://www.powerball.com/draw-results',
        hotNumbers: [32, 39, 61, 63, 69, 23],
        coldNumbers: [4, 10, 18, 46, 55, 66],
        flag: '🇺🇸',
        officialSite: 'powerball.com',
        details: {
            freq: { en: '3x / week', ko: '주 3회', ja: '週3回' },
            draw: { en: 'Mon, Wed, Sat at 10:59 PM ET', ko: '월·수·토 오전 12:59 (KST)', ja: '月・水・土 12:59 KST' },
            jackpot: { en: '$20 million minimum (rolls over)', ko: '최소 2,000만 달러 (롤오버)', ja: '最低2,000万ドル（ロールオーバー）' },
            price: '$2 per play',
            anyPrize: '1 in 24.9',
            tax: { en: 'Federal 37% + state taxes. Lump sum or annuity.', ko: '연방세 37% + 주세. 일시불 또는 연금 선택.', ja: '連邦税37%+州税。一括またはアニュイティ選択。' },
            where: { en: '45 US states, DC, Puerto Rico, US Virgin Islands', ko: '미국 45개 주, DC, 푸에르토리코', ja: '米国45州、DC、プエルトリコ' },
            claim: { en: '90 days to 1 year (varies by state)', ko: '90일 ~ 1년 (구매 주 따라 다름)', ja: '90日〜1年（州により異なる）' }
        },
        brand: { bg: '#002868', header: '#bf0a30', mainBall: 'white', mainBallColors: null, bonusBall: '#bf0a30' }
    },
    uk: {
        lottoName: 'UK Lotto',
        lottoNames: { en: 'UK Lotto', ko: 'UK 로또', ja: 'UKロト' },
        mainCount: 6, mainRange: 59, bonusCount: 0, bonusRange: 59,
        separateBonusPool: false,
        resultsUrl: 'https://www.national-lottery.co.uk/results',
        hotNumbers: [23, 38, 41, 49, 52, 58],
        coldNumbers: [7, 14, 26, 35, 44, 56],
        flag: '🇬🇧',
        officialSite: 'national-lottery.co.uk',
        details: {
            freq: { en: '2x / week', ko: '주 2회', ja: '週2回' },
            draw: { en: 'Wed & Sat at 7:45 PM GMT', ko: '수·토 오전 4:45 (KST)', ja: '水・土 04:45 KST' },
            jackpot: { en: '£2 million minimum (must-be-won after 5 rollovers)', ko: '최소 200만 파운드 (5회 롤오버 후 무조건 당첨)', ja: '最低200万ポンド（5回ロールオーバー後は必当選）' },
            price: '£2 per line',
            anyPrize: '1 in 9.3',
            tax: { en: 'All prizes completely tax-free in the UK', ko: '영국 내 모든 당첨금 비과세', ja: '英国内の賞金は完全非課税' },
            where: { en: 'UK retailers nationwide + national-lottery.co.uk (18+)', ko: '영국 전국 복권 판매점 및 공식 웹사이트 (18세 이상)', ja: '英国全土の販売店・公式サイト（18歳以上）' },
            claim: { en: '180 days from draw date', ko: '추첨일로부터 180일', ja: '抽選日から180日' }
        },
        brand: { bg: '#660000', header: '#cc0000', mainBall: 'white', mainBallColors: null, bonusBall: null }
    },
    jp_l7: {
        lottoName: 'Loto 7',
        lottoNames: { en: 'Japan Loto 7', ko: '일본 로토7', ja: 'ロト7' },
        mainCount: 7, mainRange: 37, bonusCount: 0, bonusRange: 37,
        separateBonusPool: false,
        resultsUrl: 'https://www.mizuhobank.co.jp/retail/takarakuji/check/loto/loto7/index.html',
        hotNumbers: [13, 15, 21, 26, 30, 32, 34],
        coldNumbers: [2, 6, 10, 18, 24, 31, 37],
        flag: '🇯🇵',
        officialSite: 'takarakuji-official.jp',
        details: {
            freq: { en: 'Weekly', ko: '주 1회', ja: '週1回' },
            draw: { en: 'Every Friday at 6:30 PM JST', ko: '매주 금요일 오후 6시 30분 (JST)', ja: '毎週金曜日 18:30 JST' },
            jackpot: { en: '¥200M minimum (carryover jackpot up to ¥4B+)', ko: '최소 2억 엔 (최대 40억+ 엔 롤오버)', ja: '最低2億円（最大40億円以上のロールオーバー）' },
            price: '¥200 / play',
            anyPrize: '1 in 6.1',
            tax: { en: 'Tax-free in Japan regardless of amount', ko: '일본 내 당첨금 전액 비과세', ja: '日本では金額に関わらず非課税' },
            where: { en: 'Mizuho Bank counters + convenience stores (7-Eleven, Lawson, FamilyMart)', ko: '미즈호은행 창구 및 편의점 (세븐일레븐, 로손, 패밀리마트)', ja: 'みずほ銀行窓口・コンビニ（7-Eleven・ローソン・ファミマ）' },
            claim: { en: '1 year from draw date', ko: '추첨일로부터 1년', ja: '抽選日から1年' }
        },
        brand: { bg: '#1a1a2e', header: '#bc002d', mainBall: 'white', mainBallColors: ['#fbbf24','#60a5fa','#f87171','#c084fc','#34d399','#fb923c','#e879f9'], bonusBall: null }
    },
    us_mm: {
        lottoName: 'Mega Millions',
        lottoNames: { en: 'Mega Millions', ko: '메가밀리언스', ja: 'メガミリオンズ' },
        mainCount: 5, mainRange: 70, bonusCount: 1, bonusRange: 25,
        bonusLabel: 'MB', separateBonusPool: true,
        resultsUrl: 'https://www.megamillions.com/winning-numbers',
        hotNumbers: [14, 17, 31, 46, 64, 10],
        coldNumbers: [3, 20, 29, 41, 55, 68],
        flag: '🇺🇸',
        officialSite: 'megamillions.com',
        details: {
            freq: { en: '2x / week', ko: '주 2회', ja: '週2回' },
            draw: { en: 'Tue & Fri at 11:00 PM ET', ko: '화·금 오전 1:00 (KST)', ja: '火・金 13:00 KST' },
            jackpot: { en: '$20 million minimum (rolls over)', ko: '최소 2,000만 달러 (롤오버)', ja: '最低2,000万ドル（ロールオーバー）' },
            price: '$2 per play',
            anyPrize: '1 in 24',
            tax: { en: 'Federal 37% + state taxes. Lump sum or annuity.', ko: '연방세 37% + 주세. 일시불 또는 연금 선택.', ja: '連邦税37%+州税。一括またはアニュイティ選択。' },
            where: { en: '45 US states, DC, US Virgin Islands', ko: '미국 45개 주, DC', ja: '米国45州、DC' },
            claim: { en: '60 days to 1 year (varies by state)', ko: '60일 ~ 1년 (구매 주 따라 다름)', ja: '60日〜1年（州により異なる）' }
        },
        brand: { bg: '#1a2a5e', header: '#003087', mainBall: 'white', mainBallColors: null, bonusBall: '#d4af37' }
    },
    eu_em: {
        lottoName: 'EuroMillions',
        lottoNames: { en: 'EuroMillions', ko: '유로밀리언즈', ja: 'ユーロミリオンズ' },
        mainCount: 5, mainRange: 50, bonusCount: 2, bonusRange: 12,
        bonusLabel: 'Star', separateBonusPool: true,
        resultsUrl: 'https://www.euro-millions.com/results',
        hotNumbers: [17, 21, 42, 44, 50],
        coldNumbers: [2, 9, 25, 33, 47],
        flag: '🇪🇺',
        officialSite: 'euro-millions.com',
        details: {
            freq: { en: '2x / week', ko: '주 2회', ja: '週2回' },
            draw: { en: 'Tue & Fri at 20:45 CET (Brussels)', ko: '화·금 오전 4:45 (KST)', ja: '火・金 04:45 KST' },
            jackpot: { en: '€17M minimum, capped at €250M', ko: '최소 1,700만 유로, 최대 2억 5천만 유로', ja: '最低1,700万ユーロ、上限2億5,000万ユーロ' },
            price: '€2.50 per line (varies by country)',
            anyPrize: '1 in 13',
            tax: { en: 'Tax-free in most participating countries', ko: '대부분 참여국에서 비과세', ja: 'ほとんどの参加国で非課税' },
            where: { en: '9 countries: UK, Ireland, France, Spain, Portugal, Austria, Belgium, Luxembourg, Switzerland', ko: '9개국: 영국, 아일랜드, 프랑스, 스페인, 포르투갈, 오스트리아, 벨기에, 룩셈부르크, 스위스', ja: '9カ国：英国・アイルランド・フランス・スペイン・ポルトガル・オーストリア・ベルギー・ルクセンブルク・スイス' },
            claim: { en: '180 days (varies by country)', ko: '180일 (국가별 상이)', ja: '180日（国により異なる）' }
        },
        brand: { bg: '#003399', header: '#002080', mainBall: 'white', mainBallColors: null, bonusBall: '#FFD700' }
    }
};

// helper: resolve a string-or-object detail value for the current language
function resolveDetail(val, lang) {
    if (typeof val === 'string') return val;
    return val[lang] || val['en'] || '';
}

// ─── Number Analysis ──────────────────────────────────────────────────────────
function analyzeNumbers(numbers, cfg) {
    const sorted = [...numbers].sort((a, b) => a - b);
    const odd = numbers.filter(n => n % 2 !== 0).length;
    const sum = numbers.reduce((a, b) => a + b, 0);
    const avg = (sum / numbers.length).toFixed(1);

    // Find consecutive groups (e.g. [12,13,14] → "12-14")
    const consecGroups = [];
    let i = 0;
    while (i < sorted.length) {
        let j = i;
        while (j + 1 < sorted.length && sorted[j + 1] === sorted[j] + 1) j++;
        if (j > i) consecGroups.push(sorted.slice(i, j + 1));
        i = j + 1;
    }

    // Distribution into three equal bands
    const third = Math.ceil(cfg.mainRange / 3);
    const low  = numbers.filter(n => n <= third).length;
    const mid  = numbers.filter(n => n > third && n <= third * 2).length;
    const high = numbers.filter(n => n > third * 2).length;

    // Sum position as percentage between theoretical min and max
    const minSum = Array.from({length: cfg.mainCount}, (_, k) => k + 1).reduce((a, b) => a + b, 0);
    const maxSum = Array.from({length: cfg.mainCount}, (_, k) => cfg.mainRange - k).reduce((a, b) => a + b, 0);
    const sumPct = Math.round((sum - minSum) / (maxSum - minSum) * 100);

    return { odd, even: numbers.length - odd, sum, avg, consecGroups, low, mid, high, sumPct };
}

function renderNumberAnalysis(mainNumbers, cfg, lang, container) {
    if (!container) return;
    const t = TRANSLATIONS[lang];
    const a = analyzeNumbers(mainNumbers, cfg);
    const oddPct = Math.round(a.odd / mainNumbers.length * 100);

    const consecText = a.consecGroups.length
        ? a.consecGroups.map(g => g[0] + (g.length > 1 ? '–' + g[g.length - 1] : '')).join(', ')
        : t.analyzeNone;

    container.innerHTML = `
        <div class="analysis-card">
            <h4>${t.analyzeTitle}</h4>
            <div class="analysis-grid">
                <div class="analysis-item">
                    <span class="analysis-label">${t.analyzeOddEven}</span>
                    <div class="oe-bar"><div class="oe-odd" style="width:${oddPct}%"></div></div>
                    <span class="analysis-val">${t.analyzeOdd} ${a.odd} · ${t.analyzeEven} ${a.even}</span>
                </div>
                <div class="analysis-item">
                    <span class="analysis-label">${t.analyzeSum}</span>
                    <div class="sum-track"><div class="sum-pin" style="left:${Math.max(2, Math.min(98, a.sumPct))}%"></div></div>
                    <span class="analysis-val">${a.sum} <small>(${t.analyzeAvg}: ${a.avg})</small></span>
                </div>
                <div class="analysis-item">
                    <span class="analysis-label">${t.analyzeConsec}</span>
                    <span class="analysis-val${a.consecGroups.length ? ' analysis-warn' : ''}">${consecText}</span>
                </div>
                <div class="analysis-item">
                    <span class="analysis-label">${t.analyzeDist}</span>
                    <div class="dist-badges">
                        <span class="dist-low">${t.analyzeLow} ${a.low}</span>
                        <span class="dist-mid">${t.analyzeMid} ${a.mid}</span>
                        <span class="dist-high">${t.analyzeHigh} ${a.high}</span>
                    </div>
                </div>
            </div>
        </div>`;
}

// ─── Generate Ticket SVG ──────────────────────────────────────────────────────
function generateTicketSVG(key, lang) {
    const cfg = LOTTO_CONFIGS[key];
    const br = cfg.brand;
    const name = cfg.lottoNames[lang] || cfg.lottoName;
    const W = 280, H = 140, hdrH = 38, ftrH = 24;
    const ballAreaH = H - hdrH - ftrH;
    const ballCY = hdrH + ballAreaH / 2;
    const hasSep = cfg.bonusCount > 0 && cfg.separateBonusPool;
    const mainR = cfg.mainCount >= 7 ? 12 : 14;
    const bonusR = 14;

    // Calculate bonus area width
    const bonusAreaW = hasSep ? (cfg.bonusCount * (bonusR * 2 + 6) + 14) : 0;
    // Available width for main balls (8px left pad + mainAreaW + bonusAreaW + 8px right pad = W)
    const mainAreaW = W - bonusAreaW - 16;

    // X centers for main balls
    const mainGap = cfg.mainCount > 1 ? (mainAreaW - cfg.mainCount * mainR * 2) / (cfg.mainCount - 1) : 0;
    const mainStartX = 8 + mainR;
    const mainCXs = Array.from({length: cfg.mainCount}, (_, i) => mainStartX + i * (mainR * 2 + mainGap));

    // X centers for bonus balls
    const bonusCXs = [];
    if (hasSep) {
        const bonusGap = cfg.bonusCount > 1 ? (bonusAreaW - 14 - cfg.bonusCount * bonusR * 2) / (cfg.bonusCount - 1) : 0;
        const bonusStartX = mainAreaW + 8 + mainR + bonusR;
        for (let i = 0; i < cfg.bonusCount; i++) {
            bonusCXs.push(bonusStartX + i * (bonusR * 2 + bonusGap));
        }
    }

    // Helper: generate a single ball SVG
    function ball(cx, cy, r, fill, isBonus) {
        const shine = `<ellipse cx="${(cx - r * 0.3).toFixed(1)}" cy="${(cy - r * 0.32).toFixed(1)}" rx="${(r * 0.28).toFixed(1)}" ry="${(r * 0.2).toFixed(1)}" fill="rgba(255,255,255,0.65)"/>`;
        return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r}" fill="${fill}" stroke="rgba(0,0,0,0.12)" stroke-width="0.5"/>${shine}`;
    }

    // Main balls SVG
    const mainBallsSVG = mainCXs.map((cx, i) => {
        const fill = br.mainBallColors ? br.mainBallColors[i % br.mainBallColors.length] : (br.mainBall || 'white');
        return ball(cx, ballCY, mainR, fill, false);
    }).join('');

    // Separator line (for Powerball/MM/EM)
    const sepSVG = hasSep ? `<line x1="${(mainAreaW + 10).toFixed(1)}" y1="${(ballCY - mainR - 8).toFixed(1)}" x2="${(mainAreaW + 10).toFixed(1)}" y2="${(ballCY + mainR + 8).toFixed(1)}" stroke="rgba(255,255,255,0.3)" stroke-width="1" stroke-dasharray="3,2"/>` : '';

    // Bonus balls SVG
    const bonusBallsSVG = bonusCXs.map((cx, i) => {
        if (cfg.bonusLabel === 'Star') {
            return `<text x="${cx.toFixed(1)}" y="${(ballCY + 7).toFixed(1)}" text-anchor="middle" font-size="${(bonusR * 1.6).toFixed(0)}" fill="${br.bonusBall}">★</text>`;
        }
        return ball(cx, ballCY, bonusR, br.bonusBall || '#ff4444', true);
    }).join('');

    // Footer format text
    let footerTxt = hasSep
        ? `Pick ${cfg.mainCount} (1-${cfg.mainRange}) + ${cfg.bonusLabel} (1-${cfg.bonusRange})`
        : `Pick ${cfg.mainCount} numbers from 1 to ${cfg.mainRange}`;

    const defId = key.replace(/_/g, '-');

    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;border-radius:10px 10px 0 0">
<defs>
  <linearGradient id="tbg-${defId}" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${br.bg}"/>
    <stop offset="100%" stop-color="${br.bg}dd"/>
  </linearGradient>
</defs>
<rect x="0" y="0" width="${W}" height="${H}" fill="url(#tbg-${defId})"/>
<rect x="0" y="0" width="${W}" height="${hdrH}" fill="${br.header}"/>
<rect x="0" y="${hdrH - 6}" width="${W}" height="6" fill="${br.header}"/>
<rect x="0" y="0" width="${W}" height="${hdrH + 6}" fill="rgba(255,255,255,0.05)"/>
<text x="12" y="${(hdrH * 0.73).toFixed(0)}" font-size="15">${cfg.flag}</text>
<text x="${(W / 2).toFixed(0)}" y="${(hdrH * 0.73).toFixed(0)}" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="900" font-size="13" fill="white" letter-spacing="1.2">${name.toUpperCase()}</text>
<circle cx="${W - 20}" cy="${(hdrH / 2).toFixed(0)}" r="3" fill="rgba(255,255,255,0.35)"/>
<circle cx="${W - 13}" cy="${(hdrH / 2).toFixed(0)}" r="3" fill="rgba(255,255,255,0.35)"/>
<line x1="8" y1="${H - ftrH}" x2="${W - 8}" y2="${H - ftrH}" stroke="rgba(255,255,255,0.18)" stroke-width="1" stroke-dasharray="4,3"/>
${mainBallsSVG}
${sepSVG}
${bonusBallsSVG}
<text x="${(W / 2).toFixed(0)}" y="${H - 8}" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="8.5" fill="rgba(255,255,255,0.55)">${footerTxt}</text>
<g opacity="0.18" fill="white" transform="translate(${W - 40},${H - ftrH + 4})">
  <rect x="0" y="0" width="2" height="${ftrH - 8}"/>
  <rect x="3" y="0" width="1" height="${ftrH - 8}"/>
  <rect x="5" y="0" width="3" height="${ftrH - 8}"/>
  <rect x="9" y="0" width="1" height="${ftrH - 8}"/>
  <rect x="11" y="0" width="2" height="${ftrH - 8}"/>
  <rect x="14" y="0" width="1" height="${ftrH - 8}"/>
  <rect x="17" y="0" width="3" height="${ftrH - 8}"/>
  <rect x="21" y="0" width="1" height="${ftrH - 8}"/>
  <rect x="23" y="0" width="2" height="${ftrH - 8}"/>
  <rect x="26" y="0" width="1" height="${ftrH - 8}"/>
</g>
<text x="10" y="${H - 8}" font-family="monospace" font-size="6.5" fill="rgba(255,255,255,0.18)">LPR-${key.toUpperCase()}-2026</text>
</svg>`;
}

// ─── Render Quick Cards ────────────────────────────────────────────────────────
function renderQuickCards(lang) {
    const t = TRANSLATIONS[lang];
    const container = document.getElementById('quick-grid-container');
    if (!container) return;
    const order = ['us_pb', 'us_mm', 'eu_em', 'kr', 'uk', 'jp_l7'];
    const titles = { us_pb: t.qj_pb_title, us_mm: t.qj_mm_title, eu_em: t.qj_eu_title, kr: t.qj_kr_title, uk: t.qj_uk_title, jp_l7: t.qj_jp_title };
    const descs  = { us_pb: t.qj_pb_desc,  us_mm: t.qj_mm_desc,  eu_em: t.qj_eu_desc,  kr: t.qj_kr_desc,  uk: t.qj_uk_desc,  jp_l7: t.qj_jp_desc  };
    container.innerHTML = order.map(key => `
        <div class="quick-card" onclick="document.getElementById('country-select').value='${key}'; document.getElementById('country-select').dispatchEvent(new Event('change')); document.querySelector('[data-main-tab=generator-tab]').click();">
            <div class="ticket-visual">${generateTicketSVG(key, lang)}</div>
            <div class="quick-card-body">
                <h4>${titles[key] || ''}</h4>
                <p>${descs[key] || ''}</p>
                <button class="quick-btn">${t.quickCardBtn || 'Go to Generator'}</button>
            </div>
        </div>
    `).join('');
}

// ─── Render Lottery Details cards ─────────────────────────────────────────────
function renderLotteryDetails(lang) {
    const container = document.getElementById('lottery-details-container');
    if (!container) return;
    const t = TRANSLATIONS[lang];

    const order = ['us_pb', 'us_mm', 'eu_em', 'uk', 'kr', 'jp_l7'];
    let isFirst = true;
    container.innerHTML = order.map(key => {
        const cfg = LOTTO_CONFIGS[key];
        if (!cfg || !cfg.details) return '';
        const d = cfg.details;
        const lotteryName = cfg.lottoNames[lang] || cfg.lottoName;
        const freq = resolveDetail(d.freq, lang);
        const open = isFirst ? ' open' : '';
        isFirst = false;
        return `
        <details class="lottery-card"${open}>
            <summary><span class="lc-flag">${cfg.flag}</span><span class="lc-name">${lotteryName}</span><span class="lc-tag">${freq}</span></summary>
            <div class="lc-body">
                <div class="lc-row"><strong>${t.detailDraw}</strong><span>${resolveDetail(d.draw, lang)}</span></div>
                <div class="lc-row"><strong>${t.detailJackpot}</strong><span>${resolveDetail(d.jackpot, lang)}</span></div>
                <div class="lc-row"><strong>${t.detailPrice}</strong><span>${resolveDetail(d.price, lang)}</span></div>
                <div class="lc-row"><strong>${t.detailAnyPrize}</strong><span>${resolveDetail(d.anyPrize, lang)}</span></div>
                <div class="lc-row"><strong>${t.detailTax}</strong><span>${resolveDetail(d.tax, lang)}</span></div>
                <div class="lc-row"><strong>${t.detailWhere}</strong><span>${resolveDetail(d.where, lang)}</span></div>
                <div class="lc-row"><strong>${t.detailClaim}</strong><span>${resolveDetail(d.claim, lang)}</span></div>
                <div class="lc-row"><strong>${t.detailSite}</strong><span><a href="https://www.${cfg.officialSite}" target="_blank" rel="noopener">${cfg.officialSite}</a></span></div>
            </div>
        </details>`;
    }).join('');
}

// ─── Render Responsible Gaming section ────────────────────────────────────────
function renderResponsibleGaming(lang) {
    const container = document.getElementById('responsible-gaming-container');
    if (!container) return;
    const t = TRANSLATIONS[lang];
    container.innerHTML = `
        <div class="responsible-gaming">
            <h3>${t.responsibleTitle}</h3>
            <p>${t.responsibleP1}</p>
            <p>${t.responsibleP2}</p>
            <div class="helpline-grid">
                <div class="helpline-item"><strong>🇺🇸 USA</strong> — National Problem Gambling Helpline: <strong>1-800-522-4700</strong></div>
                <div class="helpline-item"><strong>🇬🇧 UK</strong> — GamCare: <strong>0808 8020 133</strong></div>
                <div class="helpline-item"><strong>🇰🇷 Korea</strong> — 한국도박문제관리센터: <strong>1336</strong></div>
                <div class="helpline-item"><strong>🇯🇵 Japan</strong> — ギャンブル等依存症相談: <strong>0570-035-777</strong></div>
                <div class="helpline-item"><strong>🌍 International</strong> — Gamblers Anonymous: <a href="https://www.gamblersanonymous.org" target="_blank" rel="noopener">gamblersanonymous.org</a></div>
            </div>
        </div>`;
}

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

        // data-i18n attribute-based translations
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) el.innerHTML = t[key];
        });
        // data-i18n-placeholder attribute-based translations
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined) el.placeholder = t[key];
        });

        // Render dynamic sections
        renderQuickCards(currentLang);
        renderLotteryDetails(currentLang);
        renderResponsibleGaming(currentLang);

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

            const analysisDiv = document.createElement('div');
            analysisDiv.className = 'set-analysis';

            actionsDiv.appendChild(copyBtn);
            actionsDiv.appendChild(shareBtn);
            setWrapper.appendChild(setDiv);
            setWrapper.appendChild(actionsDiv);
            setWrapper.appendChild(analysisDiv);
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
                renderNumberAnalysis(mainNumbers, currentConfig, currentLang, analysisDiv);
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
