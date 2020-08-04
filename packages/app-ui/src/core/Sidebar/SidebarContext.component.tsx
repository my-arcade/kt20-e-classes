import React from 'react';

const SidebarContext = React.createContext({
  noOfSidebars: 0,
  increaseNoOfSidebars: () => {},
  decreaseNoOfSidebars: () => {}
})

export default SidebarContext