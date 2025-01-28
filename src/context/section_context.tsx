import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// context for current section visible in viewport to highlight the navbar link

type SectionContextType = {
  currentSection: string;
  setCurrentSection: (section: string) => void;
};

export const SectionContext = createContext<SectionContextType | undefined>(
  undefined
);

type SectionProviderProps = {
  children: ReactNode;
};
export function SectionProvider({ children }: SectionProviderProps) {
  const [currentSection, setCurrentSection] = useState<string>("");
  useEffect(() => {
    console.log(currentSection);
  }, [currentSection]);
  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionState(): SectionContextType {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionState must be within provider");
  }
  return context;
}
