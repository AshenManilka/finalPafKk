
     
     function validation(){
                            var cardid = document.getElementById('cardid').value;
                            var oid = document.getElementById('oid').value;
                            var pamount = document.getElementById('pamount').value;
                            var pdate = document.getElementById('pdate').value;
                            var pid = document.getElementById('pid').value;
                            var pstatus = document.getElementById('pstatus').value;
                           
                            var regxpmnt=  /^[0-9]/;
                          
                           
                            
                            if( cardid == ""){
                              document.getElementById('cardidl').innerHTML = " ** please fill the CARDID";
                              return false;
                            }
                            else if( oid == ""){
                              document.getElementById('oidl').innerHTML = " ** please fill the OID";
                              return false;
                            }

                            
                          
                            
                            else if( pamount == ""){
                              document.getElementById('pamountl').innerHTML = " ** Please fill the PAMOUNT";
                              return false;
                            }
                            else if( !regxpmnt.test(pamount)){
         
                                document.getElementById('pamountl').innerHTML = " ** Please enter only numbers";
                                return false;
                                        }

                            
                            else if(pdate == ""){
                              document.getElementById('pdatel').innerHTML = " ** Please fill the PDATE";
                              return false;
                            }

                            else if(pid == ""){
                                document.getElementById('pidl').innerHTML = " ** Please fill the PID";
                                return false;
                              }
                                
                            else if(pstatus == ""){
                                document.getElementById('pstatusl').innerHTML = " ** Please fill the PID";
                                return false;
                              }
                    
                       
                           
     }
                            


