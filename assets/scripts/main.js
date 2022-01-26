'use strict' // strict mode

const bill = document.querySelector('.bill-input')
const percentButtons = document.querySelectorAll('.button')
const customPercent = document.querySelector('.custom-input')
const numberPeople = document.querySelector('.people-input')
const tipAmount = document.querySelector('.tip-amount')
const totalAmount = document.querySelector('.total-amount')

let tip = 0 // global tip

// Valid and Format Bill values
function validBill(bill) {
  if (bill.value <= 0) {
    document.querySelector('.bill-title').textContent =
      'Bill (must be more than 0)'
  } else {
    document.querySelector('.bill-title').textContent = 'Bill'
    function formatBill(unformattedBill) {
      const formattedBill = Number(unformattedBill.replace(',', '.'))
      return formattedBill
    }
    return formatBill(bill.value)
  }
}

//Valid and format/style Percent buttons and Custom values
function validPercents(percent) {
  percentButtons.forEach(btn => {
    btn.classList.remove('active')
    if (btn.value === percent.value) {
      btn.classList.add('active')
      tip = btn.value
      tip = Number(tip.toString().replace('%', ''))
    }
  })
}

// Valid People values
function validPeople(people) {
  if (Number(people.value) <= 0) {
    document.querySelector('.people-title').textContent =
      'Number of People (must be more than 0)'
  } else {
    document.querySelector('.people-title').textContent = 'Number of People'
    return Number(people.value)
  }
}
// Currency Formatter
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2
})

// Show tip amount
const calculateTipAmount = () => {
  const result = ((validBill(bill) / 100) * tip) / validPeople(numberPeople)
  return result
}

// Show total amount
const calculateTotalAmount = () => {
  const result =
    validBill(bill) / validPeople(numberPeople) + calculateTipAmount()
  return result
}

// Clear All
const clearAll = () => {
  bill.value = null
  tip = null
  numberPeople.value = null
  customPercent.value = null
  percentButtons.forEach(btn => {
    btn.classList.remove('active')
  })
}
// Update the values ​​on the screen
setInterval(() => {
  if (validBill(bill) <= 0 || validPeople(numberPeople) <= 0 || tip <= 0) {
    tipAmount.textContent = formatter.format(0)
    totalAmount.textContent = formatter.format(0)
  } else {
    tipAmount.textContent = formatter.format(calculateTipAmount())
    totalAmount.textContent = formatter.format(calculateTotalAmount())
  }
}, 500)
