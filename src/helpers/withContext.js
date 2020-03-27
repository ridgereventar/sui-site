import React from 'react';

// Applies context to the provided component. This is called recurvsily below to apply all contexts to the component.
// All values are passed to the component via props
function applyContext(ChildConsumer, context) {

    // console.log(ChildConsumer, context);


      let isContextOptions = false;

      if(context !== null &&
        typeof context === 'object' &&
        context.context &&
        context.mapValueToProps
      ) {
        isContextOptions = true;
      }
      let Consumer;

      if (context) {
        Consumer = isContextOptions ? context.context.Consumer : context.Consumer;
      }

    // console.log(Consumer)

      return React.forwardRef(({
        ...props
      }, ref) =>
        <Consumer>
        {value => {
            let newValue = context.mapValueToProps ? context.mapValueToProps(value) : value;

            return (
              <ChildConsumer
                {...props}
                ref={ref}
                {...newValue}
              />
            );
}}</Consumer>
      );
    }
    
    // HOC to consume multiple contexts with nicer syntax to rid nested render props
function withContext(...contexts) {
  return ComposedComponent => {
    return contexts.reduce(applyContext, ComposedComponent);
  };
}

export default withContext;