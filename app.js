document.addEventListener('DOMcontentLoarded')

const list = document.querySelector('#book-list ul');

//delete books
list.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// add book-list
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  //create elemets
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

//add content
deleteBtn.textContent = 'delete';
bookName.textContent = value;

//add classes
bookName.classList.add('name');
deleteBtn.classList.add('delete');

  // append to document 
li.appendChild(bookName);
li.appendChild(deleteBtn)
list.appendChild(li);

});

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = 'none';
  } else {
    list.style.display = 'initial';
  }
})

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
      }
    });
  });

  //tabbed content
  const tabs = document.querySelector('.tabs')
  const panel = document.querySelectorAll('.panel');
  tabs.addEventListener('click', function(e){
  if(e.target.tagname == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    panel.forEach(function(panel){
      if (panel == targetpanel){
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    })
  }
})