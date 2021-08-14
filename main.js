

const validation ={
    loadSelector(){
       const userElm = document.querySelector('#user')
       const passwordElm = document.querySelector('#pass')
       const conPassElm = document.querySelector('#conpass')
       const mobileElm = document.querySelector('#mobNumber')
       const emailElm = document.querySelector('#email')
       const btnElm = document.querySelector('#btn')
       const formElm = document.querySelector('#form')
       const userError = document.querySelector('#usererror')

       return{
           userElm,
           passwordElm,
           conPassElm,
           mobileElm,
           emailElm,
           btnElm,
           formElm,
           userError
       }
    },
    getUserName(){
        const userReg = /[A-Za-z0-9_]{5,12}/g
        const{ userElm , userError} = this.loadSelector()
        const userName = userElm.value
        console.log(userName)
        if(userReg.test(userName)){
            userError.innerHTML = "valid"
        }else{
            userError.innerHTML = "username is invalid"
            // document.getElementById('usererror').innerHtml = "invalid"
            return false
        }
        
    },
    init(){
        const {formElm} = this.loadSelector()
        formElm.addEventListener('submit', (e)=>{
            e.preventDefault()
            this.getUserName()
            this.resetInputValues()
        })
    }
}

validation.init()