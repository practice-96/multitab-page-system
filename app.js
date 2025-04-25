const pageRadios = document.querySelectorAll('[name="page-radio-group"]')
console.log(pageRadios)

pageRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    const hash = radio.dataset.page
    location.href = `#${hash}`
  })
})

function scrollToPage() {
  const hash = location.hash.replace('#', '');
  const page = document.getElementById(hash)
  if(page) {
    page.scrollIntoView({behavior: 'smooth'})
    return
  }
  document.getElementById('home-page').scrollIntoView({behavior: 'smooth'})
}

window.addEventListener('hashchange', scrollToPage)

window.addEventListener('DOMContentLoaded', scrollToPage)