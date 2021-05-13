const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links')
})


app.listen(5000,()=>{
  console.log('server is listening on port 5000...')
})