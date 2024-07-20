import { useState, createContext, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

type User = {
  name: string;
};

type AuthContextDataType = {
  signed: boolean;
  user: User | null;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext({} as AuthContextDataType);

const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    if (storagedUser) {
      setUser(JSON.parse(storagedUser));
    }
  }, []);

  const signIn = () => {
    const data = {
      name: "Nickolas Oliveira"
    }
    setUser(data);
    localStorage.setItem("@App:user", JSON.stringify(data));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("@App:user");
  };

  return (
    <AuthContext.Provider value={{
      signed: Boolean(user),
      user,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export { AuthContext, AuthProvider };