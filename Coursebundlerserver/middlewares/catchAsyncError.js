export const catchAsyncError = (passedFunction) => (req, res, next) => {
  Promise.resolve(passedFunction(req, res, next)).catch(next);
};

/*
export const ap = () =>  () => {}

        is equivalent to

export const ap = () => {
    return ()=> {}
  }
  
*/
