const $_ = (id) => document.getElementById(id);
const $cardName = $_('card-name');
const $inputName = $_('name');
const $cardNumber = $_('card-number');
const $inputNumber = $_('number');
const $cardMonth = $_('card-month');
const $inputMonth = $_('month');
const $cardYear = $_('card-year');
const $inputYear = $_('year');
const $cardCvc = $_('card-cvc');
const $inputCvc = $_('cvc');

$inputName.addEventListener('keyup', ({ target }) => {
  if (target.value > 30) {
    target.value = target.value.slice(0, -1);
  }

  if (target.value.trim() !== '') {
    $cardName.textContent = target.value;
  }

  if (target.value.trim() === '') {
    $cardName.textContent = 'Kamui Tech';
  }
});

$inputNumber.addEventListener('keyup', ({ target }) => {
  if (target.value.trim() !== '' && target.value.length < 20) {
    if (
      target.value.length === 4 ||
      target.value.length === 9 ||
      target.value.length === 14
    ) {
      target.value += ' ';
    }
    $cardNumber.textContent = target.value;
  }

  if (target.value.trim() === '') {
    $cardNumber.textContent = '0000 0000 0000 0000';
  }

  if (target.value.length == 19) $inputMonth.focus();
});

const handleDate = (
  target,
  container,
  nextFocus = undefined,
  maxChars = 2,
  defaulValue = '00'
) => {
  if (target.value.trim() !== '') {
    container.textContent = target.value;
  }

  if (target.value.trim() === '') {
    container.textContent = '00';
  }
  if (target.value.length === maxChars && nextFocus !== undefined) {
    nextFocus?.focus();
  }
};

$inputMonth.addEventListener('keyup', ({ target }) =>
  handleDate(target, $cardMonth, $inputYear)
);

$inputYear.addEventListener('keyup', ({ target }) =>
  handleDate(target, $cardYear, $inputCvc)
);

$inputCvc.addEventListener('keypress', ({ target }) =>
  handleDate(target, $cardCvc, undefined, 3, '000')
);
