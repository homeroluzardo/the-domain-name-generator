window.onload = () => {
    document.querySelector("#domain").innerHTML = generateDomain();
}

let generateDomain = () => {

    var pronoun = ['the','our','my','it','your'];
    var adj = ['great', 'big', 'small', 'rich', 'cool'];
    var noun = ['jogger', 'racoon', 'dog', 'cat', 'plane'];
    var result = "";

  for(let i=0; i<pronoun.length; i++){
    for(let j=0; j<adj.length; j++){
        for(let k=0; k<noun.length; k++){
        result += (pronoun[i]+adj[j]+noun[k]+".com")+"<br>";
  }
    }
}
return result;
}
