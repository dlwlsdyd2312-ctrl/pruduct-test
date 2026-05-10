class LottoBall extends HTMLElement {
    static get observedAttributes() {
        return ['number'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'number' && oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const number = this.getAttribute('number') || '';
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: var(--ball-color, #50e3c2);
                    color: white;
                    font-size: 1.5rem;
                    font-weight: 600;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
                    margin: 0.5rem;
                }

                @keyframes pop-in {
                    0% {
                        transform: scale(0.5);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            </style>
            <div>${number}</div>
        `;
    }
}

customElements.define('lotto-ball', LottoBall);


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-btn').addEventListener('click', () => {
        const numbersContainer = document.getElementById('lotto-numbers');
        numbersContainer.innerHTML = '';
        const numbers = generateUniqueNumbers(6, 1, 45);

        numbers.forEach((number, index) => {
            setTimeout(() => {
                const lottoBall = document.createElement('lotto-ball');
                lottoBall.setAttribute('number', number);
                lottoBall.style.setProperty('--ball-color', getBallColor(number));
                numbersContainer.appendChild(lottoBall);
            }, index * 200); // Stagger the animation
        });
    });
});

function generateUniqueNumbers(count, min, max) {
    const numbers = new Set();
    while (numbers.size < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function getBallColor(number) {
    if (number <= 10) return '#f5a623'; // Yellow
    if (number <= 20) return '#4a90e2'; // Blue
    if (number <= 30) return '#d0021b'; // Red
    if (number <= 40) return '#7ed321'; // Green
    return '#9013fe'; // Purple
}
