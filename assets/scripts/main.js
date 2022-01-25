const percentButtons = document.querySelectorAll('.button')
setInterval(() => {
  const bill = Number(document.querySelector('.bill-input').value)
  const validBill = (bill) => {

  }
  const validPercents = (button) => {
    percentButtons.forEach(btn => {
      btn.classList.remove('active');
    })

  }
  const validNumberOfPeople = (num) => {
    
  }
  
  getElement = (element) => {
    validPercents();
    element.classList.add('active');
    
    console.log(element.value)
  }
  
}, 1000)