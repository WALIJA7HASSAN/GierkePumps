document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon')
  const menu = document.getElementById('menu')
  const overlay = document.getElementById('smNavOverlay')

  menuIcon.addEventListener('click', function () {
    menu.classList.toggle('translate-x-0')
    menu.classList.toggle('-translate-x-[120%]')
    overlay.classList.toggle('hidden')

    const spans = menuIcon.querySelectorAll('span')
    spans[0].classList.toggle('rotate-45')
    spans[0].classList.toggle('translate-y-[2px]')
    spans[1].classList.toggle('opacity-0')
    spans[2].classList.toggle('-rotate-45')

    // Adjust the gap for the cross
    menuIcon.classList.toggle('gap-[7px]')
    menuIcon.classList.toggle('gap-0')
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const navArrowDown = document.getElementById('navArrowDown')
  const dropdown = document.getElementById('servicesDropDown')

  // Function to set the height and transform transition for the dropdown and arrow
  function setDropdownTransitions() {
    dropdown.style.transition = 'height 0.3s ease-in-out' // Smooth height transition
    navArrowDown.style.transition = 'transform 0.3s ease-in-out' // Smooth rotation transition
  }

  // Function to toggle the dropdown visibility and arrow rotation
  function toggleDropdown() {
    const isOpen =
      dropdown.style.height !== '0px' && dropdown.style.height !== ''
    if (isOpen) {
      dropdown.style.height = '0px' // Collapse dropdown
      navArrowDown.style.transform = 'rotate(0deg)' // Rotate back to original
    } else {
      dropdown.style.height = `${dropdown.scrollHeight}px` // Expand dropdown
      navArrowDown.style.transform = 'rotate(180deg)' // Rotate arrow 180 degrees
    }
  }

  // Set transition properties on load
  setDropdownTransitions()

  navArrowDown.addEventListener('click', function () {
    toggleDropdown()
  })
})


// faq

// document.addEventListener('DOMContentLoaded', function () {
//   const faqs = document.querySelectorAll('.faq-question')

//   faqs.forEach((faq) => {
//     faq.addEventListener('click', function () {
//       const answer = this.nextElementSibling
//       const icon = this.querySelector('.faq-icon')
//       const verticalIcon = this.querySelector('.faq-icon span:last-child')

//       answer.classList.toggle('open')
//       icon.classList.toggle('rotate-180')
//       verticalIcon.classList.toggle('opacity-0')
//       verticalIcon.classList.toggle('delay-75')
//     })
//   })
// })

document.addEventListener('DOMContentLoaded', function () {
  // Handle the first FAQ separately
  const firstFaqQuestion = document.getElementById('faq-first-question')
  const firstFaqAnswer = document.getElementById('faq-first-answer')
  const firstFaqIcon = document.getElementById('faq-first-icon')
  const firstVerticalIcon = firstFaqIcon.querySelector('span:last-child')

  // Set the first FAQ to be open by default
  if (firstFaqQuestion && firstFaqAnswer && firstFaqIcon) {
    firstFaqAnswer.style.maxHeight = firstFaqAnswer.scrollHeight + 'px'
    firstFaqAnswer.classList.add('open')
    firstFaqIcon.classList.add('rotate-180')
    firstVerticalIcon.classList.add('opacity-0')
    firstVerticalIcon.classList.add('delay-75')

    firstFaqQuestion.addEventListener('click', function () {
      if (firstFaqAnswer.classList.contains('open')) {
        firstFaqAnswer.style.maxHeight = null // Collapse
        firstFaqAnswer.classList.remove('open')
        firstFaqIcon.classList.remove('rotate-180')
        firstVerticalIcon.classList.remove('opacity-0')
        firstVerticalIcon.classList.remove('delay-75')
      } else {
        firstFaqAnswer.style.maxHeight = firstFaqAnswer.scrollHeight + 'px' // Expand
        firstFaqAnswer.classList.add('open')
        firstFaqIcon.classList.add('rotate-180')
        firstVerticalIcon.classList.add('opacity-0')
        firstVerticalIcon.classList.add('delay-75')
      }
    })
  }

  // Handle other FAQs
  const faqs = document.querySelectorAll(
    '.faq-question:not(#faq-first-question)'
  )

  faqs.forEach((faq) => {
    faq.addEventListener('click', function () {
      const answer = this.nextElementSibling
      const icon = this.querySelector('.faq-icon')
      const verticalIcon = this.querySelector('.faq-icon span:last-child')

      // Toggle the answer height
      if (answer.classList.contains('open')) {
        answer.style.maxHeight = null // Collapse
        answer.classList.remove('open')
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px' // Expand
        answer.classList.add('open')
      }

      // Rotate the icon and toggle the vertical icon styles
      icon.classList.toggle('rotate-180')
      verticalIcon.classList.toggle('opacity-0')
      verticalIcon.classList.toggle('delay-75')
    })
  })
})



