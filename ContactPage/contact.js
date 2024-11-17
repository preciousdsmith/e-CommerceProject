document.addEventListener('DOMContentLoaded', function() {
form.addEventListener('submit', (e) => {
e.preventDefault();



            const inputs = document.getElementsByTagName('input');

            let arrOfInputs = [...inputs];


            for(let i = 0; i < arrOfInputs.length; i++) {
                if(arrOfInputs[i].value.trim() == '') {
                
                    arrOfMessages[i].style.visibility = 'visible';
                    arrOfInputs[i].classList.add('invalid');
                    arrOfIcons[i].style.color = 'red';   
                    isFormValid = false;
                    
                    //phone number validation
                } else if(i == 2) {
                    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

                    if(phoneRegex.test(arrOfInputs[i].value) === false) {
arrOfMessages[i].innerText = 'Please enter a 10 digit phone number';
arrOfMessages[i].style.visibility = 'visible';
arrOfInputs[i].classList.add('invalid');
arrOfIcons[i].style.color = 'red';  
isFormValid = false;


                    }  else {
                        arrOfMessages[i].style.visibility = 'hidden';
                        arrOfInputs[i].classList.remove('invalid');
                        arrOfInputs[i].classList.add('valid');
                        arrOfIcons[i].style.color = '#43a047';   
                        isFormValid = true;
                    }

                //email validation
                } else if (i == 3) {

                    if(!arrOfInputs[i].value.includes('@')) {
                        arrOfMessages[i].innerText = 'Enter valid email address';
                        arrOfMessages[i].style.visibility = 'visible';
                        arrOfInputs[i].classList.add('invalid');
                        arrOfIcons[i].style.color = 'red';  
                        isFormValid = false;


                    } else {
                        arrOfMessages[i].style.visibility = 'hidden';
                        arrOfInputs[i].classList.remove('invalid');
                        arrOfInputs[i].classList.add('valid');
                        arrOfIcons[i].style.color = '#43a047';
                        isFormValid = true;  
                    }

                } 
                else {
                    arrOfMessages[i].style.visibility = 'hidden';
                    arrOfInputs[i].classList.remove('invalid');
                    arrOfInputs[i].classList.add('valid');
                    arrOfIcons[i].style.color = '#43a047';   
                    isFormValid = true;

                }


            }if(isFormValid) {
                    modalInstance.open(); 
            } 



        })

    
});