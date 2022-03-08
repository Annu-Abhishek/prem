var obj = {

    add:function add(a, b) {
        return a + b;
    },
        
    
    sub:function subtract(a, b) {
      return b - a;
    },
        hello:123
    };
    
    console.log("printed in temp "+obj);
    
    
    module.exports = obj;   /* jitna export krenge utna hi jaega obj.add krenge to utna hi jaega */