const list = document.querySelector('book-list ul');

//delete books
list.addEventListener('click', function(e){
  if(e.target.classname == 'delete'){
    const li = e.target.parentElement;
    li.parentnode.removeChild(li);
  }
});
