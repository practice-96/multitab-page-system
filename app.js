const pageRadios = document.querySelectorAll('[name="page-radio-group"]')
console.log(pageRadios)

pageRadios.forEach(radio => {
  const pageLink = radio.dataset.page
  console.log(pageLink)

  radio.addEventListener('change', () => {
    if(radio.checked) {
      location.href = `#${pageLink}`
    }
  })
})

