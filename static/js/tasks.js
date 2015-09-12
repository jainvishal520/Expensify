     jQuery(document).ready(function() {
    $.get('/todo/tasks/').done(function(data){
      for(var i = 0; i < data.length; i++) {
                    if (data[i]["priority"] == 1)
                     {   var temp = "Low"
                         var color="color:#999900" 
                      }
                    else if (data[i]["priority"] == 2)
                     {   var temp = 100
                         var color="color:green"
                      }  
                    else if (data[i]["priority"] == 3)
                     {   var temp = 200
                         var color="color:red"
                      } 
                    if (data[i]["status"] == 0)
                     {   var temp1 = "Entertainment"
                         
                      }
                    else
                      {   var temp1 = "Meals"
                         var temp2 =" pull-right"
                      }
        var tr = '<tr class="gradeX"><td><span class="fa fa-edit"><a class="task" href=/todo/'+data[i]["id"]+'>'+data[i]["name"]+'</a></td><td>'+data[i]["timestamp"]+'</td><td><div class="date-container pull-left"></div>'+temp1+'<a style="padding-top:5px" href="javascript:;" class="'+temp2+'"></td><td>approved</td><td><a style="'+color+'">'+temp+'</a></td><td>'+data[i]["count"]+'</td></tr>';
        $('#task-body').append(tr);
      }
    $('#task').dataTable();

    });

      });
$(function () {
    $('#start').datetimepicker();
    $('#stop').datetimepicker();
  });
function validateName()
         {
           var a = document.getElementById("name").value;
           
           if(a.length == 0)
         {
           producePrompt("Employee name is required","nameMe","red");
           return false;
         }
         producePrompt("Employee name is "+a,"nameMe","green");
         return true;
         }
function producePrompt(message,promptlocation,color)
  {
    document.getElementById(promptlocation).innerHTML=message;
    document.getElementById(promptlocation).style.color=color;
  }
