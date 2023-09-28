document.addEventListener('DOMContentLoaded', function () {
  const labels = document.querySelectorAll('.timeline-label')

  labels.forEach((label) => {
    label.addEventListener('click', () => {
      const targetId = label.getAttribute('data-scroll-to')
      const targetSection = document.getElementById(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
})

function updateTimelineOnPageChange(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetId = entry.target.id
      const labels = document.querySelectorAll('.timeline-label')
      labels.forEach((label) => {
        const labelTargetId = label.getAttribute('data-scroll-to')
        if (labelTargetId === targetId) {
          label.classList.add('selected')
        } else {
          label.classList.remove('selected')
        }
      })
    }
  })
}

const pageObserver = new IntersectionObserver(updateTimelineOnPageChange, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
})

const pages = document.querySelectorAll('.page')
pages.forEach((page) => {
  pageObserver.observe(page)
})
