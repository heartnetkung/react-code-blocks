import React from 'react';
declare const withDefaults: <P, DP>(component: React.ComponentType<P>, defaultProps: DP) => React.ComponentType<Partial<DP> & Pick<P, Exclude<keyof P, keyof DP>>>;
export default withDefaults;
