const processing = document.getElementsByClassName('processing')
const Processing = document.querySelector('.processing')
const loading = document.querySelector('.spinner')
const SuccessText = document.getElementById('text')
const button = document.getElementById('button')
const payment = document.getElementById('payment')

const removeLoading = ()=>{
    loading.remove()
    Processing.remove()
    payment.style.display = 'block'
    SuccessText.innerHTML='Your transaction is successful please collect the item'
    button.innerHTML = `<button  class="btn btn-success pull-right continue" style="margin-right: 5px; margin-top: 8px;"><a
    class=" text-white"><a href = 'index.html'>Continue Shopping</a></button>`

}

const removeSuccess = ()=>{
    payment.remove()
}
const myTimeout =  setTimeout( removeLoading, 3500);
const removeAnim = setTimeout(removeSuccess,4800)


