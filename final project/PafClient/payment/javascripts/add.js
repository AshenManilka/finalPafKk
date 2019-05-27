
$(function (){


	$.ajax({

		type: 'GET',
		url: 'http://localhost:8080/payments/payment',
		success: function(response) {
			console.log(response);
		},
		error: function() {

			alert('error loading data');
		}


	});


$('#submit').on('click',function(){


	var $pid = $('#pid');
	var $pdate = $('#pdate');
	var $pamount = $('#pamount');
	var $pstatus = $('#pstatus');
	var $oid = $('#oid');
	var $cardid = $('#cardid');
                           
                            var regxpmnt=  /^[0-9]/;
                          
														if($pid.val() == ""){
															document.getElementById('pidl').innerHTML = " ** Please fill the PID";
															return false;
														}
															
                            
                           
                           	else if( $oid.val() == ""){
                              document.getElementById('oidl').innerHTML = " ** please fill the OID";
                              return false;
                            }

                            
                          
                            
                            else if( $pamount.val() == ""){
                              document.getElementById('pamountl').innerHTML = " ** Please fill the PAMOUNT";
                              return false;
                            }
                            else if( !regxpmnt.test($pamount.val())){
         
                                document.getElementById('pamountl').innerHTML = " ** Please enter only numbers";
                                return false;
                                        }

                            
                            else if($pdate.val() == ""){
                              document.getElementById('pdatel').innerHTML = " ** Please fill the PDATE";
                              return false;
														}
														
														else	if( $cardid.val() == ""){
                              document.getElementById('cardidl').innerHTML = " ** please fill the CARDID";
                              return false;
                            }

                       
                            else if($pstatus.val() == ""){
                                document.getElementById('pstatusl').innerHTML = " ** Please fill the PID";
                                return false;
                              }


		var payment = {
		    pid: $pid.val(),
		    pdate: $pdate.val(),
		    pamount: $pamount.val(),
		    pstatus: $pstatus.val(),
		    oid: $oid.val(),
		    cardid: $cardid.val()
            }

		$.ajax({

		type: 'POST',
		url: 'http://localhost:8080/payments/payment',
		contentType:'application/json',
		data: JSON.stringify(payment),
		dataType: 'json',
		success: function(response) {
			alert('Data added successfully..!');
			

			console.log(response);
		
			
		},
		error: function(response) {

			console.log(response);
			alert('error loading data');
		}


	    });

	});


});


