var alertPlaceholder = document.getElementById('livealert')
var alertTrigger = document.getElementById('livealertbtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

// 
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


// popovers

var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
  trigger: 'focus'
})

//srcorllspy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})


//tooltip


var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, options)

var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, {
  boundary: document.body // or document.querySelector('#boundary')
})


//dropdown

