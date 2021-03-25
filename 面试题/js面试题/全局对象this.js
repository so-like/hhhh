var obj = {};
obj.log = console.log;
obj.log.call(console,this);