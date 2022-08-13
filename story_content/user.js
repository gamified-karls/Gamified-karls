function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5uURE2GHYBM":
        Script1();
        break;
  }
}

function Script1()
{
  var player=GetPlayer(),xhttp=new XMLHttpRequest,targlink="https://cluelabs.com/stencil/display/widget-table-save-row?chart=MTI4NXwyODE4fDM4NTc3YmNiNDdlZDQyNWFmZjk1MGI3NzNiNzZkMTYz";targlink=targlink+"&newnum="+encodeURIComponent(parseFloat(player.GetVar("Score")))+"&newtext="+encodeURIComponent(player.GetVar("Name")),xhttp.onreadystatechange=function(){4==this.readyState&&200==this.status&&player.SetVar("stencilrendered",parseInt(player.GetVar("stencilrendered"))+1)},xhttp.open("GET",targlink,!0),xhttp.send();
}

