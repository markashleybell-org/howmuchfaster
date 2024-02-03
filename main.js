var HMF = (function () {
    function calculatePercentageDifference(original, final) {
        return ((final - original) / original) * 100;
    }

    Array.from(document.querySelectorAll('[data-expand]'), input => {
        let parent = input.parentNode;
        function updateSize() {
            parent.dataset.value = input.value;
        }
        input.addEventListener('input', updateSize);
        updateSize();
    });

    const form = document.querySelector('form');
    const originalInput = document.querySelector('[name=original]');
    const finalInput = document.querySelector('[name=final]');
    const resultPlaceholder = document.querySelector('.result-placeholder');
    const result = document.querySelector('.result');

    function validate() {
        if (!form.checkValidity()) {
            result.classList.add('hidden');
            resultPlaceholder.classList.remove('hidden');
            return;
        }

        const original = parseFloat(originalInput.value);
        const final = parseFloat(finalInput.value);

        const percentage = calculatePercentageDifference(original, final);
        const speedup = original > final ? original / final : final / original;

        result.innerText = `That's a ${percentage.toFixed(2)}% ${percentage < 0 ? 'reduction' : 'increase'}, or ${speedup.toFixed(1)}x the baseline.`;

        result.classList.remove('hidden');
        resultPlaceholder.classList.add('hidden');
    }

    originalInput.addEventListener('input', validate);
    finalInput.addEventListener('input', validate);

    return {
        calculatePercentageDifference
    };
})();
