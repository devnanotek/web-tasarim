const escapeHtml = (unsafe) => {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

$(document).ready(function () {
    renderQuiz();

    // Option selection handling
    $(document).on('click', '.option-item', function () {
        // Find the radio button inside this option-item
        var radio = $(this).find('input[type="radio"]');

        // Check it
        radio.prop('checked', true);

        // Remove 'selected' class from all siblings
        $(this).siblings().removeClass('selected');

        // Add 'selected' class to this item
        $(this).addClass('selected');
    });

    // Calculate Button Click
    $('#btnCalculate').click(function () {
        calculateScore();
    });
});

function renderQuiz() {
    const $container = $('#quizContent');
    $container.empty();

    let currentCategory = "";

    questions.forEach((q, index) => {
        // Add Section Header if category changes
        if (q.category !== currentCategory) {
            currentCategory = q.category;
            $container.append(`
                <div class="row mb-4">
                    <div class="col-12">
                        <h2 class="text-white border-bottom pb-2">${currentCategory === 'HTML' ? '📂 BÖLÜM 1: HTML' : '🎨 BÖLÜM 2: CSS'}</h2>
                    </div>
                </div>
            `);
        }

        const optionsHtml = q.options.map((opt, i) => `
            <li class="option-item" id="q${q.id}-opt${i}">
                <input class="form-check-input option-radio" type="radio" name="question${q.id}" value="${i}" id="radio-${q.id}-${i}">
                <label class="form-check-label w-100" for="radio-${q.id}-${i}" style="cursor: pointer;">
                    ${String.fromCharCode(65 + i)}) ${escapeHtml(opt)}
                </label>
            </li>
        `).join('');

        const questionHtml = `
            <div class="question-card" id="card-${q.id}">
                <h5><span class="badge badge-category">${index + 1}</span> ${escapeHtml(q.question)}</h5>
                <ul class="options-list">
                    ${optionsHtml}
                </ul>
                <div class="feedback-msg mt-2" style="display:none; font-weight:bold;"></div>
            </div>
        `;

        $container.append(questionHtml);
    });
}

function calculateScore() {
    let score = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let emptyCount = 0;

    questions.forEach(q => {
        const selectedValue = $(`input[name="question${q.id}"]:checked`).val();
        const $card = $(`#card-${q.id}`);
        const $feedback = $card.find('.feedback-msg');

        // Reset styles
        $card.find('.option-item').removeClass('correct-answer wrong-answer');
        $feedback.hide().removeClass('text-success text-danger');

        if (selectedValue === undefined) {
            emptyCount++;
            // Highlight correct answer for empty ones too? Let's just show it.
            $(`#q${q.id}-opt${q.answer}`).addClass('correct-answer');
            $feedback.text("Boş bırakıldı. Doğru cevap: " + String.fromCharCode(65 + q.answer)).addClass('text-danger').show();
        } else {
            const userAns = parseInt(selectedValue);
            if (userAns === q.answer) {
                score += (100 / questions.length); // Basic equal scoring
                correctCount++;
                $(`#q${q.id}-opt${userAns}`).addClass('correct-answer');
                $feedback.text("✓ Doğru!").addClass('text-success').show();
            } else {
                wrongCount++;
                $(`#q${q.id}-opt${userAns}`).addClass('wrong-answer');
                $(`#q${q.id}-opt${q.answer}`).addClass('correct-answer');
                $feedback.text("✗ Yanlış! Doğru cevap: " + String.fromCharCode(65 + q.answer)).addClass('text-danger').show();
            }
        }
    });

    // Show Result Modal
    $('#scoreValue').text(Math.round((correctCount / questions.length) * 100));
    $('#correctCount').text(correctCount);
    $('#wrongCount').text(wrongCount);
    $('#emptyCount').text(emptyCount);

    var resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
    resultModal.show();
}
