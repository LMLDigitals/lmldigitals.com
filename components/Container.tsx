import React from 'react';

function Container({ children }: { children: React.ReactNode }) {
   return <div className='container mx-56'>{children}</div>;
}

export default Container;
