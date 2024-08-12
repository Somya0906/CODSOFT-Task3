// script.js
    let string = '';
    let result = '';
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('button');
    Array.from(buttons).forEach((button => {
        button.addEventListener('click', (e) => {
           

            if (e.target.innerHTML == '=') {
                try{
                    string =eval(string);
                    document.querySelector('input').value = string}
                    catch{
                        display.value ='ERROR';
                    }
                        

            
            } else if (e.target.innerHTML == 'C') {
                string = "";
                document.querySelector('input').value = string}

                 else {
                    console.log(e.target)
                    string = string + e.target.innerHTML;
                    document.querySelector('input').value = string}
                
            })
        }));
