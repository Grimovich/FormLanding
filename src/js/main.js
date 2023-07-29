// Custom script
function stepForm() {
    const steps = document.querySelectorAll(".form__step");
    const prevBtn = document.querySelector(".prev__step");
    const nextBtn = document.querySelector(".next__step");
    const form = document.querySelector(".steps__form");
    const stepNumbers = document.querySelectorAll(".step__number");
    const progress = document.querySelector(".progress__success");
    const finishBlock = document.querySelector(".finish");

    form.addEventListener("submit", (e) => e.preventDefault());

    let formStepIndex = 0;
    prevBtn.addEventListener("click", () => {
        formStepIndex--;

        stepNumbers[formStepIndex + 1].classList.remove("active__number");

        updateFormSteps();
    });

    nextBtn.addEventListener("click", () => {
        if (formStepIndex < steps.length - 1) {
            formStepIndex++;
            updateFormSteps();
        }
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

            nextBtn.addEventListener("click", () => {
                finishBlock.style.display = "block";
                form.style.display = "none";
            });
        } else {
            nextBtn.innerHTML = "Next";
        }

        const actives = document.querySelectorAll(".active__number");
        const percent =
            ((actives.length - 1) / (stepNumbers.length - 1)) * 100 + "%";

        progress.style.width = percent;
    }
    updateFormSteps();
}

if (document.querySelector(".form__step")) {
    stepForm();
}



// html

// <div class="form__step">
//                     <div class="section__title">Tell Us About Your Self</div>
//                     <div class="section__text">Select from the list and add your own interests.</div>

//                     <div class="profile__inputs">
//                         <div class="form__input first__input">
//                             <input type="text" class="input" placeholder="First Name">
//                             <div class="input__img">
//                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
//                                     xmlns="http://www.w3.org/2000/svg">
//                                     <path
//                                         d="M10 10.6251C7.35834 10.6251 5.20834 8.47508 5.20834 5.83341C5.20834 3.19175 7.35834 1.04175 10 1.04175C12.6417 1.04175 14.7917 3.19175 14.7917 5.83341C14.7917 8.47508 12.6417 10.6251 10 10.6251ZM10 2.29175C8.05001 2.29175 6.45834 3.88341 6.45834 5.83341C6.45834 7.78341 8.05001 9.37508 10 9.37508C11.95 9.37508 13.5417 7.78341 13.5417 5.83341C13.5417 3.88341 11.95 2.29175 10 2.29175Z"
//                                         fill="#747887" />
//                                     <path
//                                         d="M17.1585 18.9583C16.8168 18.9583 16.5335 18.675 16.5335 18.3333C16.5335 15.4583 13.6001 13.125 10.0001 13.125C6.40013 13.125 3.4668 15.4583 3.4668 18.3333C3.4668 18.675 3.18346 18.9583 2.8418 18.9583C2.50013 18.9583 2.2168 18.675 2.2168 18.3333C2.2168 14.775 5.70846 11.875 10.0001 11.875C14.2918 11.875 17.7835 14.775 17.7835 18.3333C17.7835 18.675 17.5001 18.9583 17.1585 18.9583Z"
//                                         fill="#747887" />
//                                 </svg>

//                             </div>
//                         </div>

//                         <div class="form__input last__input">
//                             <input type="text" class="input" placeholder="Last Name">
//                             <div class="input__img">
//                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
//                                     xmlns="http://www.w3.org/2000/svg">
//                                     <path
//                                         d="M10 10.6251C7.35834 10.6251 5.20834 8.47508 5.20834 5.83341C5.20834 3.19175 7.35834 1.04175 10 1.04175C12.6417 1.04175 14.7917 3.19175 14.7917 5.83341C14.7917 8.47508 12.6417 10.6251 10 10.6251ZM10 2.29175C8.05001 2.29175 6.45834 3.88341 6.45834 5.83341C6.45834 7.78341 8.05001 9.37508 10 9.37508C11.95 9.37508 13.5417 7.78341 13.5417 5.83341C13.5417 3.88341 11.95 2.29175 10 2.29175Z"
//                                         fill="#747887" />
//                                     <path
//                                         d="M17.1585 18.9583C16.8168 18.9583 16.5335 18.675 16.5335 18.3333C16.5335 15.4583 13.6001 13.125 10.0001 13.125C6.40013 13.125 3.4668 15.4583 3.4668 18.3333C3.4668 18.675 3.18346 18.9583 2.8418 18.9583C2.50013 18.9583 2.2168 18.675 2.2168 18.3333C2.2168 14.775 5.70846 11.875 10.0001 11.875C14.2918 11.875 17.7835 14.775 17.7835 18.3333C17.7835 18.675 17.5001 18.9583 17.1585 18.9583Z"
//                                         fill="#747887" />
//                                 </svg>

//                             </div>
//                         </div>

//                         <div class="form__input description__input">
//                             <textarea class="self__input" placeholder="About Your Self"></textarea>
//                         </div>
//                     </div>
//                 </div>



//                 css

//                 .profile {
//   // .profile__inputs
// }

// .first {
//   &__input {
//     position: relative;

//     display: inline-flex;

//     width: 460px;
//     height: 60px;
//   }
// }

// .last {
//   &__input {
//     position: relative;

//     display: inline-flex;

//     width: 460px;
//     max-width: 930px;
//     height: 60px;
//     margin-left: 7px;
//   }
// }

// .description {
//   &__input {
//     display: flex;
//     max-width: 930px;
//     height: 240px;
//     margin-top: 5px;

//     border: 1px solid $lightgray;
//   }
// }
// .self {
//   // .self__input

//   &__input {
//     width: 100%;
//     padding: 20px;
//     color: $gray;
//     outline: none;
//     max-width: 930px;
//     height: 240px;
//     font-size: 18px;
//     font-weight: 375;
//     font-style: normal;
//     white-space: pre-wrap;
//     word-wrap: break-word;
//     resize: none;
//     border: 1px solid $lightgray;

//     &:focus {
//       outline: 1px solid $red;
//     }
//   }
// }
