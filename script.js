function handleClick(){
  const xhr = new XMLHttpRequest();
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  xhr.open('GET', url);
  // the headers set in next two line will initaite a preflight call, chrome might have invisible preflight, you may have to turn it on.
  xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
}

// nothing is printed in the console here, to see the preflighyt request chekc the network tab in dev tools.
