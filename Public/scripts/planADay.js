                    const curr_date = new Date();
                    document.write(curr_date.getTime());       
                function validate() 
                {
                    
                    if (document.myForm.firstname.value == "") 
                    {
                        alert("Please provide your First Name!");
                        document.myForm.firstname.focus();
                        return false;
                    }
                    if (document.myForm.address.value == "") 
                    {
                        alert("Address Cannot Be Empty!");
                        document.myForm.address.focus();
                        return false;
                    }
                    if (document.myForm.emailinput.value == "") 
                    {
                        alert("Please provide your Email!");
                        document.myForm.emailinput.focus();
                        return false;
                    }
                    if (document.myForm.contact.value == "") 
                    {
                        alert("Please provide your Contact!");
                        document.myForm.contact.focus();
                        return false;
                    }
                    if (document.myForm.startdate.value == "") 
                    {
                        alert("Please Enter Start Date!");
                        document.myForm.contact.focus();
                        return false;
                    }
                    if (document.myForm.enddate.value == "") 
                    {
                        alert("Please Enter End Date!");
                        document.myForm.contact.focus();
                        return false;
                    }
                    if (!redfort.checked && !indiagate.checked && !akshardham.checked && !sarojini.checked && !chandani.checked ) 
                    {
                        alert("Please Select Atleast 1 Place!");
                        document.myForm.redfort.focus();
                        return false;
                    }
                    let e = document.getElementById("tourbudget");
                    let foo = e.options[e.selectedIndex].value;
                    if (foo == 0)
                    {
                      alert("Please Select Ideal Tour Budget !");
                        document.myForm.tourbudget.focus();
                        return false;
                    }
                    let f = document.getElementById("tourlength");
                    let bar = f.options[f.selectedIndex].value;
                    if (bar == 0)
                    {
                      alert("Please Select Suitable Tour Length !");
                        document.myForm.tourlength.focus();
                        return false;
                    }

                    let x = document.getElementById("contact").value;
                    let text;
                    if (isNaN(x) || x < 1 || (x.length) < 10) 
                    {
                        alert("Please Enter A Valid Phone Number");
                        document.myForm.contact.focus();
                        return false;
                    }
                    
                    
                  }   

                function submitform()
                {
                 if(document.myForm.onsubmit())
                 {
                    //this check triggers the validations
                    document.myForm.submit();
                 }
                }