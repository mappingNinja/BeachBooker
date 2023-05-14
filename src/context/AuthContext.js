import {
    createContext,
    useContext,
    useEffect,
    useReducer,
} from 'react';
import { authLogin, getUserMe } from '../services/user.service';

// // LOCAL TYPES
const Types = {
    Initial: 'INITIALIZE',
    Login: 'LOGIN',
    Logout: 'LOGOUT',
    UpdateUser: 'UPDATE_USER',
}

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE':
            return {
                isAuthenticated: action.payload.isAuthenticated,
                isInitialized: true,
                user: action.payload.user,
            };
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                user: action.payload.user,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.payload.user,
            };
        default:
            return state;
    }
};

const isValidToken = (accessToken) => {
    if (!accessToken) {
        return false;
    }
    // const decoded = jwtDecode(accessToken);
    // const currentTime = Date.now() / 1000;

    return true // decoded.exp > currentTime;
};

const setSession = (accessToken, userId = null) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('userId', userId);
    } else {
        localStorage.removeItem('userId');
        localStorage.removeItem('accessToken');
    }
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        const initialize = async () => {
            try {
                const accessToken = window.localStorage.getItem('accessToken');
                const userId = window.localStorage.getItem('userId');

                if (accessToken && isValidToken(accessToken)) {
                    const res = await getUserMe(userId);
                    setSession(accessToken, res.data?.id);
                    if (res.status) {
                        dispatch({
                            type: Types.Initial,
                            payload: {
                                isAuthenticated: true,
                                user: res.data
                            },
                        });
                    }
                } else {
                    dispatch({
                        type: Types.Initial,
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: Types.Initial,
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });
            }
        };

        initialize();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const login = async (email, password) => {
        const res = await authLogin({ login: email, password });
        if (res.status && res.data) {
            const { token } = res.data;
            setSession(token, res.data?.id);
            dispatch({
                type: Types.Login,
                payload: { token, user: res.data },
            });
        }
    };

    const logout = async () => {
        setSession(null);
        dispatch({ type: Types.Logout });
    };

    const setUser = async (userData) => {
        dispatch({
            type: Types.UpdateUser,
            payload: {
                user: userData,
            },
        });
    };

    const setSessionToken = (token, userId, user) => {
        setSession(token, userId);
        dispatch({
            type: Types.Login,
            payload: {
                token,
                user
            },
        });
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'jwt',
                setSession: setSessionToken,
                setUser,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('Auth context must be use inside AuthProvider');
    return context;
};

export { AuthContext, AuthProvider, useAuth };
