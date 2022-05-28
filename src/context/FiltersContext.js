import { createContext, useContext } from "react";

const FiltersContext = createContext(undefined);

function FiltersProvider({ filters, children }) {
  return (
    <FiltersContext.Provider value={filters}>
      {children}
    </FiltersContext.Provider>
  );
}

const useFilters = () => {
  const context = useContext(FiltersContext);

  if (context === undefined) {
    throw new Error(`useFilters must be used within a FiltersProvider`);
  }

  return context;
};

export { FiltersProvider, useFilters };
