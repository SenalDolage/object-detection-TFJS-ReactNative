export const AppStateContext = React.createContext();

const AppStateProvider = props => {

  const contextValue = { ...yourContext }

  return (
    <AppStateContext.Provider value={contextValue}>
      {props.children}
    </AppStateContext.Provider>
  );
};
