const loading = document.querySelector('.spinner')
const SuccessText = document.getElementById('text')
const button = document.getElementById('button')
const removeLoading = ()=>{
    loading.remove()
    SuccessText.innerHTML='Your transaction is successful please collect the item'
    button.innerHTML = `<button  class="btn btn-success pull-right continue" style="margin-right: 5px; margin-top: 8px;"><a
    class=" text-white"><a href = 'index.html'>Continue Shopping</a></button>`

}

const myTimeout =  setTimeout( removeLoading, 5000);



