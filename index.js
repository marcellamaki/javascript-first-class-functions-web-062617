function receivesAFunction(activity){
  activity();
};

function activity() {
  console.log(`Read a book!`);
};



function returnsAnAnonymousFunction(() => console.log('Stretch! Work that core!'));
