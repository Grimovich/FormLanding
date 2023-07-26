// Custom scripts
function stepForm() {
    const steps = document.querySelectorAll(".form__step");
    const prevBtn = document.querySelector(".prev__step");
    const nextBtn = document.querySelector(".next__step");
    const form = document.querySelector(".steps__form");
    const stepNumbers = document.querySelectorAll(".step__number");
    const progress = document.querySelector(".progress__success");

    form.addEventListener("submit", (e) => e.preventDefault());

    let formStepIndex = 0;
    prevBtn.addEventListener("click", () => {
        formStepIndex--;

        stepNumbers[formStepIndex + 1].classList.remove("active__number");

        updateFormSteps();
    });

    nextBtn.addEventListener("click", () => {
        formStepIndex++;
        updateFormSteps();
    });

    function updateFormSteps() {
        steps.forEach((step) => {
            step.classList.contains("active") && step.classList.remove("active");
        });

        steps[formStepIndex].classList.add("active");
        stepNumbers[formStepIndex].classList.add("active__number");

        if (formStepIndex === 0) {
            prevBtn.style.display = "none";
        } else {
            prevBtn.style.display = "block";
        }

        if (formStepIndex === steps.length - 1) {
            nextBtn.innerHTML = "Finish";
        } else {
            nextBtn.innerHTML = "Next";
        }
    }
    updateFormSteps();
}
stepForm();
